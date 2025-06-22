import { css } from '@emotion/react';

export const container = css`
  width: 100%;
  height: 500px;
  margin: 10px 0;
  display: flex;
  background-color: #ccc;
  box-sizing: border-box;
  padding: 20px;
  gap: 20px;

`;

export const halfBox = css`
  flex: 1 1 50%;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 24px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-weight: 700;
  font-size: 1.5rem;
  color: #333;
`;
