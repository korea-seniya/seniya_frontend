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
import { getMyProfile, updateProfile } from "../../../apis/trainer/profile"; // GET, PUT API
import { useNavigate } from "react-router-dom";
import type { CertificateResponseDto } from "../../../dtos/trainer/response/certificate.response.dto";
import type { CertificateRequestDto } from "../../../dtos/trainer/request/certificate.reques.dto";
import type { updateTrainerProfileRequestDto } from "../../../dtos/trainer/request/updateTrainerProfile.request.dto";
import { Specialty } from "../../../dtos/trainer/specialty";
import { API_DOMAIN } from "../../../apis/constants";

// CertificateResponseDto를 CertificateRequestDto로 변환하는 헬퍼 함수
const mapCertToRequestDto = (cert: CertificateResponseDto): CertificateRequestDto => ({
  certificate: cert.certificate,
  certificationDate: cert.certificationDate,
});

function EditTrainerProfile() {
  localStorage.setItem(
    "Authorization",
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InRyYWluZXIiLCJyb2xlIjoiVVNFUiIsImlhdCI6MTc1MDc1MjIyOCwiZXhwIjoxNzUwNzU1ODI4fQ.DHMcidMNr9jLlp_cvPtlskr8fUhT71sWa4TNQaofRWo"
  );

  const [profileData, setProfileData] = useState<updateTrainerProfileRequestDto>({
    specialty: Specialty.EXERCISE, // 기본값
    certificates: [],
    experienceYears: 0,
    description: "",
    removeProfileImage: false,
  });
  const [currentProfileImageUrl, setCurrentProfileImageUrl] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const navigate = useNavigate();

  // 초기 프로필 데이터 로드
  useEffect(() => {
    async function fetchProfile() {
      try {
        const response = await getMyProfile();
        if (response.code === "SU" && response.data) {
          const fetchedProfile = response.data;
          setProfileData({
            specialty: fetchedProfile.specialty,
            certificates: fetchedProfile.certificates?.map(mapCertToRequestDto) || [],
            experienceYears: fetchedProfile.experienceYears,
            description: fetchedProfile.description,
            removeProfileImage: false, // 초기 로드 시에는 이미지 삭제 요청 아님
          });
          setCurrentProfileImageUrl(API_DOMAIN + fetchedProfile.profileImageUrl);
        } else {
          alert("프로필 불러오기 실패: " + response.message + "\n프로필 생성 페이지로 이동합니다.");
          navigate("/api/v1/trainer-profile/create"); // 프로필이 없으면 생성 페이지로 이동
        }
      } catch (error) {
        console.error("프로필 불러오기 에러:", error);
        alert("프로필 불러오는 중 오류가 발생했습니다.");
        navigate("/");
      } finally {
        setIsLoading(false);
      }
    }
    fetchProfile();
  }, [navigate]);

  // 입력 필드 변경 핸들러
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: value as any }));
  };

  // 자격증 입력 필드 변경 핸들러
  const handleCertChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newCerts = [...(profileData.certificates || [])];
    newCerts[index] = { ...newCerts[index], [name]: value };
    setProfileData((prev) => ({ ...prev, certificates: newCerts }));
  };

  // 자격증 추가
  const addCertificate = () => {
    setProfileData((prev) => ({
      ...prev,
      certificates: [...(prev.certificates || []), { certificate: "", certificationDate: "" }],
    }));
  };

  // 자격증 삭제
  const removeCertificate = (index: number) => {
    const newCerts = (profileData.certificates || []).filter((_, i) => i !== index);
    setProfileData((prev) => ({ ...prev, certificates: newCerts }));
  };

  // 파일 선택 핸들러
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      setCurrentProfileImageUrl(URL.createObjectURL(file)); // 미리보기 URL 생성
      setProfileData((prev) => ({ ...prev, removeProfileImage: false })); // 새 파일 선택했으니 삭제 요청 해제
    } else {
      setSelectedFile(null);
      // 파일 선택 취소 시, 기존 이미지 URL을 유지하거나 (이전 상태로 돌아가기)
      // 아니면 미리보기만 해제하고 삭제 플래그는 건드리지 않도록 로직을 정교화할 수 있습니다.
      // 여기서는 미리보기만 해제하고 removeProfileImage는 그대로 둡니다.
    }
  };

  // 이미지 삭제 버튼 핸들러
  const handleRemoveImage = () => {
    setSelectedFile(null); // 새로 선택된 파일이 있다면 해제
    setCurrentProfileImageUrl(null); // 미리보기/현재 이미지 URL 해제
    setProfileData((prev) => ({ ...prev, removeProfileImage: true })); // 백엔드에 이미지 삭제 요청 플래그 설정
  };

  // 폼 제출 핸들러 (업데이트)
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const dataToSend: updateTrainerProfileRequestDto = {
      ...profileData,
      experienceYears: Number(profileData.experienceYears),
    };

    try {
      const response = await updateProfile(dataToSend, selectedFile);
      if (response.code === "SU" && response.data) {
        alert("프로필이 성공적으로 업데이트되었습니다.");
        // 업데이트된 최신 프로필 정보로 프론트엔드 state 다시 설정
        const updatedProfile = response.data;
        setProfileData({
            specialty: updatedProfile.specialty,
            certificates: updatedProfile.certificates?.map(mapCertToRequestDto) || [],
            experienceYears: updatedProfile.experienceYears,
            description: updatedProfile.description,
            removeProfileImage: false, // 업데이트 완료 후 삭제 요청 초기화
        });
        setCurrentProfileImageUrl(updatedProfile.profileImageUrl); // 새 이미지 URL 반영
        setSelectedFile(null); // 파일 전송 완료 후 선택 파일 초기화 (important!)

        navigate("/api/v1/trainer-profile/view"); // 업데이트 후 조회 페이지로 이동
      } else {
        alert("프로필 업데이트 실패: " + response.message);
      }
    } catch (error) {
      console.error("프로필 업데이트 에러:", error);
      alert("프로필 업데이트 중 알 수 없는 오류가 발생했습니다.");
    }
  };

  if (isLoading) {
    return <div>프로필을 불러오는 중입니다...</div>;
  }

  // 로드된 프로필이 없을 경우 (에러 또는 생성 전)
  // ViewTrainerProfile에서 생성 페이지로 리다이렉트 시키므로, Edit에서는 보통 발생하지 않음.
  // 하지만 혹시 모를 경우를 대비한 방어 로직.
  if (!profileData) {
      return <div>프로필 정보를 불러올 수 없습니다.</div>;
  }

  return (
    <div css={container}>
      <h2>트레이너 프로필 수정</h2>
      <form onSubmit={handleSubmit}>
        <div css={imageNameDiv}>
          <div css={imageDiv}>
            <div css={imageBox}>
              {currentProfileImageUrl ? (
                <img
                  src={currentProfileImageUrl}
                  alt="프로필 이미지"
                  style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
                />
              ) : (
                "이미지 없음"
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
            {/* 이미지가 있고, removeProfileImage가 true가 아닐 때만 삭제 버튼 표시 */}
            {currentProfileImageUrl && profileData.removeProfileImage === false && (
              <button
                type="button"
                css={imageButton}
                onClick={handleRemoveImage}
                style={{ marginLeft: '10px' }}
              >
                이미지 삭제
              </button>
            )}
          </div>

          <div css={nameDiv}>
            <div css={label}>이름</div>
            {/* 이름은 수정 불가능 (백엔드 user 정보 기반) */}
            <input css={input} value={"" /* fetchProfile에서 불러온 이름을 여기에 넣어줄수 있음 */} disabled />

            <div css={label}>소개글</div>
            <textarea
              css={textArea}
              name="description"
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
          프로필 업데이트
        </button>
      </form>
    </div>
  );
}

export default EditTrainerProfile;