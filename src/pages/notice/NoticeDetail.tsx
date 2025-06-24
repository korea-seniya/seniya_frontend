/** @jsxImportSource @emotion/react */
import React from 'react';
import { useParams } from 'react-router-dom';
import { dummyNotices } from './NoticeDummyData';
import { containerStyle, titleStyle } from './NoticeList.style';

function NoticeDetail() {
  const { id } = useParams<{ id: string }>();
  const notice = dummyNotices.find((item) => item.id.toString() === id);

  if (!notice) return <div css={containerStyle}>공지사항을 찾을 수 없습니다.</div>;

  return (
    <div css={containerStyle}>
      <h1 css={titleStyle}>{notice.title}</h1>
      <p><strong>작성자:</strong> {notice.username}</p>
      <p><strong>작성일:</strong> {notice.createdAt}</p>
      <div style={{ marginTop: '1.5rem', fontSize: '1rem' }}>
        {notice.content}
      </div>
    </div>
  );
}

export default NoticeDetail;
