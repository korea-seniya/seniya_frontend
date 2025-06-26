/** @jsxImportSource @emotion/react */
import React from 'react';
import {
  modalOverlayStyle,
  modalContentStyle,
  modalTitleStyle,
  modalCardStyle,
  modalButtonStyle,
  backButtonStyle,
  modalTextStyle,
  modalFooterStyle,
} from './MyParticipationList.style';
import type { Participation } from './participation';

interface Props {
  participation: Participation | null;
  onCancel: () => void;
  onConfirm: () => void;
}

const CancelModal = ({ participation, onCancel, onConfirm }: Props) => {
  if (!participation) return null;

  return (
    <div css={modalOverlayStyle}>
      <div css={modalContentStyle}>
        <h2 css={modalTitleStyle}>수업 취소</h2>
        <p>
          <strong>{participation.trainerName}</strong> 강사님의{' '}
          <strong>[{participation.title}]</strong> 수업 신청을 취소하시겠습니까?
        </p>

        <div css={modalCardStyle}>
          <div css={modalTextStyle}>
            <p><strong>[{participation.category}]</strong> {participation.title}</p>
            <p>{participation.description}</p>
            <p>날짜: {participation.courseDate}</p>
            <p>시간: {participation.courseStartTime} ~ {participation.courseEndTime}</p>
            <p>강의장: {participation.courseRoom}</p>
          </div>
        </div>

        <div css={modalFooterStyle}>
          <button css={backButtonStyle} onClick={onCancel}>뒤로 가기</button>
          <button css={modalButtonStyle} onClick={onConfirm}>수업 취소</button>
        </div>
      </div>
    </div>
  );
};

export default CancelModal;
