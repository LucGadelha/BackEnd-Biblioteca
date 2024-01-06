import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async users(): Promise<UserDto[]> {
    const users = await this.prismaService.user.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return users;
  }

  async user(id: string): Promise<UserDto> {
    const user = await this.prismaService.user.findUnique({ where: { id } });
    return user;
  }

  async create(data: UserDto): Promise<UserDto> {
    const createdUser = await this.prismaService.user.create({ data });
    return createdUser;
  }

  async update(id: string, data: UserDto): Promise<UserDto> {
    const updatedUser = await this.prismaService.user.update({
      where: { id },
      data,
    });
    return updatedUser;
  }

  async delete(id: string): Promise<boolean> {
    const user = await this.prismaService.user.delete({ where: { id } });
    return !!user;
  }
}
