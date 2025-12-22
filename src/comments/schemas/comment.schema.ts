import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class Comment extends Document {
  @Prop({ type: Types.ObjectId, ref: 'Post', required: true })
  postId: Types.ObjectId; //Referencia del Post

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  body: string;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
