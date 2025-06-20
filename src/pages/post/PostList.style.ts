import { css } from '@emotion/react';

export const postContainer = css`
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const nameStyle = css`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 24px;
`;

export const searchbarStyle = css`
  display: flex;
  width: 900px;
  align-items: center;
  padding: 10px;
  border-radius: 999px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background-color: white;
  margin-bottom: 30px;
`;

export const selectStyle = css`
  flex: 1;
  border: none;
  padding: 8px 12px;
  border-radius: 999px 0 0 999px;
  outline: none;
  background-color: #f9f9f9;
  margin-right: 5px;
`;

export const inputStyle = css`
  flex: 4;
  border: none;
  padding: 8px 12px;
  outline: none;
  font-size: 14px;
  background-color: #f9f9f9;
  border-radius: 10px;
`;

export const buttonStyle = css`
  padding: 8px 16px;
  border: none;
  border-radius: 999px;
  background-color: #5c3ec3;
  color: white;
  cursor: pointer;
  margin-left: 8px;
`;

export const tableWrapper = css`
  width: 1200px;
`;

export const postListTotal = css`
  font-size: 14px;
  color: #333;
  margin-bottom: 8px;
`;

export const separatorLine = css`
  border-bottom: 2px solid #4981c2;
  margin: 8px 0;
`;

export const postRow = css`
  display: flex;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #eee;
  justify-content: space-between;
`;

export const noticeBadge = css`
  border: 1px solid #4981c2;
  color: #4981c2;
  font-size: 13px;
  padding: 4px 10px;
  border-radius: 30px;
  margin-right: 12px;
`;

export const boldTitle = css`
  flex: 1;
  font-weight: bold;
`;

export const postNumber = css`
  color: #1657ff;
  width: 40px;
  margin-right: 12px;
`;

export const postTitle = css`
  flex: 1;
`;

export const postMeta = css`
  display: flex;
  gap: 12px;
  font-size: 14px;
  color: #666;
`;
