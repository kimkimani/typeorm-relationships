import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { PostgresConfig } from './config/postgres.config';

import { AuthorModule } from './author/author.module';
import { PostModule } from './post/post.module';
import { CommentModule } from './comment/comment.module';

@Module({
	imports: [
		
		ConfigModule.forRoot({
			isGlobal: true,
		}),
		TypeOrmModule.forRootAsync({
			useClass: PostgresConfig,
			inject: [PostgresConfig],
		}),
		AuthorModule,
		PostModule,
		CommentModule,
	],
})
export class AppModule {}
