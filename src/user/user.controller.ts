import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  Query,
  UseGuards,
  UseInterceptors,
  Req,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from 'src/guards/auth/auth.guard';
import { DateAdderInterceptor } from 'src/interceptors/date-adder/date-adder.interceptor';
import { Roles } from 'src/decorator/roles/roles.decorator';
import { Role } from './enum/role.enum';
import { RolesGuard } from 'src/guards/roles/roles.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('admin')
  @Roles(Role.Admin)
  @UseGuards(AuthGuard, RolesGuard)
  getAdmin() {
    return 'This route is for admin only';
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @UseInterceptors(DateAdderInterceptor)
  create(@Body() createUserDto: CreateUserDto, @Req() request) {
    const user = { ...createUserDto, createdAt: request.date };
    return this.userService.create(user);
  }

  @Get()
  @UseGuards(AuthGuard)
  findAll() {
    return this.userService.findAll();
  }

  @Get('pag')
  findWithPagination(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ) {
    return this.userService.pag(page, limit);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
