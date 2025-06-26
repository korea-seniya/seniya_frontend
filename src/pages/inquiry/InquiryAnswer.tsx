/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";

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
  lineStyle,
} from "./InquiryAnswer.style";
import { useNavigate, useParams } from "react-router-dom";
import type { InquriyByIdResponseDto } from "../../dtos/inquiry/response/inquiryDetail.response";
import {
  getInquiryDetailRequest,
  inquiryAnswerRequest,
} from "../../apis/inquiry/Inquiry";
import type { InquiryAnswerRequestDto } from "../../dtos/inquiry/request/answer.request.dto";
import Header from "../../components/header";

function InquiryAnswer() {
  const { id } = useParams<{ id: string }>();
  const inquiryId = Number(id);
  const navigate = useNavigate();
  const [inquiry, setInquiry] = useState<InquriyByIdResponseDto | null>(null);
  const [answer, setAnswer] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const fetchInquiry = async () => {
      const response = await getInquiryDetailRequest(inquiryId);
      if (response.code === "SU" && response.data) {
        // if (inquiry?.response !== null) {
        //   alert("이미 답변이 존재합니다.");
        //   navigate("/inquiries");
        // }
        setInquiry(response.data);
      } else {
        alert("권한이 없습니다. 문의 목록으로 이동합니다.");
        navigate("/inquiries");
      }
    };
    fetchInquiry();
  }, []);

  const onAnswerChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAnswer(e.target.value);
  };

  const goToList = async () => {
    navigate("/inquiries");
  };

  const onSubmit = async () => {
    console.log("답변 내용:", answer);
    if (!answer) {
      setMessage("제목과 내용 모두 입력해주세요.");
      return;
    }

    const requestBody: InquiryAnswerRequestDto = {
      response: answer,
    };

    const response = await inquiryAnswerRequest(inquiryId, requestBody);
    if (response.code === "SU") {
      navigate(`/inquiry/${inquiryId}`);
    } else {
      setMessage(response.message);
    }
  };

  return (
    <>
      <Header />
      <div css={containerStyle}>
        <h1 css={titleStyle}>문 의</h1>
        <div css={divStyle}>
          <h2 css={h2Style}>{inquiry?.title}</h2>
          <p css={pStyle}>
            <strong>{inquiry?.username}</strong>
            <span css={spanStyle}>
              {inquiry?.updatedAt !== null
                ? inquiry?.updatedAt
                : inquiry?.createdAt}
            </span>
          </p>
          <div css={lineStyle} />
          <div css={contentStyle}>{inquiry?.content}</div>
          <div css={lineStyle} />

          <h2 css={h2Style}>문의 답변</h2>
          <textarea
            css={contentStyle}
            value={answer}
            onChange={onAnswerChange}
            placeholder="문의 답변을 입력해주세요"
          ></textarea>
          <div css={buttonWrapperStyle}>
            {<p>{message}</p>}
            <button css={buttonStyle} onClick={onSubmit}>
              답변하기
            </button>
            <button css={buttonStyle} onClick={() => goToList()}>
              목록
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default InquiryAnswer;
