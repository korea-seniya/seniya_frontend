/** @jsxImportSource @emotion/react */
import Header from '../../components/header';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { axiosInstance } from "../../apis/axiosConfig";
import { useUserStore } from '../../stores/user.store';

import {
  containerStyle,
  titleStyle,
  metaWrapperStyle,
  authorDateStyle,
  contentStyle,
  actionStyle,
} from './NoticeDetail.style';

interface NoticeDetailType {
  noticeId: number;
  title: string;
  content: string;
  createdAt: string;
  username: string;
}

function NoticeDetail() {
  const { id } = useParams<{ id: string }>();
  const [notice, setNotice] = useState<NoticeDetailType | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const user = useUserStore((state) => state.user);

  useEffect(() => {
    axiosInstance.get(`/api/v1/notices/${id}`)
      .then((res) => {
        console.log("공지 상세 응답:", res.data);
        setNotice(res.data.data);
      })
      .catch((err) => {
        console.error("공지사항 상세 조회 실패:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  const goToUpdate = () => {
    navigate(`/notices/${id}/update`);
  };

  const handleDelete = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      axiosInstance.delete(`/api/v1/notices/${id}`)
        .then(() => {
          alert("삭제되었습니다.");
          navigate("/notices");
        })
        .catch((err) => {
          console.error("삭제 실패:", err);
          alert("삭제에 실패했습니다.");
        });
    }
  };

  if (loading) return <><Header /><div css={containerStyle}>불러오는 중...</div></>;
  if (!notice) return <><Header /><div css={containerStyle}>공지사항을 찾을 수 없습니다.</div></>;

  return (
    <>
      <Header />
      <div css={containerStyle}>
        <h1 css={titleStyle}>{notice.title}</h1>

        <div css={metaWrapperStyle}>
          <div css={authorDateStyle}>
            <span><strong>{notice.username}</strong></span>
            <span>{notice.createdAt.slice(0, 16).replace('T', ' ')}</span>
          </div>

          {user?.role_id === 1 && (
            <div css={actionStyle}>
              <span onClick={goToUpdate}>수정</span>
              <span onClick={handleDelete}>삭제</span>
            </div>
          )}
        </div>

        <div css={contentStyle}>
          {notice.content}
        </div>
      </div>
    </>
  );
}

export default NoticeDetail;
