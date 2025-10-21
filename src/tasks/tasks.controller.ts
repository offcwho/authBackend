import { Controller, Get, Post, Body, Patch, Param, Delete, Req, UseGuards } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('tasks')
@UseGuards(AuthGuard('jwt'))
export class TasksController {
  constructor(private readonly tasksService: TasksService) { }

  @Get()
  async findAll(@Req() req) {
    return this.tasksService.findAll(req.user.userId);
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Req() req) {
    return this.tasksService.findOne(parseInt(id), req.user.userID);
  }
}
