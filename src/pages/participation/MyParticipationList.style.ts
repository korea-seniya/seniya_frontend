import { css } from '@emotion/react';

export const containerStyle = css`
  padding: 2rem;
`;

export const titleStyle = css`
  font-size: 1.8rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1.5rem;
`;

export const tableStyle = css`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
`;

export const thStyle = css`
  background-color: #f3f4f6;
  padding: 0.75rem;
  border-bottom: 2px solid #6366f1;
  font-weight: 600;
  color: #4f46e5;
  font-size: 0.95rem;
`;

export const tdStyle = css`
  text-align: center;
  padding: 0.75rem;
  border-bottom: 1px solid #e5e7eb;
  font-size: 0.92rem;
`;

export const cancelButtonStyle = css`
  background-color: #7c3aed;
  color: white;
  border: none;
  padding: 0.4rem 0.8rem;
  border-radius: 0.375rem;
  font-size: 0.85rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #5b21b6;
  }
`;

// ✅ 모달 관련 스타일 추가

export const modalOverlayStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(50, 50, 50, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const modalContentStyle = css`
  background: white;
  padding: 2rem;
  width: 640px;
  border-radius: 1rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
`;

export const modalTitleStyle = css`
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const modalCardStyle = css`
  display: flex;
  gap: 1rem;
  background: #f9f9f9;
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 0.75rem;
`;

export const modalImageStyle = css`
  width: 140px;
  height: auto;
  border-radius: 0.5rem;
`;

export const modalTextStyle = css`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 0.95rem;
`;

export const modalFooterStyle = css`
  text-align: right;
  margin-top: 1.5rem;
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
`;

export const modalButtonStyle = css`
  background-color: #7c3aed;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
`;

export const backButtonStyle = css`
  background-color: #e5e7eb;
  color: #374151;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
`;
