import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { randomUUID } from 'crypto';

@Injectable()
export class CandidateService {
  constructor(private readonly prisma: PrismaService) {}

  async checkByEmail(email: string) {
    const candidate = await this.prisma.candidate.findUnique({
      where: { email },
    });

    if (candidate) {
      return {
        found: true,
        candidateId: candidate.id,
        message: 'Email đã được đăng ký',
      };
    }

    return {
      found: false,
      message: 'Email chưa được đăng ký',
    };
  }

  async register(dto: RegisterDto) {
    const existing = await this.prisma.candidate.findUnique({
      where: { email: dto.email },
    });

    if (existing) {
      throw new BadRequestException('Email đã được đăng ký');
    }

    const id = `DAU${new Date().getFullYear()}${randomUUID().slice(0, 6).toUpperCase()}`;

    const candidate = await this.prisma.candidate.create({
      data: {
        id,
        email: dto.email,
        fullName: dto.fullName,
        dob: new Date(dto.dob),
        gender: dto.gender,
        idCard: dto.idCard,
        phone: dto.phone,
        provinceCode: dto.contactProvinceCode,
        ward: dto.contactWard,
        address: dto.contactStreet,
        highSchoolCode: dto.highSchoolCode,
        profileStatus: 'pending',
      },
    });

    return {
      success: true,
      candidateId: candidate.id,
      message: 'Đăng ký thành công',
    };
  }

  async getById(id: string) {
    const candidate = await this.prisma.candidate.findUnique({
      where: { id },
    });

    if (!candidate) {
      throw new NotFoundException(`Candidate with id "${id}" not found`);
    }

    return candidate;
  }

  async getByZaloId(zaloId: string) {
    const candidate = await this.prisma.candidate.findFirst({
      where: { zaloId },
    });

    if (!candidate) {
      throw new NotFoundException(
        `Candidate with zaloId "${zaloId}" not found`,
      );
    }

    return candidate;
  }

  async updateProfileById(candidateId: string, dto: UpdateProfileDto) {
    return this.prisma.candidate.update({
      where: { id: candidateId },
      data: {
        ...(dto.fullName !== undefined && { fullName: dto.fullName }),
        ...(dto.avatarUrl !== undefined && { avatarUrl: dto.avatarUrl }),
        ...(dto.zaloId !== undefined && { zaloId: dto.zaloId }),
      },
    });
  }

  async updateProfile(zaloId: string, dto: UpdateProfileDto) {
    const existing = await this.prisma.candidate.findFirst({
      where: { zaloId },
    });

    let updated: Awaited<ReturnType<typeof this.prisma.candidate.update>>;

    if (!existing) {
      const id = `DAU${new Date().getFullYear()}${randomUUID().slice(0, 6).toUpperCase()}`;
      updated = await this.prisma.candidate.create({
        data: {
          id,
          zaloId,
          email: `zalo_${zaloId}@placeholder.local`,
          dob: new Date('2000-01-01'),
          fullName: dto.fullName || '',
          avatarUrl: dto.avatarUrl || null,
          profileStatus: 'linked',
        },
      });
    } else {
      updated = await this.prisma.candidate.update({
        where: { id: existing.id },
        data: {
          ...(dto.zaloId !== undefined && { zaloId: dto.zaloId }),
          ...(dto.avatarUrl !== undefined && { avatarUrl: dto.avatarUrl }),
          ...(dto.fullName !== undefined && { fullName: dto.fullName }),
        },
      });
    }

    return updated;
  }
}
