/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import {
  containerStyle,
  titleStyle,
  labelStyle,
  inputStyle,
  buttonStyle,
  contentStyle
} from './inquiryCreate.style';

function InquiryCreate() {

  return (
    <div css={containerStyle}>
      <h1 css={titleStyle}>문의 작성</h1>
      <label css={labelStyle}>
        제목
        <input 
        css={inputStyle}
        type='text'
        placeholder='제목을 입력하세요'
        ></input>
      </label>
      <input 
      css={contentStyle}
      type='text'
      placeholder='문의 내용을 입력해주세요'
      ></input>
    <button css={buttonStyle}>작성완료</button>
    <button css={buttonStyle}>취소</button>
    </div>
  )
}

export default InquiryCreate