/** @jsxImportSource @emotion/react */
import React from 'react'


import {
  containerStyle,
  titleStyle,
  labelStyle,
  inputStyle,
  buttonStyle,
  contentStyle,
  divStyle,
  buttonWrapperStyle
} from './InquiryCreate.style';

function InquiryUpdate() {

  return (
    <div css={containerStyle}>
      <h1 css={titleStyle}>문의 수정</h1>
      <div css={divStyle}>

      <label css={labelStyle}>
        제목
      </label>
        <input 
        css={inputStyle}
        type='text'
        placeholder='제목을 입력하세요'
        ></input>
      </div>
      <textarea 
      css={contentStyle}
      placeholder='문의 내용을 입력해주세요'
      ></textarea>
      <div css={buttonWrapperStyle}>
    <button css={buttonStyle}>작성완료</button>
    <button css={buttonStyle}>취소</button>
      </div>
    </div>
  )
}

export default InquiryUpdate;