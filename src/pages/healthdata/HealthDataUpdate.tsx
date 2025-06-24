/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import { getHealthData, updateHealthData } from '../../apis/healthdata/healthdata'; // 수정 API 추가
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

const HARDCODED_TOKEN = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6IuynhOyasO2DnCIsInJvbGUiOiJVU0VSIiwidXNlcklkIjoyMiwiaWF0IjoxNzUwNzYwOTE3LCJleHAiOjE3NTA3NjQ1MTd9.GSwd3mfGsiRQgr_HBQQVnXzxxnxTKX47XVUZlHv0Uwc';

const HealthDataUpdate = () => {
  const [userName, setUserName] = useState('');
  const [initialData, setInitialData] = useState<any>(null); // 원본 데이터 저장용

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
    // 토큰 세팅 (테스트용)
    localStorage.setItem('Authorization', HARDCODED_TOKEN);

    // 토큰에서 username 파싱
    try {
      const token = HARDCODED_TOKEN.slice(7);
      const base64Payload = token.split('.')[1];
      if (!base64Payload) throw new Error('잘못된 토큰 형식');
      const payloadJson = atob(base64Payload);
      const payload = JSON.parse(payloadJson);
      setUserName(payload.username || '');
    } catch (e) {
      setUserName('');
    }

    // 내 건강데이터 조회해서 폼 초기화
    const fetchData = async () => {
  const token = localStorage.getItem('Authorization') || HARDCODED_TOKEN;

  const response = await getHealthData(token);  // ← token 전달
  if (response.code === 'SU' && response.data) {
    setInitialData(response.data);

    setFormData({
      weight: response.data.weight?.toString() || '',
      height: response.data.height?.toString() || '',
      bodyFat: response.data.bodyFatPercentage?.toString() || '',
      bloodPressure: response.data.bloodPressure || 'NORMAL',
      diseaseName: response.data.diseases?.[0]?.diseaseName || '',
      diagnosisDate: response.data.diseases?.[0]?.diseaseDate || '',
      diseaseStatus: response.data.diseases?.[0]?.diseaseStatus || 'ACTIVE',
      medication: response.data.medications?.[0]?.medicationName || '',
      allergy: response.data.allergies?.[0]?.allergyName || '',
      symptoms: response.data.allergies?.[0]?.reaction || '',
      smoker: response.data.smoking ?? true,
      drinker: response.data.drinking ?? false,
    });
  } else {
    alert(`❌ 조회 실패: ${response.message || '알 수 없는 오류'}`);
  }
};

    fetchData();
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
      // 토큰은 localStorage에서 꺼내거나 HARDCODED_TOKEN 사용
      const token = localStorage.getItem('Authorization') || HARDCODED_TOKEN;

      const response = await updateHealthData(dto, token);
      if (response.code === 'SU') {
        alert('✅ 건강데이터 수정 성공!');
        setInitialData(dto); // 최신 데이터로 초기화
      } else {
        alert(`❌ 수정 실패: ${response.message || '알 수 없는 오류'}`);
      }
    } catch (error) {
      alert('❌ 수정 중 오류가 발생했습니다.');
      console.error(error);
    }
  };

  const handleCancel = () => {
    if (initialData) {
      setFormData({
        weight: initialData.weight?.toString() || '',
        height: initialData.height?.toString() || '',
        bodyFat: initialData.bodyFatPercentage?.toString() || '',
        bloodPressure: initialData.bloodPressure || 'NORMAL',
        diseaseName: initialData.diseases?.[0]?.diseaseName || '',
        diagnosisDate: initialData.diseases?.[0]?.diseaseDate || '',
        diseaseStatus: initialData.diseases?.[0]?.diseaseStatus || 'ACTIVE',
        medication: initialData.medications?.[0]?.medicationName || '',
        allergy: initialData.allergies?.[0]?.allergyName || '',
        symptoms: initialData.allergies?.[0]?.reaction || '',
        smoker: initialData.smoking ?? true,
        drinker: initialData.drinking ?? false,
      });
    }
  };

  if (!initialData) return <div css={containerStyle}>건강 데이터를 불러오는 중...</div>;

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
            수정 완료
          </button>
        </div>
      </div>
    </div>
  );
};

export default HealthDataUpdate;
