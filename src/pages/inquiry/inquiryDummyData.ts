import type { inquiry } from "./inquiry";

export const inquiryDummyData: inquiry[] = [
  {
    username: '홍길동',
    title: '운동 강의에 대해 문의드립니다.',
    content: '혹시 다음 달에도 줌 수업이 열리나요?',
    createdAt: '2025-06-08T10:15:00',
    updatedAt: '2025-06-08T10:15:00',
  },
  {
    username: '김철수',
    title: '비밀글입니다',
    content: '이 글은 비밀글로 설정된 내용입니다.',
    createdAt: '2025-06-07T09:00:00',
    updatedAt: '2025-06-07T10:00:00',
  },
  {
    username: '관리자',
    title: '공지사항: 시스템 점검 안내',
    content: '6월 10일 오전 1시부터 서버 점검이 예정되어 있습니다.',
    createdAt: '2025-06-06T12:00:00',
    updatedAt: '2025-06-06T12:00:00',
  },
  {
    username: '이영희',
    title: '강사님 성함이 궁금합니다.',
    content: '줌 수업에 참여했는데 강사님 성함을 못 들었습니다.',
    createdAt: '2025-06-05T16:20:00',
    updatedAt: '2025-06-05T16:25:00',
  },
];
