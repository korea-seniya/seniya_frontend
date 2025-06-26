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
  answerDivStyle,
  lineStyle,
  answerPStyle,
  strongStyle,
  textareaStyle,
} from "./InquiryDetail.style";
import type { InquriyByIdResponseDto } from "../../dtos/inquiry/response/inquiryDetail.response";
import { useNavigate, useParams } from "react-router-dom";
import {
  deleteInquiryRequest,
  getInquiryDetailRequest,
} from "../../apis/inquiry/Inquiry";
import type { AxiosError } from "axios";
import Header from "../../components/header";
import { useUserStore } from "../../stores/user.store";

function InquiryDetail() {
  const { id } = useParams<{ id: string }>();
  const inquiryId = Number(id);
  const navigate = useNavigate();
  const [inquiry, setInquiry] = useState<InquriyByIdResponseDto | null>(null);
  const { user } = useUserStore();

  useEffect(() => {
    const fetchInquiry = async () => {
      const response = await getInquiryDetailRequest(inquiryId);
      if (response.code === "SU" && response.data) {
        setInquiry(response.data);
      } else {
        alert("권한이 없습니다. 문의 목록으로 이동합니다.");
        navigate("/inquiries");
      }
    };
    fetchInquiry();
  }, [inquiryId, navigate]);

  const onClickUpdate = () => {
    if (inquiry?.response === null) {
      navigate(`/inquiry/${inquiryId}/update`);
    }
  };

  
  const onClickAnswer = () => {
  
    navigate(`/inquiry/${inquiryId}/response`);
  };

  const deleteInquiry = async () => {
  
    if (window.confirm("정말로 문의를 삭제하시겠습니까?")) {
      await deleteInquiryRequest(inquiryId);
      alert("게시글이 삭제되었습니다.");
      navigate("/inquiries");
    }
  };

  const isAuthor = user?.name === inquiry?.username; 
  const isTrainer = user?.role_id === 3;

  return (
        <>
    <Header />
    <div css={containerStyle}>
      <h1 css={titleStyle}>문 의</h1>
      <div css={divStyle}>
        <h2 css={h2Style}>{inquiry?.title}</h2>
        <p css={pStyle}>
          <strong>{inquiry?.username}</strong>
          <span css={spanStyle}>{inquiry?.createdAt}</span>
        </p>
        <div css={lineStyle} />
        <div css={contentStyle}>{inquiry?.content}</div>
        <div css={lineStyle} />

        <h2 css={h2Style}>문의 답변</h2>
        {inquiry?.response ? (
          <>
            <div css={answerDivStyle}>
              <p css={answerPStyle}>
                <strong css={strongStyle}>{inquiry.trainername}</strong>
              </p>
              <div css={lineStyle} />
              <div css={textareaStyle}>{inquiry.response}</div>
            </div>
          </>
        ) : (
          <div>아직 답변이 등록되지 않았습니다.</div>
        )}
        <div css={buttonWrapperStyle}>
            {isTrainer && !inquiry?.response && (
              <button css={buttonStyle} onClick={onClickAnswer}>
                답변하기
              </button>
            )}
            {isAuthor && !inquiry?.response && (
              <button css={buttonStyle} onClick={onClickUpdate}>
                수정
              </button>
            )}
            {isAuthor && (
              <button css={buttonStyle} onClick={deleteInquiry}>
                삭제
              </button>
            )}
          </div>
      </div>
    </div>
    </>
  );
}

export default InquiryDetail;
