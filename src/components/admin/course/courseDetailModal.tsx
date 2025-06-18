/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState, useEffect } from 'react';
import * as style from './courseDetailModal.style';
import type { GetCourseDetailResponseDto } from '../../../dtos/course/response/GetCourseDetail.response.dto';

type CourseModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
  onUpdate: (updatedCourse: GetCourseDetailResponseDto) => void;
  course: GetCourseDetailResponseDto | null;
};

function CourseModal(props: CourseModalProps) {
  const { isOpen, onClose, onDelete, onUpdate, course } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [editableCourse, setEditableCourse] = useState<GetCourseDetailResponseDto | null>(null);

  useEffect(() => {
    if (isOpen && course) {
      setEditableCourse({ ...course });
      setIsEditing(false);
    }
  }, [isOpen, course]);

  if (!isOpen || !editableCourse) return null;

  const handleChange = (field: keyof GetCourseDetailResponseDto, value: string) => {
    setEditableCourse((prev) => (prev ? { ...prev, [field]: value } : prev));
  };

  const handleUpdateClick = () => {
    if (isEditing) {
      if (editableCourse) {
        onUpdate(editableCourse);
      }
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  };

  const handleDeleteClick = () => {
    onDelete();
  };

  return (
    <div css={style.overlay}>
      <div css={style.modal}>
        <form css={style.form} onSubmit={(e) => e.preventDefault()}>
          <div css={style.row}>
            <label>수업 제목</label>
            <input
              type="text"
              value={editableCourse.title}
              readOnly={!isEditing}
              onChange={(e) => handleChange('title', e.target.value)}
            />
          </div>

          <div css={style.row}>
            <label>수업 설명</label>
            <input
              type="text"
              value={editableCourse.description}
              readOnly={!isEditing}
              onChange={(e) => handleChange('description', e.target.value)}
            />
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <div css={style.row}>
              <label>담당 트레이너 ID</label>
              <input
                type="text"
                value={editableCourse.trainerId}
                readOnly={!isEditing}
                onChange={(e) => handleChange('trainerId', e.target.value)}
              />
            </div>
            <div css={style.row}>
              <label>담당 트레이너 이름</label>
              <input
                type="text"
                value={editableCourse.trainerName}
                readOnly={!isEditing}
                onChange={(e) => handleChange('trainerName', e.target.value)}
              />
            </div>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <div css={style.row}>
              <label>수업 날짜</label>
              <input
                type="date"
                value={editableCourse.classDate.slice(0, 10)}
                readOnly={!isEditing}
                onChange={(e) => handleChange('classDate', e.target.value)}
              />
            </div>
            <div css={style.row}>
              <label>수업 시간</label>
              <div style={{ display: 'flex', gap: '5px' }}>
                <input
                  type="time"
                  style={{ flex: 1 }}
                  value={editableCourse.classStartTime}
                  readOnly={!isEditing}
                  onChange={(e) => handleChange('classStartTime', e.target.value)}
                />
                <span>–</span>
                <input
                  type="time"
                  style={{ flex: 1 }}
                  value={editableCourse.classEndTime}
                  readOnly={!isEditing}
                  onChange={(e) => handleChange('classEndTime', e.target.value)}
                />
              </div>
            </div>
          </div>

          <div css={style.row}>
            <label>카테고리</label>
            {isEditing ? (
              <select
                name="category"
                value={editableCourse.category}
                onChange={(e) => handleChange('category', e.target.value)}
              >
                <option value="SLEEP">SLEEP</option>
                <option value="REHABILITATION">REHABILITATION</option>
                <option value="EXERCISE">EXERCISE</option>
                <option value="PSYCHOLOGY">PSYCHOLOGY</option>
              </select>
            ) : (
              <input
                type="text"
                value={editableCourse.category}
                readOnly
              />
            )}
          </div>

          <div css={style.row}>
            <label>강의장</label>
            <input
              type="text"
              value={editableCourse.classroom}
              readOnly={!isEditing}
              onChange={(e) => handleChange('classroom', e.target.value)}
            />
          </div>

          <div css={style.buttonGroup}>
            <button type="button" css={style.backBtn} onClick={onClose}>
              뒤로 가기
            </button>
            <button type="button" css={style.deleteBtn} onClick={handleDeleteClick}>
              수업 삭제
            </button>
            <button type="button" css={style.updateBtn} onClick={handleUpdateClick}>
              {isEditing ? '수업 수정 확정' : '수업 수정'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CourseModal;
