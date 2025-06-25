/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef, useState } from 'react';
import * as style from './Facility.style';
import Header from '../../components/header';
import buildingImage from '../../components/시니야건물.png';

function Facility() {
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const listRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.2 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (imageRef.current) observer.observe(imageRef.current);
    if (listRef.current) observer.observe(listRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
      if (listRef.current) observer.unobserve(listRef.current);
    };
  }, []);

  return (
    <>
      <Header />

      <div css={style.wrapper}>
        <section css={style.topSection}>
          <span css={style.sectionTag}>TEAM Seniya</span>
          <h1 css={style.pageTitle}>시설 안내</h1>
          <p css={style.pageSubtitle}>
            “시니야는 어르신의 일상에 건강과 활력을 더하는 공간입니다.”
          </p>
        </section>
      </div>

      <div css={style.container}>
        <h2
          ref={titleRef}
          css={[style.title, style.fadeUp]}
          className={isVisible ? 'show' : ''}
        >
          <span>시니야</span> 층별안내
        </h2>

        <div css={style.contentBlock}>
          <img
            ref={imageRef}
            src={buildingImage}
            alt="건물 외관"
            css={[style.image, style.fadeUp]}
            className={isVisible ? 'show' : ''}
          />
          <ul
            ref={listRef}
            css={[style.floorList, style.fadeUp]}
            className={isVisible ? 'show' : ''}
          >
            <li><strong>7층</strong> : 힐링정원, 옥상 산책로</li>
            <li><strong>6층</strong> : 헬스케어센터, 운동처방실</li>
            <li><strong>5층</strong> : 활력케어실, 물리재활실</li>
            <li><strong>4층</strong> : 생활지원 병동 (생활보조 및 안전케어)</li>
            <li><strong>3층</strong> : 건강상담실, 전문간호실, 정서지원실, 맞춤형케어실</li>
            <li><strong>2층</strong> : 커뮤니티룸, 문화활동실, 치매예방교실</li>
            <li><strong>1층</strong> : 로비</li>
            <li><strong>B1층</strong> : 물리치료실, 방사선실, 약국, 조리실, 회의실, 주차장</li>
            <li><strong>B2층</strong> : 주차장</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Facility;
