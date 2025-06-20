/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const containerStyle = css`
  max-width: 600px;
  margin: 60px auto;
  padding: 40px;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.08);
`;

export const titleStyle = css`
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 40px;
`;

export const fieldGroupStyle = css`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const labelStyle = css`
  width: 100px;
  font-size: 16px;
  font-weight: 500;
`;

export const inputStyle = css`
  flex: 1;
  padding: 10px 14px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #5B6DC6;
  }
`;

export const buttonStyle = css`
  margin-left: 10px;
  padding: 10px 16px;
  font-size: 14px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  background-color: #5B6DC6;
  color: white;

  &:hover {
    background-color: #4b5abc;
  }
`;

export const selectStyle = css`
  margin-left: 10px;
  padding: 10px;
  font-size: 14px;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

export const checkboxWrapperStyle = css`
  display: flex;
  align-items: center;
  margin-top: 10px;
  font-size: 14px;
  margin-left: 106px;
  input {
    margin-right: 6px;
  }
`;

export const buttonWrapperStyle = css`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  gap: 16px;
`;

export const cancelButtonStyle = css`
  padding: 10px 30px;
  border: 2px solid #5B6DC6;
  color: #5B6DC6;
  background: white;
  font-weight: bold;
  border-radius: 999px;
  cursor: pointer;

  &:hover {
    background: #eef0fd;
  }
`;

export const submitButtonStyle = css`
  padding: 10px 30px;
  background-color: #5B6DC6;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 999px;
  cursor: pointer;

  &:hover {
    background-color: #4b5abc;
  }
`;

// 여기부터 메시지 스타일 추가
export const messageStyle = (available: boolean | null) => css`
  margin-left: 106px;
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 12px;
  color: ${available === null ? 'black' : available ? 'green' : 'red'};
`;