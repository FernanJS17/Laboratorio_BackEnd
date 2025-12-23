import {
  BadRequestException,
  Get,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Comment } from './schemas/comment.schema';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Post } from '../posts/schemas/post.schema';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comment.name) private commentModel: Model<Comment>,
    @InjectModel(Post.name) private postModel: Model<Post>,
  ) {}

  @Get()
  async findByPost(postId?: string) {
    const filter: any = {};

    if (postId) {
      if (!Types.ObjectId.isValid(postId)) {
        throw new BadRequestException('postId inválido');
      }

      filter.postId = new Types.ObjectId(postId);
    }

    return this.commentModel
      .find(filter)
      .populate('postId', 'title author')
      .sort({ createdAt: -1 })
      .exec();
  }

  async create(createCommentDto: CreateCommentDto): Promise<Comment> {
    const postExists = await this.postModel.exists({
      _id: new Types.ObjectId(createCommentDto.postId),
    });

    if (!postExists) {
      throw new NotFoundException('El post no existe');
    }

    return this.commentModel.create({
      ...createCommentDto,
      postId: new Types.ObjectId(createCommentDto.postId),
    });
  }

  async remove(id: string): Promise<Comment> {
    const comment = await this.commentModel.findByIdAndDelete(id);
    if (!comment) {
      throw new NotFoundException('Comentario no encontrado');
    }
    return comment;
  }
}
