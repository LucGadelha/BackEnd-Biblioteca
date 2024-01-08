import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { BookModule } from './modules/book/book.module';

@Module({
  imports: [
    UserModule,
    AuthModule,
    JwtModule.register({ global: true, secret: 'desafio' }),
    BookModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
