import { css } from '@emotion/react';

export const sectionStyle = css`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 30px;
  padding: 20px;
`;

export const halfBox = css`
  width: 48%;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.08);
`;

export const titleStyle = css`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 16px;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 8px;
`;

export const listStyle = css`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin-bottom: 10px;
    font-size: 16px;
    line-height: 1.4;
    display: flex;
    justify-content: space-between;

    span {
      color: #999;
      font-size: 14px;
    }
  }
`;

export const table = css`
  width: 100%;
  border-collapse: collapse;

  th, td {
    padding: 8px 12px;
    text-align: center;
    font-size: 14px;
  }

  thead {
    background-color: #f5f5f5;
    font-weight: 600;
  }

  tbody tr:hover {
    background-color: #f9f9f9;
  }
`;
