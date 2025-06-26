/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import * as style from './banner.style';

import smileBanner from '../../../assets/빵긋웃는노인.jpg';
import stretchingBanner from '../../../assets/기지개노인.jpg';
import danceBanner from '../../../assets/댄스파티노인.jpg';
import hulahoopBanner from '../../../assets/훌라후프노인.jpg';
import sleepBanner from '../../../assets/수면치료노인.jpg';


const banners = [smileBanner, stretchingBanner, danceBanner, hulahoopBanner, sleepBanner];
function Banner() {

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(prev => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent(prev => (prev === banners.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev === banners.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);


  return (
    <div>
      <div css={style.bannerContainer}>
        {banners.map((banner, index) => (
          <img
            key={index}
            src={banner}
            alt=""
            css={style.bannerImage(index === current)}
          />
        ))}
        <button css={style.arrowLeft} onClick={prevSlide}>‹</button>
        <button css={style.arrowRight} onClick={nextSlide}>›</button>
      </div>
    </div>)
}

export default Banner;