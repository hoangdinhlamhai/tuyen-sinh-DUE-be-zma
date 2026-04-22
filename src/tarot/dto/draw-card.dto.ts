import { IsOptional, IsString } from 'class-validator';

export class DrawCardDto {
  @IsOptional()
  @IsString()
  zaloUserId?: string;

  @IsOptional()
  @IsString()
  candidateId?: string;

  @IsString()
  playerName: string;

  @IsOptional()
  @IsString()
  provinceCode?: string;

  @IsOptional()
  @IsString()
  schoolCode?: string;
}
