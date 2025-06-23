/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const containerStyle = css`
  padding: 40px;
  max-width: 500px;
  margin: 0 auto;
  background: white;
  border-radius: 12px;
  box-shadow: 6px 6px 10px rgba(0,0,0,0.2);
  border: 1px solid #ccc;
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
  font-weight: 500;
`;

export const inputStyle = css`
  flex: 1;
  padding: 5px 8px;
  border: 1px solid #9a8de3;
  border-radius: 8px;
  outline: none;
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
