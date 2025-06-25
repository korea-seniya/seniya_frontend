/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { sendVerificationCode, checkEmailVerified } from '../../apis/auth/auth';
import { useUserStore } from '../../stores/user.store';
import Cookies from 'js-cookie';
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

import Header from '../../components/header';

function EmailSend() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const { user } = useUserStore();
  const storedEmail = user?.username || Cookies.get('user_email');

  const [email, setEmail] = useState(storedEmail || '');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  useEffect(() => {
    const queryEmail = searchParams.get('email');
    const verifiedQuery = searchParams.get('verified');

    if (queryEmail) setEmail(queryEmail);
    if (verifiedQuery === 'true') {
      setMessage('이메일 인증이 완료되었습니다. 아래 버튼을 눌러 비밀번호를 재설정하세요.');
      setIsSuccess(true);
    }
  }, [searchParams]);

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
      setMessage(error?.message || '인증 코드 전송에 실패했습니다.');
      setIsSuccess(false);
    }
  };

  const handleGoToResetPassword = async () => {
    if (!email.trim()) {
      setMessage('먼저 이메일을 입력해주세요.');
      setIsSuccess(false);
      return;
    }

    try {
      const verified = await checkEmailVerified(email);
      if (!verified) {
        setMessage('이메일 인증을 먼저 해주세요.');
        setIsSuccess(false);
        return;
      }
      const token = encodeURIComponent(email); // email을 기반으로 token 생성
      navigate(`/users/me/password-reset?token=${token}&email=${email}`);
    } catch (error) {
      setMessage('이메일 인증 확인 중 오류가 발생했습니다.');
      setIsSuccess(false);
    }
  };

  return (
    <>
      <Header />
      <div css={containerStyle}>
        <h2 css={titleStyle}>비밀번호를 잊어버리셨나요?</h2>
        <p>
          <strong>시니야</strong>에 가입했던 이메일을 입력해주세요. <br />
          이메일 인증 후 비밀번호 재설정이 가능합니다.
        </p>

        <div css={fieldGroupStyle}>
          <label css={labelStyle} htmlFor="email">이메일</label>
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

          <button type="button" css={secondaryButtonStyle} onClick={handleGoToResetPassword}>
            비밀번호 재설정하기
          </button>
        </div>
      </div>
    </>
  );
}

export default EmailSend;
