/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState } from 'react';
import * as style from './PurchasePass.style';
import Header from '../../components/header';

function PurchasePass() {

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const passOptions = [
    { count: 1, price: 1000 },
    { count: 2, price: 2000 },
    { count: 3, price: 3000 },
    { count: 4, price: 4000 },
  ];

  const purchaseClick = async () => {
    if (selectedIndex === null) {
      alert("수강권을 선택해주세요.");
      return;
    }

    const selectedPass = passOptions[selectedIndex];
    localStorage.setItem("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6ImFkbWluMTIzIiwicm9sZSI6IkFETUlOIiwiaWF0IjoxNzUwMzIyMDAyLCJleHAiOjE3NTAzMjU2MDJ9.F--N8TfsKsBHGb4SrZXydenQ4-oBwh-HYFNYiYZZ-Uk");

    const newWindow = window.open('/api/v1/payments/request', '_blank', 'width=600,height=800');



    if (newWindow) {
      newWindow.name = JSON.stringify(selectedPass); // 💡 window.name에 데이터 담기
    }
  };

  const CouponIcon = ({ size = 24, color = "#000" }: { size?: number; color?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      stroke={color}
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M2 7a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V7z" />
      <path strokeLinecap="round" d="M22 12h-4M2 12h4" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );


  return (
    <>
      <Header />
      <div css={style.containerStyle}>
        <h2 css={style.h2Style}>수강권 구매</h2>
        <div css={style.passContainerStyle}>
          {passOptions.map((pass, index) => (
            <div
              key={index}
              css={[
                style.passDivStyle,
                selectedIndex === index && css`
                  background-color: #4658AE;
                  border: 2px solid #4658AE;
                  color: #fff;
                `
              ]}
              onClick={() =>
                setSelectedIndex(selectedIndex === index ? null : index)
              }
            >
              <CouponIcon
                size={32}
                color={selectedIndex === index ? "#fff" : "#4658AE"}
              />
              <div css={style.passCount}>수강권 {pass.count}개</div>
              <div css={style.passPrice}>₩{pass.price}</div>
            </div>
          ))}
          <button css={style.payBtn} onClick={purchaseClick}>결제하기</button>
        </div>
      </div>
    </>
  );
}

export default PurchasePass;
