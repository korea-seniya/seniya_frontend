/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import {
  pageWrapper,
  nameStyle,
  searchbarStyle,
  selectStyle,
  inputStyle,
  buttonStyle,
  container,
  title,
  infoRow,
  divider,
  imageWrapper,
  commentSection,
  commentInput,
  commentList,
  commentItem,
  timestamp,
  commentAuthor,
  actionRow,
} from './PostDetail.style';

const PostDetailPage = () => {
  const dummyComments = [
    { author: '진창현', content: '와 민지님! 정말 잘하시네요. 한 수 배우고 싶어요!', date: '2025-03-23 13:31' },
    { author: '진우태', content: '저도 룰 시작할까요?', date: '2025-03-20 20:11', edited: true },
  ];
  const [searchType, setSearchType] = useState('title');
  const [searchText, setSearchText] = useState('');

  return (
    <div css={pageWrapper}>
      <h1 css={nameStyle}>게시글</h1>

      <div css={searchbarStyle}>
        <select
          css={selectStyle}
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
        >
          <option value="title">제목</option>
          <option value="content">내용</option>
          <option value="author">작성자</option>
        </select>
        <input
          css={inputStyle}
          type="text"
          placeholder="검색어를 입력해주세요."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button css={buttonStyle}>검색</button>
      </div>

      <div css={container}>
        <h1 css={title}>조민지 솔랭 6연승 인증샷 올립니다. 너무 이지하네요</h1>
        <div css={infoRow}>
          <span><strong>조민지</strong></span>
          <span css={timestamp}>2025.05.28 17:39</span>
        </div>

        <div css={divider} />

        <div css={imageWrapper}>
          <img src="/images/lol-match-sample.png" alt="인증샷" />
        </div>

        <div css={actionRow}>
          <span style={{ cursor: 'pointer', color: '#888' }}>수정</span> | <span style={{ cursor: 'pointer', color: '#888' }}>삭제</span>
        </div>

        <div css={divider} />

        <div css={commentSection}>
          <input css={commentInput} placeholder="댓글을 남겨보세요." />
          <button>등록</button>
          <div css={commentList}>
            {dummyComments.map((c, index) => (
              <div css={commentItem} key={index}>
                <span css={commentAuthor}>{c.author}</span>
                <span>{c.content}</span>
                <span css={timestamp}>
                  {c.date} {c.edited && <span style={{ marginLeft: 4 }}>수정</span>}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetailPage;
