import { IsEmail, IsOptional, IsString, Matches } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail()
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

  @IsString()
  address: string;

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
}
