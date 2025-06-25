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
  text-align: left;
  font-size: 1.25rem;
  margin-bottom: 24px;
  font-weight: bold;
  text-shadow: 1px 1px #ddd;
`;

export const formStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  max-width: 300px; /* 폼 안쪽만 좁게 */
`;

export const labelStyle = css`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.9rem;
  width: 100%;
  
`;

export const inputStyle = css`
  flex: 1;
  width: 180px;
  padding: 4px 6px;
  border: 1px solid #9a8de3;
  border-radius: 6px;
  font-size: 0.9rem;
`;

export const selectStyle = inputStyle;
export const dateStyle = inputStyle;

export const checkboxWrapperStyle = css`
  display: flex;
  gap: 16px;
  padding: 4px 0;
  font-size: 0.9rem;
`;

export const buttonWrapperStyle = css`
  display: flex;
  justify-content: flex-start;
  gap: 12px;
  margin-top: 16px;
`;

export const buttonStyle = css`
  padding: 5px 16px;
  border: 1px solid #9a8de3;
  border-radius: 8px;
  background: white;
  cursor: pointer;
  font-weight: bold;
  font-size: 0.9rem;
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
  align-items: flex-start;
  min-height: 80vh;
  padding: 40px 80px;
  gap: 40px;
`;
