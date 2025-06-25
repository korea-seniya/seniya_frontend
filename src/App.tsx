import { useEffect } from "react";
import { useUserStore } from "./stores/user.store";
import { Route, Routes } from "react-router-dom";
import Cookies from "js-cookie";
import Home from "./pages/main/Home";
import SignUp from "./pages/auth/SignUp";
import SignIn from "./pages/auth/SignIn";
import PostCreate from "./pages/post/PostCreate";
import PostListPage from "./pages/post/PostListPage";
import PostDetailPage from "./pages/post/PostDetailPage";
import PostUpdate from "./pages/post/PostUpdate";
import GetUserInfo from "./pages/mypage/GetUserInfo";
import NoticeList from "./pages/notice/NoticeList";
import NoticeDetail from "./pages/notice/NoticeDetail";
import NoticeUpdate from "./pages/notice/NoticeUpdate";
import RequireRole from "./stores/RequireRole";
import NoticeCreate from "./pages/notice/NoticeCreate";
import EmailSend from "./pages/user/EmailSend";
import ResetPassword from "./pages/user/ResetPassword";
import InquiryListPage from "./pages/inquiry/InquiryListPage";
import InquiryCreate from "./pages/inquiry/InquiryCreate";
import InquiryDetail from "./pages/inquiry/InquiryDetail";
import InquiryUpdate from "./pages/inquiry/InquiryUpdate";
import InquiryAnswer from "./pages/inquiry/InquiryAnswer";
import TrainerApplication from "./pages/trainer/application/TrainerApplication";
import MyTrainerApplicationStatus from "./pages/trainer/application/MyTrainerApplicationStatus";
import TrainerApplicationList from "./pages/trainer/application/TrainerApplicationList";
import TrainerApplicationDetail from "./pages/trainer/application/TrainerApplicatinoDetail";
import MyParticipationList from "./pages/participation/MyParticipationList";
import CreateTrainerProfile from "./pages/trainer/profile/CreateTrainerProfile";
import ViewTrainerProfile from "./pages/trainer/profile/ViewTrainerProfile";
import EditTrainerProfile from "./pages/trainer/profile/EditTrainerProfile";
import HealthDataCreate from "./pages/healthdata/HealthDataCreate";
import HealthDataView from "./pages/healthdata/HealthDataView";
import HealthDataUpdate from "./pages/healthdata/HealthDataUpdate";
import CreateCourse from "./pages/admin/course/CreateCourse";
import CourseList from "./pages/admin/course/CourseList";
import PurchasePass from "./pages/payment/PurchasePass";
import CheckoutPage from "./pages/payment/CheckoutPage";
import PaymentSuccess from "./pages/payment/SuccessPage";
import PaymentFail from "./pages/payment/FailPage";
import PaymentConfirm from "./pages/admin/payment/PaymentConfirm";
import UserList from "./pages/admin/user/UserList";
import CourseListPage from "./pages/course/CourseListPage";



function App() {
  const loginUser = useUserStore((s) => s.loginUser);

  useEffect(() => {
    const userData = Cookies.get("user");
    if (userData) {
      try {
        const parsed = JSON.parse(userData);
        loginUser(parsed);
      } catch (e) {
        console.error("쿠키 파싱 오류", e);
      }
    }
  }, []);

  return (

    <Routes>
      <Route path="/" element={<Home />} />

      <Route path='/signup' element={<SignUp />} />
      <Route path='/signin' element={<SignIn />} />

      <Route path='/post' element={<PostCreate />} />
      <Route path='/posts' element={<PostListPage />} />
      <Route path='/posts' element={<PostDetailPage />} />
      <Route path='/posts' element={<PostUpdate />} />

      <Route path='/users/me' element={<GetUserInfo />} />

      <Route path="/notices" element={<NoticeList />} />
      <Route path="/notices/:id" element={<NoticeDetail />} />
      <Route path="/notices/:id/update" element={<NoticeUpdate />} />
      <Route path="/notices/create" element={<RequireRole role={1}><NoticeCreate /></RequireRole>} />

      <Route path="/email-send" element={<EmailSend />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/verify-email" element={<EmailVerification />} />

      <Route path='/inquiries' element={<InquiryListPage />} />
      <Route path='/inquiry' element={<InquiryCreate />} />
      <Route path='/inquiry/:id' element={<InquiryDetail />} />
      <Route path='/inquiry/:id/update' element={<InquiryUpdate />} />
      <Route path='/inquiry/:id/response' element={<InquiryAnswer />} />

      <Route path='/trainer-application' element={<TrainerApplication />} />
      <Route path='/trainer-application/me' element={<MyTrainerApplicationStatus />} />
      <Route path='/trainer-applications' element={<TrainerApplicationList />} />
      <Route path='/trainer-application/:id' element={<TrainerApplicationDetail />} />

      <Route path='/myparticipation' element={<MyParticipationList />} />


      <Route path='/trainer-profile/create' element={<CreateTrainerProfile />} />
      <Route path='/trainer-profile/view' element={<ViewTrainerProfile />} />
      <Route path='/trainer-profile/edit' element={<EditTrainerProfile />} />

      <Route path='/myparticipation' element={<MyParticipationList />} />


      <Route path='/healthdata' element={<HealthDataCreate />} />
      <Route path='/healthdata/me' element={<HealthDataView />} />
      <Route path='/healthdata/update' element={<HealthDataUpdate />} />

      <Route path='/admin/create-course' element={<CreateCourse />} />
      <Route path='/admin/courses' element={<CourseList />} />

      <Route path='/purchases' element={<PurchasePass />} />
      <Route path='/payments/request' element={<CheckoutPage />} />
      <Route path="/success" element={<PaymentSuccess />} />
      <Route path="/fail" element={<PaymentFail />} />
      <Route path='/payments' element={<PaymentConfirm />} />
      <Route path='/admin/users' element={<UserList />} />

      <Route path='/courses' element={<CourseListPage />} />
    </Routes>
  );
}

export default App;