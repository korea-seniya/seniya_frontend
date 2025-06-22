/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

// 전체 컨테이너 스타일 (가운데 정렬)
export const containerStyle = css`
  max-width: 480px;
  margin: 0 auto;
  padding: 80px 20px;
  text-align: center;
`;

// 타이틀
export const titleStyle = css`
  font-size: 24px;
  font-weight: bold;
  color: #5a6acf;
  margin-bottom: 16px;
`;

// 이메일 입력 영역
export const fieldGroupStyle = css`
  margin-top: 40px;
`;

// 숨겨진 라벨 (접근성)
export const labelStyle = css`
  display: none;
`;

// 입력 필드 스타일
export const inputStyle = css`
  width: 100%;
  height: 56px;
  padding: 0 16px;
  font-size: 16px;
  border: 1.5px solid #a8b0d3;
  border-radius: 8px;
  box-sizing: border-box;
  outline: none;

  ::placeholder {
    color: #c4c4c4;
  }
`;

// 버튼 영역 스타일
export const buttonWrapperStyle = css`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

// 인증 코드 보내기 버튼 스타일
export const submitButtonStyle = css`
  width: 100%;
  height: 56px;
  background-color: #5a6acf;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #4859b4;
  }
`;

// 보조 버튼 (비밀번호 재설정 버튼)
export const secondaryButtonStyle = css`
  width: 100%;
  height: 56px;
  background-color: white;
  color: #5a6acf;
  font-size: 16px;
  font-weight: bold;
  border: 1.5px solid #5a6acf;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f4f6ff;
  }
`;

// 성공/실패 메시지
export const messageStyle = (isSuccess: boolean | null) => css`
  margin-top: 12px;
  font-size: 14px;
  color: ${isSuccess === null
    ? '#666'
    : isSuccess
    ? '#2e7d32' // 초록색
    : '#d32f2f'}; // 빨간색
`;
