/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef, useState } from 'react';
import * as style from './OperationalGoals.style';
import Header from '../../components/header';
import backgroundImage from '../../components/커플노인.jpg';
import { css } from '@emotion/react';

function OperationalGoals() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <>
      <Header />

      <div css={style.wrapper}>
        <section css={style.topSection}>
          <span css={style.sectionTag}>TEAM Seniya</span>
          <h1 css={style.pageTitle}>운영 목표</h1>
        </section>
      </div>

      <section css={style.heroSection(backgroundImage)}>
        <div css={style.heroText}>
          <span css={css`font-style: italic;`}>
            <h2>Dignity in Aging,</h2>
            <h2>Care with Heart</h2>
          </span>
        </div>
      </section>

      <div css={style.wrapper}>
        <section
          ref={sectionRef}
          css={[style.detailSection, style.fadeUp]}
          className={isVisible ? 'show' : ''}
        >
          <div css={style.detailRow}>
            <div css={style.detailLabel}>Mission</div>
            <div css={style.detailContent}>
              <p css={style.detailMain}>
                어르신 한 분 한 분의 건강과 삶의 질 향상을 최우선 가치로 삼아, <br />
                전문적인 케어와 따뜻한 돌봄을 통해 모두가 존중받는 사회를 만들어갑니다.
              </p>
              <p css={style.detailSub}>
                의료, 영양, 수면, 운동, 정서 지원까지 포괄하는 통합 케어 시스템을 바탕으로, <br />
                어르신의 신체적·정신적 건강을 향상시키고, 행복한 노후를 지원합니다.
              </p>
            </div>
          </div>

          <div css={style.detailRow}>
            <div css={style.detailLabel}>Vision</div>
            <div css={style.detailContent}>
              <p css={style.detailMain}>
                “요양을 넘어 삶을 돌보는 기업”<br />
                전문성과 기술을 바탕으로 케어의 새로운 기준을 제시하는 글로벌 리더로 성장합니다.
              </p>
            </div>
          </div>

          <div css={style.detailRow}>
            <div css={style.detailLabel}>Core Value</div>
            <div css={style.detailContent}>
              <p css={style.detailMain}>존중 · 연대 · 창의</p>
              <p css={style.detailSub}>
                어르신에 대한 깊은 존중과 가족 같은 연대, <br />
                그리고 변화에 대응하는 창의적 케어를 실현합니다.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default OperationalGoals;
