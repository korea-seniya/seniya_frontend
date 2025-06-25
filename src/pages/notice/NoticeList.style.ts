/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const containerStyle = css`
  max-width: 1000px;
  margin: 60px auto;
  padding: 40px;
  background-color: #ffffff;
`;

export const titleStyle = css`
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 30px;
`;

export const tableStyle = css`
  width: 100%;
  border-collapse: collapse;
`;

export const thStyle = css`
  padding: 12px;
  border-bottom: 2px solid #ccc;
  font-size: 14px;
  text-align: left;
`;

export const tdStyle = css`
  padding: 14px 8px;
  border-bottom: 1px solid #eee;
  font-size: 14px;
`;

export const statusStyle = css`
  color: limegreen;
  font-weight: bold;
`;

export const bottomWrapperStyle = css`
  display: flex;
  justify-content: flex-end;
  margin-top: 1.5rem;
`;

export const writeButtonStyle = css`
  background-color: #5b21b6;
  color: white;
  font-size: 0.9rem;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #4c1d95;
  }
`;
