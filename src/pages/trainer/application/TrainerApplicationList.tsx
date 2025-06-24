/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import {
  containerStyle,
  tableStyle,
  firtTrStyle,
  trStyle,
  thStyle,
  tdStyle,
  detailButtonStyle,
} from "./TrainerApplicationList.style";
import { getAllTrainerApplications } from "../../../apis/trainer/application";
import type { TrainerApplicationResponseDto } from "../../../dtos/trainer/response/trainerApply.response.dto";
import { useNavigate } from "react-router-dom";

function TrainerApplicationList() {
  localStorage.setItem("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InRyYWluZXIiLCJyb2xlIjoiVVNFUiIsImlhdCI6MTc1MDc1MjIyOCwiZXhwIjoxNzUwNzU1ODI4fQ.DHMcidMNr9jLlp_cvPtlskr8fUhT71sWa4TNQaofRWo");

  const [applications, setApplications] = useState<TrainerApplicationResponseDto[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllTrainerApplications();
      if (response.code === "SU" && response.data) {
        setApplications(response.data);
      }
    };
    fetchData();
  }, []);

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

  return (
    <div css={containerStyle}>
      <table css={tableStyle}>
        <thead>
          <tr css={firtTrStyle}>
            <th css={thStyle}>ID</th>
            <th css={thStyle}>유저명</th>
            <th css={thStyle}>이름</th>
            <th css={thStyle}>승인시간</th>
            <th css={thStyle}>상태</th>
            <th css={thStyle}>신청시간</th>
            <th css={thStyle}>상세</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app) => (
            <tr css={trStyle} key={app.id}>
              <td css={tdStyle}>{app.id}</td>
              <td css={tdStyle}>{app.username}</td>
              <td css={tdStyle}>{app.name || "-"}</td>
              <td css={tdStyle}>
                {" "}
                {app.approvalStatus === "APPROVE"
                  ? app.appliedDate || "-"
                  : "-"}
              </td>
              <td css={tdStyle}>{statusToKorean(app.approvalStatus)}</td>
              <td css={tdStyle}>
                {new Date(app.createdAt).toLocaleString("ko-KR")}
              </td>
              <td css={tdStyle}>
                <button css={detailButtonStyle} onClick={() => navigate(`/api/v1/trainer-application/${app.id}`)}>상세</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TrainerApplicationList;
