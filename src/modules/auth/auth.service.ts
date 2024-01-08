import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prismaService: PrismaService,
  ) {}

  async auth(data) {
    const user = await this.prismaService.user.findFirst({
      where: { username: data.username, password: data.password },
    });

    if (user === null) {
      return 'ERROR! Não encontrado';
    }
    return {
      token: this.jwtService.sign(user.username, { secret: 'qualquer' }),
    };
  }
}
