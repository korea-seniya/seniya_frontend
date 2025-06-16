import type { TrainerProfile } from "./trainerProfile.type";

// types/course.type.ts
export interface Course {
  courseId: number;
  trainerProfile: TrainerProfile;
  title: string;
  description: string;
  date: string;
  startTime: string;
  endTime: string;
  category: string;
  room: string;
  createdAt: string;
  updatedAt?: string;
}
