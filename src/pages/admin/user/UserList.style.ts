/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const pageWrapper = css`
  display: flex;
`;

export const contentWrapper = css`
  flex: 1;
  margin: 0 100px 0 250px;
  padding: 20px;
`;

export const titleStyle = css`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const tableContainer = css`
  overflow-x: auto;
`;

export const tableStyle = css`
  width: 100%;
  border-collapse: collapse;
`;

export const firstTrStyle = css`
  background-color: #4658ae;
  color: white;
`;

export const trStyle = css`
  height: 50px;
`;

export const thStyle = css`
  padding: 10px;
  border: 1px solid #ccc;
  font-size: 14px;
  text-align: center;
`;

export const tdStyle = css`
  border: 1px solid #4658ae;
  font-size: 14px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const detailButtonStyle = css`
  width: 90px;
  height: 40px;
  background-color: #7e5bef;
  color: white;
  border: none;
  border-radius: 14px;
  font-weight: bold;
  cursor: pointer;
`;
