/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const headerContainer = css`
  background-color: #f8f9fa;
  width: 100%;
  display: flex;
  align-items: center;
  height: 100px;
  padding: 0 2rem;
  font-size: 18px;
  position: relative;
  z-index: 100;
`;

export const logoContainer = css`
  width: 10%;
  font-weight: bold;
  font-size: 24px;
  cursor: pointer;
`;

export const navContainer = css`
  width: 70%;
  display: flex;
  justify-content: center;
  gap: 40px;
  position: relative;
`;

export const navItemWrapper = css`
  position: relative;
  padding: 0.5rem 1rem;
  cursor: pointer;

  &:hover {
    background-color: #e9ecef;
  }
`;

export const subMenuContainer = css`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 0.5rem 0;
  display: flex;
  flex-direction: column;
  z-index: 99;
`;

export const subMenuItem = css`
  padding: 0.5rem 1rem;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }
`;

export const userContainer = css`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  font-size: 16px;
  white-space: nowrap;

  span {
    margin-right: 8px;
  }

  button {
    padding: 4px 8px;
    font-size: 14px;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;


