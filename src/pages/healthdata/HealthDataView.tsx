/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import { getHealthData } from '../../apis/healthdata/healthdata';
import {
  containerStyle,
  titleStyle,
  formStyle,
  labelStyle,
  inputStyle,
  selectStyle,
  dateStyle,
  checkboxWrapperStyle,
  buttonWrapperStyle,
  requiredMarkStyle,
  unitStyle,
} from './HealthData.style';

const HARDCODED_TOKEN = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6IuynhOyasO2DnCIsInJvbGUiOiJVU0VSIiwidXNlcklkIjoyMiwiaWF0IjoxNzUwNzYwOTE3LCJleHAiOjE3NTA3NjQ1MTd9.GSwd3mfGsiRQgr_HBQQVnXzxxnxTKX47XVUZlHv0Uwc';

const HealthDataView = () => {
  const [userName, setUserName] = useState('');
  const [healthData, setHealthData] = useState<any>(null);

  useEffect(() => {
    try {
      const token = HARDCODED_TOKEN.slice(7);
      const base64Payload = token.split('.')[1];
      if (!base64Payload) throw new Error('토큰 형식 오류');
      const decodedPayload = JSON.parse(
      new TextDecoder().decode(Uint8Array.from(atob(base64Payload), c => c.charCodeAt(0)))
    );
      setUserName(decodedPayload.username || '');
    } catch (e) {
      console.error('JWT 파싱 실패', e);
      setUserName('');
    }

    const fetchData = async () => {
      const response = await getHealthData(HARDCODED_TOKEN);
      if (response.code === 'SU' && response.data) {
        setHealthData(response.data);
      } else {
        console.error('조회 실패 응답:', response);
        alert(`조회 실패`);
      }
    };

    fetchData();
  }, []);

  if (!healthData) return <div css={containerStyle}>건강 데이터를 불러오는 중...</div>;

  return (
    <div css={containerStyle}>
      <h2 css={titleStyle}>{userName ? `${userName} 님의 건강 데이터` : '건강 데이터'}</h2>
      <div css={formStyle}>
        <label css={labelStyle}>
          <span css={requiredMarkStyle}>*</span> 몸무게
          <div css={inputStyle}>{healthData.weight} <span css={unitStyle}>kg</span></div>
        </label>

        <label css={labelStyle}>
          <span css={requiredMarkStyle}>*</span> 키
          <div css={inputStyle}>{healthData.height} <span css={unitStyle}>cm</span></div>
        </label>

        <label css={labelStyle}>
          체지방
          <div css={inputStyle}>{healthData.bodyFatPercentage ?? '-'} <span css={unitStyle}>%</span></div>
        </label>

        <label css={labelStyle}>
          혈압
          <div css={selectStyle}>{healthData.bloodPressure}</div>
        </label>

        {healthData.diseases?.map((disease: any, idx: number) => (
          <div key={idx}>
            <label css={labelStyle}>
              질병 명
              <div css={inputStyle}>{disease.diseaseName}</div>
            </label>
            <label css={labelStyle}>
              진단 날짜
              <div css={dateStyle}>{disease.diseaseDate}</div>
            </label>
            <label css={labelStyle}>
              현재 상태
              <div css={selectStyle}>{disease.diseaseStatus}</div>
            </label>
          </div>
        ))}

        {healthData.medications?.map((med: any, idx: number) => (
          <label css={labelStyle} key={idx}>
            약 이름
            <div css={inputStyle}>{med.medicationName}</div>
          </label>
        ))}

        {healthData.allergies?.map((allergy: any, idx: number) => (
          <div key={idx}>
            <label css={labelStyle}>
              알러지 명
              <div css={inputStyle}>{allergy.allergyName}</div>
            </label>
            <label css={labelStyle}>
              증상
              <div css={inputStyle}>{allergy.reaction}</div>
            </label>
          </div>
        ))}

        <div css={checkboxWrapperStyle}>
          <div>흡연 여부: {healthData.smoking ? '예' : '아니오'}</div>
          <div>음주 여부: {healthData.drinking ? '예' : '아니오'}</div>
        </div>

        <div css={buttonWrapperStyle}>
          <button css={selectStyle} disabled>읽기 전용</button>
        </div>
      </div>
    </div>
  );
};

export default HealthDataView;
