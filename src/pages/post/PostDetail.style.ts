import { css } from '@emotion/react';

export const pageWrapper = css`
  max-width: 900px;
  margin: 40px auto;
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
  width: 100%;
  align-items: center;
  padding: 10px;
  border-radius: 999px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background-color: white;
  margin-bottom: 50px;
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

export const container = css`
  width: 100%;
  padding: 24px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;
`;

export const title = css`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const infoRow = css`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #555;
`;

export const divider = css`
  margin: 16px 0;
  border-bottom: 1px solid #eee;
`;

export const imageWrapper = css`
  display: flex;
  justify-content: center;
  margin: 16px 0;

  img {
    max-width: 100%;
    border-radius: 8px;
  }
`;

export const actionRow = css`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  font-size: 14px;
  margin-bottom: 8px;
`;

export const commentSection = css`
  margin-top: 24px;
  display: flex;
  align-items: center;
`;

export const commentInput = css`
  flex-grow: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
`;

export const commentButton = css`
  padding: 10px 16px;
  margin-left: 8px;
  border: none;
  border-radius: 6px;
  background-color: #5c3ec3;
  color: white;
  cursor: pointer;
  font-size: 14px;
`;

export const commentList = css`
  margin-top: 16px;
`;

export const commentItem = css`
  display: flex;
  align-items: center;
  padding: 8px 0;
  border-top: 1px solid #eee;
  font-size: 14px;
  gap: 8px;
`;

export const timestamp = css`
  font-size: 12px;
  color: #888;
  margin-left: auto;
`;

export const commentAuthor = css`
  font-weight: bold;
`;
