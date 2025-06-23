/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const containerStyle = css`
  max-width: 900px;
  height: 700px;
  margin: 30px auto;
  overflow-x: auto;
  border-radius: 10px;
`;

const tableStyle = css`
  width: 100%;
  border-collapse: collapse;
`;

const firtTrStyle = css`
  background-color: #4658AE;
  color: white;
  height: 50px;
`;

const trStyle = css`
  height: 50px;
  border-bottom: 1px solid #ccc;
`;

const thStyle = css`
  padding: 10px;
  border: 1px solid #ccc;
  font-weight: bold;
  font-size: 14px;
  text-align: center;
  border: 3px solid #4658AE;
`;

const tdStyle = css`
  border: 1px solid #4658AE;
  font-size: 14px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const detailButtonStyle = css`
  width: 90px;
  height: 40px;

  background-color: #7e5bef;
  color: white;
  border: none;
  border-radius: 14px;
  font-weight: bold;
  cursor: pointer;
`;

export {
  containerStyle,
  tableStyle,
  firtTrStyle,
  trStyle,
  thStyle,
  tdStyle,
  detailButtonStyle,
}