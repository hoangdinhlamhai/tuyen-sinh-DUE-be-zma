import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CatalogsService {
  constructor(private readonly prisma: PrismaService) {}

  async getProvinces() {
    const provinces = await this.prisma.province.findMany({
      orderBy: { name: 'asc' },
    });

    return {
      data: provinces.map((p) => ({
        code: p.id,
        name: p.name,
      })),
    };
  }

  async getWards(provinceCode: string) {
    const province = await this.prisma.province.findUnique({
      where: { id: provinceCode },
    });

    if (!province) {
      throw new NotFoundException(
        `Province with code "${provinceCode}" not found`,
      );
    }

    const wards = await this.prisma.ward.findMany({
      where: { provinceCode },
      orderBy: { name: 'asc' },
    });

    return {
      data: wards.map((w) => ({
        code: w.id,
        name: w.name,
      })),
    };
  }

  async getSchools(provinceCode: string) {
    const province = await this.prisma.province.findUnique({
      where: { id: provinceCode },
    });

    if (!province) {
      throw new NotFoundException(
        `Province with code "${provinceCode}" not found`,
      );
    }

    const schools = await this.prisma.highSchool.findMany({
      where: { provinceCode },
      orderBy: { name: 'asc' },
    });

    return {
      data: schools.map((s) => ({
        code: s.id,
        name: s.name,
      })),
    };
  }

  async getMajors(scholarshipGroupId?: string) {
    const where = scholarshipGroupId
      ? { scholarshipGroupId, isActive: 1 }
      : { isActive: 1 };

    const majors = await this.prisma.major.findMany({
      where,
      orderBy: { name: 'asc' },
    });

    return {
      data: majors.map((m) => ({
        id: m.id,
        name: m.name,
        scholarshipGroupId: m.scholarshipGroupId,
        requiresArtExam: m.scholarshipGroupId === 'KT',
      })),
    };
  }
}
