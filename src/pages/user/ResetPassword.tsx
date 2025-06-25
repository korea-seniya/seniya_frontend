/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { resetPassword } from '../../apis/auth/auth'; // API 호출 함수
import Cookies from 'js-cookie'; // 쿠키 사용
import {
  containerStyle,
  titleStyle, 
  labelStyle, 
  fieldGroupStyle,
  inputStyle,
  messageStyle,
  buttonWrapperStyle,
  submitButtonStyle,
  guideTextStyle,
} from './ResetPassword.style';

function ResetPassword() {
  const [params] = useSearchParams();
  const token = params.get('token');
  const emailFromUrl = params.get('email');  // URL에서 이메일 가져오기
  const navigate = useNavigate();

  // 쿠키에서 이메일 가져오기
  const storedEmail = emailFromUrl || Cookies.get('user_email');  // URL이 없으면 쿠키에서 가져옴

  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!token || !storedEmail) {
      setError('원래 페이지로 돌아가서 비밀번호 재설정을 진행해 주세요.');
    }
  }, [token, storedEmail]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(''); // 에러 메시지 초기화
    setSuccess(''); // 성공 메시지 초기화

    if (!token || !storedEmail) {
      setError('유효하지 않은 요청입니다.');
      return;
    }

    if (!password || !passwordConfirm) {
      setError('비밀번호를 입력해주세요.');
      return;
    }

    if (password !== passwordConfirm) {
      setError('비밀번호가 일치하지 않습니다.');
      return;
    }

    setLoading(true); // 로딩 시작
    try {
      // 비밀번호 재설정 API 호출
      await resetPassword({ token, email: storedEmail, newPassword: password, confirmPassword: passwordConfirm });
      setSuccess('비밀번호가 성공적으로 변경되었습니다.');
      setTimeout(() => navigate('/signin'), 2000); // 2초 후 로그인 페이지로 이동
    } catch (error: any) {
      setError(error?.message || '비밀번호 재설정에 실패했습니다.');
    } finally {
      setLoading(false); // 로딩 끝
    }
  };

  return (
    <div css={containerStyle}>
      <h2 css={titleStyle}>비밀번호 재설정</h2>

      <form onSubmit={handleSubmit}>
        <div css={fieldGroupStyle}>
          <label css={labelStyle}>새 비밀번호</label>
          <input
            type="password"
            placeholder="새 비밀번호를 입력해주세요."
            css={inputStyle}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={loading}
          />

          <label css={labelStyle}>새 비밀번호 확인</label>
          <input
            type="password"
            placeholder="비밀번호 확인"
            css={inputStyle}
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            required
            disabled={loading}
          />
        </div>

        <p css={guideTextStyle}>입력하신 새로운 비밀번호로 변경하시겠습니까?</p>

        {error && <div css={messageStyle(false)}>{error}</div>}
        {success && <div css={messageStyle(true)}>{success}</div>}

        <div css={buttonWrapperStyle}>
          <button type="submit" css={submitButtonStyle} disabled={loading || !token}>
            {loading ? '처리중...' : '확인'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ResetPassword;
