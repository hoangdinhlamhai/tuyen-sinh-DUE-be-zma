import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { ZaloLoginDto } from './dto/zalo-login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('zalo')
  loginWithZalo(@Body() dto: ZaloLoginDto) {
    return this.authService.loginWithZalo(dto.accessToken);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('logout')
  logout() {
    return this.authService.logout();
  }
}
