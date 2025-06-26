/** @jsxImportSource @emotion/react */
import React from 'react';
import { asideWrapper, menuSection, menuTitle, menuItem } from './AsideBar.style';
import { useNavigate } from 'react-router-dom';

const AsideBar = () => {
  const navigate = useNavigate();

  return (
    <aside css={asideWrapper}>
      <div css={menuSection}>
        <div css={menuTitle}>내 정보</div>
        <div css={menuItem}
          onClick={() => navigate(`/users/me`)} style={{ cursor: 'pointer' }}>내 정보 조회</div>
        <div css={menuItem}
          onClick={() => navigate(`/users/me/email-send`)} style={{ cursor: 'pointer' }}>비밀번호 재설정</div>
      </div>
      <div css={menuSection}>
        <div css={menuTitle}>건강 데이터</div>
        <div css={menuItem}
          onClick={() => navigate(`/healthdata`)} style={{ cursor: 'pointer' }}>상태 입력</div>
        <div css={menuItem}
          onClick={() => navigate(`/healthdata/me`)} style={{ cursor: 'pointer' }}>상태 조회</div>
        <div css={menuItem}
          onClick={() => navigate(`/healthdata/update`)} style={{ cursor: 'pointer' }}>상태 수정</div>
      </div>
      <div css={menuSection}>
        <div css={menuTitle}>수업</div>
        <div css={menuItem}
          onClick={() => navigate(`/users/me/myparticipation`)} style={{ cursor: 'pointer' }}>내 수업 보기</div>
      </div>
      <div css={menuSection}>
        <div css={menuTitle}>결제</div>
        <div css={menuItem}
        onClick={() => navigate(`/purchases`)} style={{ cursor: 'pointer' }}>결제하기</div>
        <div css={menuItem}
        onClick={() => navigate(`/userPasses`)} style={{ cursor: 'pointer' }}>수강권확인</div>
      </div>
    </aside>
  );
};

export default AsideBar;
