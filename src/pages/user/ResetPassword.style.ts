/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const containerStyle = css`
  max-width: 480px;
  margin: 0 auto;
  padding: 80px 20px;
  text-align: center;
`;

export const titleStyle = css`
  font-size: 24px;
  font-weight: bold;
  color: #5a6acf;
  margin-bottom: 16px;
`;

export const fieldGroupStyle = css`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const inputStyle = css`
  width: 100%;
  height: 56px;
  padding: 0 16px;
  font-size: 16px;
  border: 1.5px solid #a8b0d3;
  border-radius: 8px;
  box-sizing: border-box;
  outline: none;

  ::placeholder {
    color: #c4c4c4;
  }

  &:disabled {
    background-color: #f5f5f5;
  }
`;

export const buttonWrapperStyle = css`
  margin-top: 20px;
`;

export const submitButtonStyle = css`
  width: 100%;
  height: 56px;
  background-color: #5a6acf;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #4859b4;
  }

  &:disabled {
    background-color: #aab0da;
    cursor: not-allowed;
  }
`;

export const messageStyle = (isSuccess: boolean) => css`
  margin-top: 16px;
  font-size: 14px;
  color: ${isSuccess ? '#2e7d32' : '#d32f2f'};
`;
