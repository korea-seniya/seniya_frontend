
/** @jsxImportSource @emotion/react */
import React from 'react';
import { Link } from 'react-router-dom';
import * as style from './adminSidebar.style';

const AdminSidebar: React.FC = () => {


  return (
    <div css={style.SidebarContainer}>
      <nav css={style.Nav}>
        <Link to="/api/v1/users" css={style.LinkStyle}>사용자목록</Link>
        <Link to="/" css={style.LinkStyle}>트레이너 신청목록</Link>
        <Link to="/api/v1/courses" css={style.LinkStyle}>수업 전체 목록</Link>
        <Link to="/api/v1/create-course" css={style.LinkStyle}>수업 개설</Link>
        <Link to="/api/v1/payments/confirm" css={style.LinkStyle}>결제 승인</Link>
      </nav>
    </div>
  );
};

export default AdminSidebar;
