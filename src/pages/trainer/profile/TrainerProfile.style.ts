/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

const container = css`
  max-width: 500px;
  margin: 40px auto;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.15);
  background-color: #fff;
`;

const imageNameDiv = css`
  display: flex;
  gap: 12px;
`;

const imageDiv = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: auto;
`;

const imageBox = css`
  width: 100%;
  height: 150px;
  border: 1px solid #aaa;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const imageButton = css`
  margin-top: 8px;
  padding: 4px;
  background-color: #6666cc;
  color: white;
  border: none;
  border-radius: 8px;
`;

const nameDiv = css`
  flex:3;
  padding: 4px;
  margin-top: 3px;
`;

const label = css`
  font-weight: bold;
`;

const required = css`
  color: red;
  font-size: 12px;
`;

const input = css`
  width: 100%;
  padding: 6px;
  margin-top: 4px;
  border: 1px solid #aaa;
  border-radius: 8px;
`;

const textArea = css`
  width: 100%;
  height: 60px;
  border: 1px solid #aaa;
  border-radius: 4px;
  resize: none;
  padding: 6px;
`;

const select = css`
  width: 100%;
  padding: 6px;
  margin-top: 4px;
  border: 1px solid #aaa;
  border-radius: 8px;
`;

const certRow = css`
  display: flex;
  gap: 8px;
  margin-top: 8px;
`;

const certInput = css`
  flex: 1;
  padding: 6px;
  border: 1px solid #aaa;
  border-radius: 4px;
`;

const plusButton = css`
  background-color: #6c6;
  border: none;
  padding: 6px 10px;
  border-radius: 8px;
  font-weight: bold;
`;

const minusButton = css`
  background-color: #c66;
  border: none;
  padding: 6px 10px;
  border-radius: 8px;
  font-weight: bold;
`;

const submitButton = css`
  margin-top: 20px;
  width: 100%;
  padding: 10px;
  background-color: #5b4bcc;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 8px;
`;

export {
  container,
  imageNameDiv,
  imageBox,
  imageButton,
  imageDiv,
  nameDiv,
  label,
  required,
  input,
  textArea,
  select,
  certInput,
  certRow,
  minusButton,
  plusButton,
  submitButton
}