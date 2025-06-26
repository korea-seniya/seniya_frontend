import type { AllergyRequestDto } from "../allergy/request/allergy.request.dto";
import type { DiseaseRequestDto } from "../disease/reqeust/disease.request.dto";
import type { MedicationRequestDto } from "../medication/request/medication.request.dto";

export interface HealthdataRequestDto {
  height: number;
  weight: number;
  bodyFatPercentage?: number;
  bloodPressure?: string;

  diseases?: DiseaseRequestDto[];
  medications?: MedicationRequestDto[];
  allergies?: AllergyRequestDto[];

  smoking: boolean;
  drinking: boolean;
}