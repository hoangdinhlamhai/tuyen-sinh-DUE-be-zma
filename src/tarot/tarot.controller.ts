import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { TarotService } from './tarot.service';
import { DrawCardDto } from './dto/draw-card.dto';
import { ClaimGiftDto } from './dto/claim-gift.dto';

@Controller('tarot')
export class TarotController {
  constructor(private readonly tarotService: TarotService) {}

  @Post('draw')
  async drawCard(@Body() dto: DrawCardDto, @Req() req: Request) {
    // Lấy user từ JWT nếu có (sau khi login)
    const user = (req as any).user;
    return await this.tarotService.drawCard(dto, user);
  }

  @Post('claim/:sessionId')
  async claimGift(
    @Param('sessionId') sessionId: string,
    @Body() dto: ClaimGiftDto,
    @Req() req: Request,
  ) {
    const user = (req as any).user;
    return await this.tarotService.claimGift(
      Number(sessionId),
      dto.zaloUserId,
      user,
    );
  }

  @Get('history/:zaloUserId')
  getHistory(@Param('zaloUserId') zaloUserId: string) {
    return this.tarotService.getHistory(zaloUserId);
  }
}
