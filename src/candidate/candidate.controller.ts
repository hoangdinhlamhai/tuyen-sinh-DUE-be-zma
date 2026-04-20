import {
  Controller,
  Post,
  Get,
  Patch,
  Body,
  Param,
  Headers,
  BadRequestException,
} from '@nestjs/common';
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

  @Get('me')
  getMe(@Headers('x-zalo-id') zaloId: string) {
    if (!zaloId) {
      throw new BadRequestException('x-zalo-id header is required');
    }
    return this.candidateService.getByZaloId(zaloId);
  }

  @Patch('me')
  updateMe(
    @Headers('x-zalo-id') zaloId: string,
    @Body() dto: UpdateProfileDto,
  ) {
    if (!zaloId) {
      throw new BadRequestException('x-zalo-id header is required');
    }
    return this.candidateService.updateProfile(zaloId, dto);
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.candidateService.getById(id);
  }
}
