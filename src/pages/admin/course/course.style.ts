/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const containerStyle = css`
  max-width: 900px;
  height: 700px;
  margin: 30px auto;
  margin-top: 150px;
  padding: 40px;
  border: 3px solid #4658AE;
  border-radius: 28px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  background-color: #ffffff;
`;

const h6Style = css`
font-weight: 500;
font-size: 18px;
  margin: 0;
`;

const inputStyle = css`
  margin-top: 8px;
  margin-bottom: 12px;
  border: 1px solid #5B6DC6;
  border-radius: 15px;
  font-size: 18px;
  height: 50px;
  &:focus {
    outline: none;
    border: 3px solid #5B6DC6;
  }
`;

const buttonStyle = css`
  background-color: #5B6DC6;
  color: white;
  font-size: 18px;
  border: none;
  border-radius: 15px;
  width: 250px;
  height: 50px;
  float: right;
  &:hover {
    background-color: #4658AE;
  }
`;

export { containerStyle, h6Style, inputStyle, buttonStyle };