/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from "react";
import {
  containerStyle,
  titleStyle,
  tableStyle,
  thStyle,
  tdStyle,
  leftAlign,
  rightAlign,
} from "./InquiryList.style";
import { getAllInquiriesRequest } from "../../apis/inquiry/Inquiry";
import type { AllInquiryResponseDto } from "../../dtos/inquiry/response/inquiryList.response.dto";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header";

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
    navigate(`/inquiry/${inquiry.id}`);
  };

  return (
    <>
      <Header />
      <div css={containerStyle}>
        <h1 css={titleStyle}>문 의</h1>
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
                  {inquiry.isPrivated !== true
                    ? inquiry.title
                    : "비밀글입니다."}
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
    </>
  );
}

export default InquiryListPage;
