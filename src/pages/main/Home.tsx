// /** @jsxImportSource @emotion/react */
import { useNavigate } from "react-router-dom";
import Banner from "../../components/main/banner/banner";
import Footer from "../../components/main/footer/Footer";
import NoticeSection from "../../components/main/noticeSection/NoticeSection";
import PopularSection from "../../components/main/popularSection/PopularSection";
import QuickSearch from "../../components/main/quickSearch/QuickSearch";
import TermsSection from "../../components/main/termsSection/TermsSection";
import { useUserStore } from "../../stores/user.store";
import { useEffect } from "react";
import Cookies from "js-cookie";
// import VideoSection from "../../components/main/videoSection/VideoSection";

function Home() {
  const navigate = useNavigate();
  const { user, loginUser, logoutUser } = useUserStore(); 

  useEffect(() => {
    const userData = Cookies.get("user");
    console.log("[Home] zustand user:", user);
    console.log("[Home] 쿠키에 저장된 user:", userData ? JSON.parse(userData) : "없음");
  }, [user]);

  useEffect(() => {
    const userData = Cookies.get("user");
    if (!user && userData) {
      try {
        const parsed = JSON.parse(userData);
        console.log("[복구] 쿠키 유저:", parsed);
        loginUser(parsed);
      } catch (err) {
        console.error("쿠키 파싱 실패", err);
      }
    }
  }, [user]);

  const handleLogout = () => {   // zustand 상태 초기화
    Cookies.remove("user");     
    Cookies.remove("token");   
    alert("로그아웃 되었습니다.");
    navigate("/");
  };

  const goToNotices = () => navigate("/notices");
  const goToLogin = () => navigate("/signin");
  const goToPosts = () => navigate("/api/v1/posts");

  return (
    <>
      {/* 
      <Banner />
      <QuickSearch />
      <PopularSection />
      <VideoSection />
      <NoticeSection />
      <TermsSection />
      */}
      <div style={{ textAlign: "center", margin: "2rem 0" }}>
        <button onClick={goToNotices} style={{ padding: "0.5rem 1rem", fontSize: "1rem" }}>
          공지사항 보러가기
        </button>
        <button onClick={goToLogin} style={{ padding: "0.5rem 1rem", fontSize: "1rem" }}>
          로그인하러가기
        </button>
        <button onClick={goToPosts} style={{ padding: "0.5rem 1rem", fontSize: "1rem" }}>
          게시글 보러가기
        </button>
        {user && (
          <button onClick={handleLogout} style={{ marginLeft: "1rem", color: "red" }}>
            로그아웃
          </button>
        )}
      </div>

      <Footer />
    </>
  );
}

export default Home;
