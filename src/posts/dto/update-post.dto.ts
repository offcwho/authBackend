import { PartialType } from '@nestjs/mapped-types';
import { CreatePostDto } from './create-post.dto';
import { IsBoolean, IsString } from 'class-validator';

export class UpdatePostDto extends PartialType(CreatePostDto) {
    @IsString()
    title: string
    @IsString()
    description: string
    @IsString()
    content: string
    @IsBoolean()
    isActive: boolean
}
