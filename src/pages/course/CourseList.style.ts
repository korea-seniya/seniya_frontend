import { css } from '@emotion/react';

export const postContainer = css`
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const nameStyle = css`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 24px;
`;

export const searchbarStyle = css`
  display: flex;
  width: 900px;
  align-items: center;
  padding: 10px;
  border-radius: 999px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background-color: white;
  margin-bottom: 30px;
`;

export const selectStyle = css`
  flex: 1;
  border: none;
  padding: 8px 12px;
  border-radius: 999px 0 0 999px;
  outline: none;
  background-color: #f9f9f9;
  margin-right: 5px;
`;

export const inputStyle = css`
  flex: 4;
  border: none;
  padding: 8px 12px;
  outline: none;
  font-size: 14px;
  background-color: #f9f9f9;
  border-radius: 10px;
`;

export const buttonStyle = css`
  padding: 8px 16px;
  border: none;
  border-radius: 999px;
  background-color: #5c3ec3;
  color: white;
  cursor: pointer;
  margin-left: 8px;
`;

export const tableWrapper = css`
  width: 1200px;
`;

export const postListTotal = css`
  font-size: 14px;
  color: #333;
  margin-bottom: 8px;
`;

export const separatorLine = css`
  border-bottom: 2px solid #4981c2;
  margin: 8px 0;
`;

export const tableHeader = css`
  display: flex;
  align-items: center;
  padding: 12px 0;
  border-bottom: 2px solid #4981c2;
  font-weight: bold;
  background-color: #f5f8fb;
`;

export const tableRow = css`
  display: flex;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #eee;
`;

export const tableCell = css`
  flex: 1;
  text-align: center;
  font-size: 14px;
  color: #333;
`;

export const detailButtonStyle = css`
  padding: 6px 12px;
  border: none;
  border-radius: 6px;
  background-color: #4981c2;
  color: white;
  cursor: pointer;
  font-size: 13px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #3765a0;
  }
`;

export const modalOverlayStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const modalContentStyle = css`
  background-color: #fff;
  padding: 24px;
  border-radius: 12px;
  min-width: 400px;
  max-width: 600px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
`;

export const closeButtonStyle = css`
  margin-top: 16px;
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  background-color: #999;
  color: white;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #777;
  }
`;

export const participationButtonStyle = css`
  margin-top: 16px;
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  background-color: #4658AE;
  color: white;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #6057B2;
  }
`;
