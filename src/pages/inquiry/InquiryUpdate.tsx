/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import type { InquiryRequestDto } from "../../dtos/inquiry/request/inquiry.request.dto";
import {
  getInquiryDetailRequest,
  updateInquiryRequest,
} from "../../apis/inquiry/Inquiry";
import { useNavigate, useParams } from "react-router-dom";
import {
  containerStyle,
  titleStyle,
  labelStyle,
  inputStyle,
  buttonStyle,
  contentStyle,
  divStyle,
  buttonWrapperStyle,
  label2Style,
  checkboxStyle,
} from "./InquiryCreate.style";
import type { InquriyByIdResponseDto } from "../../dtos/inquiry/response/inquiryDetail.response";

function InquiryUpdate() {
  localStorage.setItem(
    "Authorization",
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InRlc3R0cmFpbmVyIiwicm9sZSI6IlRSQUlORVIiLCJpYXQiOjE3NTAzODM3OTksImV4cCI6MTc1MDM4NzM5OX0.IRfkeQAFfZLVOCdc7iFJRAVsFSYS_EtheERydo_aPsA"
  );
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [isPrivated, setIsPrivated] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const onIsPrivatedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsPrivated(e.target.checked);
  };

  const { id } = useParams<{ id: string }>();
  const inquiryId = Number(id);
  const navigate = useNavigate();
  const [inquiry, setInquiry] = useState<InquriyByIdResponseDto>();
  const onSubmit = async () => {
    if (!title || !content) {
      setMessage("제목과 내용 모두 입력해주세요.");
      return;
    }
    const requestBody: InquiryRequestDto = {
      title,
      content,
      isPrivated,
    };

    const response = await updateInquiryRequest(inquiryId, requestBody);
    if (response.code === "SU") {
      alert("문의 수정 완료.");
      navigate("/api/v1/inquiries");
    } else {
      setMessage(response.message);
    }
  };

  useEffect(() => {
    const fetchInquiry = async () => {
      const response = await getInquiryDetailRequest(inquiryId);
      if (inquiry?.response === null) {
        return;
      }
      if (response.data) {
        setInquiry(response.data);
        setTitle(response.data.title ?? "");
        setContent(response.data.content ?? "");
        setIsPrivated(response.data.isPrivated ?? false);
      }
    };
    fetchInquiry();
  }, []);

  const cancleHandler = async () => {
    navigate("/api/v1/inquiries");
  };

  return (
    <div css={containerStyle}>
      <h1 css={titleStyle}>문의 수정</h1>
      <div css={divStyle}>
        <label css={labelStyle}>제목</label>
        <input
          css={inputStyle}
          type="text"
          placeholder="제목을 입력하세요"
          value={title || ""}
          onChange={onTitleChange}
        ></input>
        <label css={label2Style}>
          <input
            type="checkbox"
            checked={isPrivated || false}
            onChange={onIsPrivatedChange}
            css={checkboxStyle}
          />
          비밀글
        </label>
      </div>
      <textarea
        css={contentStyle}
        placeholder="문의 내용을 입력해주세요"
        value={content || ""}
        onChange={onContentChange}
      ></textarea>

      <div css={buttonWrapperStyle}>
        <button css={buttonStyle} onClick={onSubmit}>
          등록
        </button>
        <button css={buttonStyle} onClick={cancleHandler}>취소</button>
      </div>
      {<p>{message}</p>}
    </div>
  );
}

export default InquiryUpdate;
