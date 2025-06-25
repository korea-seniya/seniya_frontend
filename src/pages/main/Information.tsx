/** @jsxImportSource @emotion/react */
import React from 'react';
import * as style from './Information.style';
import Header from '../../components/header'; 
import ceoImage from '../../components/앉아있는노인.jpg';
import heroBg from '../../components/인사말배경.jpg';

function Information() {
  return (
    <>
      <Header />

      <div css={style.pageContainer(heroBg)}>
        <div css={style.wrapper}>
          <div css={style.titleBlock}>
            <span css={style.subTitle}>TEAM Seniya</span>
            <h1 css={style.mainTitle}>인사말</h1>
            <p css={style.highlight}>
              “<strong>건강한 일상, 편안한 삶, 따뜻한 돌봄</strong><br />
              <strong>저희는 어르신의 삶의 질을 높이는 것에 최우선 가치를 둡니다.</strong>”
            </p>
          </div>

          <div css={style.contentBlock}>
            <img src={ceoImage} alt="인삿말 이미지" css={style.imageStyle} />
            <div css={style.textBlock}>
              <p>
                 <strong css={style.emphasizedText}>빠르게 진행되는 고령화 시대 속에서, </strong> 단순한 요양의 개념은 더 이상 충분하지 않습니다.
                저희는 <strong>노인 맞춤형 케어 서비스</strong>를 중심으로 의료, 건강관리, 수면, 운동, 정서지원까지 
                <strong>통합 헬스케어 시스템</strong>을 구축하여 어르신 한 분 한 분의 삶의 질 향상을 실현하고자 합니다.
                특히 요양 및 케어 분야에서의 다년간의 경험을 바탕으로, 전문 간호사, 물리치료사, 트레이너, 심리상담사 등 각 분야 전문가들이 긴밀하게 협력하여  
                <strong> 개인 맞춤형 건강 솔루션</strong>을 제공합니다.
              </p>
              <p>
                <strong css={style.emphasizedText}>TEAM Seniya는 '사람'을 최우선으로 생각합니다.</strong><br />
                어르신들이 신체적으로 건강함은 물론, 정서적으로 안정되고 사회적으로 연결되어 있는 삶이 진정한 건강이라고 믿습니다.<br />
                이러한 철학을 바탕으로 저희는 <strong>일상 속에서 체계적인 건강 관리와 지속적인 케어</strong>가 이뤄지도록 지원하고 있으며,
                <strong>첨단 기술을 접목한 건강 모니터링</strong>을 통해 예방 중심의 돌봄을 실현하고 있습니다.
                어르신 한 분, 한 분의 삶을 존중하고, 그분의 인생 이야기에 진심으로 귀 기울이겠습니다.
                우리가 제공하는 돌봄은 단순한 서비스가 아닌 <strong>사람 대 사람의 연결, 관계 중심의 동행</strong>입니다.
              </p>
              <p>
                <strong css={style.emphasizedText}>우리의 목표는 분명합니다.</strong><br />
                어르신들이 노년의 시간을 <strong>보다 건강하고, 편안하며, 의미 있게 살아가실 수 있도록</strong><br />
                지금 이 순간에도, 저희는 <strong>요양을 넘어, 삶을 돌보는 길</strong>을 걷고 있습니다.<br />
                앞으로도 <strong>‘케어의 새로운 기준’을 만들어가는 기업</strong>이 되겠습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Information;
