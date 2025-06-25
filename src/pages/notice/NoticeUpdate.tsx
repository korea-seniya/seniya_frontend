/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { axiosInstance } from '../../apis/axiosConfig';
import Header from '../../components/header'; 

import {
  containerStyle,
  titleStyle,
  labelStyle,
  inputStyle,
  buttonStyle,
  contentStyle,
  divStyle,
  buttonWrapperStyle,
} from './NoticeUpdate.style';

import { useUserStore } from '../../stores/user.store';

function NoticeUpdate() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const user = useUserStore((state) => state.user);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (!user || user.role_id !== 1) {
      alert('관리자만 접근할 수 있습니다.');
      navigate('/');
      return;
    }

    axiosInstance.get(`/api/v1/notices/${id}`)
      .then((res) => {
        const notice = res.data.data;
        setTitle(notice.title);
        setContent(notice.content);
      })
      .catch((err) => {
        console.error('공지 불러오기 실패:', err);
        alert('공지 불러오기 실패');
        navigate('/notices');
      });
  }, [id, user, navigate]);

  const handleUpdate = () => {
    if (!title.trim() || !content.trim()) {
      alert('제목과 내용을 모두 입력해주세요.');
      return;
    }

    axiosInstance.put(`/api/v1/notices/${id}`, {
      title,
      content,
    })
      .then(() => {
        alert('공지사항이 수정되었습니다.');
        navigate(`/notices/${id}`);
      })
      .catch((err) => {
        console.error('공지 수정 실패:', err);
        alert('수정에 실패했습니다.');
      });
  };

  return (
    <>
      <Header />
      <div css={containerStyle}>
        <h1 css={titleStyle}>공지 수정</h1>

        <div css={divStyle}>
          <label css={labelStyle}>제목 :</label>
          <input
            css={inputStyle}
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="제목을 입력하세요"
          />
        </div>

        <textarea
          css={contentStyle}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="공지사항 내용을 입력해주세요"
        ></textarea>

        <div css={buttonWrapperStyle}>
          <button css={buttonStyle} onClick={handleUpdate}>수정완료</button>
          <button css={buttonStyle} onClick={() => navigate(-1)}>취소</button>
        </div>
      </div>
    </>
  );
}

export default NoticeUpdate;
