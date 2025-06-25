/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Cookies from 'js-cookie';

import Header from '../../components/header'; 

import { useUserStore } from '../../stores/user.store';
import type { PostList } from './PostList';

import {
  nameStyle, searchbarStyle, selectStyle, inputStyle, buttonStyle, tableWrapper,
  postRow, noticeBadge, boldTitle, postMeta, postNumber, postContainer, separatorLine, postListTotal
} from './PostList.style';

import { getPostList, searchPosts, searchPostsByRole } from '../../apis/post/Post';

function PostListPage() {
  const [posts, setPosts] = useState<PostList[]>([]);
  const [searchType, setSearchType] = useState('title');
  const [searchText, setSearchText] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const { user, loginUser } = useUserStore();

  useEffect(() => {
    const userData = Cookies.get('user');

    if (!userData) {
      alert('로그인이 필요합니다.');
      navigate('/signin');
      return;
    }

    try {
      const parsed = JSON.parse(userData);
      if (!user) loginUser(parsed);
      fetchPosts(parsed);
    } catch (err) {
      console.error('[PostListPage] 쿠키 파싱 실패:', err);
      navigate('/signin');
    }
  }, [searchParams]);

  const convertRoleName = (input: string): string => {
    const roleMap: Record<string, string> = {
      관리자: 'ADMIN', 회원: 'USER', 사용자: 'USER', 트레이너: 'TRAINER',
      admin: 'ADMIN', user: 'USER', trainer: 'TRAINER',
      ADMIN: 'ADMIN', USER: 'USER', TRAINER: 'TRAINER'
    };
    return roleMap[input.trim().toLowerCase()] || input.toUpperCase();
  };

  const fetchPosts = async (parsedUser: any) => {
    const keyword = searchParams.get('keyword') || '';
    const type = searchParams.get('type') || 'title';

    setSearchType(type);
    setSearchText(keyword);

    if (keyword.trim() === '') {
      await fetchAllPosts();
    } else {
      if (type === 'role') {
        await fetchPostsByRole(keyword);
      } else {
        await fetchSearchedPosts(keyword);
      }
    }
  };

  const fetchAllPosts = async () => {
    try {
      const response = await getPostList();
      if (response.data) {
        const mapped = response.data.map(item => ({
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

  const fetchSearchedPosts = async (keyword: string) => {
    try {
      const response = await searchPosts(keyword);
      if (response.data) {
        const mapped = response.data.map(item => ({
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
      console.error('검색 실패:', error);
      setPosts([]);
    }
  };

  const fetchPostsByRole = async (roleInput: string) => {
    try {
      const roleName = convertRoleName(roleInput);
      const response = await searchPostsByRole(roleName);
      if (response.data) {
        const mapped = response.data.map(item => ({
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
      console.error('권한별 검색 실패:', error);
      setPosts([]);
    }
  };

  const handleSearch = () => {
    if (searchText.trim() === '') {
      searchParams.delete('keyword');
      searchParams.delete('type');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ keyword: searchText, type: searchType });
    }
  };

  if (!user) return <div>로그인한 회원만 접근할 수 있습니다.</div>;

  return (
    <>
      <Header />
      <div css={postContainer}>
        <h1 css={nameStyle}>게시판</h1>

        <div css={searchbarStyle}>
          <select css={selectStyle} value={searchType} onChange={(e) => setSearchType(e.target.value)}>
            <option value="title">제목</option>
            <option value="role">권한</option>
          </select>
          <input
            css={inputStyle}
            type="text"
            placeholder="검색어를 입력해주세요."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') handleSearch(); }}
          />
          <button css={buttonStyle} onClick={handleSearch}>검색</button>
        </div>

        <div css={tableWrapper}>
          <div css={postListTotal}>전체 {posts.length}건</div>
          <div css={separatorLine}></div>

          {posts.map(post => (
            <div key={post.id} css={postRow}>
              {post.notice ? (
                <>
                  <span css={noticeBadge}></span>
                  <span css={boldTitle}>{post.title}</span>
                </>
              ) : (
                <>
                  <span css={postNumber}>{post.id}</span>
                  <span
                    css={boldTitle}
                    onClick={() => navigate(`/api/v1/posts/${post.id}`)}
                    style={{ cursor: 'pointer' }}
                  >
                    {post.title}
                  </span>
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
    </>
  );
}

export default PostListPage;
