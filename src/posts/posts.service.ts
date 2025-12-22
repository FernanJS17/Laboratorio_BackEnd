import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post } from './schemas/post.schema';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post.name) private postModel: Model<Post>) {}

  async findAll(page = 1, limit = 5) {
    const skip = (page - 1) * limit;

    const [items, total] = await Promise.all([
      this.postModel
        .find()
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .exec(),

      this.postModel.countDocuments(),
    ]);

    return {
      items,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  async findOne(id: string): Promise<Post> {
    const post = await this.postModel.findById(id).exec();
    if (!post) throw new NotFoundException('Post no encontrado');
    return post;
  }

  async create(createPostDto: CreatePostDto): Promise<Post> {
    const post = new this.postModel(createPostDto);
    return post.save();
  }

  async update(id: string, updatePostDto: UpdatePostDto): Promise<Post> {
    const post = await this.postModel.findByIdAndUpdate(id, updatePostDto, {
      new: true,
    });
    if (!post) throw new NotFoundException('Post no encontrado');
    return post;
  }

  async remove(id: string): Promise<Post> {
    const post = await this.postModel.findByIdAndDelete(id);
    if (!post) throw new NotFoundException('Post no encontrado');
    return post;
  }

  // Create con Bulk
  async createBulk(posts: CreatePostDto[]): Promise<Post[]> {
    return this.postModel.insertMany(posts);
  }
}
