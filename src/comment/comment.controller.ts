// src/comment/post.controller.ts
import { Controller, Post, Body, Put, Param, Delete, Get } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto, CommentDto } from './comment.dto';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post()
  async createComment(@Body() createCommentDto: CreateCommentDto): Promise<CommentDto> {
    return this.commentService.createComment(createCommentDto);
  }
}
