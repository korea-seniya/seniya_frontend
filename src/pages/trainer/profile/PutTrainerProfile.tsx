/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
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
} from "./TrainerProfile.style";
import { getMyProfile, updateProfile } from "../../../apis/trainer/profile";
import { useNavigate } from "react-router-dom";

function PutTrainerProfile() {
  localStorage.setItem(
    "Authorization",
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InRyYWluZXIiLCJyb2xlIjoiVFJBSU5FUiIsImlhdCI6MTc1MDY1MDQyNCwiZXhwIjoxNzUwNjU0MDI0fQ.Fb0gD0vT1TQnEIcJXjJM0Ycvrk8o3t4c45p_ffdmvt8"
  );

  const [specialty, setSpecialty] = useState<Specialty>("EXERCISE");
  const [certificates, setCertificates] = useState<CertificateRequestDto[]>([]);
  const [experienceYears, setExperienceYears] = useState<number>(0);
  const [description, setDescription] = useState<string>("");
  const [name, setName] = useState<string>(""); // 이름도 조회용으로 따로 관리
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const res = await getMyProfile();
      if (res.code === "SU" && res.data) {
        const data = res.data;
        setSpecialty(data.specialty);
        setCertificates(data.certificates ?? []);
        setExperienceYears(data.experienceYears);
        setDescription(data.description);
        setName(data.name ?? ""); // 이름 표시용
      } else {
        alert("프로필 정보를 불러오지 못했습니다.");
      }
    };

    fetchProfile();
  }, []);

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
    const requestBody = {
      specialty,
      certificates,
      experienceYears,
      description,
    };
    const response = await updateProfile(requestBody); // 수정 API 호출
    if (response.code === "SU") {
      alert("프로필 수정 완료.");
      navigate("/api/v1/trainer-profile/me");
    } else {
      alert("수정 중 오류 발생");
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
          <input css={input} value={name ?? ""} disabled />
          <div css={label}>소개글</div>
          <textarea
            css={textArea}
            placeholder="소개글"
            value={description ?? ""}
            onChange={onDescriptionChange}
          />
        </div>
      </div>

      <div css={label}>
        전문분야 <span css={required}>필수</span>
      </div>
      <select
        css={select}
        value={specialty ?? "EXERCISE"}
        onChange={onSpecialtyChange}
      >
        <option value="EXERCISE">운동</option>
        <option value="SLEEP">수면 치료</option>
        <option value="REHABILITATION">재활</option>
        <option value="PSYCHOLOGY">심리</option>
      </select>

      <div css={label}>경력</div>
      <input
        css={input}
        value={experienceYears ?? 0}
        onChange={onExperienceYearChange}
        placeholder="연차"
        type="number"
      />

      <div css={label}>
        자격증 <span css={required}>필수</span>
      </div>
      {(certificates ?? []).map((cert, index) => (
        <div key={index} css={certRow}>
          <input
            css={certInput}
            placeholder="예) 운전 면허 1종 보통"
            value={cert.certificate ?? ""}
            onChange={(e) =>
              onCertificateChange(index, "certificate", e.target.value)
            }
          />
          <input
            css={certInput}
            placeholder="예) 2022-01-01"
            value={cert.certificationDate ?? ""}
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
        수정
      </button>
    </div>
  );
}

export default PutTrainerProfile;
