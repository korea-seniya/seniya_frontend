import type { Course } from "../../../types/course.type";

export interface GetUserDetailResponseDto {
  name: string;
  phone: string;
  roleName: string;
  totalAmount: number;
  totalCouponCount: number;
  availableCouponCount: number;
  courses: Course[];// 지금은 null임
}