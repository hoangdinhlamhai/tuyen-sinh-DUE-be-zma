import { IsString } from 'class-validator';

export class ZaloLoginDto {
  @IsString()
  accessToken: string;
}
