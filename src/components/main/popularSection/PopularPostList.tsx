/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import { getPopularPosts } from '../../../apis/post/Post';
import type { PopularPostResponseDto } from '../../../dtos/post/response/popularPost.response.dto';

import {
  wrapperStyle,
  titleStyle,
  cardStyle,
  postTitle,
  postContent,
  infoStyle,
} from './PopularPostList.style';

function PopularPostList() {
  const [popularPosts, setPopularPosts] = useState<PopularPostResponseDto[]>([]);

  useEffect(() => {
    getPopularPosts().then((res) => {
      if (res.code === 'SU' && res.data) {
        setPopularPosts(res.data);
      }
    });
  }, []);

  return (
    <div css={wrapperStyle}>
      <h3 css={titleStyle}>🔥 인기 글</h3>
      {popularPosts.slice(0, 3).map((post) => (
        <div key={post.postId} css={cardStyle}>
          <h4 css={postTitle}>{post.title}</h4>
          <p css={postContent}>{post.content.slice(0, 50)}...</p>
          <div css={infoStyle}>
            <span>작성자: {post.userName}</span>
            <span>{new Date(post.createdAt).toLocaleDateString()}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PopularPostList;
