import { css } from "@emotion/react";

export const containerStyle = css`
  flex: 1;
  max-width: 800px;
  padding: 60px 80px;
  border: 1px solid #cfd4ff;
  border-radius: 16px;
  box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.12);
  background-color: #fff;
`;

export const pageWrapperStyle = css`
  display: flex;
  padding: 40px;
  padding: 40px 80px;
  gap: 40px;
`;

export const titleStyle = css`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 12px;
`;

export const countStyle = css`
  font-size: 18px;
  margin-bottom: 24px;
`;

export const cardListStyle = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 20px;
`;

export const passCardStyle = css`
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 20px;
  background-color: #f9f9f9;
`;

export const labelStyle = css`
  font-weight: 600;
  margin-right: 8px;
`;

export const valueStyle = css`
  color: #333;
`;
export const tableWrapperStyle = css`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 12px;
  overflow: hidden;
`;

export const tableHeaderStyle = css`
  display: flex;
  background-color: #f0f0f0;
  font-weight: 600;
  padding: 12px 0;
`;

export const tableRowStyle = css`
  display: flex;
  border-top: 1px solid #eee;
  padding: 12px 0;
`;

export const tableHeadCellStyle = css`
  flex: 1;
  text-align: center;
  font-weight: bold;
`;

export const tableCellStyle = css`
  flex: 1;
  text-align: center;
  color: #333;
`;