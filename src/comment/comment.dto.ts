import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCommentDto {
  @IsString()
  text: string;
  @IsNotEmpty({ message: 'The field authorId cannot be empty' })
	authorId: string;
}

export class CommentDto {
  id: number;
  text: string;
}
