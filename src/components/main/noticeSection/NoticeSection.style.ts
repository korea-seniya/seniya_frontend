/** @jsxImportSource @emotion/react */
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
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  padding: 24px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const table = css`
  width: 100%;
  border-collapse: collapse;
  margin-top: 16px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  overflow: hidden; 

  thead {
    background-color: #f5f7fa;
  }

  th,
  td {
    padding: 12px 16px;
    text-align: center;
    font-size: 14px;
    white-space: nowrap;
  }

  th {
    font-weight: 600;
    border-bottom: 2px solid #e2e8f0;
  }

  td {
    border-bottom: 1px solid #eef2f6;
  }

  tbody tr:nth-of-type(even) {
    background-color: #fafbfc;
  }

  tbody tr:hover {
    background-color: #edf6ff;
    transition: background-color 0.25s ease;
  }

  @media (max-width: 768px) {
    th:nth-of-type(3),
    td:nth-of-type(3) {
      display: none;
    }
  }
`;
