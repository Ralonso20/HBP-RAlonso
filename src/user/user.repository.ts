import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository {
  private users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'johndou@mail.com',
    },
    {
      id: 2,
      name: 'Jane Doe',
      email: 'janedou@mail.com',
    },
    {
      id: 3,
      name: 'Alice',
      email: 'alice@mail.com',
    },
  ];

  getUsers() {
    return this.users;
  }
}
