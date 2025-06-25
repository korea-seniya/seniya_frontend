/** @jsxImportSource @emotion/react */
import React from 'react';
import * as style from './Location.style';
import Header from '../../../components/header';
import mapImage from '../../../pages/main/images/지도.png';

import walkIcon from '../../../pages/main/images/도보.png';
import carIcon from '../../../pages/main/images/차량.png';
import busIcon from '../../../pages/main/images/버스.png';

function Location() {
  return (
    <>
      <Header />

      <div css={style.wrapper}>
        <section css={style.topSection}>
          <span css={style.sectionTag}>TEAM Seniya</span>
          <h1 css={style.pageTitle}>오시는 길</h1>
        </section>

        <div css={style.mapBox}>
          <img src={mapImage} alt="지도 이미지" css={style.mapImage} />
        </div>

        <div css={style.infoBox}>
          <div css={style.addressBlock}>
            <h3>주소</h3>
            <p>(우) 47296 부산 부산진구 중앙대로 668</p>
            <p>에이원 프라자 4층, 코리아IT코딩아카데미학원</p>
          </div>
          <div css={style.contectBlock}>
            <h3>연락처</h3>
            <p>대표전화 : 090-4321-0987/6</p>
            <p>팩스 : 099-123-9876</p>
            <p>이메일 : seniya@team.co.kr</p>
          </div>
        </div>

        <div css={style.routeBox}>
          <div css={style.routeItem}>
            <img src={walkIcon} alt="도보 아이콘" />
            <div className="text">
              <h4>도보 이용 시</h4>
              <p>서면역 2번 출구에서 도보로 약 7분 이내 </p>
            </div>
          </div>
          <div css={style.routeItem}>
            <img src={carIcon} alt="차량 아이콘" />
            <div className="text">
              <h4>차량 이용 시</h4>
              <p>충장대로 2.8km ➡️ 전포대로 742m</p>
            </div>
          </div>
          <div css={style.routeItem}>
            <img src={busIcon} alt="버스 아이콘" />
            <div className="text">
              <h4>버스 이용 시</h4>
              <p>서면한전 정류장 하차 (81번, 43번 등)</p>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default Location;
