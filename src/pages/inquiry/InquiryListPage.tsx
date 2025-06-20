/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from "react";
import {
  containerStyle,
  titleStyle,
  searchWrapperStyle,
  inputStyle,
  buttonStyle,
  tableStyle,
  thStyle,
  tdStyle,
  selectStyle,
  leftAlign,
  rightAlign,
} from "./InquiryList.style";
import { getAllInquiriesRequest } from "../../apis/inquiry/Inquiry";
import type { AllInquiryResponseDto } from "../../dtos/inquiry/response/inquiryList.response.dto";
import { useNavigate } from "react-router-dom";

function InquiryListPage() {
  const [inquiries, setInquiries] = useState<AllInquiryResponseDto[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const response = async () => {
      const response = await getAllInquiriesRequest();
      if (response.code === "SU" && response.data) {
        setInquiries(response.data);
      }
    };
    response();
  }, []);

  const handleClickInquiry = (inquiry: AllInquiryResponseDto) => {
    // if (inquiry.isPrivated === true) {
    //   alert('비밀글 입니다');
    //   return;
    // }

    // if (!api 요청으로 토큰 정보랑 지금 클릭한 게시글의 작성자 일치 여부를 boolean으로 반환 ) {
      // return;
    // }
    // if(트레이너나 어드민이라면 answer User본인이라면 detail)
    navigate(`/api/v1/inquiry/${inquiry.id}`);
  };

  return (
    <div css={containerStyle}>
      <h1 css={titleStyle}>문 의</h1>

      <div css={searchWrapperStyle}>
        <select css={selectStyle}>
          <option value="title">제목</option>
          <option value="username">작성자</option>
        </select>
        <input
          type="text"
          placeholder="검색어를 입력해주세요."
          css={inputStyle}
        />
        <button css={buttonStyle}>검색</button>
      </div>
      <p>전체 {inquiries.length}건</p>
      <table css={tableStyle}>
        <thead>
          <tr>
            <th css={[thStyle, leftAlign]}>번호</th>
            <th css={[thStyle, leftAlign]}>제목</th>
            <th css={[thStyle, rightAlign]}>작성일</th>
            <th css={[thStyle, rightAlign]}>작성자</th>
          </tr>
        </thead>
        <tbody>
          {inquiries.map((inquiry, index) => (
            <tr
              key={inquiry.id}
              onClick={() => handleClickInquiry(inquiry)}
              style={{ cursor: "pointer" }}
            >
              <td css={[tdStyle, leftAlign]}>{index + 1}</td>
              <td css={[tdStyle, leftAlign]}>
                {inquiry.isPrivated !== true ? inquiry.title : "비밀글입니다."}
              </td>
              <td css={[tdStyle, rightAlign]}>
                {inquiry.updatedAt !== null
                  ? inquiry.updatedAt
                  : inquiry.createdAt}
              </td>
              <td css={[tdStyle, rightAlign]}>{inquiry.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default InquiryListPage;
