import type { ApprovalStatus } from "../approvalStatus";

export interface TrainerApplicationResponseDto {
  id: number;
  username: string;
  name: string;
  appliedDate: string;
  approvalStatus: ApprovalStatus;
  createdAt: string;
  updatedAt: string;
}
