/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const containerStyle = css`
  max-width: 460px;
  width: 100%;
  margin: 0 auto;
  padding: 80px 20px;
`;

export const titleStyle = css`
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  color: #5a6acf;
  margin-bottom: 32px;
`;

export const labelStyle = css`
  font-size: 16px;
  font-weight: bold;
  color: #222;
  margin-bottom: 6px;
`;

export const fieldGroupStyle = css`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 16px;
`;

export const inputStyle = css`
  width: 100%;
  height: 52px;
  padding: 0 14px;
  font-size: 14px;
  border: 1.5px solid #5a6acf;
  border-radius: 10px;
  outline: none;

  ::placeholder {
    color: #c4c4c4;
  }

  &:disabled {
    background-color: #f5f5f5;
  }
`;

export const guideTextStyle = css`
  font-size: 14px;
  color: #5a6acf;
  margin-top: 8px;
  text-align: center;
`;

export const messageStyle = (isSuccess: boolean) => css`
  font-size: 14px;
  margin-top: 6px;
  color: ${isSuccess ? '#2e7d32' : '#d32f2f'};
  text-align: center;
`;

export const buttonWrapperStyle = css`
  margin-top: 28px;
  display: flex;
  justify-content: center;
`;


export const submitButtonStyle = css`
  width: 100%;
  height: 52px;
  background-color: #5a6acf;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    background-color: #4859b4;
  }

  &:disabled {
    background-color: #aab0da;
    cursor: not-allowed;
  }
`;
