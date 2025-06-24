import { css } from '@emotion/react';

export const containerStyle = css`
  max-width: 800px;
  margin: 3rem auto;
  padding: 2rem;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
`;

export const titleStyle = css`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.2rem;
  line-height: 1.6;
`;

export const metaWrapperStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
  color: #666;
  margin-bottom: 1.5rem;
`;

export const authorDateStyle = css`
  display: flex;
  gap: 1.5rem;
`;

export const contentStyle = css`
  font-size: 1rem;
  line-height: 1.75;
  color: #333;
  min-height: 150px;
`;

export const actionStyle = css`
  font-size: 0.9rem;
  color: #666;
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  cursor: pointer;

  span:hover {
    text-decoration: underline;
  }
`;
