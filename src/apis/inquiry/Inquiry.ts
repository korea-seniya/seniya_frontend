import type { AxiosError } from "axios";

import type { InquiryResponseDto } from "../../dtos/inquiry/response/inquiry.response.dto";
import type ResponseDto from "../../dtos/response.dto";
import { axiosInstance, responseErrorHandler, responseSuccessHandler } from "../axiosConfig";
import { CREATE_INQUIRY_URL } from "../constants";
import type { InquiryRequestDto } from "../../dtos/inquiry/request/inquiry.request.dto";

export const createInquiryRequest = async (dto: InquiryRequestDto): Promise<ResponseDto<InquiryResponseDto>> => {
    try {
      const response = await axiosInstance.post(CREATE_INQUIRY_URL, dto);
      return responseSuccessHandler(response);
    } catch (error) {
      return responseErrorHandler(error as AxiosError<ResponseDto>);
    }
  }