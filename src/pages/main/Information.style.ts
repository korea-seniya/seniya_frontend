import { css } from '@emotion/react';

export const pageContainer = (imageUrl: string) => css`
  width: 100%;
  height: 300px;
  background-image: url(${imageUrl});
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const wrapper = css`
  max-width: 1200px;
  width: 100%;
  background-color: white;
  padding: 3rem 2rem;
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 120px;
`;

export const titleBlock = css`
  text-align: center;
`;

export const subTitle = css`
  font-size: 0.85rem;
  color: #555;
  letter-spacing: 1px;
`;

export const mainTitle = css`
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0.5rem 0;
`;

export const highlight = css`
  font-size: 1.2rem;
  color: #007acc;
  line-height: 1.3;
  font-weight: 500;
  font-style: italic;
`;

export const contentBlock = css`
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const imageStyle = css`
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 18px;
  flex: 1.5;
  margin-top: 20px;
  margin-left: 1.5rem;
  
`;

export const textBlock = css`
  flex: 2;
  font-size: 1rem;
  color: #333;
  line-height: 1.8;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-right : 1.5rem;
`;
export const emphasizedText = css`
  font-size: 1.2rem;
  font-weight: 700;
  color: #111;
`;
