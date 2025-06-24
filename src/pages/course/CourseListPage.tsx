/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import type { CourseList } from './CourseList';
import type { GetUserCourseDetailResponseDto } from '../../dtos/userCourse/response/GetUserCourseDetail.response.dto';
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
import {
  getCourseList,
  searchCoursesByTrainer,
  searchCoursesByCategory,
  getCourseById
} from '../../apis/course/courseList';

function CourseListPage() {
  const [courses, setCourses] = useState<CourseList[]>([]);
  const [searchType, setSearchType] = useState<'trainer' | 'category'>('trainer');
  const [searchText, setSearchText] = useState('');
  const [selectedCourseDetail, setSelectedCourseDetail] = useState<GetUserCourseDetailResponseDto | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const categoryMap: Record<string, string> = {
    수면: 'SLEEP',
    재활: 'REHABILITATION',
    운동: 'EXERCISE',
    심리: 'PSYCHOLOGY',
  };

  useEffect(() => {
    const trainerName = searchParams.get('trainerName') || '';
    const category = searchParams.get('category') || '';

    setSearchText(trainerName || category);

    const fetchCourses = async () => {
      try {
        if (searchType === 'trainer') {
          if (!trainerName.trim()) {
            const all = await getCourseList();
            setCourses(all);
          } else {
            const result = await searchCoursesByTrainer(trainerName);
            setCourses(result.data || []);
          }
        } else if (searchType === 'category') {
          const englishCategory = categoryMap[category] || category.toUpperCase();
          const result = await searchCoursesByCategory(englishCategory);
          setCourses(result.data || []);
        }
      } catch (error) {
        alert('검색 실패');
        setCourses([]);
      }
    };

    fetchCourses();
  }, [searchParams, searchType]);

  const handleSearch = () => {
    if (searchText.trim() === '') {
      setSearchParams({});
      return;
    }

    if (searchType === 'trainer') {
      setSearchParams({ trainerName: searchText });
    } else if (searchType === 'category') {
      setSearchParams({ category: searchText });
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };
  const openModal = async (course: CourseList) => {
    try {
      const response = await getCourseById(course.courseId);
      if (response.data) {
        setSelectedCourseDetail(response.data);
        setIsModalOpen(true);
      } else {
        alert('상세 정보를 불러오지 못했습니다.');
      }
    } catch (error) {
      console.error(error);
      alert('상세 정보 조회 중 오류가 발생했습니다.');
    }
  };

  const closeModal = () => {
    setSelectedCourseDetail(null);
    setIsModalOpen(false);
  };

  return (
    <div css={postContainer}>
      <h1 css={nameStyle}>수업 목록</h1>

      <div css={searchbarStyle}>
        <select
          css={selectStyle}
          value={searchType}
          onChange={(e) => setSearchType(e.target.value as 'trainer' | 'category')}
        >
          <option value="trainer">트레이너</option>
          <option value="category">카테고리</option>
        </select>
        <input
          css={inputStyle}
          type="text"
          placeholder={searchType === 'trainer' ? '트레이너 이름으로 검색' : '카테고리 입력 (수면, 재활, 운동, 심리)'}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={onKeyDown}
        />
        <button css={buttonStyle} onClick={handleSearch}>검색</button>
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
            <div css={tableCell}>{course.classStartTime} ~ {course.classEndTime}</div>
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

      {isModalOpen && selectedCourseDetail && (
        <div css={modalOverlayStyle} onClick={closeModal}>
          <div css={modalContentStyle} onClick={(e) => e.stopPropagation()}>
            <h2>{selectedCourseDetail.title}</h2>
            <p>카테고리: {selectedCourseDetail.category}</p>
            <p>설명: {selectedCourseDetail.description}</p>
            <p>시간: {selectedCourseDetail.classStartTime} ~ {selectedCourseDetail.classEndTime}</p>
            <p>날짜: {selectedCourseDetail.classDate}</p>
            <p>강의장: {selectedCourseDetail.classroom}</p>
            <p>트레이너: {selectedCourseDetail.trainerName}</p>
            <button css={closeButtonStyle} onClick={closeModal}>닫기</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CourseListPage;
