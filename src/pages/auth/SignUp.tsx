/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  containerStyle,
  titleStyle,
  fieldGroupStyle,
  labelStyle,
  inputStyle,
  buttonStyle,
  checkboxWrapperStyle,
  buttonWrapperStyle,
  cancelButtonStyle,
  submitButtonStyle,
} from './SignUp.style';

// 경로 맞게 수정된 회원가입 API 함수 import
import { signUp } from '../../apis/auth/auth';

function SignUp() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    name: '',
    email: '',
    phone: '',
    agreeToSMS: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    try {
      const data = await signUp(form);
      console.log('회원가입 성공:', data);
      alert('회원가입이 완료되었습니다! 로그인 페이지로 이동합니다.');
      navigate('/signin');
    } catch (error: any) {
      alert(error.message || '회원가입 실패');
    }
  };

  return (
    <div css={containerStyle}>
      <h2 css={titleStyle}>회원가입</h2>

      <form onSubmit={handleSubmit}>
        <div css={fieldGroupStyle}>
          <label css={labelStyle}>아이디</label>
          <input
            name="username"
            css={inputStyle}
            placeholder="ID를 입력해주세요."
            value={form.username}
            onChange={handleChange}
          />
          <button css={buttonStyle} type="button">중복 확인</button>
        </div>

        <div css={fieldGroupStyle}>
          <label css={labelStyle}>비밀번호</label>
          <input
            type="password"
            name="password"
            css={inputStyle}
            placeholder="PW를 입력해주세요."
            value={form.password}
            onChange={handleChange}
          />
        </div>

        <div css={fieldGroupStyle}>
          <label css={labelStyle}>비밀번호 확인</label>
          <input
            type="password"
            name="confirmPassword"
            css={inputStyle}
            value={form.confirmPassword}
            onChange={handleChange}
          />
        </div>

        <div css={fieldGroupStyle}>
          <label css={labelStyle}>이름</label>
          <input
            name="name"
            css={inputStyle}
            value={form.name}
            onChange={handleChange}
          />
        </div>

        <div css={fieldGroupStyle}>
          <label css={labelStyle}>이메일</label>
          <input
            name="email"
            css={inputStyle}
            value={form.email}
            onChange={handleChange}
          />
          <button css={buttonStyle} type="button">중복 확인</button>
        </div>

        <div css={fieldGroupStyle}>
          <label css={labelStyle}>휴대폰 번호</label>
          <input
            name="phone"
            css={inputStyle}
            placeholder="- 없이 입력하세요."
            value={form.phone}
            onChange={handleChange}
          />
        </div>

        <div css={checkboxWrapperStyle}>
          <input
            type="checkbox"
            name="agreeToSMS"
            checked={form.agreeToSMS}
            onChange={handleChange}
          />
          <label htmlFor="agreeToSMS">정보/이벤트 SNS 수신에 동의합니다.</label>
        </div>

        <div css={buttonWrapperStyle}>
          <button
            type="button"
            css={cancelButtonStyle}
            onClick={() => navigate('/signin')}
          >
            취소
          </button>
          <button type="submit" css={submitButtonStyle}>회원가입</button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
