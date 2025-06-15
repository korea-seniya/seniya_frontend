/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const containerStyle = css`
  max-width: 600px;
  margin: 60px auto;
  padding: 40px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
`;

const titleStyle = css`
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 30px;
`;

const buttonStyle = css`
  padding: 12px 20px;
  font-size: 14px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background-color: #5B6DC6;
  color: white;
`;

const divStyle = css`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const pStyle = css`
  
  font-size: 14px;
  color: #333;
  line-height: 1.6;
  margin-bottom: 12px;
`;

const checkboxContainerStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  font-size: 14px;
`;

const centerButtonStyle = css`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const agreeTextStyle = css`
  font-size: 14px;
`;

const checkboxStyle = css`
  margin-right: 8px;
`;

const listStyle = css`
  margin: 20px 0;
  padding-left: 20px;
  font-size: 14px;
  line-height: 1.8;
  color: #333;
`;

export {
  containerStyle,
  titleStyle,
  buttonStyle,
  divStyle,
  pStyle,
  checkboxStyle,
  agreeTextStyle,
  checkboxContainerStyle,
  centerButtonStyle,
  listStyle
};
