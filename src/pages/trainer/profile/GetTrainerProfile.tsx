/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMyProfile } from "../../../apis/trainer/profile";
import { container, label, text, button } from "./TrainerProfile.style";
import type { TrainerProfileResponseDto } from "../../../dtos/trainer/response/trainerProfile.response.dto";

function GetTrainerProfile() {
  localStorage.setItem("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InRlc3R0cmFpbmVyIiwicm9sZSI6IlRSQUlORVIiLCJpYXQiOjE3NTA0MDE4NTYsImV4cCI6MTc1MDQwNTQ1Nn0.z7GJIJK_sKuYo3hHaJoZmWB2k3WC41D2tah7vsJxhjA");

  const [profile, setProfile] = useState<TrainerProfileResponseDto | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const response = await getMyProfile();
      if (response.code === "SU" && response.data) {
        setProfile(response.data);
      } else {
        alert("프로필을 불러오지 못했습니다.");
        navigate('create');
      }
    };
    fetchProfile();
  }, []);

  return (
    <div css={container}>
      <h2 css={label}>트레이너 프로필</h2>

      <div>
        <p css={label}>이름</p>
        <p css={text}>{profile?.name}</p>

        <p css={label}>전문 분야</p>
        <p css={text}>{profile?.specialty}</p>

        <p css={label}>자격증</p>
        <p css={text}>{profile?.certificate}</p>

        <p css={label}>취득일</p>
        <p css={text}>{profile?.certificationDate}</p>

        <p css={label}>경력</p>
        <p css={text}>{profile?.experienceYears}년</p>

        <p css={label}>소개글</p>
        <p css={text}>{profile?.description}</p>
      </div>

      <button
        css={button}
        onClick={() => navigate("/api/v1/trainer-profile/edit")}
      >
        프로필 수정
      </button>
    </div>
  );
}

export default GetTrainerProfile;
