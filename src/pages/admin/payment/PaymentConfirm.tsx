/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import React, { useState } from 'react'

import * as style from './PaymentConfirm.style'

function PaymentConfirm() {

  const payments = [
    {
      id: 1,
      name: '양금명',
      phone: '010-1234-5678',
      method: '카드',
      amount: 999999,
      couponCount: 10,
      createdAt: '2025-05-28',
      status: 'SUCCESS'
    }, {
      id: 2,
      name: '양은명',
      phone: '010-1234-5678',
      method: '카드',
      amount: 7777777,
      couponCount: 8,
      createdAt: '2025-05-20',
      status: 'FAILED'
    }, {
      id: 3,
      name: '양동명',
      phone: '010-1234-5678',
      method: '카드',
      amount: 999999,
      couponCount: 100,
      createdAt: '2025-07-28',
      status: 'PENDING'
    },
  ];

  return (
    <div css={style.containerStyle}>
      <table css={style.tableStyle}>
        <thead>
          <tr css={style.firtTrStyle}>
            <th css={style.thStyle}>결제 번호</th>
            <th css={style.thStyle}>이름</th>
            <th css={style.thStyle}>번호</th>
            <th css={style.thStyle}>결제 방법</th>
            <th css={style.thStyle}>결제 금액</th>
            <th css={style.thStyle}>수강권 개수</th>
            <th css={style.thStyle}>결제 날짜</th>
            <th css={style.thStyle}>결제 상태</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment, index) => (
            <tr css={style.trStyle}>
              <td css={style.tdStyle}>{payment.id}</td>
              <td css={style.tdStyle}>{payment.name}</td>
              <td css={style.tdStyle}>{payment.phone}</td>
              <td css={style.tdStyle}>{payment.method}</td>
              <td css={style.tdStyle}>₩ {payment.amount}</td>
              <td css={style.tdStyle}>{payment.couponCount}</td>
              <td css={style.tdStyle}>{payment.createdAt}</td>
              <td css={style.tdStyle}>
                <select name="status">
                  <option value="PENDING">대기</option>
                  <option value="SUCCESS">승인</option>
                  <option value="FAILED">실패</option>
                  <option value="CANCELED">취소</option>
                </select>
                <button>수정</button>
                <button>확인</button>
                <button>취소</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PaymentConfirm