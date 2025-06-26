/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

// 전체 페이지 수평 레이아웃 (AsideBar + PurchasePass)
export const pageWrapper = css`
  display: flex;
  max-width: 1200px;
  margin: 30px auto;
  gap: 24px;
`;

export const containerStyle = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: center;
  overflow: hidden;
`;


export const h2Style = css`
  font-size: 30px;
  margin: 12px auto;
`;

export const passContainerStyle = css`
  width: 100%;
  height: 100%;
  border: 2px solid #4658AE;
  box-sizing: border-box;
  border-radius: 20px;
`;

export const passDivStyle = css`
  width: 70%;
  height: 80px;
  border: 2px solid #4658AE;
  margin: 40px auto;
  font-size: 30px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  gap: 20px;
  justify-content: space-between;
`;

export const passCount = css`
  width: 50%;
  display: flex;
  align-items: center;
`;

export const passPrice = css`
  width: 50%;
  text-align: right;
  padding-right: 10px;
`;

export const payBtn = css`
  width: 300px;
  height: 70px;
  background-color: #4658AE;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 20px;
  margin: 0 auto 40px;
`;
