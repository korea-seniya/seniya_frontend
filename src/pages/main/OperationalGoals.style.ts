import { css } from '@emotion/react';

export const heroSection = (imageUrl: string) => css`
  width: 100%;
  height: 400px;
  background-image: url(${imageUrl});
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

export const heroText = css`
  position: absolute;
  bottom: 30px;
  text-align: center;
  color: white;
  font-size: 1.7rem;
  font-weight: 700;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.6);
  h2 {
    margin: 0.2rem 0; 
  }

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export const wrapper = css`
  max-width: 1200px;
  margin: 2rem auto 1rem;
  padding: 3rem 1rem;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const topSection = css`
  text-align: center;
`;

export const sectionTag = css`
  font-size: 0.85rem;
  color: #555;
  letter-spacing: 1px;
`;

export const pageTitle = css`
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0.5rem 0;
  
`;

export const detailSection = css`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const detailRow = css`
  display: flex;
  gap: 2rem;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const detailLabel = css`
  width: 120px;
  font-weight: bold;
  color: #1a2f5a;
  font-size: 1.2rem;
  border-left: 3px solid #1a2f5a;
  padding-left: 0.8rem;
  flex-shrink: 0;
  margin-top: 27px;
`;

export const detailContent = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const detailMain = css`
  font-size: 1.4rem;
  font-weight: 500;
  color: #222;
  line-height: 1.5;
`;

export const detailSub = css`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
`;
