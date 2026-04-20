import { IsOptional, IsString } from 'class-validator';

export class DrawCardDto {
  @IsOptional()
  @IsString()
  zaloUserId?: string;

  @IsString()
  playerName: string;

  @IsOptional()
  @IsString()
  provinceCode?: string;

  @IsOptional()
  @IsString()
  schoolCode?: string;
}
