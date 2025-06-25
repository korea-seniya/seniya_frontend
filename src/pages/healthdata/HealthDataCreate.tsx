/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useUserStore } from '../../stores/user.store';
import { createHealthData } from '../../apis/healthdata/healthdata';

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
  buttonStyle,
  requiredMarkStyle,
  unitStyle,
  pageWrapperStyle,
} from './HealthData.style';
import AsideBar from '../../components/myPage/AsideBar';
import Header from '../../components/header';
import Footer from '../../components/main/footer/Footer';

const HealthDataCreate = () => {
  const navigate = useNavigate();
  const { user, loginUser } = useUserStore();

  const [formData, setFormData] = useState({
    weight: '',
    height: '',
    bodyFat: '',
    bloodPressure: 'NORMAL',
    diseaseName: '',
    diagnosisDate: '',
    diseaseStatus: 'ACTIVE',
    medication: '',
    allergy: '',
    symptoms: '',
    smoker: true,
    drinker: false,
  });

  useEffect(() => {
  const token = Cookies.get('token');
  const userData = Cookies.get('user');
  
  if (!token || !userData) {
    alert('로그인이 필요합니다.');
    navigate('/signin');
    return;
  }

  try {
    const parsedUser = JSON.parse(userData);
    if (!user) {
      loginUser(parsedUser);
      console.log('user after loginUser:', parsedUser);
    }
  } catch (e) {
    alert('유저 정보를 불러오는 데 실패했습니다.');
    navigate('/signin');
  }
}, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, type, value, checked } = e.target as HTMLInputElement;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async () => {
    if (!formData.height || !formData.weight) {
      alert('키와 몸무게는 필수 입력 항목입니다.');
      return;
    }

    const dto = {
      height: parseFloat(formData.height),
      weight: parseFloat(formData.weight),
      bodyFatPercentage: formData.bodyFat ? parseFloat(formData.bodyFat) : 0,
      bloodPressure: formData.bloodPressure,
      diseases: formData.diseaseName
        ? [
            {
              diseaseName: formData.diseaseName,
              diseaseDate: formData.diagnosisDate,
              diseaseStatus: formData.diseaseStatus,
            },
          ]
        : [],
      medications: formData.medication ? [{ medicationName: formData.medication }] : [],
      allergies: formData.allergy
        ? [{ allergyName: formData.allergy, reaction: formData.symptoms }]
        : [],
      smoking: formData.smoker,
      drinking: formData.drinker,
    };

    try {
      const response = await createHealthData(dto);
      if (response.code === 'SU') {
        alert('건강데이터 등록 성공!');
        setFormData({
          weight: '',
          height: '',
          bodyFat: '',
          bloodPressure: 'NORMAL',
          diseaseName: '',
          diagnosisDate: '',
          diseaseStatus: 'ACTIVE',
          medication: '',
          allergy: '',
          symptoms: '',
          smoker: true,
          drinker: false,
        });
        navigate('/healthdata/me');
      } else {
        alert(`등록 실패: ${response.message || '알 수 없는 오류'}`);
      }
    } catch (error) {
      alert('등록 중 오류가 발생했습니다.');
      console.error(error);
    }
  };

  const handleCancel = () => {
    setFormData({
      weight: '',
      height: '',
      bodyFat: '',
      bloodPressure: 'NORMAL',
      diseaseName: '',
      diagnosisDate: '',
      diseaseStatus: 'ACTIVE',
      medication: '',
      allergy: '',
      symptoms: '',
      smoker: true,
      drinker: false,
    });
  };

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
              <input name="weight" css={inputStyle} value={formData.weight} onChange={handleChange} />
              <span css={unitStyle}>kg</span>
            </label>

            <label css={labelStyle}>
              <span css={requiredMarkStyle}>*</span> 키
              <input name="height" css={inputStyle} value={formData.height} onChange={handleChange} />
              <span css={unitStyle}>cm</span>
            </label>

            <label css={labelStyle}>
              체지방
              <input name="bodyFat" css={inputStyle} value={formData.bodyFat} onChange={handleChange} />
              <span css={unitStyle}>%</span>
            </label>

            <label css={labelStyle}>
              혈압
              <select name="bloodPressure" css={selectStyle} value={formData.bloodPressure} onChange={handleChange}>
                <option value="LOW">낮음</option>
                <option value="NORMAL">정상</option>
                <option value="HIGH">높음</option>
              </select>
            </label>

            <label css={labelStyle}>
              질병 명
              <input name="diseaseName" css={inputStyle} value={formData.diseaseName} onChange={handleChange} />
            </label>

            <label css={labelStyle}>
              진단 날짜
              <input type="date" name="diagnosisDate" css={dateStyle} value={formData.diagnosisDate} onChange={handleChange} />
            </label>

            <label css={labelStyle}>
              현재 상태
              <select name="diseaseStatus" css={selectStyle} value={formData.diseaseStatus} onChange={handleChange}>
                <option value="ACTIVE">진행 중</option>
                <option value="RECOVERED">완치</option>
                <option value="CHRONIC">만성</option>
              </select>
            </label>

            <label css={labelStyle}>
              약 이름
              <input name="medication" css={inputStyle} value={formData.medication} onChange={handleChange} />
            </label>

            <label css={labelStyle}>
              알러지 명
              <input name="allergy" css={inputStyle} value={formData.allergy} onChange={handleChange} />
            </label>

            <label css={labelStyle}>
              증상
              <input name="symptoms" css={inputStyle} value={formData.symptoms} onChange={handleChange} />
            </label>

            <div css={checkboxWrapperStyle}>
              <label>
                <input type="checkbox" name="smoker" checked={formData.smoker} onChange={handleChange} />
                흡연 여부
              </label>
              <label>
                <input type="checkbox" name="drinker" checked={formData.drinker} onChange={handleChange} />
                음주 여부
              </label>
            </div>

            <div css={buttonWrapperStyle}>
              <button css={buttonStyle} onClick={handleCancel}>
                취소
              </button>
              <button css={buttonStyle} onClick={handleSubmit}>
                완료
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HealthDataCreate;
