/** @jsxImportSource @emotion/react */
import React, { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import {
  container,
  imageNameDiv,
  imageBox,
  imageButton,
  imageDiv,
  nameDiv,
  label,
  input,
  textArea,
  select,
  certInput,
  certRow,
  submitButton,
  addCertButton,
  removeCertButton,
} from "./TrainerProfile.style"; // 스타일 임포트 경로 확인
import { createProfile } from "../../../apis/trainer/profile"; // createProfile API
import { useNavigate } from "react-router-dom";
import type { TrainerProfileRequestDto } from "../../../dtos/trainer/request/trainerProfile.request.dto";
import { Specialty } from "../../../dtos/trainer/specialty";
import { useUserStore } from "../../../stores/user.store";

function CreateTrainerProfile() {
  const { isLogin, user } = useUserStore();
  const [profileData, setProfileData] = useState<TrainerProfileRequestDto>({
    specialty: Specialty.EXERCISE,
    certificates: [],
    experienceYears: 0,
    description: "",
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewImageUrl, setPreviewImageUrl] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
      if (!isLogin || !user || user.role_id !== 3) {
        alert('관리자만 접근할 수 있습니다.');
        navigate('/');
      }
    }, [isLogin, user, navigate]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: value as any }));
  };

  const handleCertChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newCerts = [...(profileData.certificates || [])];
    newCerts[index] = { ...newCerts[index], [name]: value };
    setProfileData((prev) => ({ ...prev, certificates: newCerts }));
  };

  const addCertificate = () => {
    setProfileData((prev) => ({
      ...prev,
      certificates: [...(prev.certificates || []), { certificate: "", certificationDate: "" }],
    }));
  };

  const removeCertificate = (index: number) => {
    const newCerts = (profileData.certificates || []).filter((_, i) => i !== index);
    setProfileData((prev) => ({ ...prev, certificates: newCerts }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      setPreviewImageUrl(URL.createObjectURL(file));
    } else {
      setSelectedFile(null);
      setPreviewImageUrl(null);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const dataToSend: TrainerProfileRequestDto = {
      ...profileData,
      experienceYears: Number(profileData.experienceYears),
    };

    try {
      const response = await createProfile(dataToSend, selectedFile);
      if (response.code === "SU") {
        alert("프로필이 성공적으로 생성되었습니다.");
        navigate("/api/v1/trainer-profile/view"); // 생성 후 조회 페이지로 이동
      } else {
        alert("프로필 생성 실패: " + response.message);
      }
    } catch (error) {
      console.error("프로필 생성 에러:", error);
      alert("프로필 생성 중 알 수 없는 오류가 발생했습니다.");
    }
  };

  return (
    <div css={container}>
      <h2>트레이너 프로필 생성</h2>
      <form onSubmit={handleSubmit}>
        <div css={imageNameDiv}>
          <div css={imageDiv}>
            <div css={imageBox}>
              {previewImageUrl ? (
                <img
                  src={previewImageUrl}
                  alt="프로필 이미지 미리보기"
                  style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
                />
              ) : (
                "이미지 선택"
              )}
            </div>
            <input
              type="file"
              id="profileImageInput"
              accept="image/*"
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
            <button
              type="button"
              css={imageButton}
              onClick={() => document.getElementById("profileImageInput")?.click()}
            >
              이미지 선택
            </button>
          </div>

          <div css={nameDiv}>
            <div css={label}>이름</div>
            <input css={input} placeholder="사용자 이름 자동 입력" disabled />

            <div css={label}>소개글</div>
            <textarea
              css={textArea}
              name="description"
              placeholder="자신을 소개해 주세요."
              value={profileData.description}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div css={label}>전문분야</div>
        <select
          css={select}
          name="specialty"
          value={profileData.specialty}
          onChange={handleInputChange}
        >
          {Object.values(Specialty).map((s) => (
            <option key={s} value={s}>
              {s === Specialty.EXERCISE && "운동"}
              {s === Specialty.SLEEP && "수면 치료"}
              {s === Specialty.REHABILITATION && "재활"}
              {s === Specialty.PSYCHOLOGY && "심리"}
            </option>
          ))}
        </select>

        <div css={label}>경력 (년)</div>
        <input
          css={input}
          type="number"
          name="experienceYears"
          placeholder="경력을 입력하세요."
          value={profileData.experienceYears}
          onChange={handleInputChange}
        />

        <div css={label}>자격증</div>
        {(profileData.certificates || []).map((cert, index) => (
          <div key={index} css={certRow}>
            <input
              css={certInput}
              type="text"
              name="certificate"
              placeholder="자격증 명"
              value={cert.certificate}
              onChange={(e) => handleCertChange(index, e)}
            />
            <input
              css={certInput}
              type="date"
              name="certificationDate"
              placeholder="YYYY-MM-DD"
              value={cert.certificationDate}
              onChange={(e) => handleCertChange(index, e)}
            />
            <button type="button" css={removeCertButton} onClick={() => removeCertificate(index)}>
              삭제
            </button>
          </div>
        ))}
        <button type="button" css={addCertButton} onClick={addCertificate}>
          자격증 추가
        </button>

        <button css={submitButton} type="submit">
          프로필 생성
        </button>
      </form>
    </div>
  );
}

export default CreateTrainerProfile;