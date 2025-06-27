/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
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
  closeButtonStyle,
  participationButtonStyle
} from './CourseList.style';
import {
  getCourseList,
  getCourseById
} from '../../apis/course/courseList';
import { quickSearch } from '../../apis/main/main';
import { applyCourse } from '../../apis/course/courseList';
import Header from '../../components/header';
import Footer from '../../components/main/footer/Footer';
import { useUserStore } from '../../stores/user.store';
import type { GetUserCourseListResponseDto } from '../../dtos/userCourse/response/GetUserCourseList.response.dto';

function CourseListPage() {
  const [allCourses, setAllCourses] = useState<GetUserCourseListResponseDto[]>([]);
  const [filteredCourses, setFilteredCourses] = useState<CourseList[]>([]);
  const [searchType, setSearchType] = useState<'trainer' | 'category'>('trainer');
  const [searchText, setSearchText] = useState('');
  const [selectedCourseDetail, setSelectedCourseDetail] = useState<GetUserCourseDetailResponseDto | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const { isLogin } = useUserStore(); 

  useEffect(() => {
    const fetchCourses = async () => {
      const category = searchParams.get('category') || '';
      const trainer = searchParams.get('trainer') || '';
      const classDate = searchParams.get('classDate') || '';
      const classStartTime = searchParams.get('classStartTime') || '';
      const classEndTime = searchParams.get('classEndTime') || '';

      const hasFilter = category || trainer || classDate || classStartTime || classEndTime;

      try {
        if (hasFilter) {
          const dto = { category, trainer, classDate, classStartTime, classEndTime };
          const response = await quickSearch(dto);
          if (response.code === 'SU' && Array.isArray(response.data)) {
            setFilteredCourses(response.data as GetUserCourseListResponseDto[]);
            setAllCourses(response.data as GetUserCourseListResponseDto[]);
          } else {
            setFilteredCourses([]);
            setAllCourses([]);
          }
        } else {
          const response = await getCourseList();
          setFilteredCourses(response);
          setAllCourses(response);
        }
      } catch (error) {
        console.error('수업 목록 또는 검색 실패:', error);
        setFilteredCourses([]);
        setAllCourses([]);
      }
    };

    fetchCourses();
  }, [searchParams]);

  const handleSearch = () => {
    if (searchText.trim() === '') {
      setSearchParams({});
      return;
    }

    if (searchType === 'trainer') {
      setSearchParams({ trainer: searchText });
    } else if (searchType === 'category') {
      setSearchParams({ category: searchText });
    }
  };

  const handleReset = () => {
    setSearchText('');
    setSearchParams({});
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const openModal = async (course: GetUserCourseListResponseDto) => {
    try {
      const response = await getCourseById(course.courseId);
      console.log(course, response)
      if (response.code === 'SU' && response.data) {
        setSelectedCourseDetail(response.data);
      } else {
        setSelectedCourseDetail(course as unknown as GetUserCourseDetailResponseDto);
      }
      setIsModalOpen(true);
    } catch (error) {
      console.error(error);
      alert('상세 정보를 불러오지 못했습니다.');
    }
  };

  const closeModal = () => {
    setSelectedCourseDetail(null);
    setIsModalOpen(false);
  };

  const handleApplyCourse = async () => {
    if (!isLogin) {
      alert('로그인이 필요합니다.');
      navigate('/login');
      return; 
    }

    if (!selectedCourseDetail) return;

    try {
      const response = await applyCourse(selectedCourseDetail.courseId);

      if (response.code === 'SU') {
        alert('수업 신청이 완료되었습니다!');
        closeModal();
        navigate('/users/me/myparticipation');
      } else {
        alert('수업 신청에 실패했습니다.');
      }
    } catch (error: any) {
      console.error(error);
      const status = error?.response?.status;

      if (status === 409) {
        alert('이미 신청한 수업입니다.');
      } else if (status === 404) {
        alert('존재하지 않는 수업입니다.');
      } else {
        alert('수업 신청 중 오류가 발생했습니다.');
      }
    }
  };


  return (
    <>
    <Header />
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
            placeholder={
              searchType === 'trainer'
                ? '트레이너 이름으로 검색'
                : '카테고리 입력 (SLEEP, REHABILITATION, EXERCISE, PSYCHOLOGY)'
            }
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={onKeyDown}
          />
          <button css={buttonStyle} onClick={handleSearch}>검색</button>
          <button css={buttonStyle} onClick={handleReset}>전체 목록 보기</button>
        </div>

        <div css={tableWrapper}>
          <div css={postListTotal}>전체 {filteredCourses.length}건</div>
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

          {filteredCourses.map((course, index) => (
            <div
              key={course.courseId ?? `${course.title}-${index}`}
              css={tableRow}
            >
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
                <button css={detailButtonStyle} onClick={() => openModal(course)}>
                  상세보기
                </button>
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
              <button css={participationButtonStyle} onClick={handleApplyCourse} style={{ cursor: 'pointer' }}>
                신청하기
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default CourseListPage;
