// /** @jsxImportSource @emotion/react */
import { useNavigate } from "react-router-dom";
import Banner from "../../components/main/banner/banner";
import Footer from "../../components/main/footer/Footer";
import NoticeSection from "../../components/main/noticeSection/NoticeSection";
import PopularSection from "../../components/main/popularSection/PopularSection";
import QuickSearch from "../../components/main/quickSearch/QuickSearch";
import TermsSection from "../../components/main/termsSection/TermsSection";
// import VideoSection from "../../components/main/videoSection/VideoSection";

 function Home() {
    const navigate = useNavigate();
    
  const goToNotices = () => {
    navigate("/notices");
  };
   const goToLogin = () => {
    navigate("/signin");
  };



   return (
     <>
{/* //       <Banner />
//       <QuickSearch />
//       <PopularSection />
//       <VideoSection />
//       <NoticeSection />
//       <TermsSection /> */}
        <div style={{ textAlign: "center", margin: "2rem 0" }}>
        <button onClick={goToNotices} style={{ padding: "0.5rem 1rem", fontSize: "1rem" }}>
          공지사항 보러가기
        </button>
        <button
          onClick={goToLogin}
          style={{ padding: "0.5rem 1rem", fontSize: "1rem" }}
        >
          로그인하러가기
        </button>
      </div>

       <Footer />
     </>
   );
 }

 export default Home;
