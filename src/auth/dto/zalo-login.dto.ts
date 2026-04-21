import { IsString, IsOptional } from 'class-validator';

export class ZaloProfileDto {
  @IsString()
  zaloId: string;

  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  avatar?: string;
}

export class ZaloLoginDto {
  @IsString()
  accessToken: string;

  @IsOptional()
  profile?: ZaloProfileDto;
}
