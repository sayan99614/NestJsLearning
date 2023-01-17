import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './user.dto';

@Controller('/user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  createUser(@Body() user: UserDto) {
    return this.userService.createOne(user);
  }
  @Get()
  getAllUser() {
    return this.userService.findAll();
  }
  @Delete(':id')
  removeUser(@Param('id') id: string) {
    return this.userService.remove(Number.parseInt(id));
  }
}
