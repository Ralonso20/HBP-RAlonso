import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './user.repository';
import { UserResponseDto } from './dto/response.user.dto';

@Injectable()
export class UserService {
  constructor(private readonly usersRepository: UserRepository) {}
  create(createUserDto: CreateUserDto) {
    const user = this.usersRepository.create(createUserDto);
    return new UserResponseDto(user);
  }

  async findAll() {
    const users = this.usersRepository.getUsers();
    const responseUsers = (await users).map(
      (user) => new UserResponseDto(user),
    );
    return responseUsers;
  }

  findOne(id: number) {
    const user = this.usersRepository.findOne(id);
    return new UserResponseDto(user);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const user = this.usersRepository.update(id, updateUserDto);
    return new UserResponseDto(user);
  }

  remove(id: number) {
    return this.usersRepository.remove(id);
  }

  pag(page, limit) {
    return {
      page,
      limit,
    };
  }
}
