import { css } from '@emotion/react';

export const wrapperStyle = css`
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const titleStyle = css`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 12px;
  color: #333;
`;

export const cardStyle = css`
  padding: 8px 0;
  border-bottom: 1px solid #e0e0e0;

  &:last-of-type {
    border-bottom: none;
  }
`;

export const postTitle = css`
  font-size: 15px;
  font-weight: 600;
  color: #222;
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const postContent = css`
  font-size: 13px;
  color: #555;
  margin-bottom: 6px;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 최대 2줄 */
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const infoStyle = css`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #999;
`;
