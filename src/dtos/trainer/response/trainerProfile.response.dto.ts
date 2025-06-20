import type { Specialty } from "../specialty";

export interface TrainerProfileResponseDto {
  name: string;
  specialty: Specialty;
  certificate: string;
  certificationDate: string;
  experienceYears: number;
  description: string;
  createdAt: string;
  updatedAt?: string;
}
