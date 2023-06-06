import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AdminsModule } from './admins/admins.module';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { SkillsModule } from './skills/skills.module';
import { AcademyModule } from './academy/academy.module';
import { CommentsModule } from './comments/comments.module';
import { PostReactionsModule } from './post-reactions/post-reactions.module';
import { ProjectsModule } from './projects/projects.module';
import { ReactionsModule } from './reactions/reactions.module';
import { SkillTypeModule } from './skill-type/skill-type.module';
import { SocialsModule } from './socials/socials.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'swagger-static'),
      serveRoot: process.env.NODE_ENV === 'development' ? '/' : '/swagger',
    }),
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    AdminsModule,
    UsersModule,
    PostsModule,
    SkillsModule,
    AcademyModule,
    CommentsModule,
    PostReactionsModule,
    ProjectsModule,
    ReactionsModule,
    SkillTypeModule,
    SkillsModule,
    SocialsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}