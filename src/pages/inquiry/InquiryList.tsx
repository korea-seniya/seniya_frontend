/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import type { inquiryList } from './inquiryList';
import { inquiryDummyData } from './inquiryDummyData';
import {
  containerStyle,
  titleStyle,
  searchWrapperStyle,
  inputStyle,
  buttonStyle,
  tableStyle,
  thStyle,
  tdStyle
} from './inquiryList.style';

function InquiryList() {
  const [inquiries, setInquiries] = useState<inquiryList[]>([]);

  useEffect(() => {
    setInquiries(inquiryDummyData);
  }, []);

  return (
    <div css={containerStyle}>
      <h1 css={titleStyle}>문의</h1>

      <div css={searchWrapperStyle}>
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
            <th css={thStyle}>상태</th>
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

export default InquiryList;
