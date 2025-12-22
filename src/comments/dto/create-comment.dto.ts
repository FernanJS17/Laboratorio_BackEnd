import { IsString, IsNotEmpty, IsEmail, MinLength } from 'class-validator';

export class CreateCommentDto {
  @IsString()
  @IsNotEmpty()
  postId: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(3)
  body: string;
}
