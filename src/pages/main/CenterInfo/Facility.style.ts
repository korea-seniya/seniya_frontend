import { css } from '@emotion/react';

export const wrapper = css`
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 1rem 2rem;
`;

export const topSection = css`
  text-align: center;
  margin-bottom: 3rem;
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

export const pageSubtitle = css`
  font-size: 1.1rem;
  font-style: italic;
  color: #555;
`;

export const container = css`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 1rem;
`;

export const title = css`
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 3rem;
  padding-left: 32rem;

  span {
    color: rgb(113, 33, 167);
  }
`;

export const contentBlock = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 7rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const image = css`
  margin-top: 2rem;
  max-width: 450px;
  width: 100%;
  height: auto;
`;

export const floorList = css`
  flex: 1;
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 1rem;
  line-height: 1.8;
  color: #444;

  li {
    padding: 0.8rem 0;
    border-bottom: 1px solid #e0e0e0;

    display: flex;
    align-items: flex-start;
    gap: 0.5rem;

    &:first-of-type {
      border-top: 2px solid rgb(87, 39, 192);
    }
  }

  strong {
    color: rgb(70, 17, 155);
    font-weight: bold;
    min-width: 50px;
  }
`;

export const fadeUp = css`
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s ease, transform 0.8s ease;

  &.show {
    opacity: 1;
    transform: translateY(0);
  }
`;
