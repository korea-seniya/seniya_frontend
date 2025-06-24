/** @jsxImportSource @emotion/react */
import { NavLink } from 'react-router-dom';
import * as style from './header.style';
import { userUserStore } from '../stores/user.store';
import { userAuthStore } from '../stores/auth.store';

function Header() {
  const links = ['센터 소개', '수업', '트레이너', '게시판', '고객센터'];

  const user = userUserStore((state) => state.user);
  const isLogin = userAuthStore((state) => state.isLogin);
  const logoutUser = userUserStore((state) => state.logoutUser);
  const setLogout = userAuthStore((state) => state.setLogout);

  const handleLogout = () => {
    logoutUser();
    setLogout();
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
