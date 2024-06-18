import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Req,
  UseInterceptors,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpAuthDto } from './dto/signup-auth.dto';
import { SignInAuthDto } from './dto/signin-auth.dto';
import { DateAdderInterceptor } from 'src/interceptors/date-adder/date-adder.interceptor';
import { UserResponseDto } from 'src/user/dto/response.user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  async signIn(@Body() credentials: SignInAuthDto) {
    return this.authService.signIn(credentials);
  }

  @Post('signup')
  @HttpCode(201)
  @UseInterceptors(DateAdderInterceptor)
  async signUp(@Body() signUpUser: SignUpAuthDto, @Req() request) {
    const user = { ...signUpUser, createdAt: request.date };
    const newUser = await this.authService.signUp(user);
    return new UserResponseDto(newUser);
  }

  @Get('auth0/protected')
  getAuth0Protected(@Req() request) {
    console.log(JSON.stringify(request.oidc.idToken));
    return JSON.stringify(request.oidc.user);
  }
}
