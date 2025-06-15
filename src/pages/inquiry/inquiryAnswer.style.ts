/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const containerStyle = css`
  max-width: 1000px;
  margin: 60px auto;
  padding: 40px;
  background-color: #ffffff
`;

const titleStyle = css`
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 30px;
`;

const divStyle = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 1px solid rgba(0,0,0,0.5);
  box-sizing: border-box;
  padding: 20px;
  border-radius: 5px;
`;

const h2Style = css`
  font-size: 20px;
  font-weight: bold;
  text-align: left;
  margin-left: 10px;
`;

const spanStyle = css`
  color: #ccc;
  font-size: 12px;
  text-align: center;
`;

const pStyle = css`
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 25px;
  padding-right: 25px;
  padding-bottom: 8px;
`;

const contentStyle = css`
font-size: 16px;
padding: 20px;
line-height: 1.6;
min-height: 200px;
white-space: pre-wrap;
word-break: break-word;
margin-top: 10px;
padding: 0 10px;
`;

const answerDivStyle = css`
display: flex;
flex-direction: column;
border: 1px solid rgba(0,0,0,0.5);
border-radius: 8px;
margin-top: 10px;
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
const buttonWrapperStyle = css`
display: flex;
justify-content: flex-end;
margin-top: 20px;
gap: 10px;
`;

const lineStyle = css`
border-bottom: 1px solid rgba(0, 0, 0, 0.5);
margin: 0 10px 0 10px;
`;

const answerPStyle = css`
  text-align: center;
  display: flex;
  justify-content: left;
  align-items: center;
  padding-left: 25px;
  padding-right: 25px;
`;

const strongStyle = css`
  margin-right: 10px;
`;

const textareaStyle = css`
  width: 100%;
  height: 200px;
  padding: 12px;
  font-size: 14px;
  border: none;
  border-radius: 8px;
  box-sizing: border-box;
  &:focus {
    outline: none;
    border-color: #5B6DC6;
  }
`;

export {
  containerStyle,
  titleStyle,
  divStyle,
  spanStyle,
  pStyle,
  h2Style,
  contentStyle,
  buttonStyle,
  buttonWrapperStyle,
  answerDivStyle,
  lineStyle,
  answerPStyle,
  strongStyle,
  textareaStyle
};