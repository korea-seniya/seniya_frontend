import type { Specialty } from "../specialty";

export interface TrainerProfileRequestDto {
    specialty: Specialty;
    certificate: string;
    certificationDate: string;
    experienceYears: number;
    description: string;
}
