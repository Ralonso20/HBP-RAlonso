import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request: Request = context.switchToHttp().getRequest();

    const authHeader = request.header('Authorization');

    if (!authHeader) {
      throw new HttpException('Not authorized', HttpStatus.UNAUTHORIZED);
    }

    const authFormat = authHeader.split(' ');
    console.log(authHeader);
    console.log(authFormat);

    const credentialsBase64 = authFormat[1];
    const decodedCredentials = Buffer.from(
      credentialsBase64,
      'base64',
    ).toString('utf-8');
    console.log(decodedCredentials);
    const [username, password] = decodedCredentials.split(':');
    return true;
  }
}
