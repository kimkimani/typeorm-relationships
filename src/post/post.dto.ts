import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePostDto {
  @IsString()
  title: string;
  @IsString()
  content: string;

}

export class PostDto {
  id: number;
  title: string;
  content: string;
}
