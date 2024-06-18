import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class SignUpAuthDto {
  @MaxLength(80)
  @MinLength(3)
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[=!@#$%^&*])[A-Za-z\d=!@#$%^&*]{8,15}$/,
    {
      message:
        'La contraseña debe contener al menos una minúscula, una mayúscula, un número, un caracter especial (= !@#$%^&*) y tener entre 8 y 15 caracteres',
    },
  )
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  passwordConfirm: string;

  @IsString()
  address: string;

  @IsNotEmpty()
  @IsString()
  phone: string;

  @IsString()
  @IsOptional()
  country?: string;

  @IsString()
  @IsOptional()
  city?: string;

  @IsString()
  @IsOptional()
  createdAt: string;

  constructor(partial: Partial<SignUpAuthDto>) {
    Object.assign(this, partial);
  }
}
