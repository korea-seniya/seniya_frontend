/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
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
  pageWrapperStyle,
} from './HealthData.style';
import AsideBar from '../../components/myPage/AsideBar';
import { useUserStore } from '../../stores/user.store';
import Footer from '../../components/main/footer/Footer';
import Header from '../../components/header';

const HealthDataView = () => {
  const [userName, setUserName] = useState('');
  const [healthData, setHealthData] = useState<any>(null);
  const { user } = useUserStore();

  useEffect(() => {
    const token = Cookies.get('token');

    if (!token) {
      alert('로그인이 필요합니다.');
      return;
    }

    try {
      const base64Payload = token.split('.')[1];
      if (!base64Payload) throw new Error('토큰 형식 오류');

      const decodedPayload = JSON.parse(
        new TextDecoder().decode(Uint8Array.from(atob(base64Payload), c => c.charCodeAt(0)))
      );

      setUserName(decodedPayload.username || decodedPayload.name || '');
    } catch (e) {
      console.error('JWT 파싱 실패', e);
      setUserName('');
    }

    const fetchData = async () => {
      const response = await getHealthData();
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
    <>
    <Header />
      <div css={pageWrapperStyle}>
        <AsideBar />
        <div css={containerStyle}>
          <h2 css={titleStyle}>{user?.name ? `${user.name} 님` : '사용자 님'}</h2>
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
          </div>
        </div>
      </div>
      <Footer />
    </>  
  );
};

export default HealthDataView;
