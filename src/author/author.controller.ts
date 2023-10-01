// src/Author/Author.controller.ts
import { Controller, Post, Body, Put, Param, Delete, Get } from '@nestjs/common';
import { AuthorService } from './author.service';
import { CreateAuthorDto, AuthorDto } from './author.dto';

@Controller('author')
export class AuthorController {
  constructor(private readonly authorService:AuthorService) {}

  @Post()
  async createAuthor(@Body() createAuthorDto: CreateAuthorDto): Promise<AuthorDto> {
    return this.authorService.createAuthor(createAuthorDto);
  }
}
