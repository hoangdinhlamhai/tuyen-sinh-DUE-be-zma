import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { randomUUID } from 'crypto';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
  ) {}

  async loginWithZalo(
    accessToken: string,
    zaloProfile?: { zaloId: string; name?: string; avatar?: string },
  ) {
    if (!zaloProfile?.zaloId) {
      throw new UnauthorizedException('Zalo profile information is required');
    }

    let candidate = await this.prisma.candidate.findFirst({
      where: { zaloId: zaloProfile.zaloId },
    });

    if (!candidate) {
      const id = `DAU${new Date().getFullYear()}${randomUUID().slice(0, 6).toUpperCase()}`;
      candidate = await this.prisma.candidate.create({
        data: {
          id,
          zaloId: zaloProfile.zaloId,
          email: `zalo_${zaloProfile.zaloId}@placeholder.local`,
          dob: new Date('2000-01-01'),
          fullName: zaloProfile.name || '',
          avatarUrl: zaloProfile.avatar || null,
          profileStatus: 'linked',
        },
      });
    }

    const payload = {
      sub: candidate.id,
      zaloId: zaloProfile.zaloId,
    };

    const jwt = this.jwtService.sign(payload);

    return {
      accessToken: jwt,
      candidateId: candidate.id,
      zaloId: zaloProfile.zaloId,
      fullName: candidate.fullName,
      avatarUrl: candidate.avatarUrl,
      profileStatus: candidate.profileStatus,
    };
  }

  async logout() {
    return { success: true };
  }
}
