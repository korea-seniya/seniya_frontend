/** @jsxImportSource @emotion/react */
import React from 'react';
import * as style from './userDetailModal.style';
import type { User } from '../../../types/user.type';
import type { GetUserDetailResponseDto } from '../../../dtos/adminUser/response/GetUserDetail.response.dto';

type UserModalProps = {
  isOpen: boolean;
  onClose: () => void;
  user: GetUserDetailResponseDto | null;
};

function UserDetailModal(props: UserModalProps) {
  const { isOpen, onClose, user } = props
  if (!isOpen || !user) return null;

  console.log(user);

  return (
    <div css={style.overlay}>
      <div css={style.modal}>
        <form css={style.form}>
          <div css={style.row}>
            <span>이름: {user.userName}</span>
            <span>ROLE: {user.roleName}</span>
            <span>전화번호: {user.phone}</span>
            <span>총 수강권 구매 수량: {user?.totalCouponCount}</span>
            <span>총 결제 금액: {user?.totalAmount}</span>
            <span>잔여 수강권: {user?.availableCouponCount}</span>
            <table css={style.table}>
              <thead css={style.thead}>
                <tr>
                  <th css={style.th}>제목</th>
                  <th css={style.th}>강사</th>
                  <th css={style.th}>날짜</th>
                </tr>
              </thead>
              <tbody>
                {user.courses.map((course) => (
                  <tr key={course.courseId}>
                    <td css={style.td}>{course.title}</td>
                    <td css={style.td}>{course.trainerName}</td>
                    <td css={style.td}>{course.courseDate.substring(0, 10)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div css={style.buttonGroup}>
            <button type="button" css={style.backBtn} onClick={onClose}>
              뒤로 가기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserDetailModal;
