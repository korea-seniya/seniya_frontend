/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const containerStyle = css`
  flex: 1;
  max-width: 800px;
  padding: 60px 80px;
  border: 1px solid #cfd4ff;
  border-radius: 16px;
  box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.12);
  background-color: #fff;
`;

export const titleStyle = css`
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 30px;
  font-weight: bold;
  text-shadow: 2px 2px #ddd;
`;

export const formStyle = css`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const labelStyle = css`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 3;
  font-weight: 500;
`;

export const inputStyle = css`
  width: 200px;
  padding: 5px 8px;
  border: 1px solid #9a8de3;
  border-radius: 8px;
  outline: none;
  justify-content: center;
`;

export const selectStyle = inputStyle;

export const dateStyle = inputStyle;

export const checkboxWrapperStyle = css`
  display: flex;
  gap: 20px;
  padding: 8px 0;
`;

export const buttonWrapperStyle = css`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

export const buttonStyle = css`
  padding: 6px 20px;
  border: 1px solid #9a8de3;
  border-radius: 10px;
  background: white;
  cursor: pointer;
  font-weight: bold;
`;

export const requiredMarkStyle = css`
  color: red;
`;

export const unitStyle = css`
  margin-left: 4px;
`;

export const pageWrapperStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  align-items: flex-start;
  padding: 40px 80px;
  gap: 40px;
`;