import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import * as crypto from 'crypto';
import { PrismaService } from '../prisma/prisma.service';
import { randomUUID } from 'crypto';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    private readonly prisma: PrismaService,
  ) {}

  async loginWithZalo(accessToken: string) {
    const zaloProfile = await this.verifyZaloToken(accessToken);

    let candidate = await this.prisma.candidate.findFirst({
      where: { zaloId: zaloProfile.id },
    });

    if (!candidate) {
      const id = `DAU${new Date().getFullYear()}${randomUUID().slice(0, 6).toUpperCase()}`;
      candidate = await this.prisma.candidate.create({
        data: {
          id,
          zaloId: zaloProfile.id,
          email: `zalo_${zaloProfile.id}@placeholder.local`,
          dob: new Date('2000-01-01'),
          fullName: zaloProfile.name || '',
          avatarUrl: zaloProfile.avatar || null,
          profileStatus: 'linked',
        },
      });
    }

    const payload = {
      sub: candidate.id,
      zaloId: candidate.zaloId,
    };

    const jwt = this.jwtService.sign(payload);

    return {
      accessToken: jwt,
      candidateId: candidate.id,
      zaloId: candidate.zaloId,
      fullName: candidate.fullName,
      avatarUrl: candidate.avatarUrl,
      profileStatus: candidate.profileStatus,
    };
  }

  async verifyZaloToken(accessToken: string) {
    const appId = this.configService.get<string>('ZALO_APP_ID');
    const appSecret = this.configService.get<string>('ZALO_APP_SECRET');

    if (!appId || !appSecret) {
      throw new UnauthorizedException('Zalo app credentials not configured');
    }

    const appsecretProof = crypto
      .createHmac('sha256', appSecret)
      .update(accessToken)
      .digest('hex');

    try {
      const response = await axios.get('https://graph.zalo.me/v2.0/me', {
        params: {
          fields: 'id,name,picture',
          access_token: accessToken,
          appsecret_proof: appsecretProof,
        },
      });

      const data = response.data;

      if (data.error) {
        throw new UnauthorizedException(`Zalo API error: ${data.message}`);
      }

      return {
        id: String(data.id),
        name: data.name || '',
        avatar: data.picture?.data?.url || '',
      };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 401) {
          throw new UnauthorizedException(
            'Invalid or expired Zalo access token',
          );
        }
        throw new UnauthorizedException(
          `Zalo API error: ${error.response?.data?.message || error.message}`,
        );
      }
      throw error;
    }
  }

  async logout() {
    return { success: true };
  }
}
