// /** @jsxImportSource @emotion/react */
import { useNavigate } from "react-router-dom";
import Banner from "../../components/main/banner/banner";
import Footer from "../../components/main/footer/Footer";
import Header from "../../components/header";
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


  return (
    <>
      <Header />


      <Banner />
      <QuickSearch />
      <PopularSection />
      {/* <VideoSection /> */}
      <NoticeSection />
      <TermsSection />


      <Footer />
    </>
  );
}

export default Home;
