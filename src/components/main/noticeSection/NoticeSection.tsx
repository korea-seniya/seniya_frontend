/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import { container, halfBox, table } from './NoticeSection.style';
import { getTodayCourse } from '../../../apis/main/main';
import type { TodayCourseResponseDto } from '../../../dtos/main/todayCourse/response/TodayCourse.response.dto';

function NoticeSection() {
  const [courses, setCourses] = useState<TodayCourseResponseDto[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await getTodayCourse();
        if (response.code === 'SU' && Array.isArray(response.data)) {
          setCourses(response.data);
        } else {
          console.log(response.message);
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <section css={container}>
      <div css={halfBox}>공지사항</div>

      <div css={halfBox}>
        <span>오늘의 수업</span>
        <table css={table}>
          <thead>
            <tr>
              <th>강사 이름</th>
              <th>제목</th>
              <th>카테고리</th>
              <th>수업 시작 시간</th>
              <th>수업 종료 시간</th>
            </tr>
          </thead>
          <tbody>
            {courses.map(course => (
              <tr key={course.id}>
                <td>{course.name}</td>
                <td>{course.title}</td>
                <td>{course.category}</td>
                <td>{course.classStartTime}</td>
                <td>{course.classEndTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default NoticeSection;
