/** @jsxImportSource @emotion/react */
import PopularPostList from './PopularPostList';
import { container, halfBox } from './PopularSection.style';

function PopularSection() {
  return (
    <section css={container}>
      <div css={halfBox}>인기 트레이너</div>
      <div css={halfBox}>
        <PopularPostList />
      </div>
    </section>
  );
}

export default PopularSection;
