import { css } from "@emotion/react";
export const navStyle = css`
  width: 200px;
  height: fit-content;
  padding: 20px 12px;
  margin-top: 50px;
  margin-left: 30px;
  border: 1px solid #cfd4ff;
  border-radius: 12px;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  text-align: center;
  flex-shrink: 0;
`;
export const linkStyle = css`
  display: block;
  font-weight: bold;
  font-size: 1rem;
  padding: 12px 0;
  margin-bottom: 8px;
  color: #333;
  text-decoration: none;
  border-radius: 8px;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #f0f2f5;
  }
`;