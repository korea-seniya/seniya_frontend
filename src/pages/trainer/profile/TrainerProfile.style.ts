/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const container = css`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

export const imageBox = css`
  width: 150px;
  height: 150px;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px dashed #aaa;
  margin: 0 auto 2rem;
`;

export const label = css`
  display: block;
  margin: 1rem 0 0.5rem;
  font-weight: 600;
`;

export const input = css`
  width: 100%;
  padding: 0.6rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  box-sizing: border-box;
`;

export const textArea = css`
  width: 100%;
  height: 100px;
  padding: 0.6rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  resize: vertical;
`;

export const select = css`
  width: 100%;
  padding: 0.6rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  background-color: #fff;
`;

export const button = css`
  width: 100%;
  margin-top: 2rem;
  padding: 0.8rem;
  background-color: #6c63ff;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #574fd6;
  }
`;

export const row = css`
  display: flex;
  gap: 1rem;
`;

export const certBox = css`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const text = css`
  font-size: 16px;
  margin-bottom: 12px;
`;