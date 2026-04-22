import { Body, Controller, Get, Param, Patch, Post, Req } from '@nestjs/common';
import type { Request } from 'express';
import { TarotService } from './tarot.service';
import { DrawCardDto } from './dto/draw-card.dto';
import { ClaimGiftDto } from './dto/claim-gift.dto';

@Controller('tarot')
export class TarotController {
  constructor(private readonly tarotService: TarotService) {}

  @Post('draw')
  async drawCard(@Body() dto: DrawCardDto, @Req() req: Request) {
    let user = (req as any).user;
    
    // Parse JWT thủ công nếu không có Guard
    const authHeader = req.headers.authorization;
    if (!user && authHeader && authHeader.startsWith('Bearer ')) {
      try {
        const token = authHeader.split(' ')[1];
        const payloadBase64 = token.split('.')[1];
        if (payloadBase64) {
          const decoded = JSON.parse(Buffer.from(payloadBase64, 'base64').toString('utf8'));
          user = { candidateId: decoded.sub, zaloId: decoded.zaloId };
        }
      } catch (e) {
        // Bỏ qua nếu lỗi parse JWT
      }
    }

    return await this.tarotService.drawCard(dto, user);
  }

  @Post('claim/:sessionId')
  async claimGift(
    @Param('sessionId') sessionId: string,
    @Body() dto: ClaimGiftDto,
    @Req() req: Request,
  ) {
    let user = (req as any).user;
    
    // Parse JWT thủ công
    const authHeader = req.headers.authorization;
    if (!user && authHeader && authHeader.startsWith('Bearer ')) {
      try {
        const token = authHeader.split(' ')[1];
        const payloadBase64 = token.split('.')[1];
        if (payloadBase64) {
          const decoded = JSON.parse(Buffer.from(payloadBase64, 'base64').toString('utf8'));
          user = { candidateId: decoded.sub, zaloId: decoded.zaloId };
        }
      } catch (e) {}
    }

    return await this.tarotService.claimGift(
      Number(sessionId),
      dto.zaloUserId || user?.zaloId,
      user,
    );
  }

  @Get('history/:zaloUserId')
  getHistory(@Param('zaloUserId') zaloUserId: string) {
    return this.tarotService.getHistory(zaloUserId);
  }

  @Patch('session/:sessionId')
  async updateSession(
    @Param('sessionId') sessionId: string,
    @Body() body: { zaloUserId?: string; candidateId?: string; playerName?: string },
  ) {
    return this.tarotService.updateSession(Number(sessionId), body);
  }
}
