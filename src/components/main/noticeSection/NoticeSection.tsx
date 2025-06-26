/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import { sectionStyle, halfBox, table, titleStyle, listStyle } from './NoticeSection.style';
import { getTopNotices, getTodayCourse } from '../../../apis/main/main';
import type { TodayCourseResponseDto } from '../../../dtos/main/todayCourse/response/TodayCourse.response.dto';
import type { NoticeList } from '../../../pages/notice/NoticeListData';

function NoticeSection() {
  const [notices, setNotices] = useState<NoticeList[]>([]);
  const [courses, setCourses] = useState<TodayCourseResponseDto[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const [noticeRes, courseRes] = await Promise.all([
          getTopNotices(),
          getTodayCourse()
        ]);

        if (noticeRes.code === 'SU' && Array.isArray(noticeRes.data)) {
          setNotices(noticeRes.data);
        }

        if (courseRes.code === 'SU' && Array.isArray(courseRes.data)) {
          setCourses(courseRes.data);
        }
      } catch (err) {
        console.error('데이터 불러오기 오류:', err);
      }
    })();
  }, []);

  return (
    <section css={sectionStyle}>
      <div css={halfBox}>
        <h2 css={titleStyle}>공지사항</h2>
        <ul css={listStyle}>
          {notices.length > 0 ? (
            notices.map((notice) => (
              <li key={notice.noticeId}>
                {notice.title} <span>({notice.createdAt.slice(0, 10)})</span>
              </li>
            ))
          ) : (
            <li>등록된 공지사항이 없습니다.</li>
          )}
        </ul>
      </div>

      <div css={halfBox}>
        <h2 css={titleStyle}>오늘의 수업</h2>
        <table css={table}>
          <thead>
            <tr>
              <th>강사 이름</th>
              <th>제목</th>
              <th>카테고리</th>
              <th>시작 시간</th>
              <th>종료 시간</th>
            </tr>
          </thead>
          <tbody>
            {courses.length > 0 ? (
              courses.map((course) => (
                <tr key={course.id}>
                  <td>{course.name}</td>
                  <td>{course.title}</td>
                  <td>{course.category}</td>
                  <td>{course.classStartTime}</td>
                  <td>{course.classEndTime}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5}>오늘 예정된 수업이 없습니다.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default NoticeSection;
