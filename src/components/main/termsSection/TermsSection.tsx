/** @jsxImportSource @emotion/react */
import * as style from './TermsSection.style';

function TermsSection() {
  return (
    <section css={style.container}>
      <div css={style.termsBox}>
        <h3>이용약관 안내</h3>
        <p>
          본 웹사이트는 교육 및 상담 플랫폼을 주제로 제작된 팀 프로젝트 결과물입니다.
          제공되는 콘텐츠는 모두 가상의 데이터이며, 학습 목적의 포트폴리오 용도로만 사용됩니다.
        </p>
        <p>
          실제 서비스가 아니므로 개인정보 수집 및 결제 기능은 포함되어 있지 않으며,
          사용 중 발생하는 문제에 대한 책임은 지지 않습니다.
        </p>
      </div>
    </section>
  );
}

export default TermsSection;
