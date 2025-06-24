/** @jsxImportSource @emotion/react */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  containerStyle,
  titleStyle,
  labelStyle,
  inputStyle,
  buttonStyle,
  contentStyle,
  divStyle,
  buttonWrapperStyle
} from './NoticeUpdate.style';

import { useUserStore } from '../../stores/user.store';
import { userAuthStore } from '../../stores/auth.store';

function NoticeUpdate() {
  const navigate = useNavigate();
  const isLogin = userAuthStore((state) => state.isLogin);
  const user = useUserStore((state) => state.user);

  useEffect(() => {
    if (!isLogin || !user || user.role_id !== 1) {
      alert('관리자만 접근할 수 있습니다.');
      navigate('/');
    }
  }, [isLogin, user, navigate]);

  return (
    <div css={containerStyle}>
      <h1 css={titleStyle}>공지 수정</h1>

      <div css={divStyle}>
        <label css={labelStyle}>제목</label>
        <input
          css={inputStyle}
          type="text"
          placeholder="제목을 입력하세요"
        />
      </div>

      <textarea
        css={contentStyle}
        placeholder="공지사항 내용을 입력해주세요"
      ></textarea>

      <div css={buttonWrapperStyle}>
        <button css={buttonStyle}>작성완료</button>
        <button css={buttonStyle}>취소</button>
      </div>
    </div>
  );
}

export default NoticeUpdate;
