/** @jsxImportSource @emotion/react */
import React from 'react'

import {
  containerStyle,
  titleStyle,
  divStyle,
  spanStyle,
  pStyle,
  h2Style,
  contentStyle,
  buttonStyle,
  buttonWrapperStyle,
  answerDivStyle,
  lineStyle,
  answerPStyle,
  strongStyle,
  textareaStyle
} from './inquiryAnswer.style';

function InquiryDetail() {

  return (
    <div css={containerStyle}>
      <h1 css={titleStyle}>문의 내용</h1>
      <div css={divStyle}>
        <h2 css={h2Style}>문의 제목</h2>
        <p css={pStyle}><strong>이름</strong><span css={spanStyle}>20xx-xx-xx</span></p>
        <div css={lineStyle} />
      <div css={contentStyle}>내용</div>
        <div css={lineStyle} />
      <div css={answerDivStyle}>
        <p css={answerPStyle}><strong css={strongStyle}>이름</strong><span css={spanStyle}>트레이너</span></p>
        <div css={lineStyle} />
        <textarea css={textareaStyle} placeholder='답변을 작성해 주세요'></textarea>
      </div>

      <div css={buttonWrapperStyle}><button css={buttonStyle}>등록</button></div>
      </div>
    </div>
  )
}

export default InquiryDetail