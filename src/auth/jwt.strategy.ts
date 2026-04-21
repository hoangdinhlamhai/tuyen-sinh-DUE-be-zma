import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import type { Request } from 'express';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(configService: ConfigService) {
    super({
      jwtFromRequest: (req: Request) => {
        console.log('[JwtStrategy] req.cookies:', req.cookies);
        console.log('[JwtStrategy] headers.cookie:', req.headers.cookie);

        let token: string | null = null;

        // 1. Try req.cookies (requires cookie-parser middleware to run first)
        if (req.cookies && req.cookies['access_token']) {
          token = req.cookies['access_token'] as string;
          console.log('[JwtStrategy] found token in req.cookies');
        }

        // 2. Fallback: parse manually from raw cookie header
        if (!token && req.headers.cookie) {
          const raw: string = req.headers.cookie as string;
          const match = raw.match(/(?:^|;\s*)access_token=([^;]*)/);
          if (match && match[1]) {
            token = decodeURIComponent(match[1]);
            console.log('[JwtStrategy] found token via manual parse');
          }
        }

        console.log('[JwtStrategy] final token present:', !!token);
        return token;
      },
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('JWT_SECRET')!,
      algorithms: ['HS256'],
    });
  }

  async validate(payload: { sub: string; zaloId: string }) {
    return { candidateId: payload.sub, zaloId: payload.zaloId };
  }
}
