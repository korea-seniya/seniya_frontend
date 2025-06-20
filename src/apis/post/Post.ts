import { axiosInstance, responseSuccessHandler, responseErrorHandler, bearerAuthorization } from "../axiosConfig";
import type { AxiosError } from "axios";
import type { PostListResponseDto } from "../../dtos/post/response/postList.response.dto";
import { POST_LIST_URL } from "../constants";
import type ResponseDto from "../../dtos/response.dto";
import type { PostDetailResponseDto } from "../../pages/post/PostDetail";

// 게시글 전체 조회 (비로그인 사용자도 조회 가능하므로 Authorization 없이 요청)
export const getPostList = async (): Promise<ResponseDto<PostListResponseDto[]>> => {
  try {
    const response = await axiosInstance.get(POST_LIST_URL);
    return responseSuccessHandler(response);
  } catch (error) {
    return responseErrorHandler(error as AxiosError<ResponseDto>);
  }
}

  export const getPostDetail = async (postId: number): Promise<ResponseDto<PostDetailResponseDto>> => {
  try {
    const response = await axiosInstance.get(`/api/v1/posts/${postId}`);
    return responseSuccessHandler(response);
  } catch (error) {
    return responseErrorHandler(error as AxiosError<ResponseDto>);
  }
}