/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { NavLink } from 'react-router-dom';
import * as style from './header.style'

function Header() {
  const links = ['센터 소개', '수업', '트레이너', '게시판', '고객센터']

  return (
    <div css={style.headerContainer}>
      <div css={style.logoContainer}>
        로고
      </div>
      <div css={style.navContainer}>
        {links.map(link => (
          <NavLink
            to={link}
            key={link}
            style={{ margin: '0 40px', textDecoration: 'none' }}
          >
            {link === '/' ? 'Home' : link.toUpperCase()}
          </NavLink>
        ))
        }
      </div>
      <div css={style.userContainer}>
        로그인/마이페이지 자리
      </div>
    </div >
  )
}

export default Header;
