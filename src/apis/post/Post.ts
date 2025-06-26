// api/post.ts

import { axiosInstance, responseSuccessHandler, responseErrorHandler, bearerAuthorization } from "../axiosConfig";
import type { AxiosError } from "axios";
import Cookies from 'js-cookie';
import type ResponseDto from "../../dtos/response.dto";
import type { PostListResponseDto } from "../../dtos/post/response/postList.response.dto";
import type { PostDetailResponseDto } from "../../pages/post/PostDetail";
import type { PopularPostResponseDto } from "../../dtos/post/response/popularPost.response.dto";
import { POST_LIST_URL, POST_SEARCH_BY_TITLE_URL } from "../constants";

export const getPopularPosts = async (): Promise<ResponseDto<PopularPostResponseDto[]>> => {
  try {
    const response = await axiosInstance.get("/api/v1/posts/popular");
    return responseSuccessHandler(response);
  } catch (error) {
    return responseErrorHandler(error as AxiosError<ResponseDto>);
  }
};

export const getPostList = async (): Promise<ResponseDto<PostListResponseDto[]>> => {
  try {
    const response = await axiosInstance.get(POST_LIST_URL);
    return responseSuccessHandler(response);
  } catch (error) {
    return responseErrorHandler(error as AxiosError<ResponseDto>);
  }
};

export const getPostDetail = async (postId: number): Promise<ResponseDto<PostDetailResponseDto>> => {
  try {
    const response = await axiosInstance.get(`/api/v1/posts/${postId}`);
    return responseSuccessHandler(response);
  } catch (error) {
    return responseErrorHandler(error as AxiosError<ResponseDto>);
  }
};

export const createPost = async (
  dto: { title: string; content: string },
  files?: File[]
): Promise<ResponseDto<PostDetailResponseDto>> => {
  try {
    const formData = new FormData();

    formData.append(
      "data",
      new Blob([JSON.stringify(dto)], { type: "application/json" })
    );

    if (files && files.length > 0) {
      files.forEach((file) => formData.append("file", file));
    }

    const token = Cookies.get("token");
    if (!token) throw new Error("로그인이 필요합니다.");

    const response = await axiosInstance.post("/api/v1/posts", formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return responseSuccessHandler(response);
  } catch (error) {
    return responseErrorHandler(error as AxiosError<ResponseDto>);
  }
};


export const updatePost = async (
  postId: number,
  title: string,
  content: string,
  files: File[]
): Promise<ResponseDto<PostDetailResponseDto>> => {
  try {
    const dto = { title, content };
    const formData = new FormData();

    formData.append("data", new Blob([JSON.stringify(dto)], { type: "application/json" }));
    files.forEach((file) => formData.append("file", file));

    const token = Cookies.get("token");
    if (!token) throw new Error("로그인이 필요합니다.");

    const response = await axiosInstance.post(`/api/v1/posts/${postId}`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });

    return responseSuccessHandler(response);
  } catch (error: any) {
    console.error("게시글 수정 실패:", error);
    if (error.response) {
      console.error("에러 응답 데이터:", error.response.data);
      console.error("에러 상태 코드:", error.response.status);
    } else {
      console.error("응답이 없음:", error.message);
    }
    throw error;
  }
};

export const deletePost = async (postId: number, token: string): Promise<ResponseDto<any>> => {
  try {
    const response = await axiosInstance.delete(`/api/v1/posts/${postId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 204) {
      return {
        code: 'SU',
        message: '게시글 삭제 완료',
        data: null,
      };
    }

    return response.data;
  } catch (error) {
    return {
      code: 'ER',
      message: '게시글 삭제 중 오류 발생',
      data: null,
    };
  }
};





export const searchPosts = async (title: string): Promise<ResponseDto<PostListResponseDto[]>> => {
  try {
    const response = await axiosInstance.get(`/api/v1/posts/search-by-title`, {
      params: { title },
    });
    return responseSuccessHandler(response);
  } catch (error) {
    return responseErrorHandler(error as AxiosError<ResponseDto>);
  }
};

export const searchPostsByRole = async (roleName: string): Promise<ResponseDto<PostListResponseDto[]>> => {
  try {
    const response = await axiosInstance.get('/api/v1/posts/search-by-role', {
      params: { roleName },
    });
    return responseSuccessHandler(response);
  } catch (error) {
    return responseErrorHandler(error as AxiosError<ResponseDto>);
  }
};