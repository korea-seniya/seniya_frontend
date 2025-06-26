/** @jsxImportSource @emotion/react */
import PopularPostList from './PopularPostList';
import { container, halfBox } from './PopularSection.style';
import PopularTrainer from './PopularTrainer';

function PopularSection() {
  return (
    <section css={container}>
      <div css={halfBox}>
        <PopularTrainer />
      </div>
      <div css={halfBox}>
        <PopularPostList />
      </div>
    </section>
  );
}

export default PopularSection;
