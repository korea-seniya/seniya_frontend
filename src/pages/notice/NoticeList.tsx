/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
  bottomWrapperStyle,
  writeButtonStyle,
} from './NoticeList.style';

import type { NoticeList as Notice } from './NoticeListData';
import { dummyNotices } from './NoticeDummyData';
import { userAuthStore } from '../../stores/auth.store';

const NoticeList = () => {
  const [notices, setNotices] = useState<Notice[]>([]);
  const navigate = useNavigate();

  const isLogin = userAuthStore((state) => state.isLogin);
  const role_id = userAuthStore((state) => state.role_id);
  const isAdmin = isLogin && role_id === 1;

  useEffect(() => {
    setNotices(dummyNotices);
  }, []);


  useEffect(() => {
    console.log('role_id:', role_id);
  }, [isLogin, role_id, isAdmin]);

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
          {notices.map((item) => (
            <tr key={item.id}>
              <td css={tdStyle}>{item.id}</td>
              <td
                css={tdStyle}
                style={{ cursor: 'pointer', color: '#4f46e5' }}
                onClick={() => navigate(`/notices/${item.id}`)}
              >
                {item.title}
              </td>
              <td css={tdStyle}>{item.createdAt}</td>
              <td css={tdStyle}>{item.username}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {isAdmin && (
        <div css={bottomWrapperStyle}>
          <button
            css={writeButtonStyle}
            onClick={() => navigate('/notices/create')}
          >
            작성하기
          </button>
        </div>
      )}
    </div>
  );
};

export default NoticeList;
