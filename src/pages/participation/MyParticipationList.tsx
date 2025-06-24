/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import {
  containerStyle,
  titleStyle,
  tableStyle,
  thStyle,
  tdStyle,
  cancelButtonStyle,
} from './MyParticipationList.style';

import participationApi from '../../apis/participation/participation';
import type { Participation } from './participation'; 
import CancelModal from './CancelModal';

function MyParticipationList() {
  const [participations, setParticipations] = useState<Participation[]>([]);
  const [selected, setSelected] = useState<Participation | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // 신청 목록 조회
  const fetchParticipations = async () => {
    try {
      const list = await participationApi.getMyParticipations();
      setParticipations(list);
    } catch (error: any) {
      console.error('수업 목록 불러오기 실패:', error);
      setErrorMessage(error.message || '수업 목록을 불러오는 데 실패했습니다.');
    }
  };

  // 수업 신청 취소
  const confirmCancel = async () => {
    if (!selected) return;
    try {
      await participationApi.cancelParticipation(selected.participationId);
      setParticipations(prev =>
        prev.filter(p => p.participationId !== selected.participationId)
      );
      setSelected(null);
    } catch (error: any) {
      console.error('수업 취소 실패:', error);
      alert(error.message || '수업 취소에 실패했습니다.');
    }
  };

  useEffect(() => {
    fetchParticipations();
  }, []);

  return (
    <div css={containerStyle}>
      <h2 css={titleStyle}>나의 수업 신청 목록</h2>

      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

      {participations.length === 0 ? (
        <p>신청한 수업이 없습니다.</p>
      ) : (
        <table css={tableStyle}>
          <thead>
            <tr>
              <th css={thStyle}>카테고리</th>
              <th css={thStyle}>수업명</th>
              <th css={thStyle}>설명</th>
              <th css={thStyle}>강사</th>
              <th css={thStyle}>시간</th>
              <th css={thStyle}>날짜</th>
              <th css={thStyle}>강의장</th>
              <th css={thStyle}>취소</th>
            </tr>
          </thead>
          <tbody>
            {participations.map(participation => (
              <tr key={participation.participationId}>
                <td css={tdStyle}>{participation.category}</td>
                <td css={tdStyle}>{participation.title}</td>
                <td css={tdStyle}>{participation.description}</td>
                <td css={tdStyle}>{participation.trainerName}</td>
                <td css={tdStyle}>
                  {participation.courseStartTime} ~ {participation.courseEndTime}
                </td>
                <td css={tdStyle}>{participation.courseDate}</td>
                <td css={tdStyle}>{participation.courseRoom}</td>
                <td css={tdStyle}>
                  <button
                    css={cancelButtonStyle}
                    onClick={() => setSelected(participation)}
                  >
                    취소
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* 모달 */}
      <CancelModal
        participation={selected}
        onCancel={() => setSelected(null)}
        onConfirm={confirmCancel}
      />
    </div>
  );
}

export default MyParticipationList;
