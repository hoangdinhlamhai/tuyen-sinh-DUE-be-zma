import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { randomUUID } from 'crypto';

@Injectable()
export class NewsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(page = 1, limit = 10, search?: string) {
    const skip = (page - 1) * limit;

    const where = search
      ? {
          OR: [
            { title: { contains: search, mode: 'insensitive' as const } },
            { summary: { contains: search, mode: 'insensitive' as const } },
          ],
        }
      : {};

    const [data, total] = await Promise.all([
      this.prisma.cmsNews.findMany({
        where,
        select: {
          id: true,
          title: true,
          summary: true,
          thumbnail: true,
          slug: true,
          contentFormat: true,
          publishedAt: true,
        },
        orderBy: { publishedAt: 'desc' },
        skip,
        take: limit,
      }),
      this.prisma.cmsNews.count({ where }),
    ]);

    return {
      data,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async findById(id: string) {
    const news = await this.prisma.cmsNews.findUnique({ where: { id } });
    if (!news) {
      throw new NotFoundException(`News with id "${id}" not found`);
    }
    return news;
  }

  async findBySlug(slug: string) {
    const news = await this.prisma.cmsNews.findUnique({ where: { slug } });
    if (!news) {
      throw new NotFoundException(`News with slug "${slug}" not found`);
    }
    return news;
  }

  async create(dto: CreateNewsDto) {
    const id = randomUUID();
    const slug =
      dto.slug ||
      dto.title
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/đ/g, 'd')
        .replace(/Đ/g, 'D')
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .slice(0, 200);

    return this.prisma.cmsNews.create({
      data: {
        id,
        title: dto.title,
        summary: dto.summary,
        thumbnail: dto.thumbnail,
        slug,
        content: dto.content ?? undefined,
        contentFormat: dto.contentFormat ?? 'html',
        publishedAt: new Date(),
      },
    });
  }

  async update(id: string, dto: UpdateNewsDto) {
    await this.findById(id);
    return this.prisma.cmsNews.update({
      where: { id },
      data: {
        ...(dto.title !== undefined && { title: dto.title }),
        ...(dto.summary !== undefined && { summary: dto.summary }),
        ...(dto.thumbnail !== undefined && { thumbnail: dto.thumbnail }),
        ...(dto.slug !== undefined && { slug: dto.slug }),
        ...(dto.content !== undefined && { content: dto.content }),
        ...(dto.contentFormat !== undefined && {
          contentFormat: dto.contentFormat,
        }),
      },
    });
  }

  async remove(id: string) {
    await this.findById(id);
    return this.prisma.cmsNews.delete({ where: { id } });
  }
}
