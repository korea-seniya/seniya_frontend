import { css } from '@emotion/react';

export const containerStyle = css`
  max-width: 500px;
  margin: 60px auto;
  padding: 40px;
  border: 1px solid #cfd4ff;
  border-radius: 12px;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.1);
`;

export const titleStyle = css`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
  text-shadow: 1px 1px #ddd;
`;

export const labelStyle = css`
  display: block;
  margin-bottom: 20px;
  font-weight: 500;
`;

export const inputStyle = css`
  display: block;
  width: 100%;
  padding: 10px;
  margin-top: 6px;
  border: 1px solid #a4b1ff;
  border-radius: 8px;
  background-color: #fff;
  font-size: 14px;
`;

export const dateWrapperStyle = css`
  display: flex;
  gap: 10px;
  margin-top: 8px;
`;

export const dateBoxStyle = css`
  flex: 1;
  padding: 10px;
  border: 1px solid #a4b1ff;
  border-radius: 8px;
  text-align: center;
  background-color: #fff;
`;

export const withdrawButtonStyle = css`
  display: block;
  margin: 40px auto 0;
  padding: 10px 20px;
  font-size: 14px;
  color: white;
  background-color: #0070f3;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #005bb5;
  }
`;

export const deleteButtonStyle = css`
  display: block;
  margin: 20px auto 0;
  padding: 10px 20px;
  font-size: 14px;
  color: white;
  background-color: #e53e3e;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #c53030;
  }
`;

export const modalOverlayStyle = css`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const modalBoxStyle = css`
  background-color: white;
  border-radius: 8px;
  padding: 24px;
  max-width: 400px;
  width: 90%;
  text-align: center;
`;

export const modalButtonStyle = css`
  padding: 8px 16px;
  margin: 10px 6px 0;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
`;

export const confirmButtonStyle = css`
  ${modalButtonStyle};
  background-color: #e53e3e;
  color: white;

  &:hover {
    background-color: #c53030;
  }
`;

export const cancelButtonStyle = css`
  ${modalButtonStyle};
  background-color: #ccc;
  color: #333;

  &:hover {
    background-color: #bbb;
  }
`;
