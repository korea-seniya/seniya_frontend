import type { ApprovalStatus } from "../approvalStatus";

export interface TrainerApplicationDetailResponseDto {
  username: string;
  name: string;
  userEmail: string;
  appliedDate: string;
  approvalStatus: ApprovalStatus;
  createdAt: string;
  updatedAt?: string;
}
