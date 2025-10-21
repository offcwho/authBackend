import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    JwtModule,
    PrismaModule,
    PassportModule,
  ],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule { }
