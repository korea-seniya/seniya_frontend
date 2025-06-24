/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  containerStyle,
  titleStyle,
  labelStyle,
  inputStyle,
  buttonStyle,
  contentStyle,
  divStyle,
  buttonWrapperStyle,
} from './NoticeCreate.style';

import { useUserStore } from '../../stores/user.store';

function NoticeCreate() {
  const navigate = useNavigate();
  const { isLogin, user } = useUserStore();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (!isLogin || !user || user.role_id !== 1) {
      alert('관리자만 접근할 수 있습니다.');
      navigate('/');
    }
  }, [isLogin, user, navigate]);

  const handleSubmit = async () => {
    if (!title.trim() || !content.trim()) {
      alert('제목과 내용을 모두 입력해주세요.');
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/api/v1/notices', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          content,
          username: user?.username || '관리자',
        }),
      });

      if (!response.ok) throw new Error('등록 실패');

      alert('공지사항이 등록되었습니다.');
      navigate('/notices');
    } catch (error) {
      console.error(error);
      alert('공지사항 등록 중 오류가 발생했습니다.');
    }
  };

  const handleCancel = () => {
    if (window.confirm('작성을 취소하시겠습니까?')) {
      navigate('/notices');
    }
  };

  return (
    <div css={containerStyle}>
      <h1 css={titleStyle}>공지 작성</h1>

      <div css={divStyle}>
        <label css={labelStyle}>제목</label>
        <input
          css={inputStyle}
          type="text"
          placeholder="제목을 입력하세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <textarea
        css={contentStyle}
        placeholder="공지사항 내용을 입력해주세요"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <div css={buttonWrapperStyle}>
        <button css={buttonStyle} onClick={handleSubmit}>등록</button>
        <button css={buttonStyle} onClick={handleCancel}>취소</button>
      </div>
    </div>
  );
}

export default NoticeCreate;
