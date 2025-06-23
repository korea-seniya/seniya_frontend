/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import type { Specialty } from "../../../dtos/trainer/specialty";
import type { CertificateRequestDto } from "../../../dtos/trainer/request/certificate.reques.dto";
import {
  container,
  imageNameDiv,
  imageBox,
  imageButton,
  imageDiv,
  nameDiv,
  label,
  required,
  input,
  textArea,
  select,
  certInput,
  certRow,
  minusButton,
  plusButton,
  submitButton,
  divStyle,
  inputStyle,
} from "./TrainerProfile.style";
import { createProfile } from "../../../apis/trainer/profile";
import type { TrainerProfileRequestDto } from "../../../dtos/trainer/request/trainerProfile.request.dto";
import { useNavigate } from "react-router-dom";

function TrainerProfile() {
  localStorage.setItem(
    "Authorization",
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InRyYWluZXIiLCJyb2xlIjoiVVNFUiIsImlhdCI6MTc1MDY0OTUyOSwiZXhwIjoxNzUwNjUzMTI5fQ.STOzQakJyXq95kMHsH9QsB4VOogIi9cdJndfnNzq8q8"
  );
  const [specialty, setSpecialty] = useState<Specialty>("EXERCISE");
  const [certificates, setCertificates] = useState<CertificateRequestDto[]>([
    { certificate: "", certificationDate: "" },
  ]);
  const [experienceYears, setExperienceYears] = useState<number>(0);
  const [description, setDescription] = useState<string>("");
  const navigate = useNavigate();

  const onSpecialtyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSpecialty(e.target.value as Specialty);
  };

  const onCertificateChange = (
    index: number,
    field: keyof CertificateRequestDto,
    value: string
  ) => {
    const updated = [...certificates];
    updated[index][field] = value;
    setCertificates(updated);
  };

  const addCertificate = () => {
    setCertificates([
      ...certificates,
      { certificate: "", certificationDate: "" },
    ]);
  };

  const removeCertificate = (index: number) => {
    const updated = [...certificates];
    updated.splice(index, 1);
    setCertificates(updated);
  };

  const onExperienceYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExperienceYears(Number(e.target.value));
  };

  const onDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const onSubmit = async () => {
    const requestBody: TrainerProfileRequestDto = {
      specialty,
      certificates,
      experienceYears,
      description,
    };
    const response = await createProfile(requestBody);
    if (response.code === "SU") {
      alert("프로필 등록 완료.");
      navigate("/api/v1/trainer-profile");
    } else {
      alert("오류 발생");
    }
  };

  return (
    <div css={container}>
      <div css={imageNameDiv}>

      <div css={imageDiv}>
        <div css={imageBox}>프로필 이미지</div>
        <button css={imageButton}>이미지 변경</button>
      </div>
      <div css={nameDiv}>

      <div css={label}>이름</div>
      <input css={input} value="김○○" disabled />
      <div css={label}>소개글</div>
      <textarea
        css={textArea}
        placeholder="소개글"
        value={description}
        onChange={onDescriptionChange}
        />
        </div>
        </div>

      <div css={label}>
        전문분야 <span css={required}>필수</span>
      </div>
      <select css={select} value={specialty} onChange={onSpecialtyChange}>
        <option value="EXERCISE">운동</option>
        <option value="SLEEP">수면 치료</option>
        <option value="REHABILITATION">재활</option>
        <option value="PSYCHOLOGY">심리</option>
      </select>

      <div css={label}>경력</div>
      <div css={divStyle}>
      <input
        css={inputStyle}
        value={experienceYears}
        onChange={onExperienceYearChange}
        /><p>년차</p>
        </div>

      <div css={label}>
        자격증
      </div>
      {certificates.map((cert, index) => (
        <div key={index} css={certRow}>
          <input
            css={certInput}
            placeholder="예) 운전 면허 1종 보통"
            value={cert.certificate}
            onChange={(e) =>
              onCertificateChange(index, "certificate", e.target.value)
            }
          />
          <input
            css={certInput}
            placeholder="예) 2022-01-01"
            value={cert.certificationDate}
            onChange={(e) =>
              onCertificateChange(index, "certificationDate", e.target.value)
            }
          />
          {index === certificates.length - 1 ? (
            <button css={plusButton} onClick={addCertificate}>
              +
            </button>
          ) : (
            <button css={minusButton} onClick={() => removeCertificate(index)}>
              x
            </button>
          )}
        </div>
      ))}

      <button css={submitButton} onClick={onSubmit}>
        등록
      </button>
    </div>
  );
}

export default TrainerProfile;
