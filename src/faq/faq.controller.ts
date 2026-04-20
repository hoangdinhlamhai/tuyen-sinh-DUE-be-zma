import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { FaqService } from './faq.service';

@Controller('public/faq')
export class FaqController {
  constructor(private readonly faqService: FaqService) {}

  @Get()
  findAll() {
    return this.faqService.findAll();
  }

  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number) {
    return this.faqService.findById(id);
  }
}
