/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import type { CourseList } from './CourseList';
import {
  nameStyle,
  searchbarStyle,
  selectStyle,
  inputStyle,
  buttonStyle,
  tableWrapper,
  postContainer,
  separatorLine,
  postListTotal,
  tableHeader,
  tableRow,
  tableCell,
  detailButtonStyle,
  modalOverlayStyle,
  modalContentStyle,
  closeButtonStyle
} from './CourseList.style';
import { getCourseList } from '../../apis/course/courseList';

function CourseListPage() {
  const [courses, setCourses] = useState<CourseList[]>([]);
  const [searchType, setSearchType] = useState('title');
  const [searchText, setSearchText] = useState('');
  const [selectedCourse, setSelectedCourse] = useState<CourseList | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
  const fetchCourses = async () => {
    try {
      const response = await getCourseList();

      console.log('response (array):', response);

      // response는 이미 배열이므로 바로 사용
      if (Array.isArray(response) && response.length > 0) {
        const mapped = response.map((item) => ({
          courseId: item.courseId,
          name: item.name,
          title: item.title,
          description: item.description,
          classDate: item.classDate,
          classStartTime: item.classStartTime,
          classEndTime: item.classEndTime,
          category: item.category,
          classroom: item.classroom,
        }));

        setCourses(mapped);
      } else {
        setCourses([]);
      }
    } catch (error) {
      console.error('수업 목록 불러오기 실패:', error);
      setCourses([]);
    }
  };

  fetchCourses();
}, []);


  const openModal = (course: CourseList) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCourse(null);
    setIsModalOpen(false);
  };

  return (
    <div css={postContainer}>
      <h1 css={nameStyle}>수업 목록</h1>

      <div css={searchbarStyle}>
        <select
          css={selectStyle}
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
        >
          <option value="title">제목</option>
          <option value="trainer">트레이너</option>
          <option value="category">카테고리</option>
        </select>
        <input
          css={inputStyle}
          type="text"
          placeholder="검색어를 입력해주세요."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button css={buttonStyle}>검색</button>
      </div>

      <div css={tableWrapper}>
        <div css={postListTotal}>전체 {courses.length}건</div>
        <div css={separatorLine}></div>

        <div css={tableHeader}>
          <div css={tableCell}>카테고리</div>
          <div css={tableCell}>수업명</div>
          <div css={tableCell}>설명</div>
          <div css={tableCell}>시간</div>
          <div css={tableCell}>날짜</div>
          <div css={tableCell}>강의장</div>
          <div css={tableCell}>트레이너</div>
          <div css={tableCell}>상세보기</div>
        </div>

        {courses.map((course) => (
          <div key={course.courseId} css={tableRow}>
            <div css={tableCell}>{course.category}</div>
            <div css={tableCell}>{course.title}</div>
            <div css={tableCell}>{course.description}</div>
            <div css={tableCell}>
              {course.classStartTime} ~ {course.classEndTime}
            </div>
            <div css={tableCell}>{course.classDate.slice(0, 10)}</div>
            <div css={tableCell}>{course.classroom}</div>
            <div css={tableCell}>{course.name}</div>
            <div css={tableCell}>
              <button css={detailButtonStyle} onClick={() => openModal(course)}>상세보기</button>
            </div>
          </div>
        ))}

        <div css={separatorLine}></div>
      </div>

      {isModalOpen && selectedCourse && (
        <div css={modalOverlayStyle} onClick={closeModal}>
          <div css={modalContentStyle} onClick={(e) => e.stopPropagation()}>
            <h2>{selectedCourse.title}</h2>
            <p>카테고리: {selectedCourse.category}</p>
            <p>설명: {selectedCourse.description}</p>
            <p>
              시간: {selectedCourse.classStartTime} ~ {selectedCourse.classEndTime}
            </p>
            <p>날짜: {selectedCourse.classDate}</p>
            <p>강의장: {selectedCourse.classroom}</p>
            <p>트레이너: {selectedCourse.name}</p>

            <button css={closeButtonStyle} onClick={closeModal}>닫기</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CourseListPage;
