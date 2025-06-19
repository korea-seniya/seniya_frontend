/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import type { PostList } from './PostList';
import {
  nameStyle,
  searchbarStyle,
  selectStyle,
  inputStyle,
  buttonStyle,
  tableWrapper,
  postRow,
  noticeBadge,
  boldTitle,
  postMeta,
  postTitle,
  postNumber,
  postContainer,
  separatorLine,
  postListTotal
} from './PostList.style';
import { getPostList } from '../../apis/post/Post';

function PostListPage() {
  const [posts, setPosts] = useState<PostList[]>([]);
  const [searchType, setSearchType] = useState('title');
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
  const fetchPosts = async () => {
    try {
      const response = await getPostList();

      if (response.data) {
        const mapped = response.data.map((item) => ({
          id: item.postId, 
          title: item.title,
          username: item.username,
          createdAt: item.createdAt,
          notice: false, 
        }));

        setPosts(mapped);
      } else {
        setPosts([]);
      }
    } catch (error) {
      console.error('게시글 불러오기 실패:', error);
    }
  };

  fetchPosts();
}, []);



  return (
    <div css={postContainer}>
      <h1 css={nameStyle}>게시판</h1>

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

      <div css={tableWrapper}>
        <div css={postListTotal}>전체 {posts.length}건</div>
        <div css={separatorLine}></div>

        {posts.map((post) => (
          <div key={post.id} css={postRow}>
            {post.notice ? (
              <>
                <span css={noticeBadge}>공지</span>
                <span css={boldTitle}>{post.title}</span>
              </>
            ) : (
              <>
                <span css={postNumber}>{post.id}</span>
                <span css={postTitle}>{post.title}</span>
              </>
            )}
            <div css={postMeta}>
              <span>🗓 {post.createdAt.slice(0, 10)}</span>
              <span>{post.username}</span>
            </div>
          </div>
        ))}

        <div css={separatorLine}></div>
      </div>
    </div>
  );
}

export default PostListPage;
