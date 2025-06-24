/** @jsxImportSource @emotion/react */
import { NavLink } from 'react-router-dom';
import * as style from './header.style';
import { useUserStore } from '../stores/user.store';

function Header() {
  const links = ['센터 소개', '수업', '트레이너', '게시판', '고객센터'];

const { user, isLogin, logoutUser } = useUserStore();


  const handleLogout = () => {
    logoutUser();
    alert('로그아웃 되었습니다.');
  };

  return (
    <div css={style.headerContainer}>
      <div css={style.logoContainer}>로고</div>
      <div css={style.navContainer}>
        {links.map((link) => (
          <NavLink
            to={link}
            key={link}
            style={{ margin: '0 40px', textDecoration: 'none' }}
          >
            {link.toUpperCase()}
          </NavLink>
        ))}
      </div>
      <div css={style.userContainer}>
        {isLogin && user ? (
          <>
            <span>{user.username}님</span>
            <button onClick={handleLogout}>로그아웃</button>
            <NavLink to="/me">마이페이지</NavLink>
          </>
        ) : (
          <>
            <NavLink to="/signin">로그인</NavLink>
            <NavLink to="/signup">회원가입</NavLink>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
