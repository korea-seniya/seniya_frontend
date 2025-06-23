// api/post.ts

import { axiosInstance, responseSuccessHandler, responseErrorHandler, bearerAuthorization } from "../axiosConfig";
import type { AxiosError } from "axios";
import type ResponseDto from "../../dtos/response.dto";
import type { PostListResponseDto } from "../../dtos/post/response/postList.response.dto";
import type { PostDetailResponseDto } from "../../pages/post/PostDetail";
import { POST_LIST_URL, POST_SEARCH_BY_TITLE_URL } from "../constants";

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
  title: string,
  content: string,
  files: File[]
): Promise<ResponseDto<PostDetailResponseDto>> => {
  try {
    const dto = { title, content };
    const formData = new FormData();

    formData.append(
      'data',
      new Blob([JSON.stringify(dto)], { type: 'application/json' })
    );
    files.forEach((file) => formData.append('file', file));

    const token = localStorage.getItem('Authorization');
    if (!token) throw new Error('로그인이 필요합니다.');

    const response = await axiosInstance.post('/api/v1/posts', formData, {
      headers: {
        Authorization: token,
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log('서버 원본 응답:', response);

    const resData = responseSuccessHandler(response);
    console.log('서버 응답 (처리 후):', resData);
    return resData;
  } catch (error: any) {
    console.error('게시글 생성 실패:', error);

    if (error.response) {
      console.error('에러 응답 데이터:', error.response.data);
      console.error('에러 상태 코드:', error.response.status);
    } else {
      console.error('응답이 없음:', error.message);
    }

    throw error;
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

    formData.append('data', new Blob([JSON.stringify(dto)], { type: 'application/json' }));
    files.forEach((file) => formData.append('file', file));

    const token = localStorage.getItem('Authorization');
    if (!token) throw new Error('로그인이 필요합니다.');

    const bearerToken = token.startsWith('Bearer ') ? token : `Bearer ${token}`;

    const response = await axiosInstance.post(`/api/v1/posts/${postId}`, formData, {
      headers: {
        Authorization: bearerToken,
        'Content-Type': 'multipart/form-data',
      },
    });

    console.log('게시글 수정 응답:', response);

    const resData = responseSuccessHandler(response);
    return resData;
  } catch (error: any) {
    console.error('게시글 수정 실패:', error);
    if (error.response) {
      console.error('에러 응답 데이터:', error.response.data);
      console.error('에러 상태 코드:', error.response.status);
    } else {
      console.error('응답이 없음:', error.message);
    }
    throw error;
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