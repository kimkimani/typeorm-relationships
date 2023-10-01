import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Author } from '../author/author.entity';
import { Comment } from '../comment/comment.entity';

@Entity({ name: 'posts' })
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @ManyToOne(() => Author, (author) => author.posts)
  author: Author;

  @OneToMany(() => Comment, (comment) => comment.post)
  comments: Comment[];
}
