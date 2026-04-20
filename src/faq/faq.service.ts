import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class FaqService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.cmsFaq.findMany({
      select: { id: true, title: true, summary: true, icon: true },
    });
  }

  async findById(id: number) {
    const faq = await this.prisma.cmsFaq.findUnique({ where: { id } });
    if (!faq) throw new NotFoundException(`FAQ #${id} not found`);
    return faq;
  }
}
