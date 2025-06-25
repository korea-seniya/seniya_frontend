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
  messageStyle,
} from './SignUp.style';

import { signUp } from '../../apis/auth/auth';
import { checkUsername } from '../../apis/auth/CheckUsername';
import { checkEmail } from '../../apis/auth/CheckEmail';

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

  const [usernameMessage, setUsernameMessage] = useState('');
  const [emailMessage, setEmailMessage] = useState('');
  const [isUsernameAvailable, setIsUsernameAvailable] = useState<boolean | null>(null);
  const [isEmailAvailable, setIsEmailAvailable] = useState<boolean | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    if (name === 'username') {
      setUsernameMessage('');
      setIsUsernameAvailable(null);
    }
    if (name === 'email') {
      setEmailMessage('');
      setIsEmailAvailable(null);
    }
  };

  const handleCheckUsername = async () => {
    if (!form.username.trim()) {
      setUsernameMessage('아이디를 입력해주세요.');
      setIsUsernameAvailable(null);
      return;
    }

    try {
      const available = await checkUsername(form.username);
      setIsUsernameAvailable(available);
      setUsernameMessage(available ? '사용 가능한 아이디입니다.' : '이미 사용 중인 아이디입니다.');
    } catch {
      setUsernameMessage('아이디 확인 중 오류가 발생했습니다.');
      setIsUsernameAvailable(null);
    }
  };

  const handleCheckEmail = async () => {
    if (!form.email.trim()) {
      setEmailMessage('이메일을 입력해주세요.');
      setIsEmailAvailable(null);
      return;
    }

    try {
      const available = await checkEmail(form.email);
      setIsEmailAvailable(available);
      setEmailMessage(available ? '사용 가능한 이메일입니다.' : '이미 사용 중인 이메일입니다.');
    } catch {
      setEmailMessage('이메일 확인 중 오류가 발생했습니다.');
      setIsEmailAvailable(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    if (isUsernameAvailable === false) {
      alert('이미 사용 중인 아이디입니다. 다른 아이디를 사용해주세요.');
      return;
    }

    if (isEmailAvailable === false) {
      alert('이미 사용 중인 이메일입니다. 다른 이메일을 사용해주세요.');
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
            placeholder="ID 를 입력해주세요."
            value={form.username}
            onChange={handleChange}
          />
          <button css={buttonStyle} type="button" onClick={handleCheckUsername}>
            중복 확인
          </button>
        </div>
        {usernameMessage && (
          <div css={messageStyle(isUsernameAvailable)}>
            {usernameMessage}
          </div>
        )}

        <div css={fieldGroupStyle}>
          <label css={labelStyle}>비밀번호</label>
          <input
            type="password"
            name="password"
            css={inputStyle}
            placeholder="PW 를 입력해주세요."
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
          <button css={buttonStyle} type="button" onClick={handleCheckEmail}>
            중복 확인
          </button>
        </div>
        {emailMessage && (
          <div css={messageStyle(isEmailAvailable)}>
            {emailMessage}
          </div>
        )}

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
          <button type="button" css={cancelButtonStyle} onClick={() => navigate('/signin')}>
            취소
          </button>
          <button type="submit" css={submitButtonStyle}>
            회원가입
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
