import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TasksService {
  constructor(private readonly prismaService: PrismaService) { }

  async findAll(userId: number) {
    return this.prismaService.task.findMany({
      where: { userId },
      include: { user: true },
    });
  };

  async findOne(id: number, userId: number) {
    const task = await this.prismaService.task.findUnique({
      where: {
        id: id,
        userId: userId
      },
      include: {
        user: true,
      },
    });
    if (!task) throw new NotFoundException(`Запись не найдена`);
    
    return task
  };
}
