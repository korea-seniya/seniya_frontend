/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import React from 'react'

import * as style from './PurchasePass.style'

function PurchasePass() {

  return (
    <div css={style.containerStyle}>
      <h2 css={style.h2Style}>수강권 구매</h2>
      <div css={style.passContainerStyle}>
        <div css={style.passDivStyle}>
          <div css={style.passCount}>수강권 1개</div>
          <div css={style.passPrice}>₩999999</div>
        </div>
        <div css={style.passDivStyle}>
          <div css={style.passCount}>수강권 2개</div>
          <div css={style.passPrice}>₩999999</div>
        </div>
        <div css={style.passDivStyle}>
          <div css={style.passCount}>수강권 3개</div>
          <div css={style.passPrice}>₩999999</div>
        </div>
        <div css={style.passDivStyle}>
          <div css={style.passCount}>수강권 4개</div>
          <div css={style.passPrice}>₩999999</div>
        </div>
        <button css={style.payBtn}>결제하기</button>
      </div>
    </div >
  )
}

export default PurchasePass