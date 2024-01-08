import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { BookDto } from './dto/book.dto';

@Injectable()
export class BookService {
  constructor(private readonly prismaService: PrismaService) {}

  async books(): Promise<BookDto[]> {
    const books = await this.prismaService.book.findMany();
    return books;
  }

  async book(id: string): Promise<BookDto> {
    const book = await this.prismaService.book.findUnique({ where: { id } });
    return book;
  }

  async create(data: BookDto): Promise<string> {
    const book = await this.prismaService.book.create({ data });
    return `Livro criado: ${book.title}`;
  }

  async update(id: string, data: BookDto): Promise<BookDto> {
    const updateBook = await this.prismaService.book.update({
      where: { id },
      data,
    });
    return updateBook;
  }

  async delete(id: string): Promise<boolean> {
    const deleteBook = await this.prismaService.book.delete({ where: { id } });
    return !!deleteBook;
  }
}
