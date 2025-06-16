
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const SidebarContainer = css`
  position: absolute;
  top: 100px; /* 헤더 고려 */
  left: 0;
  width: 180px;
  height: 500px;
  background-color: #a7d1d1;
  padding: 1rem;
  margin-left: 30px;
  margin-top: 50px;
`;

export const Nav = css`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  gap: 1.5rem;
`;

export const LinkStyle = css`
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 14px;
`;
