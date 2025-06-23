/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
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
} from "./TrainerProfile.style";
import { getMyProfile } from "../../../apis/trainer/profile"; // GET API
import type { TrainerProfileResponseDto } from "../../../dtos/trainer/response/trainerProfile.response.dto";
import { useNavigate } from "react-router-dom";

function GetTrainerProfile() {
  localStorage.setItem(
    "Authorization",
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InRyYWluZXIiLCJyb2xlIjoiVVNFUiIsImlhdCI6MTc1MDY0OTUyOSwiZXhwIjoxNzUwNjUzMTI5fQ.STOzQakJyXq95kMHsH9QsB4VOogIi9cdJndfnNzq8q8"
  );

  const [profile, setProfile] = useState<TrainerProfileResponseDto | null>(
    null
  );
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProfile() {
      const response = await getMyProfile();
      if (response.code === "SU" && response.data) {
        setProfile(response.data);
      } else {
        alert("프로필 불러오기 실패");
        navigate("/");
      }
    }

    fetchProfile();
  }, [navigate]);

  return (
    <div css={container}>
      <div css={imageNameDiv}>
        <div css={imageDiv}>
          <div css={imageBox}>
            {" "}
            {/* 실제 이미지라면 <img src={profile.imageUrl} /> 등 사용 */}
            프로필 이미지
          </div>
        </div>

        <div css={nameDiv}>
          <div css={label}>이름</div>
          <input css={input} value={profile?.name ?? ""} disabled />

          <div css={label}>소개글</div>
          <textarea
            css={textArea}
            value={profile?.description ?? ""}
            disabled
          />
        </div>
      </div>

      <div css={label}>전문분야</div>
      <select css={select} value={profile?.specialty ?? ""} disabled>
        <option value="EXERCISE">운동</option>
        <option value="SLEEP">수면 치료</option>
        <option value="REHABILITATION">재활</option>
        <option value="PSYCHOLOGY">심리</option>
      </select>

      <div css={label}>경력</div>
      <input
        css={input}
        value={profile?.experienceYears ?? "" + "년"}
        disabled
      />

      <div css={label}>자격증</div>
      {profile?.certificates?.map((cert, index) => (
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
        onClick={() => navigate("/api/v1/trainer-profile/update")}
      >
        수정하기
      </button>
    </div>
  );
}

export default GetTrainerProfile;
