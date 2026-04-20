import { IsString, IsNotEmpty } from 'class-validator';

export class ClaimGiftDto {
  @IsString()
  @IsNotEmpty()
  zaloUserId: string;
}
