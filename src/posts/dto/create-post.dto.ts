import { IsBoolean, IsString } from "class-validator";

export class CreatePostDto {
    @IsString()
    title: string
    @IsString()
    description: string
    @IsString()
    content: string
    @IsBoolean()
    isActive: boolean
}
