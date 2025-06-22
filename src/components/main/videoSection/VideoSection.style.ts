// VideoSection.style.ts
import { css } from '@emotion/react';

export const container = css`
  width: 100%;
  background-color: #f5f5f5;
  margin: 10px 0;
  display: flex;
  padding: 40px 0;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
  box-sizing: border-box;
  overflow-x: hidden;
`;

export const quoteBox = css`
  flex: 1 1 500px;
  max-width: 600px;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const brand = css`
  font-family: 'Arial Black', sans-serif;
  font-size: 20px;
  letter-spacing: 4px;
  color: #555;
  margin-bottom: 20px;
`;

export const quoteText = css`
  border-left: 4px solid black;
  padding-left: 20px;
  font-size: 16px;
  line-height: 1.7;
  font-weight: 500;
  color: #222;
`;

export const quoteMark = css`
  font-size: 24px;
  font-weight: bold;
  color: black;
`;

export const author = css`
  margin-top: 20px;
  font-size: 14px;
  color: #666;

  strong {
    display: block;
    font-weight: bold;
    margin-bottom: 4px;
  }
`;

// 유튜브 영상 부분
export const videoBox = css`
  position: relative;
  flex: 1 1 400px;      /* flex-basis: 400px로 영상 가로 최소 크기 조절 */
  max-width: 480px;     /* 최대 가로 크기 제한 */
  width: 100%;          /* 부모 폭에 맞게 */

  iframe {
    position: absolute !important; /* videoBox 내부 절대 위치 지정 */
    top: 0 !important;
    left: 0 !important;
    width: 100% !important;       /* 부모(videoBox) 전체 너비 */
    height: 100% !important;      /* 부모(videoBox) 전체 높이 */
    border: none;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;