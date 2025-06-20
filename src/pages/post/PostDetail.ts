import type { CommentDto } from "./CommentDto";

export interface PostDetailResponseDto {
  postId: number;
  title: string;
  content: string;
  username: string;
  imageUrls: string[];
  comments: CommentDto[];
  createdAt: string;
  updatedAt: string;
}