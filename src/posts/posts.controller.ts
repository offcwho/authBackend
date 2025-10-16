import { Controller, Get, Post, Body, Patch, Param, Delete, Req } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) { }

  @Get()
  findAll() {
    return this.postsService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postsService.findOne(parseInt(id))
  }

  @Post()
  async create(@Body() dto: CreatePostDto) {
    return this.postsService.create(dto)
  }

  @Post(':id')
  async update(@Param('id') id: string, @Body() dto: UpdatePostDto) {
    return this.postsService.update(parseInt(id), dto)
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.postsService.delete(parseInt(id))
  }
}
