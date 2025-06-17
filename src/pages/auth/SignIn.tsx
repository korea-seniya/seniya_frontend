/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  loginContainerStyle,
  loginTitleStyle,
  loginWrapperStyle,
  snsLoginStyle,
  formWrapperStyle,
  inputGroupStyle,
  inputStyle,
  loginButtonStyle,
  signUpButtonStyle,
} from './SignIn.style';

// 경로에 맞게 수정하세요
import { signIn } from '../../apis/auth/auth';

function SignIn() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const data = await signIn(form);
      console.log('로그인 성공:', data);
      alert('로그인 성공! 메인 화면으로 이동합니다.');
      // 로그인 성공 후 이동할 경로 수정 가능
      navigate('/dashboard');
    } catch (error: any) {
      alert(error.message || '로그인 실패');
    }
  };

  return (
    <div css={loginContainerStyle}>
      <h2 css={loginTitleStyle}>로그인</h2>
      <div css={loginWrapperStyle}>
        <div css={snsLoginStyle}>
          <p>SNS 로그인</p>
          {/* SNS 로그인 버튼들 (카카오, 네이버 등) 추가 가능 */}
        </div>

        <div css={formWrapperStyle}>
          <form onSubmit={handleSubmit}>
            <div css={inputGroupStyle}>
              <input
                type="text"
                name="username"
                css={inputStyle}
                placeholder="아이디 입력"
                value={form.username}
                onChange={handleChange}
              />
            </div>

            <div css={inputGroupStyle}>
              <input
                type="password"
                name="password"
                css={inputStyle}
                placeholder="비밀번호 입력"
                value={form.password}
                onChange={handleChange}
              />
            </div>

            <button type="submit" css={loginButtonStyle}>
              로그인
            </button>
            <button
              type="button"
              css={signUpButtonStyle}
              onClick={() => navigate('/api/v1/signup')}
            >
              회원가입
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
