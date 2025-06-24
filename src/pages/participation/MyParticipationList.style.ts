import { css } from '@emotion/react';

// 📌 기본 테이블 관련
export const containerStyle = css`
  padding: 2rem;
`;

export const titleStyle = css`
  font-size: 1.8rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2.5rem;
`;

export const tableStyle = css`
  width: 100%;
  border-collapse: collapse;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  overflow: hidden;
`;

export const thStyle = css`
  background-color: #f9fafb;
  color: #3b82f6;
  font-weight: 600;
  font-size: 0.95rem;
  padding: 1rem;
  border-bottom: 2px solid #3b82f6;
  text-align: center;
`;

export const tdStyle = css`
  text-align: center;
  padding: 0.9rem 1rem;
  border-bottom: 1px solid #e5e7eb;
  font-size: 0.95rem;
  color: #333;
`;

export const cancelButtonStyle = css`
  background-color: #6d28d9;
  color: white;
  border: none;
  padding: 0.45rem 1.1rem;
  border-radius: 999px;
  font-size: 0.85rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  font-weight: 500;

  &:hover {
    background-color: #5b21b6;
  }
`;

// 📌 CancelModal 스타일
export const modalOverlayStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const modalContentStyle = css`
  background: white;
  padding: 2rem 2.5rem;
  border-radius: 20px;
  width: 700px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
`;

export const modalTitleStyle = css`
  font-size: 1.6rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1.5rem;
`;

export const modalCardStyle = css`
  display: flex;
  background: #f9f9f9;
  border-radius: 12px;
  padding: 1rem;
  margin: 1.5rem 0;
  gap: 1rem;
`;

export const modalImageStyle = css`
  width: 160px;
  height: auto;
  border-radius: 0.5rem;
`;

export const modalTextStyle = css`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  font-size: 0.95rem;
  color: #333;

  strong {
    color: #1e40af;
  }
`;

export const modalFooterStyle = css`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;

export const modalButtonStyle = css`
  background-color: #6d28d9;
  color: white;
  padding: 0.6rem 1.4rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background-color: #5b21b6;
  }
`;

export const backButtonStyle = css`
  background-color: #e5e7eb;
  color: #374151;
  padding: 0.6rem 1.4rem;
  font-weight: 500;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background-color: #d1d5db;
  }
`;
