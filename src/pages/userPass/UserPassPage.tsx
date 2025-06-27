/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import { UserPass } from "../../apis/userPass/UserPass";
import type { PassResponseDto } from "../../dtos/userPass/response/Pass.response.dto";
import {
  pageWrapperStyle,
  titleStyle,
  countStyle,
  containerStyle,
  tableWrapperStyle,
  tableHeaderStyle,
  tableRowStyle,
  tableCellStyle,
  tableHeadCellStyle,
} from "./UserPassPage.style";
import Header from "../../components/header";
import Footer from "../../components/main/footer/Footer";
import AsideBar from "../../components/myPage/AsideBar";

function UserPassPage() {
  const [passes, setPasses] = useState<PassResponseDto[]>([]);

  useEffect(() => {
    const fetchPasses = async () => {
      const response = await UserPass();
      if (response.code === "SU" && response.data) {
        setPasses(response.data);
      }
    };
    fetchPasses();
  }, []);

  const remainingCount = passes.filter((pass) => !pass.used).length;

  return (
    <>
      <Header />
      <div css={pageWrapperStyle}>
        <AsideBar />
        <div css={containerStyle}>
          <h2 css={titleStyle}>내 수강권 목록</h2>
          <p css={countStyle}>
            남은 수강권: <strong>{remainingCount}</strong>개
          </p>

          {passes.length === 0 ? (
            <p>보유 중인 수강권이 없습니다.</p>
          ) : (
            <div css={tableWrapperStyle}>
              <div css={tableHeaderStyle}>
                <div css={tableHeadCellStyle}>수강권 유형</div>
                <div css={tableHeadCellStyle}>발급일</div>
                <div css={tableHeadCellStyle}>만료일</div>
                <div css={tableHeadCellStyle}>사용 여부</div>
              </div>
              {passes.map((pass) => (
                <div key={pass.passId} css={tableRowStyle}>
                  <div css={tableCellStyle}>{pass.couponType === "REGULAR" ? "일반 수강권" : "이벤트 수강권"}</div>
                  <div css={tableCellStyle}>{pass.issuedAt.split("T")[0]}</div>
                  <div css={tableCellStyle}>{pass.expiresAt.split("T")[0]}</div>
                  <div css={tableCellStyle}>{pass.used ? "사용됨" : "미사용"}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default UserPassPage;
