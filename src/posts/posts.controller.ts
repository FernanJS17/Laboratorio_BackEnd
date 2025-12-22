import {
  Controller,
  Get,
  Post as HttpPost,
  Put,
  Delete,
  Body,
  Param,
  HttpCode,
  Query,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { CreateBulkPostsDto } from './dto/bulk-create-post.dto';
import { ApiResponse } from '../common/responses/api-response';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  async findAll(@Query('page') page = '1', @Query('limit') limit = '5') {
    return this.postsService.findAll(Number(page), Number(limit));
  }

  @HttpPost()
  async create(@Body() createPostDto: CreatePostDto) {
    const post = await this.postsService.create(createPostDto);
    return ApiResponse.success(post, 'Post creado correctamente');
  }

  // Bulk (OBLIGATORIO)
  @HttpPost('bulk')
  async createBulk(@Body() bulkDto: CreateBulkPostsDto) {
    const posts = await this.postsService.createBulk(bulkDto.posts);
    return ApiResponse.success(posts, 'Posts creados en carga masiva');
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const post = await this.postsService.findOne(id);
    return ApiResponse.success(post);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    const post = await this.postsService.update(id, updatePostDto);
    return ApiResponse.success(post, 'Post actualizado correctamente');
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string) {
    await this.postsService.remove(id);
    return ApiResponse.success(null, 'Post eliminado correctamente');
  }
}
