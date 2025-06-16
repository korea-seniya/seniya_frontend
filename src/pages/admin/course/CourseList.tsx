/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useEffect, useState } from 'react';

import * as style from './courseList.style'
import CourseModal from '../../../components/admin/course/courseDetailModal';
import { courseList } from '../../../apis/course/course';
import type { Course } from '../../../types/course.type';
import Header from '../../../components/header';
import AdminSidebar from '../../../components/admin/AdminSidebar';

function CourseList() {

  localStorage.setItem("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6ImRrZGxlbDEyMyIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc1MDA1NDE2MCwiZXhwIjoxNzUwMDU3NzYwfQ.23Vph51g8hGJ71_Tt6bBxCTNN8bEp6RClIJqO6ORdZI");


  const [modalOpen, setModalOpen] = useState(false);
  const [courses, setCourses] = useState<Course[]>([]);

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

  useEffect(() => {
    async function fetchCourses() {
      try {
        const response = await courseList(); // ResponseDto<CourseListResponseDto> 타입

        if (response.code === 'SU' && response.data?.courseList) {
          setCourses(response.data.courseList);
        } else {
          // alert(response.message || '수업 목록을 불러오는데 실패했습니다.');
        }

      } catch (error) {
        // alert('서버와 통신 중 오류가 발생했습니다.');
      }
    }

    fetchCourses();
  }, []);



  return (<>
    <Header />
    <AdminSidebar />
    <div css={style.containerStyle} >
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
            <tr key={course.courseId} css={style.trStyle}>
              <td css={style.tdStyle}>{course.trainerProfile.user.name}</td>
              <td css={style.tdStyle}>{course.title}</td>
              <td css={style.tdStyle}>{course.date}</td>
              <td css={style.tdStyle}>{course.category}</td>
              <td css={style.tdStyle}>{course.createdAt}</td>
              <td css={style.tdStyle}>{course.updatedAt}</td>
              <td css={style.tdStyle}>{course.room}</td>
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
    </div >
  </>
  );
}

export default CourseList;
