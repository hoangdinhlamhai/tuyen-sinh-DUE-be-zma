import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TarotService } from './tarot.service';
import { DrawCardDto } from './dto/draw-card.dto';
import { ClaimGiftDto } from './dto/claim-gift.dto';

@Controller('tarot')
export class TarotController {
  constructor(private readonly tarotService: TarotService) {}

  @Post('draw')
  async drawCard(@Body() dto: DrawCardDto) {
    return await this.tarotService.drawCard(dto);
  }

  @Post('claim/:sessionId')
  async claimGift(
    @Param('sessionId') sessionId: string,
    @Body() dto: ClaimGiftDto,
  ) {
    return await this.tarotService.claimGift(Number(sessionId), dto.zaloUserId);
  }

  @Get('history/:zaloUserId')
  getHistory(@Param('zaloUserId') zaloUserId: string) {
    return this.tarotService.getHistory(zaloUserId);
  }
}
