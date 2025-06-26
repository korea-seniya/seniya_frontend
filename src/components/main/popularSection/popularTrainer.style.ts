/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

// 가장 바깥쪽 div 스타일
export const divStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 16px;
  border: 0.5px solid #ccc;
  width: 300px;
  height: 900px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  
`;

export const titleStyle = css`
  font-size: 20px;
  font-weight: 700;
  color: #333;
  margin: 0 0 24px 0;
`;

export const imageStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  & > img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid white;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
`;

export const textDivStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  text-align: center;

  p {
    margin: 0;
    color: #454545;
  }
  p:nth-of-type(1) {
    font-size: 20px;
    font-weight: 600;
  }
  span {
    font-size: 15px;
  }

  p:nth-of-type(2) {
    font-size: 18px;
    color: #666;
  }

  p:nth-of-type(3) {
    font-size: 18px;
    color: #666;
  }
`;