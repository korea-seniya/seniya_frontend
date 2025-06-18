/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react'

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
} from './InquiryDetail.style';
import type { InquriyByIdResponseDto } from '../../dtos/inquiry/response/inquiryDetail.response';
import { useParams } from 'react-router-dom';
import { getInquiryDetail } from '../../apis/inquiry/Inquiry';

function InquiryDetail() {
  localStorage.setItem("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6IuycoOyggCIsInJvbGUiOiJVU0VSIiwiaWF0IjoxNzUwMjUwNTc0LCJleHAiOjE3NTAyNTQxNzR9.vz4EKHftpLMT9799MZUHhyeRrSsVm9TqnaCIf3ezhNE");
  const { id } = useParams<{ id: string }>();
  const InquiryId = Number(id);
  const [inquiry, setInquiry] = useState<InquriyByIdResponseDto | null>(null);
  const [message, setMessage] = useState<string>('');

useEffect(() => {
    const response = async () => {
      const response = await getInquiryDetail(InquiryId);
      if (response.code === "SU" && response.data) {
        setInquiry(response.data);
      }
    };
    response();
  }, []);



  return (
    <div css={containerStyle}>
      <h1 css={titleStyle}>문의</h1>
      <div css={divStyle}>
        <h2 css={h2Style}>{inquiry?.title}</h2>
        <p css={pStyle}><strong>{inquiry?.username}</strong><span css={spanStyle}>{inquiry?.createdAt}</span></p>
        <div css={lineStyle} />
        <div css={contentStyle}>내용</div>
        <div css={lineStyle} />
        <h2 css={h2Style}>문의 답변</h2>
        <div css={answerDivStyle}>
          <p css={answerPStyle}><strong css={strongStyle}>이름</strong><span css={spanStyle}>트레이너</span></p>
          <div css={lineStyle} />
          <div css={textareaStyle}>답변</div>
        </div>
        <div css={buttonWrapperStyle}>
        {<p>{message}</p>}
          {inquiry && !inquiry.response && (
            <button css={buttonStyle}>수정</button>)}
          <button css={buttonStyle}>삭제</button>
        </div>
      </div>
    </div>
  )
}

export default InquiryDetail