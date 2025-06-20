import type { ApprovalStatus } from "../approvalStatus";

export interface TrainerApplicationStatusResponseDto {
  applicationId: number;
  approvalStatus: ApprovalStatus;
  appliedDate: string;
  createdAt: string;
  updatedAt?: string;
}