/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  container,
  imageBox,
  input,
  textArea,
  button,
  label,
  select
} from "./TrainerProfile.style";
import type { TrainerProfileRequestDto } from "../../../dtos/trainer/request/trainerProfile.request.dto";
import { createProfile, getMyProfile, updateProfile } from "../../../apis/trainer/profile";
import type { Specialty } from "../../../dtos/trainer/specialty";

function TrainerProfileForm({ isEdit }: { isEdit: boolean }) {
  

  const navigate = useNavigate();
  const [form, setForm] = useState<TrainerProfileRequestDto>({
    specialty: "SLEEP",
    certificate: "",
    certificationDate: "",
    experienceYears: 0,
    description: "",
  });

  useEffect(() => {
    if (isEdit) {
      const fetchData = async () => {
        const response = await getMyProfile();
        if (response.code === "SU" && response.data) {
          const { specialty, certificate, certificationDate, experienceYears, description } = response.data;
          setForm({ specialty, certificate, certificationDate, experienceYears, description });
        } else {
          alert("프로필을 불러오지 못했습니다.");
        }
      };
      fetchData();
    }
  }, [isEdit]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, specialty: e.target.value as Specialty }));
  };

  const handleSubmit = async () => {
    const response = isEdit ? await updateProfile(form) : await createProfile(form);
    if (response.code === "SU") {
      alert(isEdit ? "프로필이 수정되었습니다." : "프로필이 등록되었습니다.");
      navigate("/trainer/profile");
    } else {
      alert(response.message || "오류가 발생했습니다.");
    }
  };

  return (
    <div css={container}>
      <div css={imageBox}>프로필 이미지</div>

      <label css={label}>전문 분야</label>
      <select css={select} value={form.specialty} onChange={handleSelectChange}>
        <option value="SLEEP">수면 치료</option>
        <option value="REHABILITATION">재활 치료</option>
        <option value="EXERCISE">운동 처방</option>
        <option value="PSYCHOLOGY">심리 상담</option>
      </select>

      <label css={label}>자격증명</label>
      <input
        css={input}
        name="certificate"
        placeholder="예: 운동처방사 2급"
        value={form.certificate}
        onChange={handleChange}
      />

      <label css={label}>자격증 취득일</label>
      <input
        css={input}
        type="date"
        name="certificationDate"
        value={form.certificationDate}
        onChange={handleChange}
      />

      <label css={label}>경력 (년)</label>
      <input
        css={input}
        type="number"
        name="experienceYears"
        value={form.experienceYears}
        onChange={handleChange}
      />

      <label css={label}>소개글</label>
      <textarea
        css={textArea}
        name="description"
        placeholder="자기소개를 입력하세요"
        value={form.description}
        onChange={handleChange}
      />

      <button css={button} onClick={handleSubmit}>
        {isEdit ? "수정" : "등록"}
      </button>
    </div>
  );
}

export default TrainerProfileForm;
