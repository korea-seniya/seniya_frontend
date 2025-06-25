import { css } from '@emotion/react';

export const asideWrapper = css`
  width: 200px;
  height: 653px;
  padding: 20px 12px;
  border: 1px solid #cfd4ff;
  border-radius: 12px;
  box-shadow: 4px 4px 8px rgba(0,0,0,0.1);
  background-color: #fff;
  text-align: center;
`;


export const menuSection = css`
  margin-bottom: 24px;
`;

export const menuTitle = css`
  font-weight: bold;
  margin-bottom: 8px;
`;

export const menuItem = css`
  margin-bottom: 4px;
  cursor: pointer;
  text-decoration: underline;
  color: #333;
  & {
    text-decoration: none;
  }
  &:hover {
    color: #007BFF;
  }
`;
