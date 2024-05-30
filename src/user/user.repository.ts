import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserRepository {
  private users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'johndou@mail.com',
      password: 'password1',
      address: '123 Main St',
      phone: '123-456-7890',
    },
    {
      id: 2,
      name: 'Jane Doe',
      email: 'janedou@mail.com',
      password: 'password2',
      address: '123 Main St',
      phone: '123-456-7890',
    },
    {
      id: 3,
      name: 'Alice',
      email: 'alice@mail.com',
      password: 'password3',
      address: '123 Main St',
      phone: '123-456-7890',
    },
  ];

  async getUsers() {
    return this.users;
  }

  remove(id: number) {
    this.users = this.users.filter((user) => user.id !== id);
    return id;
  }
  update(id: number, updateUserDto: UpdateUserDto) {
    const user = this.findOne(id);
    const updatedUser = {
      ...user,
      ...updateUserDto,
    };
    this.users = this.users.map((user) =>
      user.id === id ? updatedUser : user,
    );
    return updatedUser;
  }
  findOne(id: number) {
    return this.users.find((user) => user.id === id);
  }
  create(createUserDto: CreateUserDto) {
    const newUser = {
      id: this.users.length + 1,
      ...createUserDto,
    };
    this.users.push(newUser);
    return newUser;
  }

  findOneByEmail(email: string) {
    return this.users.find((user) => user.email === email);
  }
}
