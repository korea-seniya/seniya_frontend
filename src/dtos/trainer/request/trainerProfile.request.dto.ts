import type { Specialty } from "../specialty";
import type { CertificateRequestDto } from "./certificate.reques.dto";

export interface TrainerProfileRequestDto {
    specialty: Specialty;
    certificates?: CertificateRequestDto[];
    experienceYears: number;
    description: string;
}
