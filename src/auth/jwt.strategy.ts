import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import type { Request } from 'express';
import * as cookie from 'cookie';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(configService: ConfigService) {
    super({
      jwtFromRequest: (req: Request) => {
        let token: string | null = null;

        // Try cookie header directly (for serverless environments)
        if (req.headers.cookie) {
          const parsed = cookie.parse(req.headers.cookie);
          token = parsed.access_token || null;
        }

        // Fallback to parsed cookies object
        if (!token && req?.cookies?.access_token) {
          token = req.cookies.access_token;
        }

        // Final fallback to bearer header
        if (!token) {
          token = ExtractJwt.fromAuthHeaderAsBearerToken()(req);
        }

        return token;
      },
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('JWT_SECRET')!,
    });
  }

  async validate(payload: { sub: string; zaloId: string }) {
    return { candidateId: payload.sub, zaloId: payload.zaloId };
  }
}
