/** @jsxImportSource @emotion/react */
import { container, halfBox } from './PopularSection.style';

function PopularSection() {
  return (
    <section css={container}>
      <div css={halfBox}>인기 트레이너</div>
      <div css={halfBox}>인기 글</div>
    </section>
  );
}

export default PopularSection;
