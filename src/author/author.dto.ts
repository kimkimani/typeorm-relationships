import { IsString } from 'class-validator';

export class CreateAuthorDto {
  @IsString()
  authorname: string;
}

export class AuthorDto {
  id: number;
  authorname: string;
}
