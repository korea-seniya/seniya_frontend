/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import {
  getMyInfo,
  updateMyInfo,
  deleteMyInfo,
} from '../../apis/userInfo/userInfo';
import {
  containerStyle,
  titleStyle,
  labelStyle,
  inputStyle,
  withdrawButtonStyle,
  deleteButtonStyle,
  modalOverlayStyle,
  modalBoxStyle,
  confirmButtonStyle,
  cancelButtonStyle,
} from './GetUserInfo.style';
import type { GetMyInfoResponseDto } from '../../dtos/userInfo/response/getMyInfo.response.dto';
import type { updateMyInfoRequestDto } from '../../dtos/userInfo/request/updateMyInfoRequest.dto';

const HARDCODED_TOKEN = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6ImZocm1ka2RudCIsInJvbGUiOiJVU0VSIiwidXNlcklkIjoyMSwiaWF0IjoxNzUwNjY0MTk5LCJleHAiOjE3NTA2Njc3OTl9.d-yVsh0R8K5sT1bkRIgZYhHFzKy2G_nlOz44gPqnweM'; // 실제 토큰 값

const GetUserInfo = () => {
  const [userInfo, setUserInfo] = useState<GetMyInfoResponseDto | null>(null);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
  });
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  useEffect(() => {
    const fetchUserInfo = async () => {
      const response = await getMyInfo(HARDCODED_TOKEN);
      if (response.code === 'SU' && response.data) {
        setUserInfo(response.data);
        setFormData({
          username: response.data.username || '',
          email: response.data.email || '',
          phone: response.data.phone || '',
        });
      } else {
        alert(`❌ 사용자 정보 조회 실패: ${response.message || '알 수 없는 오류'}`);
      }
    };
    fetchUserInfo();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async () => {
    const dto: updateMyInfoRequestDto = {
      username: formData.username,
      email: formData.email,
      phone: formData.phone,
    };

    try {
      const response = await updateMyInfo(dto, HARDCODED_TOKEN);
      if (response.code === 'SU' && response.data) {
        alert('✅ 사용자 정보 수정 완료!');
        setUserInfo(response.data);
      } else {
        alert(`❌ 수정 실패: ${response.message || '알 수 없는 오류'}`);
      }
    } catch (error) {
      console.error('수정 중 오류:', error);
      alert('❌ 수정 중 오류가 발생했습니다.');
    }
  };

  const handleDelete = async () => {
    try {
      const response = await deleteMyInfo(HARDCODED_TOKEN);
      if (response.code === 'SU') {
        alert('✅ 회원 탈퇴가 완료되었습니다.');
        setUserInfo(null);
        setShowDeleteModal(false);
        // 필요 시 리다이렉트
        // window.location.href = '/';
      } else {
        alert(`❌ 탈퇴 실패: ${response.message || '알 수 없는 오류'}`);
      }
    } catch (error) {
      console.error('탈퇴 중 오류:', error);
      alert('❌ 탈퇴 중 오류가 발생했습니다.');
    }
  };

  if (!userInfo) return <div css={containerStyle}>사용자 정보를 불러오는 중...</div>;

  return (
    <div css={containerStyle}>
      <h2 css={titleStyle}>{userInfo.username} 님</h2>

      <label css={labelStyle}>이름
        <input css={inputStyle} name="username" value={formData.username} onChange={handleChange} />
      </label>

      <label css={labelStyle}>이메일
        <input css={inputStyle} name="email" value={formData.email} onChange={handleChange} />
      </label>

      <label css={labelStyle}>전화번호
        <input css={inputStyle} name="phone" value={formData.phone} onChange={handleChange} />
      </label>

      <label css={labelStyle}>회원가입 날짜
        <input css={inputStyle} value={userInfo.createdAt} readOnly />
      </label>

      <button css={withdrawButtonStyle} onClick={handleUpdate}>수정 완료</button>
      <button css={deleteButtonStyle} onClick={() => setShowDeleteModal(true)}>회원 탈퇴</button>

      {showDeleteModal && (
        <div css={modalOverlayStyle}>
          <div css={modalBoxStyle}>
            <p>정말로 회원 탈퇴하시겠습니까?<br />탈퇴 시 모든 정보가 삭제됩니다.</p>
            <button css={confirmButtonStyle} onClick={handleDelete}>탈퇴하기</button>
            <button css={cancelButtonStyle} onClick={() => setShowDeleteModal(false)}>취소</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GetUserInfo;
