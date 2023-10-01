// src/post/post.controller.ts
import { Controller, Post, Body, Put, Param, Delete, Get } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto, PostDto } from './post.dto';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  async createPost(@Body() createPostDto: CreatePostDto): Promise<PostDto> {
    return this.postService.createPost(createPostDto);
  }
}
