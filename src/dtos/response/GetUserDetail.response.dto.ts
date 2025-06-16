export interface GetUserDetailResponseDto {
  name: string;
  phone: string;
  roleName: string;
  totalAmount: number;
  totalCouponCount: number;
  availableCouponCount: number;
  courses: any;// 지금은 null임
}