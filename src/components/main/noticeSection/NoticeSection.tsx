/** @jsxImportSource @emotion/react */
import { container, halfBox } from './NoticeSection.style';

function NoticeSection() {
  return (
    <section css={container}>
      <div css={halfBox}>공지사항</div>
      <div css={halfBox}>오늘의 수업</div>
    </section>
  );
}

export default NoticeSection;
