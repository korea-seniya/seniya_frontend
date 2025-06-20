import type { AxiosError } from "axios";
import type ResponseDto from "../../dtos/response.dto";
import { axiosInstance, responseErrorHandler, responseSuccessHandler } from "../axiosConfig";
import type { PaymentResponseDto } from "../../dtos/payment/response/Payment.response.dto";
import { PAYMENT_CONFIRM_URL, PAYMENT_LIST_URL, PAYMENT_REQUEST_URL } from "../constants";
import type { CreatePaymentRequestDto } from "../../dtos/payment/request/CreatePayment.request.dto";
import type { GetPaymentListResponseDto } from "../../dtos/payment/response/GetPaymentList.response.dto";

export const tmp = '';

export const createPayment = async (dto: CreatePaymentRequestDto): Promise<ResponseDto<PaymentResponseDto>> => {
  try {
    const response = await axiosInstance.post(PAYMENT_REQUEST_URL, dto, {
      headers: {
        Authorization: localStorage.getItem('Authorization'),
      },
    });
    console.log(response);
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