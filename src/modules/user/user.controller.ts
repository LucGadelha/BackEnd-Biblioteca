import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('find/all')
  async users(): Promise<UserDto[]> {
    return await this.userService.users();
  }

  @Get('find/:id')
  async user(@Param('id') id: string): Promise<UserDto> {
    return await this.userService.user(id);
  }

  @Post('create')
  async create(@Body() data: UserDto): Promise<UserDto> {
    return await this.userService.create(data);
  }

  @Patch('update/:id')
  async update(
    @Param('id') id: string,
    @Body() data: UserDto,
  ): Promise<UserDto> {
    return await this.userService.update(id, data);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id: string): Promise<boolean> {
    return await this.userService.delete(id);
  }
}
