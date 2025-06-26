export interface PassResponseDto {
  passId: number;
  couponType: string;
  used: boolean;
  issuedAt: string;
  expiresAt: string;
}