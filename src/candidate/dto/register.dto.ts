import {
  IsEmail,
  IsString,
  IsOptional,
  IsArray,
  MaxLength,
  MinLength,
  IsDateString,
} from 'class-validator';

export class RegisterDto {
  @IsEmail()
  @IsString()
  email: string;

  @IsString()
  @MinLength(2)
  @MaxLength(50)
  fullName: string;

  @IsDateString()
  dob: string;

  @IsString()
  gender: 'male' | 'female';

  @IsString()
  @MinLength(12)
  @MaxLength(12)
  idCard: string;

  @IsString()
  @MinLength(10)
  @MaxLength(10)
  phone: string;

  @IsString()
  contactProvinceCode: string;

  @IsString()
  @IsOptional()
  contactWard?: string;

  @IsString()
  @IsOptional()
  contactStreet?: string;

  @IsString()
  highSchoolCode: string;

  @IsString()
  priority1: string;

  @IsString()
  @IsOptional()
  priority2?: string;

  @IsString()
  @IsOptional()
  priority3?: string;

  @IsArray()
  @IsString({ each: true })
  methods: string[];
}
