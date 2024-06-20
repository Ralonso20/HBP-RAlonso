import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    type: String,
    description: 'The name of the user',
    required: true,
  })
  @MaxLength(80)
  @MinLength(3)
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    type: String,
    description: 'The email of the user',
    required: true,
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    type: String,
    description: 'The password of the user',
    required: true,
  })
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[=!@#$%^&*])[A-Za-z\d=!@#$%^&*]{8,15}$/,
    {
      message:
        'La contraseña debe contener al menos una minúscula, una mayúscula, un número, un caracter especial (= !@#$%^&*) y tener entre 8 y 15 caracteres',
    },
  )
  @IsString()
  password: string;

  @ApiProperty({
    type: String,
    description: 'The address of the user',
    required: true,
  })
  @IsString()
  address: string;

  @ApiProperty({
    type: String,
    description: 'The phone of the user',
    required: true,
  })
  @IsNotEmpty()
  @IsNumber()
  phone: string;

  @ApiProperty({
    type: String,
    description: 'The country of the user',
    required: false,
  })
  @IsString()
  @IsOptional()
  country?: string;

  @ApiProperty({
    type: String,
    description: 'The city of the user',
    required: false,
  })
  @IsString()
  @IsOptional()
  city?: string;

  @ApiProperty({
    type: String,
    description: 'The date of creation of the user',
    required: true,
  })
  @IsString()
  @IsOptional()
  createdAt: string;
}
