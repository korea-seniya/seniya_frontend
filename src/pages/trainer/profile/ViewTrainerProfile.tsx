/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import {
  container,
  imageNameDiv,
  imageBox,
  imageDiv,
  nameDiv,
  label,
  input,
  textArea,
  select,
  certInput,
  certRow,
  submitButton, // 수정 버튼으로 재활용
} from "./TrainerProfile.style"; // 스타일 임포트 경로 확인
import { getMyProfile } from "../../../apis/trainer/profile"; // GET API
import type { TrainerProfileResponseDto } from "../../../dtos/trainer/response/trainerProfile.response.dto";
import { useNavigate } from "react-router-dom";
import { API_DOMAIN } from "../../../apis/constants";

function ViewTrainerProfile() {
  localStorage.setItem(
    "Authorization",
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InRyYWluZXIiLCJyb2xlIjoiVFJBSU5FUiIsImlhdCI6MTc1MDgxNDYwNSwiZXhwIjoxNzUwODE4MjA1fQ.5jSuRj0SLLeCOUGCvz4CFIt-gzf5DcrkRZAslek7TT8"
  );

  const [profile, setProfile] = useState<TrainerProfileResponseDto | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProfile() {
      try {
        const response = await getMyProfile();
        if (response.code === "SU" && response.data) {
          console.log("프로필 이미지 URL:", response.data.profileImageUrl); 
          setProfile(response.data);
        } else {
          // 프로필이 없는 경우 (생성이 필요) 또는 불러오기 실패
          alert("프로필이 없거나 불러오기 실패: " + response.message + "\n프로필 생성 페이지로 이동합니다.");
          navigate("/api/v1/trainer-profile/create"); // 프로필이 없으면 생성 페이지로
        }
      } catch (error) {
        console.error("프로필 불러오기 에러:", error);
        alert("프로필 불러오는 중 오류가 발생했습니다.");
        navigate("/"); // 심각한 에러 시 홈으로
      } finally {
        setIsLoading(false);
      }
    }
    fetchProfile();
  }, [navigate]);
  
  if (isLoading) {
    return <div>프로필을 불러오는 중입니다...</div>;
  }
  
  if (!profile) {
    return <div>프로필 정보를 찾을 수 없습니다.</div>; // 로딩 후에도 프로필이 없는 경우
  }
  
  return (
    <div css={container}>
      <h2>트레이너 프로필</h2>
      <div css={imageNameDiv}>
        <div css={imageDiv}>
          <div css={imageBox}>
            {profile.profileImageUrl ? (
              <img
              src={API_DOMAIN + profile.profileImageUrl}
              alt="프로필 이미지"
              style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
              />
            ) : (
              "이미지 없음"
            )}
          </div>
        </div>

        <div css={nameDiv}>
          <div css={label}>이름</div>
          <input css={input} value={profile.name ?? ""} disabled />

          <div css={label}>소개글</div>
          <textarea
            css={textArea}
            value={profile.description ?? ""}
            disabled
          />
        </div>
      </div>

      <div css={label}>전문분야</div>
      <select css={select} value={profile.specialty ?? ""} disabled>
        {/* Enum 값에 따라 사용자 친화적인 이름 표시 */}
        <option value="EXERCISE">운동</option>
        <option value="SLEEP">수면 치료</option>
        <option value="REHABILITATION">재활</option>
        <option value="PSYCHOLOGY">심리</option>
      </select>

      <div css={label}>경력</div>
      <input
        css={input}
        value={(profile.experienceYears ?? "") + "년"}
        disabled
      />

      <div css={label}>자격증</div>
      {profile.certificates?.map((cert, index) => (
        <div key={index} css={certRow}>
          <input css={certInput} value={cert.certificate ?? ""} disabled />
          <input
            css={certInput}
            value={cert.certificationDate ?? ""}
            disabled
          />
        </div>
      ))}
      <button
        css={submitButton}
        onClick={() => navigate("/api/v1/trainer-profile/edit")} // 수정 페이지로 이동
      >
        수정하기
      </button>
    </div>
  );
}

export default ViewTrainerProfile;