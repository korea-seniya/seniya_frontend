/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const overlay = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const modal = css`
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  min-width: 600px;
  max-height: 80vh;
  overflow-y: auto;
`;

export const form = css`
  display: flex;
  flex-direction: column;
`;

export const row = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

export const table = css`
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
`;

export const thead = css`
  background-color: #4658AE;
  color: #fff;
`;

export const th = css`
  padding: 12px;
  text-align: left;
  border-bottom: 2px solid #ccc;
`;

export const td = css`
  padding: 10px;
  border-bottom: 1px solid #eee;
`;

export const buttonGroup = css`
  display: flex;
  justify-content: flex-end;
`;

export const backBtn = css`
  padding: 0.5rem 1rem;
  background-color: #7e5bef;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;
