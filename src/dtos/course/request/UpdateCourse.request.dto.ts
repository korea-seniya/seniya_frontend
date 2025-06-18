export interface UpdateCourseRequestDto {
  trainerId: number;
  title: string;
  description: string;
  classDate: string;
  classStartTime: string;
  classEndTime: string;
  category: string;
  classroom: string;
}