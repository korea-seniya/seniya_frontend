import type { Specialty } from "../../trainer/specialty";

export interface PopularTrainerResponseDto {
  trainerId: number;
  name: string;
  specialty: Specialty;
  profileImageUrl: string;
  courseCount: number;
}