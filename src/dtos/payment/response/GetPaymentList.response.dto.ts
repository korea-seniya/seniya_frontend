export interface GetPaymentListResponseDto {
  paymentId: number;
  name: string;
  phone: string;
  amount: number;
  method: string;
  status: string;
  couponCount: number;
  createdAt: string;
  updatedAt: string;
}