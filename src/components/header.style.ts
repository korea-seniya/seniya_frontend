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

export const logoImage = css`
  width: 220px;
  height: auto;
  cursor: pointer;
`;

export const navContainer = css`
  width: 70%;
  display: flex;
  justify-content: center;
  gap: 60px;
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

export const navLabel = css`
  font-size: 20px;
  font-weight: bold;
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

.nav-item-wrapper:hover & {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
  }
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

export const logoutButton = css`
  background-color: transparent;
  border: 1px solid #6c757d;
  color: #343a40;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 14px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #6c757d;
    color: #fff;
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
`;
