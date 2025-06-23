import type { AllergyResponseDto } from "../allergy/response/allergy.response.dto";
import type { DiseaseResponseDto } from "../disease/response/disease.response.dto";
import type { MedicationResponseDto } from "../medication/response/medication.response.dto";

export interface HealthdataResponseDto {
  healthDataId: number;
  height: number;
  weight: number;
  bodyFatPercentage: number;
  bloodPressure: string;

  diseases: DiseaseResponseDto[];
  medications: MedicationResponseDto[];
  allergies: AllergyResponseDto[];

  smoking: boolean;
  drinking: boolean;
}