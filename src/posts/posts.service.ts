import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostsService {
  constructor(private readonly prismaService: PrismaService) { }

  findAll() {
    const posts = this.prismaService.post.findMany({
      where: { isActive: true }
    })
    if (!posts) throw new NotFoundException(`Постов нет, но есть сиськи (.) (.)`)
    return posts
  }

  async findOne(id: number) {
    const post = await this.prismaService.post.findUnique({
      where: {
        id: id,
        isActive: true
      }
    })
    if (!post) throw new NotFoundException(`Ничего c ${id} не найдено!`)
    return post
  }

  async create(dto: CreatePostDto) {
    const post = await this.prismaService.post.create({
      data: { ...dto }
    })
    return post
  }

  async update(id: number, dto: UpdatePostDto) {
    const post = await this.prismaService.post.update({
      where: { id: id },
      data: { ...dto }
    })
    return post
  }

  delete(id: number) {
    const post = this.prismaService.post.findUnique({
      where: { id }
    });
    if (!post) throw new NotFoundException(`Ничего c ${id} не найдено!`)
    return this.prismaService.post.delete({ where: { id } })
  }
}
