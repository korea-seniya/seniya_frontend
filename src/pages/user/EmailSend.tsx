/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {
  containerStyle,
  titleStyle,
  fieldGroupStyle,
  labelStyle,
  inputStyle,
  buttonWrapperStyle,
  submitButtonStyle,
  secondaryButtonStyle,
  messageStyle,
} from './EmailSend.style';
import { sendVerificationCode } from '../../apis/auth/auth';

function EmailSend() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const verified = searchParams.get('verified') === 'true';
  const token = searchParams.get('token');

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setMessage('');
    setIsSuccess(null);
  };

  const handleSendCode = async () => {
    if (!email.trim()) {
      setMessage('이메일을 입력해주세요.');
      setIsSuccess(false);
      return;
    }

    try {
      await sendVerificationCode(email);
      setMessage('인증 코드가 이메일로 전송되었습니다.');
      setIsSuccess(true);
    } catch (error: any) {
      const errorMsg = (error && error.message) || '인증 코드 전송에 실패했습니다.';
      setMessage(errorMsg);
      setIsSuccess(false);
    }
  };

  const handleGoToResetPassword = () => {
    if (verified && token) {
      navigate(`/reset-password?token=${encodeURIComponent(token)}`);
    } else {
      setMessage('이메일 인증을 먼저 해주세요.');
      setIsSuccess(false);
    }
  };

  return (
    <div css={containerStyle}>
      <h2 css={titleStyle}>비밀번호를 잊어버리셨나요?</h2>
      <p>
        <strong>시니야</strong>에 가입했던 이메일을 입력해주세요. <br />
        이메일 인증 후 비밀번호 재설정이 가능합니다.
      </p>

      <div css={fieldGroupStyle}>
        <label css={labelStyle} htmlFor="email">
          이메일
        </label>
        <input
          id="email"
          name="email"
          css={inputStyle}
          placeholder="이메일"
          value={email}
          onChange={handleChange}
          type="email"
          autoComplete="email"
          required
        />
      </div>

      {message && <div css={messageStyle(isSuccess)}>{message}</div>}

      <div css={buttonWrapperStyle}>
        <button type="button" css={submitButtonStyle} onClick={handleSendCode}>
          인증 코드 보내기
        </button>

        <button
          type="button"
          css={secondaryButtonStyle}
          onClick={handleGoToResetPassword}
        >
          비밀번호 재설정하기
        </button>
      </div>
    </div>
  );
}

export default EmailSend;
