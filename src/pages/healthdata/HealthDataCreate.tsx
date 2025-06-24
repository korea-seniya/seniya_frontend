/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import { createHealthData } from '../../apis/healthdata/healthdata'; // API 호출 함수
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
} from './HealthData.style';
import { useNavigate } from 'react-router-dom';

const HealthDataCreate = () => {
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();
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

  const HARDCODED_TOKEN = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6IuynhOyasO2DnCIsInJvbGUiOiJVU0VSIiwidXNlcklkIjoyMiwiaWF0IjoxNzUwNzUzOTYxLCJleHAiOjE3NTA3NTc1NjF9.sSsvvGrX3UOudqqos-RPu6r1UVKxLhoIvd4QL8zLgs8';


  useEffect(() => {
  localStorage.setItem('Authorization', HARDCODED_TOKEN);

  try {
    const token = HARDCODED_TOKEN.slice(7);
    const base64Payload = token.split('.')[1];
    if (!base64Payload) throw new Error('잘못된 토큰 형식');
    const decodedPayload = JSON.parse(
      new TextDecoder().decode(Uint8Array.from(atob(base64Payload), c => c.charCodeAt(0)))
    );
    setUserName(decodedPayload.username || '');
  } catch (e) {
    setUserName('');
  }
}, []);

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
  const target = e.target;
  const name = target.name;

  let value: string | boolean;

  if (target.type === 'checkbox') {
    value = (target as HTMLInputElement).checked;
  } else {
    value = target.value;
  }

  setFormData(prev => ({
    ...prev,
    [name]: value,
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
        alert('✅ 건강데이터 등록 성공!');
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
        navigate("/api/v1/healthdata/me")
      } else {
        alert(`❌ 등록 실패: ${response.message || '알 수 없는 오류'}`);
      }
    } catch (error) {
      alert('❌ 등록 중 오류가 발생했습니다.');
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
    <div css={containerStyle}>
      <h2 css={titleStyle}>{userName ? `${userName} 님` : '사용자 님'}</h2>
      <div css={formStyle}>
        <label css={labelStyle}>
          <span css={requiredMarkStyle}>*</span> 몸무게
          <input
            name="weight"
            css={inputStyle}
            value={formData.weight}
            onChange={handleChange}
          />
          <span css={unitStyle}>kg</span>
        </label>

        <label css={labelStyle}>
          <span css={requiredMarkStyle}>*</span> 키
          <input
            name="height"
            css={inputStyle}
            value={formData.height}
            onChange={handleChange}
          />
          <span css={unitStyle}>cm</span>
        </label>

        <label css={labelStyle}>
          체지방
          <input
            name="bodyFat"
            css={inputStyle}
            value={formData.bodyFat}
            onChange={handleChange}
          />
          <span css={unitStyle}>%</span>
        </label>

        <label css={labelStyle}>
          혈압
          <select
            name="bloodPressure"
            css={selectStyle}
            value={formData.bloodPressure}
            onChange={handleChange}
          >
            <option value="LOW">낮음</option>
            <option value="NORMAL">정상</option>
            <option value="HIGH">높음</option>
          </select>
        </label>

        <label css={labelStyle}>
          질병 명
          <input
            name="diseaseName"
            css={inputStyle}
            value={formData.diseaseName}
            onChange={handleChange}
          />
        </label>

        <label css={labelStyle}>
          진단 날짜
          <input
            type="date"
            name="diagnosisDate"
            css={dateStyle}
            value={formData.diagnosisDate}
            onChange={handleChange}
          />
        </label>

        <label css={labelStyle}>
          현재 상태
          <select
            name="diseaseStatus"
            css={selectStyle}
            value={formData.diseaseStatus}
            onChange={handleChange}
          >
            <option value="ACTIVE">진행 중</option>
            <option value="RECOVERED">완치</option>
            <option value="CHRONIC">만성</option>
          </select>
        </label>

        <label css={labelStyle}>
          약 이름
          <input
            name="medication"
            css={inputStyle}
            value={formData.medication}
            onChange={handleChange}
          />
        </label>

        <label css={labelStyle}>
          알러지 명
          <input
            name="allergy"
            css={inputStyle}
            value={formData.allergy}
            onChange={handleChange}
          />
        </label>

        <label css={labelStyle}>
          증상
          <input
            name="symptoms"
            css={inputStyle}
            value={formData.symptoms}
            onChange={handleChange}
          />
        </label>

        <div css={checkboxWrapperStyle}>
          <label>
            <input
              type="checkbox"
              name="smoker"
              checked={formData.smoker}
              onChange={handleChange}
            />
            흡연 여부
          </label>
          <label>
            <input
              type="checkbox"
              name="drinker"
              checked={formData.drinker}
              onChange={handleChange}
            />
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
  );
};

export default HealthDataCreate;
