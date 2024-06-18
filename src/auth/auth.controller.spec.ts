import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { hash } from 'bcrypt';
import { SignUpAuthDto } from './dto/signup-auth.dto';
import { UserResponseDto } from 'src/user/dto/response.user.dto';

describe('AuthController', () => {
  let controller: AuthController;

  beforeEach(async () => {
    const hashedPassword = await hash('123456', 10);
    const mockUserService: Partial<UserService> = {
      findByEmail: (email: string) => {
        if (email === 'johndou@email.com') {
          return Promise.resolve({
            email: 'johndou@email.com',
            password: hashedPassword,
            administrator: 'user',
          } as User);
        } else {
          return Promise.resolve(undefined);
        }
      },
      create: (entityLike?: Partial<User>): Promise<User> =>
        Promise.resolve({
          ...entityLike,
          administrator: 'user',
          id: '1234fs-1234fs-1234fs-1234fs',
        } as User),
    };
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        AuthService,
        {
          provide: getRepositoryToken(User),
          useValue: {}, // Aquí puedes proporcionar un objeto mock para UserRepository
        },
        {
          provide: JwtService,
          useValue: { signAsync: () => Promise.resolve('mockJwtToken') }, // Aquí puedes proporcionar un objeto mock para JwtService
        },
        {
          provide: UserService,
          useValue: mockUserService,
        },
      ],
    }).compile();

    controller = module.get<AuthController>(AuthController);
  });

  const mockSignUpUser = new SignUpAuthDto({
    name: 'John Doe',
    createdAt: '26/02/2024',
    password: '123456',
    passwordConfirm: '123456',
    email: 'johndou@email.com',
    address: 'Fake St. 123',
    phone: '123456789',
  });

  const mockSignInUser = new SignUpAuthDto({
    email: 'johndou@email.com',
    password: '123456',
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('signUp() should return a new UserResponseDto and create User', async () => {
    const mockRequest = { date: new Date() };
    const user = await controller.signUp(mockSignUpUser, mockRequest);
    expect(user).toBeDefined();
    expect(user).toBeInstanceOf(UserResponseDto);
    expect(user).toHaveProperty('id');
  });

  it('signIn() should return a token', async () => {
    const token = await controller.signIn(mockSignInUser);
    console.log(token);
    expect(token).toBeDefined();
    expect(token).toHaveProperty('token');
  });
});
