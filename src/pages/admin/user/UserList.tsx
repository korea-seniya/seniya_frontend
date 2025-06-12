/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import React, { useState } from 'react'
import * as style from './UserList.style'
import UserModal from '../../../components/admin/user/userDetailModal';

function UserList() {

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const users = [
    {
      username: 'dkdlel123',
      name: '이름1',
      email: 'dlapdlf123@naver.com',
      phone: '010-1234-5678',
      createdAt: '2025-01-01',
      updatedAt: '2025-01-02',
    }, {
      username: 'dkdlel1234',
      name: '이름2',
      email: 'dlapdlf1234@naver.com',
      phone: '010-1111-2222',
      createdAt: '2025-33-33',
      updatedAt: '2025-33-44',
    }, {
      username: 'dkdlel12345',
      name: '이름3',
      email: 'dlapdlf12345@naver.com',
      phone: '010-4444-1111',
      createdAt: '2025-77-77',
      updatedAt: '2025-99-99',
    },
  ];

  return (
    <div>
      <div css={style.containerStyle}>
        <table css={style.tableStyle}>
          <thead>
            <tr css={style.firtTrStyle}>
              <th css={style.thStyle}>아이디</th>
              <th css={style.thStyle}>이름</th>
              <th css={style.thStyle}>이메일</th>
              <th css={style.thStyle}>번호</th>
              <th css={style.thStyle}>가입 날짜</th>
              <th css={style.thStyle}>수정 날짜</th>
              <th css={style.thStyle}>세부 사항</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} css={style.trStyle}>
                <td css={style.tdStyle}>{user.username}</td>
                <td css={style.tdStyle}>{user.name}</td>
                <td css={style.tdStyle}>{user.email}</td>
                <td css={style.tdStyle}>{user.phone}</td>
                <td css={style.tdStyle}>{user.createdAt}</td>
                <td css={style.tdStyle}>{user.updatedAt}</td>
                <td css={style.tdStyle}>
                  <button css={style.detailButtonStyle} onClick={openModal}>detail</button>
                  <UserModal
                    isOpen={modalOpen}
                    onClose={closeModal}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UserList