/** @jsxImportSource @emotion/react */
import React, {
  useEffect,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
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
import Header from "../../../components/header";
import { useUserStore } from "../../../stores/user.store";
import TrainerSide from "../../../components/trainer/TrainerSide";

const mapCertToRequestDto = (
  cert: CertificateResponseDto
): CertificateRequestDto => ({
  certificate: cert.certificate,
  certificationDate: cert.certificationDate,
});

function EditTrainerProfile() {
  const [profileData, setProfileData] =
    useState<updateTrainerProfileRequestDto>({
      specialty: Specialty.EXERCISE,
      certificates: [],
      experienceYears: 0,
      description: "",
      removeProfileImage: false,
    });
  const [currentProfileImageUrl, setCurrentProfileImageUrl] = useState<
    string | null
  >(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { user } = useUserStore();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProfile() {
      try {
        const response = await getMyProfile();
        if (response.code === "SU" && response.data) {
          const fetchedProfile = response.data;
          setProfileData({
            specialty: fetchedProfile.specialty,
            certificates:
              fetchedProfile.certificates?.map(mapCertToRequestDto) || [],
            experienceYears: fetchedProfile.experienceYears,
            description: fetchedProfile.description,
            removeProfileImage: false,
          });
          setCurrentProfileImageUrl(
            API_DOMAIN + fetchedProfile.profileImageUrl
          );
        } else {
          alert(
            "프로필 불러오기 실패: " +
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

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: value as any }));
  };

  const handleCertChange = (
    index: number,
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    const newCerts = [...(profileData.certificates || [])];
    newCerts[index] = { ...newCerts[index], [name]: value };
    setProfileData((prev) => ({ ...prev, certificates: newCerts }));
  };

  const addCertificate = () => {
    setProfileData((prev) => ({
      ...prev,
      certificates: [
        ...(prev.certificates || []),
        { certificate: "", certificationDate: "" },
      ],
    }));
  };

  const removeCertificate = (index: number) => {
    const newCerts = (profileData.certificates || []).filter(
      (_, i) => i !== index
    );
    setProfileData((prev) => ({ ...prev, certificates: newCerts }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      setCurrentProfileImageUrl(URL.createObjectURL(file));
      setProfileData((prev) => ({ ...prev, removeProfileImage: false }));
    } else {
      setSelectedFile(null);
    }
  };

  const handleRemoveImage = () => {
    setSelectedFile(null);
    setCurrentProfileImageUrl(null);
    setProfileData((prev) => ({ ...prev, removeProfileImage: true }));
  };

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
        const updatedProfile = response.data;
        setProfileData({
          specialty: updatedProfile.specialty,
          certificates:
            updatedProfile.certificates?.map(mapCertToRequestDto) || [],
          experienceYears: updatedProfile.experienceYears,
          description: updatedProfile.description,
          removeProfileImage: false,
        });
        setCurrentProfileImageUrl(updatedProfile.profileImageUrl);
        setSelectedFile(null);
        navigate("/trainer-profile/view");
      } else {
        alert("프로필 업데이트 실패: " + response.message);
      }
    } catch (error) {
      console.error("프로필 업데이트 에러:", error);
      alert("프로필 업데이트 중 알 수 없는 오류가 발생했습니다.");
      navigate("/");
    }
  };

  if (isLoading) {
    return <div>프로필을 불러오는 중입니다...</div>;
  }

  if (!profileData) {
    return <div>프로필 정보를 불러올 수 없습니다.</div>;
  }

  return (
    <>
      <Header />
      <TrainerSide />
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
                onClick={() =>
                  document.getElementById("profileImageInput")?.click()
                }
              >
                이미지 선택
              </button>
              {currentProfileImageUrl &&
                profileData.removeProfileImage === false && (
                  <button
                    type="button"
                    css={imageButton}
                    onClick={handleRemoveImage}
                    style={{ marginLeft: "10px" }}
                  >
                    이미지 삭제
                  </button>
                )}
            </div>

            <div css={nameDiv}>
              <div css={label}>이름</div>
              <input css={input} value={user?.name} disabled />

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
              <button
                type="button"
                css={removeCertButton}
                onClick={() => removeCertificate(index)}
              >
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
    </>
  );
}

export default EditTrainerProfile;
