import {
  IsString,
  IsOptional,
  IsIn,
  MaxLength,
} from 'class-validator';

export class CreateNewsDto {
  @IsString()
  @MaxLength(255)
  title: string;

  @IsOptional()
  @IsString()
  summary?: string;

  @IsOptional()
  @IsString()
  thumbnail?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  slug?: string;

  @IsOptional()
  content?: any;

  @IsOptional()
  @IsString()
  @IsIn(['blocknote', 'html'])
  contentFormat?: string;
}
