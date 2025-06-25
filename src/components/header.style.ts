/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const headerContainer = css`
  background-color: rgba(248, 249, 250, 0.33);
  width: 100%;
  display: flex;
  align-items: center;
  height: 100px;
  padding: 0 2rem;
  font-size: 18px;
  position: relative;
  z-index: 100;
  border-bottom: 1px solid #dee2e6;
`;

export const logoContainer = css`
  width: 10%;
  font-weight: bold;
  font-size: 24px;
  cursor: pointer;
`;

export const logoImage = css`
  width: 220px;
  height: auto;
  cursor: pointer;
`;

export const navContainer = css`
  width: 70%;
  display: flex;
  justify-content: center;
  column-gap: 60px; 
  position: relative;
`;

export const navItemWrapper = css`
  position: relative;
  padding: 0.5rem 1rem;
  cursor: pointer;

  &:hover {
    background-color: rgba(233, 236, 239, 0.48);
  }
`;

export const navItemWithDivider = css`
  &::before {
    content: '';
    position: absolute;
    left: -30px;
    top: 30%;
    bottom: 30%;
    width: 1px;
    background-color: #ced4da;
  }
`;

export const navLabel = css`
  font-size: 20px;
  font-weight: bold;
  color: rgb(70, 70, 70);
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
  padding: 1rem 1.5rem; 
  white-space: nowrap;
  cursor: pointer;
  color: rgb(65, 65, 65);

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

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const iconImage = css`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const logoutIconImage = css`
  width: 32px;
  height: 32px;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;
