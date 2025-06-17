import type { AxiosError } from "axios";

import type { InquiryResponseDto } from "../../dtos/inquiry/response/inquiry.response.dto";
import type ResponseDto from "../../dtos/response.dto";
import {
  axiosInstance,
  bearerAuthorization,
  responseErrorHandler,
  responseSuccessHandler,
} from "../axiosConfig";
import { CREATE_INQUIRY_URL, GET_ALL_INQUIRY_URL } from "../constants";
import type { InquiryRequestDto } from "../../dtos/inquiry/request/inquiry.request.dto";
import type { AllInquiryResponseDto } from "../../dtos/inquiry/response/inquiryList.response.dto";

export const createInquiryRequest = async (
  dto: InquiryRequestDto
): Promise<ResponseDto<InquiryResponseDto>> => {
  try {
    const response = await axiosInstance.post(CREATE_INQUIRY_URL, dto, {
      headers: {
        Authorization: localStorage.getItem('Authorization'),
      },
    });
    return responseSuccessHandler(response);
  } catch (error) {
    return responseErrorHandler(error as AxiosError<ResponseDto>);
  }
};

export const getAllInquiriesRequest = async (): Promise<ResponseDto<AllInquiryResponseDto[]>> => {
  try {
    const response = await axiosInstance.get(GET_ALL_INQUIRY_URL);
    return responseSuccessHandler(response);
  } catch (error) {
    return responseErrorHandler(error as AxiosError<ResponseDto>)
  }
};
