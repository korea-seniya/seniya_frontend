/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const container = css`
  max-width: 800px;
  margin: 50px auto;
  padding: 30px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-family: 'Arial', sans-serif;
`;

export const imageNameDiv = css`
  display: flex;
  align-items: flex-start;
  gap: 30px;
  margin-bottom: 30px;
`;

export const imageDiv = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const imageBox = css`
  width: 150px;
  height: 150px;
  border: 2px dashed #ccc;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: #f9f9f9;
`;

export const imageButton = css`
  padding: 8px 15px;
  background-color: #5B6DC6;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

export const nameDiv = css`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const label = css`
  font-weight: bold;
  margin-bottom: 5px;
  color: #333;
`;

export const input = css`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  box-sizing: border-box;
`;

export const textArea = css`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  min-height: 80px;
  resize: vertical;
  box-sizing: border-box;
`;

export const select = css`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  background-color: white;
  box-sizing: border-box;
`;

export const certRow = css`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  align-items: center;
`;

export const certInput = css`
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const submitButton = css`
  width: 100%;
  padding: 12px 20px;
  background-color: #5B6DC6;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.1rem;
  cursor: pointer;
  margin-top: 20px;
  &:hover {
    background-color: #0056b3;
  }
`;

export const addCertButton = css`
  padding: 8px 15px;
  background-color: #6c757d;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  &:hover {
    background-color: #5a6268;
  }
`;

export const removeCertButton = css`
  padding: 6px 10px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #c82333;
  }
`;