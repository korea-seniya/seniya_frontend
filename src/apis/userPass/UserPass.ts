import type { AxiosError } from "axios";
import type ResponseDto from "../../dtos/response.dto";
import type { PassResponseDto } from "../../dtos/userPass/response/Pass.response.dto";
import { axiosInstance, responseErrorHandler, responseSuccessHandler } from "../axiosConfig";
import { USER_PASS_URL } from "../constants";

function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
  return match ? decodeURIComponent(match[2]) : null;
}

export const UserPass = async (): Promise<ResponseDto<PassResponseDto[]>> => {
  try {
    const token = getCookie("token");
    const response = await axiosInstance.get(USER_PASS_URL,
      {
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
        },
        withCredentials: true,
      }
    );
    return responseSuccessHandler(response);
  } catch (error) {
    return responseErrorHandler(error as AxiosError<ResponseDto>);
  }
};