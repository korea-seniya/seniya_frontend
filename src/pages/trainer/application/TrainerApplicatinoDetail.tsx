/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  containerStyle,
  titleStyle,
  detailBoxStyle,
  labelStyle,
  valueStyle,
  buttonStyle,
  selectStyle,
} from "./TrainerApplicationDetail.style";
import {
  getTrainerApplicationById,
  updateTrainerApplicationStatus,
} from "../../../apis/trainer/application";
import type { TrainerApplicationDetailResponseDto } from "../../../dtos/trainer/response/trainerApplyDetail.response.dto";

function TrainerApplicationDetail() {
  localStorage.setItem("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6ImFwcGx5dGVzdCIsInJvbGUiOiJUUkFJTkVSIiwiaWF0IjoxNzUwMzk1NDA3LCJleHAiOjE3NTAzOTkwMDd9.1ymDMtx4WwlQlzTgIAaWXSMpPRGEzbtAvSTr6ljTzWo");
  
  const { id } = useParams<{ id: string }>();
  const ApplyId = Number(id);
  const [app, setApp] = useState<TrainerApplicationDetailResponseDto | null>(
    null
  );
  const [selectedStatus, setSelectedStatus] = useState<string>("");
  const navigate = useNavigate();

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStatus(e.target.value);
  };

  const handleStatusUpdate = async () => {
    const confirm = window.confirm("정말 상태를 변경하시겠습니까?");
    if (!confirm) return;

    const response = await updateTrainerApplicationStatus(
      ApplyId,
      selectedStatus as any
    );
    if (response.code === "SU") {
      alert("상태 변경 완료");
      const updated = await getTrainerApplicationById(ApplyId);
      if (updated.code === "SU" && updated.data) {
        setApp(updated.data);
      }
    } else {
      alert("변경 실패: " + response.message);
    }
  };
  
  const statusToKorean = (status: string) => {
    switch (status) {
      case "APPROVE":
        return "승인됨";
      case "REJECT":
        return "거부";
      case "PENDING":
        return "대기중";
      case "QUIT":
        return "탈퇴";
      default:
        return "-";
    }
  };

  useEffect(() => {
    const fetchDetail = async () => {
      const response = await getTrainerApplicationById(ApplyId);
      if (response.code === "SU" && response.data) {
        setApp(response.data);
      } else {
        alert("존재하지 않는 신청이거나 권한이 없습니다.");
        navigate("/api/v1/trainer-applications");
      }
    };
    fetchDetail();
  }, [id, navigate]);

  useEffect(() => {
    if (app) {
      setSelectedStatus(app.approvalStatus);
    }
  }, [app]);

  return (
    <div css={containerStyle}>
      <h1 css={titleStyle}>트레이너 신청 상세</h1>
      <div css={detailBoxStyle}>
        <p>
          <span css={labelStyle}>아이디:</span>{" "}
          <span css={valueStyle}>{app?.username}</span>
        </p>
        <p>
          <span css={labelStyle}>이름:</span>{" "}
          <span css={valueStyle}>{app?.name}</span>
        </p>
        <p>
          <span css={labelStyle}>이메일:</span>{" "}
          <span css={valueStyle}>{app?.userEmail}</span>
        </p>
        <p>
          <span css={labelStyle}>신청일:</span>{" "}
          <span css={valueStyle}>{app?.createdAt ?? "-"}</span>
        </p>
        <p>
          <span css={labelStyle}>승인일:</span>{" "}
          <span css={valueStyle}>{app?.appliedDate ?? "-"}</span>
        </p>
        <p>
          <span css={labelStyle}>승인 상태:</span>{" "}
          <span css={valueStyle}>
            {statusToKorean(app?.approvalStatus ?? "-")}
          </span>
        </p>
        <p>
          <span css={labelStyle}>상태 변경:</span>
          <select
            value={selectedStatus}
            css={selectStyle}
            onChange={handleStatusChange}
          >
            <option value="PENDING">대기중</option>
            <option value="APPROVE">승인</option>
            <option value="REJECT">거부</option>
            <option value="QUIT">탈퇴</option>
          </select>
          <button onClick={handleStatusUpdate}>변경</button>
        </p>
      </div>
      <button
        css={buttonStyle}
        onClick={() => navigate("/api/v1/trainer-applications")}
      >
        목록으로
      </button>
    </div>
  );
}

export default TrainerApplicationDetail;
