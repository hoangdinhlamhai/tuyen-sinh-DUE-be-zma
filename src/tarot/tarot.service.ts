import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { DrawCardDto } from './dto/draw-card.dto';
import { randomBytes } from 'crypto';

const DAILY_PLAY_LIMIT = 3;

interface JwtUser {
  candidateId?: string;
  zaloId?: string;
}

@Injectable()
export class TarotService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Bốc bài Tarot: random 1 lá từ DB, tính trúng quà, lưu session
   */
  async drawCard(dto: DrawCardDto, user?: JwtUser) {
    // 1. Check daily play limit
    if (dto.zaloUserId) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);

      const todayDrawCount = await this.prisma.tarotSession.count({
        where: {
          zaloUserId: dto.zaloUserId,
          createdAt: {
            gte: today,
            lt: tomorrow,
          },
        },
      });

      if (todayDrawCount >= DAILY_PLAY_LIMIT) {
        const nextPlayAt = new Date(tomorrow);
        throw new HttpException(
          {
            message: 'Hôm nay bạn đã bốc rồi',
            nextPlayAt: nextPlayAt.toISOString(),
          },
          HttpStatus.TOO_MANY_REQUESTS,
        );
      }
    }

    // 2. Lấy tất cả lá bài đang active
    const activeCards = await this.prisma.tarotCard.findMany({
      where: { isActive: true },
    });

    if (activeCards.length === 0) {
      throw new Error('Không có lá bài nào trong hệ thống');
    }

    // 3. Random chọn 1 lá
    const randomIndex = Math.floor(Math.random() * activeCards.length);
    const selectedCard = activeCards[randomIndex];

    // 4. Tạo sessionToken
    const sessionToken = randomBytes(32).toString('hex');

    // 5. Xác định candidateId (từ JWT user hoặc dto)
    const candidateId = user?.candidateId || dto.candidateId || null;
    const zaloUserId = dto.zaloUserId || user?.zaloId || null;

    // 6. Tạo TarotSession record (playId bỏ qua, dùng id auto-increment làm định danh)
    const session = await this.prisma.tarotSession.create({
      data: {
        sessionToken,
        candidateId,
        zaloUserId,
        playerName: dto.playerName,
        cardId: selectedCard.id,
        tarotCardId: selectedCard.name,
        tarotCardName: selectedCard.cardTitle,
        shortMeaning: selectedCard.meaning,
        oracleText: selectedCard.oracleText,
        suggestedMajors: selectedCard.suggestedMajors as any,
        schoolHighlights: selectedCard.universityHighlights as any,
        isWin: false,
        isClaimed: false,
      },
    });

    // 7. Trả về kết quả
    return {
      sessionId: session.id,
      playId: session.playId,
      sessionToken: session.sessionToken,
      card: {
        id: selectedCard.id,
        name: selectedCard.name,
        cardTitle: selectedCard.cardTitle,
        subtitle: selectedCard.subtitle,
        meaning: selectedCard.meaning,
        fullMeaning: selectedCard.fullMeaning,
        oracleText: selectedCard.oracleText,
        luckyTag: selectedCard.luckyTag,
        suggestedMajors: selectedCard.suggestedMajors,
        universityHighlights: selectedCard.universityHighlights,
        imageUrl: selectedCard.imageUrl,
      },
      isWin: false,
      giftName: null,
      giftType: null,
    };
  }

  /**
   * Nhận quà từ phiên bốc bài - roll xem có trúng không
   */
  async claimGift(sessionId: number, zaloUserId: string, user?: JwtUser) {
    const session = await this.prisma.tarotSession.findUnique({
      where: { id: sessionId },
    });

    if (!session) {
      throw new HttpException(
        'Không tìm thấy phiên bốc bài',
        HttpStatus.NOT_FOUND,
      );
    }

    // Chỉ kiểm tra zaloUserId nếu session có zaloUserId (người dùng đã đăng nhập)
    if (session.zaloUserId && session.zaloUserId !== zaloUserId) {
      throw new HttpException(
        'Phiên bốc bài không thuộc về bạn',
        HttpStatus.FORBIDDEN,
      );
    }

    if (session.isClaimed) {
      throw new HttpException(
        'Bạn đã nhận quà từ phiên này rồi',
        HttpStatus.BAD_REQUEST,
      );
    }

    // Luôn trúng quà khi bấm nhận
    const isWin = true;

    let giftId: number | null = null;
    let giftName: string | null = null;
    let giftType: string | null = null;
    let giftImageUrl: string | null = null;

    if (isWin) {
      // Lấy tất cả quà có sẵn (remainingQuantity > 0)
      const availableGifts = await this.prisma.gift.findMany({
        where: {
          isActive: true,
          remainingQuantity: { gt: 0 },
        },
      });

      if (availableGifts.length > 0) {
        // Chọn quà dựa trên weighted probability
        let totalWeight = 0;
        for (const gift of availableGifts) {
          totalWeight += gift.winProbability;
        }

        let random = Math.random() * totalWeight;
        let selectedGift = availableGifts[0];
        for (const gift of availableGifts) {
          random -= gift.winProbability;
          if (random <= 0) {
            selectedGift = gift;
            break;
          }
        }

        giftId = selectedGift.id;
        giftName = selectedGift.name;
        giftType = selectedGift.type;
        giftImageUrl = selectedGift.imageUrl;

        // Giảm remaining quantity
        await this.prisma.gift.update({
          where: { id: selectedGift.id },
          data: { remainingQuantity: { decrement: 1 } },
        });
      } else {
        // Không có quà trong kho, vẫn set default
        giftName = 'Dream Pencil KTD (Bút chì)';
        giftType = 'PHYSICAL';
      }
    }

    // Cập nhật session với kết quả
    const updated = await this.prisma.tarotSession.update({
      where: { id: sessionId },
      data: {
        isWin,
        isClaimed: true,
        claimedAt: new Date(),
        giftId,
        giftName,
        giftType,
        giftImageUrl,
      },
    });

    return {
      success: true,
      isWin: true,
      message: `Bạn đã nhận quà: ${giftName}`,
      gift: {
        id: giftId,
        name: giftName,
        type: giftType,
        imageUrl: giftImageUrl,
      },
      claimedAt: updated.claimedAt,
    };
  }

  /**
   * Lịch sử bốc bài theo Zalo User ID
   */
  async getHistory(zaloUserId: string) {
    return this.prisma.tarotSession.findMany({
      where: { zaloUserId },
      include: { card: true },
      orderBy: { createdAt: 'desc' },
      take: 20,
    });
  }

  /**
   * Cập nhật session sau khi user liên kết Zalo (guest → linked)
   */
  async updateSession(
    sessionId: number,
    data: { zaloUserId?: string; candidateId?: string; playerName?: string },
  ) {
    const session = await this.prisma.tarotSession.findUnique({
      where: { id: sessionId },
    });

    if (!session) {
      throw new HttpException('Không tìm thấy phiên bốc bài', HttpStatus.NOT_FOUND);
    }

    return this.prisma.tarotSession.update({
      where: { id: sessionId },
      data: {
        ...(data.zaloUserId && { zaloUserId: data.zaloUserId }),
        ...(data.candidateId && { candidateId: data.candidateId }),
        ...(data.playerName && { playerName: data.playerName }),
      },
    });
  }
}
