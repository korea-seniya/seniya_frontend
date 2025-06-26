/** @jsxImportSource @emotion/react */
import { container, section, links, copyright } from './Footer.style';

function Footer() {
  return (
    <footer css={container}>
      <div css={section}>
        <strong>Seniya 프로젝트</strong>
        <span>노인 상담과 교육을 위한 모의 플랫폼입니다.</span>
      </div>

      <div css={[section, links]}>
        <a href="/">홈</a>
        <a href="https://github.com/korea-seniya" target="_blank" rel="noreferrer">
          깃허브
        </a>
      </div>

      <div css={section}>
        <div>문의: team@example.com</div>
        <div css={copyright}>
          ⓒ 2025 EduCare Team. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
