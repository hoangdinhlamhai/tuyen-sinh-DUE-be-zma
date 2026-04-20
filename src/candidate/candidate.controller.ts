import {
  Controller,
  Post,
  Get,
  Patch,
  Body,
  Param,
  Headers,
  BadRequestException,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CandidateService } from './candidate.service';
import { CheckEmailDto } from './dto/check-email.dto';
import { RegisterDto } from './dto/register.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Controller('candidates')
export class CandidateController {
  constructor(private readonly candidateService: CandidateService) {}

  @Post('check-email')
  checkEmail(@Body() dto: CheckEmailDto) {
    return this.candidateService.checkByEmail(dto.email);
  }

  @Post('register')
  register(@Body() dto: RegisterDto) {
    return this.candidateService.register(dto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  getMe(@Request() req: { user: { candidateId: string } }) {
    return this.candidateService.getById(req.user.candidateId);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch('me')
  updateMe(
    @Request() req: { user: { candidateId: string } },
    @Body() dto: UpdateProfileDto,
  ) {
    return this.candidateService.updateProfileById(req.user.candidateId, dto);
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.candidateService.getById(id);
  }
}
