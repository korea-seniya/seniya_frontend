export interface GetCourseDetailResponseDto {
  id: number;
  courseId: number;
  title: string;
  name: string;
  description: string;
  trainerId: number;
  trainerName: string;
  classDate: string;
  classStartTime: string;
  classEndTime: string;
  category: string;
  classroom: string;
  createdAt: string;
  updatedAt: string;
}