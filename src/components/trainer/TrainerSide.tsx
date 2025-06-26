/** @jsxImportSource @emotion/react */
import React from 'react'
import { Link } from 'react-router-dom'
import { navStyle, linkStyle } from './trainerSide.style'

function TrainerSide() {
  return (
      <nav css={navStyle}>
        <Link to ="/trainer-profile/create" css={linkStyle}>프로필 생성</Link>
        <Link to ="/trainer-profile/view" css={linkStyle}>프로필 조회</Link>
        <Link to ="/trainer-profile/edit" css={linkStyle}>프로필 수정</Link>
      </nav>
  )
}

export default TrainerSide