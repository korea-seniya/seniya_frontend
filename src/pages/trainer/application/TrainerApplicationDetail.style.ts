/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const containerStyle = css`
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.15);
  background-color: #fff;
`;

const titleStyle = css`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
`;

const detailBoxStyle = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 30px;
`;

const labelStyle = css`
  font-weight: bold;
  color: #4658AE;
`;

const valueStyle = css`
  margin-left: 8px;
`;

const buttonStyle = css`
  display: block;
  margin: 0 auto;
  padding: 10px 24px;
  font-weight: bold;
  font-size: 16px;
  background-color: #7e5bef;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

const selectStyle = css`
  margin: 0 10px;
  padding: 5px;
  font-size: 14px;
`;

export {
  containerStyle,
  titleStyle,
  detailBoxStyle,
  labelStyle,
  valueStyle,
  buttonStyle,
  selectStyle
}