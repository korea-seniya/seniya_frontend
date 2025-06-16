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

const searchWrapperStyle = css`
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-bottom: 30px;
  border: 1px solid rgba(0,0,0,0);
  padding: 15px 15px;
  border-radius: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
`;

const selectStyle = css`
  flex: 0;
  padding: 12px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-sizing: border-box;
  &:focus {
    outline: none;
    border-color: #5B6DC6;
  }
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
    border-color: #5B6DC6;
  }
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

const tableStyle = css`
  width: 100%;
  border-collapse: collapse;
`;

const thStyle = css`
  padding: 12px;
  border-bottom: 2px solid #ccc;
  font-size: 14px;
  text-align: left;
`;

const tdStyle = css`
  padding: 14px 8px;
  border-bottom: 1px solid #eee;
  font-size: 14px;
`;

const statusStyle = css`
  color: limegreen;
  font-weight: bold;
`;

export {
  containerStyle,
  titleStyle,
  searchWrapperStyle,
  inputStyle,
  buttonStyle,
  tableStyle,
  thStyle,
  tdStyle,
  statusStyle,
  selectStyle
};
