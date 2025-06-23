/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const bannerContainer = css`
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;
`;

export const bannerImage = (isVisible: boolean) => css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 30%;
  opacity: ${isVisible ? 1 : 0};
  transition: opacity 0.6s ease-in-out;
  display: block;
`;

export const arrowLeft = css`
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  font-size: 3rem;
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  z-index: 10;
`;

export const arrowRight = css`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  font-size: 3rem;
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  z-index: 10;
`;

