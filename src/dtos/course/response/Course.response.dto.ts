export interface CourseResponseDto {
  id?: number;
  trainerId: number;
  name?: string;
  title: string;
  description: string;
  classDate: string;
  classStartTime: string;
  classEndTime: string;
  category: string;
  classroom: string;
  createdAt?: string;
  updatedAt?: string;
}