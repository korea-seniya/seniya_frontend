/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import React from 'react';
import * as style from './courseDetailModal.style'


type courseModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
  onUpdate: () => void;
};

const CourseModal: React.FC<courseModalProps> = ({ isOpen, onClose, onDelete, onUpdate }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div css={style.overlay}>
      <div css={style.modal}>
        <form css={style.form}>
          <div css={style.row}>
            <label>수업 제목</label>
            <input type="text" />
          </div>

          <div css={style.row}>
            <label>수업 설명</label>
            <input type="text" />
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <div css={style.row}>
              <label>담당 트레이너 ID</label>
              <input type="text" />
            </div>
            <div css={style.row}>
              <label>담당 트레이너 이름</label>
              <input type="text" />
            </div>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <div css={style.row}>
              <label>수업 날짜</label>
              <input type="date" />
            </div>
            <div css={style.row}>
              <label>수업 시간</label>
              <div style={{ display: 'flex', gap: '5px' }}>
                <input type="time" style={{ flex: 1 }} />
                <span>–</span>
                <input type="time" style={{ flex: 1 }} />
              </div>
            </div>
          </div>

          <div css={style.row}>
            <label>카테고리</label>
            <input type="text" name='category' />
          </div>

          <div css={style.row}>
            <label>강의장</label>
            <input type="text" />
          </div>

          <div css={style.buttonGroup}>
            <button type="button" css={style.backBtn} onClick={onClose}>
              뒤로 가기
            </button>
            <button type="button" css={style.deleteBtn} onClick={onDelete}>
              수업 개설 삭제
            </button>
            <button type="submit" css={style.updateBtn} onClick={onUpdate}>
              수업 수정
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CourseModal;
