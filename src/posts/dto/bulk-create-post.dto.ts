import { Type } from 'class-transformer';
import { ArrayMinSize, IsArray, ValidateNested } from 'class-validator';
import { CreatePostDto } from './create-post.dto';

export class CreateBulkPostsDto {
  @IsArray()
  @ArrayMinSize(1, { message: 'Es requerido al menos un post' })
  @ValidateNested({ each: true })
  @Type(() => CreatePostDto)
  posts: CreatePostDto[];
}
