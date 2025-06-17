export interface SignUpForm {
  username: string;
  password: string;
  confirmPassword?: string;
  name?: string;
  email?: string;
  phone?: string;
  agreeToSMS?: boolean;
}

export interface SignInForm {
  username: string;
  password: string;
}

const API_BASE_URL = 'http://localhost:8080/api/v1'; // 백엔드 주소

export async function signUp(form: SignUpForm) {
  const response = await fetch(`${API_BASE_URL}/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || '회원가입 실패');
  }
  return response.json();
}

export async function signIn(form: SignInForm) {
  const response = await fetch(`${API_BASE_URL}/signIn`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || '로그인 실패');
  }
  return response.json();
}
