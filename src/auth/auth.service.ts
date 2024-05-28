import { Injectable } from '@nestjs/common';
import { SignInAuthDto } from './dto/signin-auth.dto';

@Injectable()
export class AuthService {
  constructor() {}
  signIn(credentials: SignInAuthDto) {
    // const user = this.userRepository.findOneByEmail(credentials.email);
    // if (user && user.password === credentials.password) {
    //   return "You're logged in!";
    // }
    // return 'Email or password is incorrect. Please try again.';
    return 'You are logged in!';
  }
}
