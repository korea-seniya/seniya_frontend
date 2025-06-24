/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const containerStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

export const cardStyle = css`
  display: flex;
  background: white;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  width: 800px;
  height: 380px;
  overflow: hidden;
`;

export const leftStyle = css`
  flex: 1;
  background: #f9f9f9;
  padding: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 18px;
`;

export const rightStyle = css`
  flex: 1;
  padding: 60px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const titleStyle = css`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
`;

export const inputWrapperStyle = css`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 0 16px;
  margin-bottom: 12px;
  height: 52px;
`;

export const iconStyle = css`
  margin-right: 8px;
  font-size: 18px;
  color: #888;
`;

export const inputStyle = css`
  flex: 1;
  border: none;
  outline: none;
  font-size: 15px;
  background: transparent;
`;

export const loginButtonStyle = css`
  width: 100%;
  padding: 12px 0;
  font-size: 15px;
  background: #6b46c1;
  color: white;
  border: none;
  border-radius: 25px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 8px;
  margin-bottom: 6px;

  &:hover {
    background: #553c9a;
  }
`;

export const signUpButtonStyle = css`
  width: 100%;
  padding: 11px 0;
  font-size: 15px;
  background: white;
  border: 2px solid #6b46c1;
  color: #6b46c1;
  border-radius: 25px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: #f3f0ff;
  }
`;
