import { css } from '@emotion/react';

export const container = css`
  width: 100%;
  background-color: #333;
  color: white;

  /* ✅ 스크롤 방지 핵심 */
  box-sizing: border-box;
  overflow-x: hidden;

  padding: 30px 60px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  font-size: 14px;
  flex-wrap: wrap; /* 너비 좁을 때 줄바꿈 허용 */

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    align-items: center;
    text-align: center;
    padding: 30px 20px;
  }
`;

export const section = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 100%;
  overflow-wrap: break-word; /* 긴 단어 자동 줄바꿈 */
`;

export const links = css`
  a {
    color: white;
    text-decoration: none;
    word-break: keep-all;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const copyright = css`
  font-size: 12px;
  color: #aaa;
  margin-top: 10px;
`;
