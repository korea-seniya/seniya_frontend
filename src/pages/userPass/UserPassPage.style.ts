import { css } from "@emotion/react";

export const pageWrapperStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
`;

export const titleStyle = css`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
`;

export const cardListStyle = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 600px;
`;

export const passCardStyle = css`
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 12px;
  background-color: #fafafa;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
`;

export const labelStyle = css`
  font-weight: 500;
  margin-right: 6px;
`;

export const valueStyle = css`
  font-weight: normal;
  color: #333;
`;
