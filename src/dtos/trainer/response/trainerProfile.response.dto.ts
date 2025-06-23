import type { Specialty } from "../specialty";
import type { CertificateResponseDto } from "./certificate.response.dto";

export interface TrainerProfileResponseDto {
  name: string;
  specialty: Specialty;
  certificates?: CertificateResponseDto[];
  experienceYears: number;
  description: string;
  createdAt: string;
  updatedAt?: string;
}
