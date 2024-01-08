import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { BookService } from './book.service';
import { BookDto } from './dto/book.dto';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get('find/all')
  async books(): Promise<BookDto[]> {
    return await this.bookService.books();
  }

  @Get('find/:id')
  async book(@Param('id') id: string): Promise<BookDto> {
    return await this.bookService.book(id);
  }

  @Post('create')
  async createBook(@Body() data: BookDto): Promise<string> {
    return await this.bookService.create(data);
  }

  @Patch('update/:id')
  async updateBook(
    @Param('id') id: string,
    @Body() data: BookDto,
  ): Promise<BookDto> {
    return await this.bookService.update(id, data);
  }

  @Delete('delete/:id')
  async deleteBook(@Param('id') id: string): Promise<boolean> {
    return await this.bookService.delete(id);
  }
}
