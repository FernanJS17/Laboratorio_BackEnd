import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  Query,
  HttpCode,
} from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { ApiResponse } from '../common/responses/api-response';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  // GET /comments?postId=
  @Get()
  async findByPost(@Query('postId') postId?: string) {
    const comments = await this.commentsService.findByPost(postId);
    return ApiResponse.success(comments);
  }

  // POST /comments
  @Post()
  async create(@Body() createCommentDto: CreateCommentDto) {
    const comment = await this.commentsService.create(createCommentDto);
    return ApiResponse.success(comment, 'Comentario creado correctamente');
  }

  // DELETE /comments/:id
  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string) {
    await this.commentsService.remove(id);
    return ApiResponse.success(null, 'Comentario eliminado');
  }
}
