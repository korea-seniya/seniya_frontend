import { css, keyframes } from '@emotion/react';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.98);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const wrapper = css`
  max-width: 1200px;
  margin: 4rem auto 1rem;
  padding: 1rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const topSection = css`
  text-align: center;
  margin-bottom: 0.5rem;
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

export const mapBox = css`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: -0.5rem;
`;

export const mapImage = css`
  width: 100%;
  max-width: 1000px;
  height: auto;
  border-radius: 12px;
  border: 1px solid #ddd;
  animation: ${fadeIn} 1s ease-out;
`;

export const infoBox = css`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  column-gap: 6rem;
  gap: 3rem;
  margin-top: 2rem;
  border-top: 1px solid #ddd;
  padding-top: 2rem;
`;

const blockBase = css`
  flex: 1;
  min-width: 300px;

  h3 {
    font-size: 1.1rem;
    font-weight: bold;
    margin-bottom: 0.6rem;
    color: #111;
  }

  p {
    font-size: 1rem;
    color: #444;
    line-height: 1.6;
  }
`;

export const addressBlock = css`
  ${blockBase}
  margin-left: 4rem;
`;

export const contectBlock = css`
  ${blockBase}
  margin-left: 26rem;

  @media (max-width: 768px) {
    text-align: left;
  }
`;

export const routeBox = css`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #ddd;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const routeItem = css`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  flex: 1;
  min-width: 280px;

  img {
    width: 45px;
    height: 45px;
    flex-shrink: 0;
    margin-top: 2.2rem;
    margin-right: 1rem;
  }

  .text {
    h4 {
      font-size: 1.05rem;
      font-weight: bold;
      margin-bottom: 0.4rem;
      color: #333;
    }

    p {
      color: #444;
      font-size: 0.95rem;
      line-height: 1.6;
    }
  }
`;
