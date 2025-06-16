/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import React from 'react'

import * as style from './PurchasePass.style'
import { useLocation, useNavigate } from 'react-router-dom';

function PurchasePass() {
  const navigate = useNavigate();
  const location = useLocation();

  const purchaseClick = async () => {

  }

  return (
    <div css={style.containerStyle}>
      <h2 css={style.h2Style}>수강권 구매</h2>
      <div css={style.passContainerStyle}>
        <div css={style.passDivStyle}>
          <div css={style.passCount}>수강권 1개</div>
          <div css={style.passPrice}>₩1000</div>
        </div>
        <div css={style.passDivStyle}>
          <div css={style.passCount}>수강권 2개</div>
          <div css={style.passPrice}>₩2000</div>
        </div>
        <div css={style.passDivStyle}>
          <div css={style.passCount}>수강권 3개</div>
          <div css={style.passPrice}>₩3000</div>
        </div>
        <div css={style.passDivStyle}>
          <div css={style.passCount}>수강권 4개</div>
          <div css={style.passPrice}>₩4000</div>
        </div>
        <button css={style.payBtn} onClick={purchaseClick} >결제하기</button>
      </div>
    </div >
  )
}

export default PurchasePass