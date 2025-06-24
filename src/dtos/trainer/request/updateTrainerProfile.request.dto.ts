import type { Specialty } from "../specialty";
import type { CertificateRequestDto } from "./certificate.reques.dto";

export interface updateTrainerProfileRequestDto {
    specialty: Specialty;
    certificates?: CertificateRequestDto[];
    experienceYears: number;
    description: string;
    removeProfileImage: boolean;
}
