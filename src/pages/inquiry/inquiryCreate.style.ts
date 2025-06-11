/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const containerStyle = css`
  max-width: 1000px;
  margin: 60px auto;
  padding: 40px;
  background-color: #ffffff;
`;

const titleStyle = css`
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 30px;
`;

const labelStyle = css`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 30px;
  margin-right: 20px;
`;

const inputStyle = css`
  flex: 1;
  padding: 12px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-sizing: border-box;
  &:focus {
    outline: none;
    border-color: #4caf50;
  }
`;

const contentStyle = css`
  width: 80%;
  height: 50%;
  padding: 12px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-sizing: border-box;
  &:focus {
    outline: none;
    border-color: #4caf50;
  }
`;

const buttonStyle = css`
  padding: 12px 20px;
  font-size: 14px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background-color: #4caf50;
  color: white;
`;

export {
  containerStyle,
  titleStyle,
  labelStyle,
  inputStyle,
  buttonStyle,
  contentStyle
};
