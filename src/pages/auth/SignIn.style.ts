import { css } from '@emotion/react';

export const loginContainerStyle = css`
  max-width: 900px;
  margin: 40px auto;
  padding: 40px;
  border-radius: 24px;
  background-color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

export const loginTitleStyle = css`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 40px;
`;

export const loginWrapperStyle = css`
  display: flex;
  justify-content: space-between;
  gap: 40px;
`;

export const snsLoginStyle = css`
  flex: 1;
  font-size: 18px;
  padding-top: 16px;
`;

export const formWrapperStyle = css`
  flex: 1;
`;

export const inputGroupStyle = css`
  margin-bottom: 16px;
`;

export const inputStyle = css`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
`;


export const loginButtonStyle = css`
  width: 100%;
  padding: 14px;
  background-color: #6b4eff;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 9999px;
  margin-bottom: 12px;
  box-shadow: 0 4px 10px rgba(107, 78, 255, 0.3);
  cursor: pointer;
`;

export const signUpButtonStyle = css`
  width: 100%;
  padding: 14px;
  background-color: white;
  color: #6b4eff;
  font-size: 16px;
  font-weight: bold;
  border: 2px solid #6b4eff;
  border-radius: 9999px;
  cursor: pointer;
`;
