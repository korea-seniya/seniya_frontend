import type { AxiosError } from "axios";

import type { InquiryResponseDto } from "../../dtos/inquiry/response/inquiry.response.dto";
import type ResponseDto from "../../dtos/response.dto";
import {
  axiosInstance,
  responseErrorHandler,
  responseSuccessHandler,
} from "../axiosConfig";
import {
  ANSWER_INQUIRY_URL,
  CREATE_INQUIRY_URL,
  DELETE_INQUIRY_URL,
  GET_ALL_INQUIRY_URL,
  GET_INQUIRY_DETAIL_URL,
  PUT_INQUIRY_URL,
} from "../constants";
import type { InquiryRequestDto } from "../../dtos/inquiry/request/inquiry.request.dto";
import type { AllInquiryResponseDto } from "../../dtos/inquiry/response/inquiryList.response.dto";
import type { InquriyByIdResponseDto } from "../../dtos/inquiry/response/inquiryDetail.response";
import type { InquiryAnswerRequestDto } from "../../dtos/inquiry/request/answer.request.dto";

export const tmp = "";

function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
  return match ? decodeURIComponent(match[2]) : null;
}

export const createInquiryRequest = async (
  dto: InquiryRequestDto
): Promise<ResponseDto<InquiryResponseDto>> => {
  try {
    const token = getCookie("token");
    const response = await axiosInstance.post(CREATE_INQUIRY_URL, dto, {
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
      withCredentials: true,
    });
    return responseSuccessHandler(response);
  } catch (error) {
    return responseErrorHandler(error as AxiosError<ResponseDto>);
  }
};

export const getAllInquiriesRequest = async (): Promise<
  ResponseDto<AllInquiryResponseDto[]>
> => {
  try {
    const token = getCookie("token");
    const response = await axiosInstance.get(GET_ALL_INQUIRY_URL);
    return responseSuccessHandler(response);
  } catch (error) {
    return responseErrorHandler(error as AxiosError<ResponseDto>);
  }
};

export const getInquiryDetailRequest = async (
  id: number
): Promise<ResponseDto<InquriyByIdResponseDto>> => {
  try {
    const token = getCookie("token");
    const response = await axiosInstance.get(GET_INQUIRY_DETAIL_URL(id), {
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
      withCredentials: true,
    });
    return responseSuccessHandler(response);
  } catch (error) {
    return responseErrorHandler(error as AxiosError<ResponseDto>);
  }
};

export const updateInquiryRequest = async (
  id: number,
  dto: InquiryRequestDto
): Promise<ResponseDto<InquiryResponseDto>> => {
  try {
    const token = getCookie("token");
    const response = await axiosInstance.put(PUT_INQUIRY_URL(id), dto, {
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
      withCredentials: true,
    });
    return responseSuccessHandler(response);
  } catch (error) {
    return responseErrorHandler(error as AxiosError<ResponseDto>);
  }
};

export const deleteInquiryRequest = async (
  id: number
): Promise<ResponseDto<void>> => {
  try {
    const token = getCookie("token");
    const response = await axiosInstance.delete(DELETE_INQUIRY_URL(id), {
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
      withCredentials: true,
    });
    return responseSuccessHandler(response);
  } catch (error) {
    return responseErrorHandler(error as AxiosError<ResponseDto>);
  }
};

export const inquiryAnswerRequest = async (
  id: number,
  dto: InquiryAnswerRequestDto
): Promise<ResponseDto<InquriyByIdResponseDto>> => {
  try {
    const token = getCookie("token");
    const response = await axiosInstance.put(ANSWER_INQUIRY_URL(id), dto, {
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
      withCredentials: true,
    });
    return responseSuccessHandler(response);
  } catch (error) {
    return responseErrorHandler(error as AxiosError<ResponseDto>);
  }
};
