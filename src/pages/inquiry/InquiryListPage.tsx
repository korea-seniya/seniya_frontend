/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from "react";
import type { InquiryList } from "./InquiryList";
import { InquiryDummyData } from "./InquiryDummyData";
import {
  containerStyle,
  titleStyle,
  searchWrapperStyle,
  inputStyle,
  buttonStyle,
  tableStyle,
  thStyle,
  tdStyle,
  selectStyle
} from "./InquiryList.style";

function InquiryListPage() {
  const [inquiries, setInquiries] = useState<InquiryList[]>([]);

  useEffect(() => {
    setInquiries(InquiryDummyData);
  }, []);

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

      <table css={tableStyle}>
        <thead>
          <tr>
            <th css={thStyle}>번호</th>
            <th css={thStyle}>제목</th>
            <th css={thStyle}>작성일</th>
            <th css={thStyle}>작성자</th>
          </tr>
        </thead>
        <tbody>
          {inquiries.map((item, index) => (
            <tr key={index}>
              <td css={tdStyle}>{item.id}</td>
              <td css={tdStyle}>{item.title}</td>
              <td css={tdStyle}>{item.createdAt}</td>
              <td css={tdStyle}>{item.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default InquiryListPage;
