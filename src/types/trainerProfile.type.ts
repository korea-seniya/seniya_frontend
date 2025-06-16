import type { User } from "./user.type";

export interface TrainerProfile {
  trainerId: number;
  user: User;
  speciality: string;
  certificate: string;
  certificationDate: string;
  experienceYears: number;
  description: string;

}