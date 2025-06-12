// pages/CourseDetail.tsx
import React, { useState } from 'react';
import LessonModal from '../../../components/admin/course/courseDetailModal';


function CourseDetail() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleDelete = () => {
    alert('수업 삭제됨');
    closeModal();
  };

  const handleUpdate = () => {
    alert('수업 수정됨');
    closeModal();
  };

  return (
    <div>
      <h1>수업 상세 페이지</h1>
      <button onClick={openModal}>수업 수정하기</button>

      <LessonModal
        isOpen={modalOpen}
        onClose={closeModal}
        onDelete={handleDelete}
        onUpdate={handleUpdate}
      />
    </div>
  );
}

export default CourseDetail;
