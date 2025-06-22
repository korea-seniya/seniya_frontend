// src/api/auth.ts

import axios from 'axios';

// 백엔드 기본 URL
const API_BASE_URL = 'http://localhost:8080/api/v1/auth';

// 회원가입 폼 타입
export interface SignUpForm {
  username: string;
  password: string;
  confirmPassword?: string;
  name?: string;
  email?: string;
  phone?: string;
  agreeToSMS?: boolean;
}

// 로그인 폼 타입
export interface SignInForm {
  username: string;
  password: string;
}

// 비밀번호 재설정 폼 타입
export interface ResetPasswordForm {
  token: string;
  newPassword: string;
}

// 회원가입 API
export async function signUp(form: SignUpForm) {
  try {
    const response = await axios.post(`${API_BASE_URL}/signup`, form);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || '회원가입 실패');
  }
}

// 로그인 API
export async function signIn(form: SignInForm) {
  try {
    const response = await axios.post(`${API_BASE_URL}/signin`, form);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || '로그인 실패');
  }
}

// 이메일 인증 코드 전송 API
export async function sendVerificationCode(email: string): Promise<void> {
  try {
    await axios.post(`${API_BASE_URL}/email`, { email });
  } catch (error: any) {
    throw new Error(error.response?.data?.message || '인증 코드 전송 실패');
  }
}

// 비밀번호 재설정 API
export async function resetPassword(form: ResetPasswordForm) {
  try {
    const response = await axios.put(`${API_BASE_URL}/reset-password`, form);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || '비밀번호 재설정 실패');
  }
}
