/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const overlay = css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
`;

const modal = css`
  background-color: #fff;
  border: 2px solid #4658AE;
  border-radius: 28px;
  padding: 30px;
  width: 600px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
`;

const form = css`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const row = css`
  display: flex;
  flex-direction: column;
  gap: 5px;
  flex: 1;
`;

const buttonGroup = css`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
`;

const backBtn = css`
  background-color: #ccc;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
`;
const deleteBtn = css`
  background-color: #e60000;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;

`;
const updateBtn = css`
  background-color: #3d4f91;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
`;


export { overlay, modal, form, row, buttonGroup, backBtn, deleteBtn, updateBtn };