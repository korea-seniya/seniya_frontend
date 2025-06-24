import type { Specialty } from "../specialty";
import type { CertificateResponseDto } from "./certificate.response.dto";

export interface TrainerProfileCreateResponseDto {
  name: string;
  specialty: Specialty;
  certificates?: CertificateResponseDto[];
  experienceYears: number;
  description: string;
  profileImageUrl: string | null;
  createdAt: string;
}
