/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Cookies from 'js-cookie';

import { getPostDetail } from '../../apis/post/Post';
import { addComment } from '../../apis/comment/Comment';
import { useUserStore } from '../../stores/user.store';

import {
  pageWrapper, nameStyle, container, title, infoRow, divider, imageWrapper,
  commentSection, commentList, commentItem, timestamp, commentAuthor, searchbarStyle, selectStyle, inputStyle,
  buttonStyle, commentButton, commentInput
} from './PostDetail.style';

import type { PostDetailResponseDto } from './PostDetail';
import type { CommentDto } from './CommentDto';

const BACKEND_URL = 'http://localhost:8080';

function PostDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<PostDetailResponseDto | null>(null);
  const [searchType, setSearchType] = useState('title');
  const [searchText, setSearchText] = useState('');
  const [commentText, setCommentText] = useState('');

  const { user, loginUser } = useUserStore();
  const navigate = useNavigate();

  // 유저 복구 + 로그인 체크
  useEffect(() => {
    const userData = Cookies.get('user');

    if (!userData) {
      alert('로그인한 회원만 조회 가능합니다.');
      navigate('/signin');
      return;
    }

    if (!user) {
      try {
        const parsed = JSON.parse(userData);
        loginUser(parsed);
      } catch (err) {
        console.error('쿠키 파싱 실패:', err);
        navigate('/signin');
      }
    }
  }, [user]);

  // 게시글 불러오기
  useEffect(() => {
    const fetchPostDetail = async () => {
      if (!id || !user) return;

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
  }, [id, user]);

  // 🔥 댓글 등록 (DB 저장 포함)
  const handleAddComment = async () => {
    const userData = Cookies.get('user');
    const currentUser = user || (userData ? JSON.parse(userData) : null);

    if (!commentText.trim()) {
      alert('댓글 내용을 입력해주세요.');
      return;
    }

    if (!currentUser || !currentUser.name || !currentUser.token) {
      alert('로그인이 필요합니다.');
      return;
    }

      try {
    await addComment(Number(id), commentText, currentUser.token);

    const updated = await getPostDetail(Number(id));
    if (updated && updated.data) {
      setPost(updated.data);
    }

    setCommentText('');
  } catch (error) {
    console.error('댓글 등록 실패:', error);
    alert('댓글 등록에 실패했습니다.');
  }

  };

  const handleSearch = () => {
    alert(`검색은 구현되지 않았습니다. 입력: ${searchType} - ${searchText}`);
  };

  if (!user) return <div>로그인한 회원만 조회 가능합니다.</div>;
  if (!post) return <div>로딩중...</div>;

  return (
    <div css={pageWrapper}>
      <h1 css={nameStyle} onClick={() => navigate(`/api/v1/posts`)} style={{ cursor: 'pointer' }}>
        게시판
      </h1>

      <div css={searchbarStyle}>
        <select css={selectStyle} value={searchType} onChange={(e) => setSearchType(e.target.value)}>
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
        <button css={buttonStyle} onClick={handleSearch}>검색</button>
      </div>

      <div css={container}>
        <h1 css={title}>{post.title}</h1>
        <div css={infoRow}>
          <span><strong>{post.username}</strong></span>
          <span css={timestamp}>{new Date(post.createdAt).toLocaleString()}</span>
        </div>

        <div css={divider} />

        <div css={imageWrapper}>
          {post.imageUrls?.length ? (
            post.imageUrls.map((url, idx) => (
              <img key={idx} src={`${BACKEND_URL}${url}`} alt={`image-${idx}`} />
            ))
          ) : (
            <p>이미지가 없습니다.</p>
          )}
        </div>

        <div css={divider} />
        <p>{post.content}</p>
        <div css={divider} />

        <div css={commentSection}>
          <input
            css={commentInput}
            placeholder="댓글을 남겨보세요."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
          <button css={commentButton} onClick={handleAddComment}>등록</button>
        </div>

        <div css={commentList}>
          {post.comments?.length ? (
            post.comments.map((comment) => (
              <div css={commentItem} key={comment.commentId}>
                <span css={commentAuthor}>{comment.name}</span>
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

export default PostDetailPage;
