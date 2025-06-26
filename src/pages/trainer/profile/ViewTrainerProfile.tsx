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
  submitButton,
  sideStyle,
} from "./TrainerProfile.style";
import { getMyProfile } from "../../../apis/trainer/profile";
import type { TrainerProfileResponseDto } from "../../../dtos/trainer/response/trainerProfile.response.dto";
import { useNavigate } from "react-router-dom";
import { API_DOMAIN } from "../../../apis/constants";
import Header from "../../../components/header";
import TrainerSide from "../../../components/trainer/TrainerSide";

function ViewTrainerProfile() {
  const [profile, setProfile] = useState<TrainerProfileResponseDto | null>(
    null
  );
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
          alert(
            "프로필이 없거나 불러오기 실패: " +
              response.message +
              "\n프로필 생성 페이지로 이동합니다."
          );
          navigate("/trainer-profile/create");
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

  if (isLoading) {
    return <div>프로필을 불러오는 중입니다...</div>;
  }

  if (!profile) {
    return <div>프로필 정보를 찾을 수 없습니다.</div>;
  }

  return (
    <>
      <Header />
      <div css={sideStyle}>
        <TrainerSide />
        <div css={container}>
          <h2>트레이너 프로필</h2>
          <div css={imageNameDiv}>
            <div css={imageDiv}>
              <div css={imageBox}>
                {profile.profileImageUrl ? (
                  <img
                    src={API_DOMAIN + profile.profileImageUrl}
                    alt="프로필 이미지"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                    }}
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
            onClick={() => navigate("/trainer-profile/edit")}
          >
            수정하기
          </button>
        </div>
      </div>
    </>
  );
}

export default ViewTrainerProfile;
