/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import * as style from './header.style';
import { useUserStore } from '../stores/user.store';
import logoImage from '../components/logo.png';
import mypageIcon from '../components/mypage.png';
import logoutIcon from '../components/logout.png';

const navItems = [
  {
    label: '센터소개',
    subItems: [
      { name: '인사말', path: '/information' },
      { name: '운영목표', path: '/operationalgoals' },
      { name: '시설안내', path: '/' },
      { name: '오시는 길', path: '/' },
    ],
  },
  {
    label: '수업',
    subItems: [
      { name: '수업 예약', path: '/api/v1/courses' },
      { name: '트레이너 수업', path: '/api/v1/courses' },
      { name: '카테고리 수업', path: '/api/v1/courses' },
    ],
  },
  {
    label: '트레이너',
    subItems: [
      { name: '트레이너 소개', path: '/' },
    ],
  },
  {
    label: '게시판',
    subItems: [
      { name: '자유게시판', path: '/api/v1/posts' },
      { name: '공지사항', path: '/notices' },
      { name: '인증샷 게시판', path: '/api/v1/posts' },
    ],
  },
  {
    label: '고객센터',
    subItems: [
      { name: '문의', path: '/api/v1/inquiries' },
      { name: '자주 묻는 질문', path: '/api/v1/inquiries' },
    ],
  },
];

function Header() {
  const navigate = useNavigate();
  const { user, isLogin, logoutUser } = useUserStore();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleLogout = () => {
    logoutUser();
    alert('로그아웃 되었습니다.');
    navigate('/');
  };

  return (
    <div css={style.headerContainer}>
      <div css={style.logoContainer} onClick={() => navigate('/')}>
        <img src={logoImage} alt="로고" css={style.logoImage} />
      </div>

      <div css={style.navContainer}>
        {navItems.map((item, idx) => (
          <div
            key={item.label}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            css={[
              style.navItemWrapper,
              idx !== 0 && style.navItemWithDivider,
            ]}
          >
            <span css={style.navLabel}>{item.label}</span>

            {hoveredIndex === idx && (
              <div css={style.subMenuContainer}>
                {item.subItems.map((sub) => (
                  <div
                    key={sub.name}
                    css={style.subMenuItem}
                    onClick={() => navigate(sub.path)}
                  >
                    {sub.name}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div css={style.userContainer}>
        {isLogin && user ? (
          <>
            <span>{user.name} 님</span>
            <img src={mypageIcon} alt="마이페이지" css={style.iconImage} onClick={() => navigate('/api/v1/users/me')} />
            <img src={logoutIcon} alt="로그아웃" css={style.logoutIconImage} onClick={handleLogout} />
          </>
        ) : (
          <>
            <NavLink to="/signin">Login</NavLink>
            <NavLink to="/signup">SignUp</NavLink>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
