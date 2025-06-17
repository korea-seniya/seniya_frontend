// export default UserList;
/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import * as style from './UserList.style';
import UserModal from '../../../components/admin/user/userDetailModal';
import AdminSidebar from '../../../components/admin/AdminSidebar';
import Header from '../../../components/header';
import { getUserList } from '../../../apis/userList/userList';
import type { GetUserListResponseDto } from '../../../dtos/response/GetUserList.response.dto';
import { getUserDetail } from '../../../apis/userList/userDetail';
import type { GetUserDetailResponseDto } from '../../../dtos/response/GetUserDetail.response.dto';

function UserList() {

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<GetUserDetailResponseDto | null>(null);

  const openModalWithUser = (user: GetUserDetailResponseDto) => {
    setSelectedUser(user);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedUser(null);
  };

  const [users, setUsers] = useState<GetUserListResponseDto[]>([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await getUserList();
        if (response.code === "SU" && Array.isArray(response.data)) {
          setUsers(response.data);
          console.log(response.data);
        } else {
          console.log(response.message);
        }
      } catch (err) {
        console.log(err);
      }
    }
    fetchUsers();
  }, []);

  const openModalWithUserId = async (id: number) => {
    try {
      const response = await getUserDetail(id);
      if (response.code === 'SU' && response.data) {
        setSelectedUser(response.data); // 상세 정보 설정
        setModalOpen(true);
      } else {
        alert(response.message);
      }
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <>
      <Header />
      <div css={style.pageWrapper}>
        <AdminSidebar />
        <main css={style.contentWrapper}>
          <h2 css={style.titleStyle}>사용자 목록</h2>
          <div css={style.tableContainer}>
            <table css={style.tableStyle}>
              <thead>
                <tr css={style.firstTrStyle}>
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
                {users.map((user) => (
                  <tr key={user.id} css={style.trStyle}>
                    <td css={style.tdStyle}>{user.username}</td>
                    <td css={style.tdStyle}>{user.name}</td>
                    <td css={style.tdStyle}>{user.email}</td>
                    <td css={style.tdStyle}>{user.phone}</td>
                    <td css={style.tdStyle}>{user.createdAt}</td>
                    <td css={style.tdStyle}>{user.updatedAt}</td>
                    <td css={style.tdStyle}>
                      <button css={style.detailButtonStyle} onClick={() => openModalWithUserId(user.id)}>
                        detail
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
        <UserModal isOpen={modalOpen} onClose={closeModal} user={selectedUser} />
      </div>
    </>
  )
}

export default UserList;