/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState } from 'react';

import * as style from './courseList.style'
import CourseModal from '../../../components/admin/course/courseDetailModal';


function CourseList() {

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

  const courses = [
    {
      id: 1,
      name: '이름1',
      title: '제목1',
      classDate: '25-05-28',
      category: '카테고리1',
      createdAt: '25-05-28',
      updatedAt: 'X',
      classroom: '앞집',
    }, {
      id: 1,
      name: '이름2',
      title: '제목2',
      classDate: '25-05-28',
      category: '카테고리2',
      createdAt: '25-05-28',
      updatedAt: 'X',
      classroom: '뒷집',
    }, {
      id: 1,
      name: '이름3',
      title: '제목3',
      classDate: '25-05-28',
      category: '카테고리3',
      createdAt: '25-05-28',
      updatedAt: 'X',
      classroom: '옆집',
    },
  ];

  return (
    <div css={style.containerStyle}>
      <table css={style.tableStyle}>
        <thead>
          <tr css={style.firtTrStyle}>
            <th css={style.thStyle}>트레이너</th>
            <th css={style.thStyle}>수업 제목</th>
            <th css={style.thStyle}>수업 날짜</th>
            <th css={style.thStyle}>카테고리</th>
            <th css={style.thStyle}>개설 날짜</th>
            <th css={style.thStyle}>수정 날짜</th>
            <th css={style.thStyle}>강의장</th>
            <th css={style.thStyle}>세부</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={index} css={style.trStyle}>
              <td css={style.tdStyle}>{course.name}</td>
              <td css={style.tdStyle}>{course.title}</td>
              <td css={style.tdStyle}>{course.classDate}</td>
              <td css={style.tdStyle}>{course.category}</td>
              <td css={style.tdStyle}>{course.createdAt}</td>
              <td css={style.tdStyle}>{course.updatedAt}</td>
              <td css={style.tdStyle}>{course.classroom}</td>
              <td css={style.tdStyle}>
                <button css={style.detailButtonStyle} onClick={openModal} >detail</button>
                <CourseModal
                  isOpen={modalOpen}
                  onClose={closeModal}
                  onDelete={handleDelete}
                  onUpdate={handleUpdate}
                />
              </td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  );
}

export default CourseList;
