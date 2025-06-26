/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import { UserPass } from "../../apis/userPass/UserPass";
import type { PassResponseDto } from "../../dtos/userPass/response/Pass.response.dto";
import {
  pageWrapperStyle,
  titleStyle,
  passCardStyle,
  labelStyle,
  valueStyle,
  cardListStyle
} from "./UserPassPage.style";

function UserPassPage() {
  const [passes, setPasses] = useState<PassResponseDto[]>([]);

  useEffect(() => {
    const fetchPasses = async () => {
      const response = await UserPass();
      console.log("응답:", response);
      if (response.code === "SU" && response.data) {
        setPasses(response.data);
      }
    };

    fetchPasses();
  }, []);

  return (
    <div css={pageWrapperStyle}>
      <h2 css={titleStyle}>내 수강권 목록</h2>
      <div css={cardListStyle}>
        {passes.length === 0 ? (
          <p>보유 중인 수강권이 없습니다.</p>
        ) : (
          passes.map((pass) => (
            <div key={pass.passId} css={passCardStyle}>
              <div>
                <span css={labelStyle}>수강권 유형: </span>
                <span css={valueStyle}>{pass.couponType === "REGULAR" ? "일반 수강권" : "이벤트 수강권"}</span>
              </div>
              <div>
                <span css={labelStyle}>발급일: </span>
                <span css={valueStyle}>{pass.issuedAt.split("T")[0]}</span>
              </div>
              <div>
                <span css={labelStyle}>만료일: </span>
                <span css={valueStyle}>{pass.expiresAt.split("T")[0]}</span>
              </div>
              <div>
                <span css={labelStyle}>사용 여부: </span>
                <span css={valueStyle}>{pass.used ? "사용됨" : "미사용"}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default UserPassPage;
