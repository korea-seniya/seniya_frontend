/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import {
  nameStyle,
  searchbarStyle
} from './PostList.style';
import type { PostList } from './PostList';
import { dummyPosts } from './PostDummyData';

const [posts, setPosts] = useState<PostList[]>([]);

useEffect(() => {
  setPosts(dummyPosts);
}, []);

function PostList() {
  return (
    <div>
      <h1 css={nameStyle}>게시판</h1>
      <div css={searchbarStyle}>
      </div>

      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>내용</th>
            <th>작성일</th>
            <th>작성자</th>
          </tr>
        </thead>
      </table>
    </div>
  )
}

export default PostList