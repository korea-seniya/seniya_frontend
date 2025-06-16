/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import {
  containerStyle,
  titleStyle,
  searchWrapperStyle,
  selectStyle,
  inputStyle,
  buttonStyle,
  tableStyle,
  thStyle,
  tdStyle,
} from './NoticeList.style';
import type { NoticeList } from './NoticeList';
import { dummyNotices } from './NoticeDummyData';

const [notices, setNotices] = useState<NoticeList[]>([]);

useEffect(() => {
  setNotices(dummyNotices);
}, []);

function NoticeList() {
  return (
  <div css={containerStyle}>
      <h1 css={titleStyle}>공지사항</h1>

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
          {notices.map((item, index) => (
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

export default NoticeList