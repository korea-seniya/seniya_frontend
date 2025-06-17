/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { use, useEffect, useState } from 'react';

import * as style from './courseList.style'
import CourseModal from '../../../components/admin/course/courseDetailModal';
import Header from '../../../components/header';
import AdminSidebar from '../../../components/admin/AdminSidebar';
import type { GetCourseListResponseDto } from '../../../dtos/response/GetCourseList.response.dto';
import { getCourseList } from '../../../apis/course/courseList';
import type { GetCourseDetailResponseDto } from '../../../dtos/response/GetCourseDetail.response.dto';
import { getCourseDetail } from '../../../apis/course/courseDetail';



function CourseList() {

  const [modalOpen, setModalOpen] = useState(false);

  const [courses, setCourses] = useState<GetCourseListResponseDto[]>([]);
  const [selectedCourse, setSelectedCourse] = useState<GetCourseListResponseDto | null>(null);

  const openModal = (course: GetCourseDetailResponseDto) => {
    setSelectedCourse(course);
    setModalOpen(true);
  }
  const closeModal = () => {
    setModalOpen(false);
    setSelectedCourse(null);
  }

  useEffect(() => {
    async function fetchCourses() {
      try {
        const response = await getCourseList();
        if (response.code === "SU" && Array.isArray(response.data)) {
          setCourses(response.data);
          console.log(response.data);
        } else {
          console.log(response.message);
        }
      } catch (err) {
        console.log(err);
      }
    }
    fetchCourses();
  }, []);

  const openModalWithCourseId = async (id: number) => {
    try {
      const response = await getCourseDetail(id);
      if (response.code === "SU" && response.data) {
        setSelectedCourse(response.data);
        setModalOpen(true);
      } else {
        console.log(response.message);
      }
    } catch (err) {
      console.log(err);
    }
  }



  const handleDelete = () => {
    alert('수업 삭제됨');
    closeModal();
  };

  const handleUpdate = () => {







    alert('수업 수정됨');
    closeModal();
  };

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
          {courses.map((course) => (
            <tr key={course.id} css={style.trStyle}>
              <td css={style.tdStyle}>{course.name}</td>
              <td css={style.tdStyle}>{course.title}</td>
              <td css={style.tdStyle}>{course.classDate}</td>
              <td css={style.tdStyle}>{course.category}</td>
              <td css={style.tdStyle}>{course.createdAt}</td>
              <td css={style.tdStyle}>{course.updatedAt}</td>
              <td css={style.tdStyle}>{course.classroom}</td>
              <td css={style.tdStyle}>
                <button css={style.detailButtonStyle} onClick={() => openModalWithCourseId(course.id)}>detail</button>
                <CourseModal
                  isOpen={modalOpen}
                  onClose={closeModal}
                  onDelete={handleDelete}
                  onUpdate={handleUpdate}
                  course={selectedCourse}
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
