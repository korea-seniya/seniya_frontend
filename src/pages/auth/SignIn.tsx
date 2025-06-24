/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  containerStyle,
  cardStyle,
  leftStyle,
  rightStyle,
  titleStyle,
  inputWrapperStyle,
  iconStyle,
  inputStyle,
  loginButtonStyle,
  signUpButtonStyle
} from './SignIn.style';

import { signIn } from '../../apis/auth/auth';
import { useUserStore } from '../../stores/user.store';

function SignIn() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: '', password: '' });

  const loginUser = useUserStore((state) => state.loginUser);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (!form.username || !form.password) {
      alert('아이디와 비밀번호를 모두 입력해주세요.');
      return;
    }

    try {
      const data = await signIn(form);

      console.log('로그인 응답:', data);

      loginUser({
        username: data.username,
        role_id: data.roleId,
        token: data.token,
        exprTime: data.exprTime
      });

      alert('로그인 성공!');
      navigate('/');
    } catch (err: any) {
      alert(err.message || '로그인 실패');
    }
  };

  return (
    <div css={containerStyle}>
      <div css={cardStyle}>
        <div css={leftStyle}>SNS 로그인</div>
        <div css={rightStyle}>
          <h2 css={titleStyle}>로그인</h2>

          <div css={inputWrapperStyle}>
            <span css={iconStyle}></span>
            <input
              type="text"
              name="username"
              placeholder="아이디 입력"
              css={inputStyle}
              value={form.username}
              onChange={handleChange}
            />
          </div>

          <div css={inputWrapperStyle}>
            <span css={iconStyle}></span>
            <input
              type="password"
              name="password"
              placeholder="비밀번호 입력"
              css={inputStyle}
              value={form.password}
              onChange={handleChange}
            />
          </div>

          <button css={loginButtonStyle} onClick={handleSubmit}>로그인</button>
          <button css={signUpButtonStyle} onClick={() => navigate('/signup')}>회원가입</button>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
