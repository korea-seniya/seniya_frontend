import { css } from '@emotion/react';

export const containerStyle = css`
  max-width: 1000px;
  margin: 60px auto;
  padding: 40px;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
`;

export const nameStyle = css`
  text-align: center;
`;

export const titleStyle = css`
  border: 1px solid #4658AE;
  padding: 10px;
  width: fit-content;
  color: #4658AE;
  border-radius: 15px;
`;

export const labelStyle = css`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 16px;
`;

export const inputStyle = css`
  flex: 1;
  margin-left: 15px;
  border-radius: 8px;
  background-color: #efefef;
  border: none;
  padding: 12px 15px;
  font-size: 16px;
`;

export const contentStyle = css`
  width: 100%;
  height: 50vh;
  border-radius: 10px;
  border: 1px solid #888;
  margin: 20px 0;
  padding: 15px;
  font-size: 16px;
  resize: none;
  background-color: #fff;
  box-sizing: border-box;
`;

export const buttonArea = css`
  display: flex;
  justify-content: right;
`;

export const buttonWrapperStyle1 = css`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  padding-right: 10px;
`;

export const buttonStyle1 = css`
  padding: 10px 20px;
  background-color: #ffffff;
  border: 1px solid black;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
`;

export const buttonWrapperStyle2 = css`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

export const buttonStyle2 = css`
  padding: 10px 20px;
  background-color: #5c6bc0;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
`;

export const selectedFileContainerStyle = css`
  display: flex;
  align-items: center;
  margin-left: 16px;
  margin-top: 10px;
`;

export const selectedFileLabelStyle = css`
  font-size: 14px;
  font-weight: bold;
  margin-right: 8px;
`;

export const selectedFileStyle = css`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
`;

export const fileNameStyle = css`
  padding: 4px 8px;
  background-color: #f0f0f0;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 14px;
`;
