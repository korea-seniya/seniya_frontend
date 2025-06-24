/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import axios from "axios";
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
import { useUserStore } from '../../stores/user.store';

const NoticeList = () => {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const { isLogin, user } = useUserStore();
  const isAdmin = isLogin && user?.role_id === 1;

  useEffect(() => {
    axios.get("http://localhost:8080/api/v1/notices") 
      .then((res) => {
        const data = res.data?.data;
        if (Array.isArray(data)) {
          setNotices(data);
        } else {
          console.error("데이터 형식 오류:", res.data);
          setNotices([]); 
        }
      })
      .catch((err) => {
        console.error("공지사항 불러오기 실패:", err);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

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

      {loading ? (
        <p>로딩 중...</p>
      ) : error ? (
        <p>공지사항을 불러오는 데 실패했습니다.</p>
      ) : (
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
            {notices.length > 0 ? (
              notices.map((item) => (
                <tr key={item.noticeId}>
                  <td css={tdStyle}>{item.noticeId}</td>
                  <td
                    css={tdStyle}
                    style={{ cursor: 'pointer', color: '#4f46e5' }}
                    onClick={() => navigate(`/notices/${item.noticeId}`)}
                  >
                    {item.title}
                  </td>
                  <td css={tdStyle}>{item.createdAt.slice(0, 10)}</td>
                  <td css={tdStyle}>{item.username}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td css={tdStyle} colSpan={4}>등록된 공지사항이 없습니다.</td>
              </tr>
            )}
          </tbody>
        </table>
      )}

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
