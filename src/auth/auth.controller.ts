import { Controller, Post, Body, UseGuards, Res, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import type { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { ZaloLoginDto } from './dto/zalo-login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('zalo')
  loginWithZalo(
    @Body() dto: ZaloLoginDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const result = this.authService.loginWithZalo(
      dto.accessToken,
      dto.profile,
    ) as any;

    res.cookie('access_token', result.accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    const { accessToken: _accessToken, ...safeData } = result;
    return safeData;
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('logout')
  logout(@Req() _req: Request, @Res({ passthrough: true }) res: Response) {
    res.clearCookie('access_token');
    return this.authService.logout();
  }
}
