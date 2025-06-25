import type { TrainerProfile } from "./trainerProfile.type";

// types/course.type.ts
export interface Course {
  courseId: number;
  trainerName: string;
  trainerId: number;
  title: string;
  description: string;
  courseDate: string;
  startTime: string;
  endTime: string;
  category: string;
  room: string;
  createdAt: string;
  updatedAt?: string;
}
