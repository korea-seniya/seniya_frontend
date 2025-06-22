import { css } from '@emotion/react';

export const container = css`
  width: 100%;
  background-color: #f9f5e3;

  box-sizing: border-box;
  overflow-x: hidden;

  padding: 40px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const termsBox = css`
  width: 100%;
  max-width: 900px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 20px 30px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  font-size: 14px;
  line-height: 1.6;
  color: #333;

  word-break: break-word;
  overflow-wrap: break-word;

  h3 {
    font-size: 16px;
    margin-bottom: 12px;
    font-weight: bold;
  }

  p + p {
    margin-top: 10px;
  }
`;
