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

  async checkByEmail(email: string, loggedInCandidateId?: string) {
    const candidate = await this.prisma.candidate.findUnique({
      where: { email },
    });

    if (candidate && candidate.id !== loggedInCandidateId) {
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

  async register(dto: RegisterDto, loggedInCandidateId?: string) {
    const existingEmail = await this.prisma.candidate.findUnique({
      where: { email: dto.email },
    });

    if (existingEmail && existingEmail.id !== loggedInCandidateId) {
      throw new BadRequestException('Email đã được đăng ký cho tài khoản khác');
    }

    if (loggedInCandidateId) {
      // Có account Zalo đang login -> Cập nhật trực tiếp vào record Zalo
      const existingCandidate = await this.prisma.candidate.findUnique({
        where: { id: loggedInCandidateId },
      });

      if (existingCandidate) {
        await this.prisma.candidate.update({
          where: { id: loggedInCandidateId },
          data: {
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
            profileStatus: existingCandidate.profileStatus === 'linked' ? 'pending' : existingCandidate.profileStatus,
          },
        });

        return {
          success: true,
          candidateId: loggedInCandidateId,
          message: 'Cập nhật hồ sơ thành công vào tài khoản Zalo của bạn',
        };
      }
    }

    // Nếu không login thì tạo mới hoàn toàn
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
      include: {
        registrations: true,
      },
    });

    if (!candidate) {
      throw new NotFoundException(`Candidate with id "${id}" not found`);
    }

    if (candidate.provinceCode && !candidate.province) {
      const province = await this.prisma.province.findUnique({
        where: { id: candidate.provinceCode },
      });
      if (province) {
        candidate.province = province.name;
      }
    }

    if (candidate.highSchoolCode && !candidate.highSchool) {
      const school = await this.prisma.highSchool.findUnique({
        where: { id: candidate.highSchoolCode },
      });
      if (school) {
        candidate.highSchool = school.name;
      }
    }

    if (candidate.ward && !candidate.ward.includes('Phường') && !candidate.ward.includes('Xã') && !candidate.ward.includes('Thị trấn')) {
      const ward = await this.prisma.ward.findUnique({
        where: { id: candidate.ward },
      });
      if (ward) {
        candidate.ward = ward.name;
      }
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

  /**
   * Tạo candidate tối thiểu từ popup Tarot (guest, chưa liên kết Zalo)
   */
  async createFromTarot(data: {
    fullName: string;
    email?: string;
    provinceCode?: string;
    highSchoolCode?: string;
    provinceName?: string;
    schoolName?: string;
  }) {
    // Nếu có email, kiểm tra đã tồn tại chưa
    if (data.email) {
      const existing = await this.prisma.candidate.findUnique({
        where: { email: data.email },
      });
      if (existing) {
        if (!existing.fullName || existing.fullName === 'Zalo User') {
          await this.prisma.candidate.update({
            where: { id: existing.id },
            data: { fullName: data.fullName },
          });
        }
        return { candidateId: existing.id, isNew: false };
      }
    }

    const id = `DAU${new Date().getFullYear()}${randomUUID().slice(0, 6).toUpperCase()}`;
    const placeholderEmail = data.email || `tarot_${id}@placeholder.local`;

    // Validate provinceCode exists in provinces table (FK constraint)
    let validProvinceCode: string | null = null;
    if (data.provinceCode) {
      const province = await this.prisma.province.findUnique({
        where: { id: data.provinceCode },
      });
      if (province) {
        validProvinceCode = data.provinceCode;
      }
    }

    const candidate = await this.prisma.candidate.create({
      data: {
        id,
        email: placeholderEmail,
        fullName: data.fullName,
        dob: new Date('2000-01-01'),
        provinceCode: validProvinceCode,
        province: data.provinceName || null,
        highSchoolCode: data.highSchoolCode || null,
        highSchool: data.schoolName || null,
        profileStatus: 'tarot_lead',
      },
    });

    return { candidateId: candidate.id, isNew: true };
  }
}
