/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const containerStyle = css`
  max-width: 1200px;
  margin: 3rem auto;
  padding: 2rem;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
`;

const titleStyle = css`
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 30px;
`;

const divStyle = css`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  text-align: center;
`;

const labelStyle = css`
  font-size: 20px;
  font-weight: bold;
  margin-right: 20px;
`;

const inputStyle = css`
  flex: 1;
  padding: 12px;
  font-size: 14px;
  background-color: rgb(223, 223, 223);
  border: 1px solid #ccc;
  border-radius: 8px;
  box-sizing: border-box;]
  &:focus {
    outline: none;
    border-color:rgb(80, 80, 80);
  }
`;

const contentStyle = css`
  width: 100%;
  height: 500px;
  padding: 12px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-sizing: border-box;
  &:focus {
    outline: none;
    border-color:rgb(207, 207, 207);
  }
    resize: none;
`;

const buttonStyle = css`
  padding: 12px 20px;
  font-size: 14px;
  font-weight: bold;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  background-color: #6b46c1;
  color: white;
  &:hover {
    background: #553c9a;
  }
`;

const buttonWrapperStyle = css`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  gap: 20px;
`;

export {
  containerStyle,
  titleStyle,
  labelStyle,
  inputStyle,
  buttonStyle,
  contentStyle,
  divStyle,
  buttonWrapperStyle
};
