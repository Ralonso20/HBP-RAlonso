import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInAuthDto } from './dto/signin-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  signIn(@Body() credentials: SignInAuthDto) {
    return this.authService.signIn(credentials);
  }
}
