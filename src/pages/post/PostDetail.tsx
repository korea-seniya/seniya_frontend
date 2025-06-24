/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPostDetail } from '../../apis/post/Post';
import {
  pageWrapper, nameStyle, container, title, infoRow, divider, imageWrapper,
  commentSection, commentList, commentItem, timestamp, commentAuthor, searchbarStyle,
  selectStyle, inputStyle, buttonStyle, commentInput, commentButton
} from './PostDetail.style';
import type { PostDetailResponseDto } from './PostDetail';

import { userUserStore } from '../../stores/user.store';
import { userAuthStore } from '../../stores/auth.store';

const BACKEND_URL = 'http://localhost:8080';

function PostDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const isLogin = userAuthStore((state) => state.isLogin);
  const user = userUserStore((state) => state.user);

  const [post, setPost] = useState<PostDetailResponseDto | null>(null);
  const [searchType, setSearchType] = useState('title');
  const [searchText, setSearchText] = useState('');
  const [commentText, setCommentText] = useState('');

  
  useEffect(() => {
    if (!isLogin || !user) {
      alert('로그인이 필요합니다.');
      navigate('/signin');
    }
  }, [isLogin, user, navigate]);

  useEffect(() => {
    const fetchPostDetail = async () => {
      if (!id) return;
      try {
        const response = await getPostDetail(Number(id));
        if (response.data) {
          setPost(response.data);
        }
      } catch (error) {
        console.error('게시글 조회 실패:', error);
      }
    };
    fetchPostDetail();
  }, [id]);

  const handleAddComment = () => {
    if (!commentText.trim()) return;

    const newComment = {
      commentId: Date.now(),
      username: user?.username || '익명',
      content: commentText,
      createdAt: new Date().toISOString(),
    };

    setPost((prev) =>
      prev ? { ...prev, comments: [...(prev.comments || []), newComment] } : prev
    );
    setCommentText('');
  };

  if (!post) return <div>로딩중...</div>;

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
        <h1 css={title}>{post.title}</h1>
        <div css={infoRow}>
          <span>
            <strong>{post.username}</strong>
          </span>
          <span css={timestamp}>{new Date(post.createdAt).toLocaleString()}</span>
        </div>

        <div css={divider} />

        <div css={imageWrapper}>
          {post.imageUrls && post.imageUrls.length > 0 ? (
            post.imageUrls.map((url: string, idx: number) => (
              <img
                key={idx}
                src={`${BACKEND_URL}${url}`}
                alt={`image-${idx}`}
              />
            ))
          ) : (
            <p>이미지가 없습니다.</p>
          )}
        </div>

        <div css={divider} />

        <div>
          <p>{post.content}</p>
        </div>

        <div css={divider} />

        <div css={commentSection}>
          <input
            css={commentInput}
            placeholder="댓글을 남겨보세요."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
          <button css={commentButton} onClick={handleAddComment}>
            등록
          </button>
        </div>

        <div css={commentList}>
          {post.comments && post.comments.length > 0 ? (
            post.comments.map((comment) => (
              <div css={commentItem} key={comment.commentId}>
                <span css={commentAuthor}>{comment.username}</span>
                <span>{comment.content}</span>
                <span css={timestamp}>{new Date(comment.createdAt).toLocaleString()}</span>
              </div>
            ))
          ) : (
            <p>댓글이 없습니다.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default PostDetail;
