import type { AxiosError } from "axios";
import type ResponseDto from "../../dtos/response.dto";
import { axiosInstance, responseErrorHandler, responseSuccessHandler } from "../axiosConfig";
import type { PaymentResponseDto } from "../../dtos/payment/response/Payment.response.dto";
import { PAYMENT_CONFIRM_URL, PAYMENT_LIST_URL, PAYMENT_REQUEST_URL } from "../constants";
import type { CreatePaymentRequestDto } from "../../dtos/payment/request/CreatePayment.request.dto";
import type { GetPaymentListResponseDto } from "../../dtos/payment/response/GetPaymentList.response.dto";

export const tmp = '';

function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
  return match ? decodeURIComponent(match[2]) : null;
}

// export const createPayment = async (dto: CreatePaymentRequestDto): Promise<ResponseDto<PaymentResponseDto>> => {
//   try {
//     const response = await axiosInstance.post(PAYMENT_REQUEST_URL, dto, {
//       // headers: {
//       //   Authorization: localStorage.getItem('Authorization'),
//       // },
//       headers: {
//         Authorization: 'token',
//       },
//       withCredentials: true,
//     });
//     console.log(response);
//     return responseSuccessHandler(response);
//   } catch (error) {
//     return responseErrorHandler(error as AxiosError<ResponseDto>);
//   }
// }

export const createPayment = async (dto: CreatePaymentRequestDto): Promise<ResponseDto<PaymentResponseDto>> => {
  try {
    const token = getCookie('token'); // 실제 쿠키 값
    const response = await axiosInstance.post(PAYMENT_REQUEST_URL, dto, {
      headers: {
        Authorization: token ? `Bearer ${token}` : '',
      },
      withCredentials: true,
    });
    return responseSuccessHandler(response);
  } catch (error) {
    return responseErrorHandler(error as AxiosError<ResponseDto>);
  }
}

export const getPaymentList = async (): Promise<ResponseDto<GetPaymentListResponseDto[]>> => {
  try {
    const response = await axiosInstance.get(PAYMENT_LIST_URL);
    return responseSuccessHandler(response);
  } catch (error) {
    return responseErrorHandler(error as AxiosError<ResponseDto>);
  }
}

export const confirmPayment = async (id: number, dto: ConfirmPaymentRequestDto): Promise<ResponseDto<PaymentResponseDto>> => {
  try {
    const response = await axiosInstance.put(PAYMENT_CONFIRM_URL + "/" + `${id}`, dto);
    return responseSuccessHandler(response);
  } catch (error) {
    return responseErrorHandler(error as AxiosError<ResponseDto>);
  }
}