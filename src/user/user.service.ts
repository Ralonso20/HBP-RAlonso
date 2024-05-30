import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import { UserResponseDto } from './dto/response.user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto): Promise<User> {
    const newUser = this.usersRepository.create(createUserDto);
    return this.usersRepository.save(newUser);
  }

  async findAll(): Promise<UserResponseDto[]> {
    const users = this.usersRepository.find();
    return (await users).map(
      (user: User) => new UserResponseDto(user as Partial<UserResponseDto>),
    );
  }

  async findOne(id: string): Promise<UserResponseDto | null> {
    const user = await this.usersRepository.findOneBy({ id });
    if (!user) {
      return null;
    }
    return new UserResponseDto(user as Partial<UserResponseDto>);
  }

  async update(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<UserResponseDto> {
    await this.usersRepository.update(id, updateUserDto);
    const user = await this.usersRepository.findOneBy({ id });
    return new UserResponseDto(user as Partial<UserResponseDto>);
  }

  async remove(id: string) {
    return this.usersRepository.delete(id);
  }

  pag(page, limit) {
    return {
      page,
      limit,
    };
  }
}
