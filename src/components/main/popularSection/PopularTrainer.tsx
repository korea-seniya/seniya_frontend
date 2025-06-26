/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import type { PopularTrainerResponseDto } from "../../../dtos/main/popularTrainer/popularTrainer.response.dto";
import { popularTrainer } from "../../../apis/main/main";
import {
  divStyle,
  imageStyle,
  textDivStyle,
  titleStyle,
} from "./popularTrainer.style";
import { API_DOMAIN } from "../../../apis/constants";

function PopularTrainer() {
  const [popularTrainers, setPopularTrainers] =
    useState<PopularTrainerResponseDto>();

  useEffect(() => {
    popularTrainer().then((resonse) => {
      if (resonse.code === "SU" && resonse.data) {
        setPopularTrainers(resonse.data);
      }
    });
  }, []);

  return (
    <div css={divStyle}>
      <h3 css={titleStyle}>🔥 인기 트레이너</h3>
      <div key={popularTrainers?.profileImageUrl} css={imageStyle}>
        <img
          src={API_DOMAIN + popularTrainers?.profileImageUrl}
          alt="프로필 이미지"
          style={{
            maxWidth: "150px",
            maxHeight: "150px"
          }}
        />
        <div css={textDivStyle}>
          <p><strong>{popularTrainers?.name}</strong> <span>트레이너</span></p>
          <p>담당 수업: {popularTrainers?.specialty}</p>
          <p>수업 횟수: {popularTrainers?.courseCount}</p>
        </div>
      </div>
    </div>
  );
}

export default PopularTrainer;
