export interface PopularPostResponseDto {
  content: any;
  postId: number;
  title: string;
  commentCount: number;
  createdAt: string;
  updatedAt: string;
  userName?: string;
}