/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from "react";
import { getMyApply } from "../../../apis/trainer/application";
import {
  containerStyle,
  titleStyle,
  statusBoxStyle,
  blueBorderStyle,
  blackBorderStyle,
  labelStyle,
  valueStyle,
} from "./MyTrainerApplicationStatus.style";
import type { TrainerApplicationStatusResponseDto } from "../../../dtos/trainer/response/trainerApplyStatus.response.dto";
import Header from "../../../components/header";

function MyTrainerApplicationStatus() {
  const [status, setStatus] =
    useState<TrainerApplicationStatusResponseDto | null>(null);

  useEffect(() => {
    const fetchStatus = async () => {
      const response = await getMyApply();
      if (response.code === "SU" && response.data) {
        setStatus(response.data);
      }
    };
    fetchStatus();
  }, []);


  const statusKorean = {
    APPROVE: "승인됨",
    REJECT: "거부",
    PENDING: "대기중",
    QUIT: "탈퇴",
  }[status?.approvalStatus ?? "PENDING"];

  return (
    <>
    <Header />
    <div css={containerStyle}>
      <h1 css={titleStyle}>트레이너 권한 신청 현황</h1>

      <div css={[statusBoxStyle, blueBorderStyle]}>
        <span css={labelStyle}>신청 날짜</span>
        <span css={valueStyle}>
          {status ? (status.createdAt) : "-"}
        </span>
      </div>

      <div css={[statusBoxStyle, blackBorderStyle]}>
        <span css={labelStyle}>승인 상태</span>
        <span css={valueStyle}>{statusKorean}</span>
      </div>

      <div css={[statusBoxStyle, blueBorderStyle]}>
        <span css={labelStyle}>승인 날짜</span>
        <span css={valueStyle}>
          {status ? (status.appliedDate) : "-"}
        </span>
      </div>
    </div>
    </>
  );
}

export default MyTrainerApplicationStatus;
