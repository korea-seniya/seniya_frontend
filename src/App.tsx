import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import CourseList from "./pages/admin/course/CourseList"
import InquiryCreate from "./pages/inquiry/InquiryCreate"
import PurchasePass from "./pages/payment/PurchasePass"
import CheckoutPage from "./pages/payment/CheckoutPage"
import PaymentConfirm from "./pages/admin/payment/PaymentConfirm"
import UserList from "./pages/admin/user/UserList"
import CreateCourse from "./pages/admin/course/CreateCourse"
import SignUp from './pages/auth/SignUp';
import SignIn from "./pages/auth/SignIn"
import InquiryListPage from "./pages/inquiry/InquiryListPage"
import InquiryDetail from "./pages/inquiry/InquiryDetail"
import InquiryAnswer from "./pages/inquiry/InquiryAnswer"
import InquiryUpdate from "./pages/inquiry/InquiryUpdate"
import PaymentSuccess from "./pages/payment/SuccessPage"
import PaymentFail from "./pages/payment/FailPage"
import CourseListPage from "./pages/course/CourseListPage"
import PostCreate from "./pages/post/PostCreate"
import PostListPage from "./pages/post/PostListPage"
import HealthDataCreate from "./pages/healthdata/HealthDataCreate"
import HealthDataView from "./pages/healthdata/HealthDataView"
import HealthDataUpdate from "./pages/healthdata/HealthDataUpdate"
import GetUserInfo from "./pages/mypage/GetUserInfo"

import NoticeList from './pages/notice/NoticeList';
import NoticeDetail from './pages/notice/NoticeDetail';
import NoticeCreate from './pages/notice/NoticeCreate';

import TrainerApplication from "./pages/trainer/application/TrainerApplication"

import MyTrainerApplicationStatus from "./pages/trainer/application/MyTrainerApplicationStatus"
import TrainerApplicationList from "./pages/trainer/application/TrainerApplicationList"
import TrainerApplicationDetail from "./pages/trainer/application/TrainerApplicatinoDetail"
import EmailSend from "./pages/user/EmailSend"
import ResetPassword from './pages/user/ResetPassword';
import EmailVerification from './pages/user/EmailVerification';

import Home from "./pages/main/Home"


import TrainerProfile from "./pages/trainer/profile/TrainerProfile"
import GetTrainerProfile from "./pages/trainer/profile/GetTrainerProfile"
import PutTrainerProfile from "./pages/trainer/profile/PutTrainerProfile"
import PostDetailPage from "./pages/post/PostDetailPage"
import PostUpdate from "./pages/post/PostUpdate"        
import MyParticipationList from "./pages/participation/MyParticipationList"
import { useUserStore } from "./stores/user.store"
import React, { useEffect } from "react";
import Cookies from "js-cookie";
import RequireRole from "./stores/RequireRole";
import NoticeUpdate from "./pages/notice/NoticeUpdate";
import CreateTrainerProfile from "./pages/trainer/profile/CreateTrainerProfile"
import ViewTrainerProfile from "./pages/trainer/profile/ViewTrainerProfile"
import EditTrainerProfile from "./pages/trainer/profile/EditTrainerProfile"
import Information from "./pages/main/Information";
import OperationalGoals from "./pages/main/OperationalGoals";

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
        <Route path="/information" element={<Information />} />
        <Route path="/operationalgoals" element={<OperationalGoals />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        
        <Route path='/api/v1/post' element={<PostCreate/> } />
        <Route path='/api/v1/posts' element={<PostListPage/> } />
        <Route path='/api/v1/posts/:id' element= {<PostDetailPage/> } />
        <Route path='/api/v1/posts/:id/update' element= {<PostUpdate/> } />
        
        <Route path='/api/v1/users/me' element= {<GetUserInfo/> } />
        
        <Route path="/notices" element={<NoticeList />} />
        <Route path="/notices/:id" element={<NoticeDetail />} />
        <Route path="/notices/:id/update" element={<NoticeUpdate />} />
        <Route path="/notices/create" element={<RequireRole role={1}><NoticeCreate /></RequireRole>} />

        <Route path="/email-send" element={<EmailSend />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/verify-email" element={<EmailVerification />} />

        <Route path='/api/v1/inquiries' element={<InquiryListPage />} />
        <Route path='/api/v1/inquiry' element={<InquiryCreate />} />
        <Route path='/api/v1/inquiry/:id' element={<InquiryDetail />} />
        <Route path='/api/v1/inquiry/:id/update' element={<InquiryUpdate />} />
        <Route path='/api/v1/inquiry/:id/response' element={<InquiryAnswer />} />

        <Route path='/api/v1/trainer-application' element={<TrainerApplication />} />
        <Route path='/api/v1/trainer-application/me' element={<MyTrainerApplicationStatus />} />
        <Route path='/api/v1/trainer-applications' element={<TrainerApplicationList />} />
        <Route path='/api/v1/trainer-application/:id' element={<TrainerApplicationDetail />} />


        <Route path='/api/v1/trainer-profile' element={<TrainerProfile />} />
        <Route path='/api/v1/trainer-profile/me' element={<GetTrainerProfile />} />
        <Route path='/api/v1/trainer-profile/update' element={<PutTrainerProfile />} />

        <Route path='/myparticipation' element={<MyParticipationList />} />


        <Route path='/api/v1/trainer-profile/create' element={<CreateTrainerProfile />} />
        <Route path='/api/v1/trainer-profile/view' element={<ViewTrainerProfile />} />
        <Route path='/api/v1/trainer-profile/edit' element={<EditTrainerProfile />} />

        <Route path='/myparticipation'element={<MyParticipationList />} />
        

        <Route path='/api/v1/healthdata' element={<HealthDataCreate />} />
        <Route path='/api/v1/healthdata/me' element={<HealthDataView />} />
        <Route path='/api/v1/healthdata/update' element={<HealthDataUpdate />} />

        <Route path='/api/v1/admin/create-course' element={<CreateCourse />} />
        <Route path='/api/v1/admin/courses' element={<CourseList />} />

        <Route path='/api/v1/purchases' element={<PurchasePass />} />
        <Route path='/api/v1/payments/request' element={<CheckoutPage />} />
        <Route path="/success" element={<PaymentSuccess />} />
        <Route path="/fail" element={<PaymentFail />} />
        <Route path='/api/v1/payments' element={<PaymentConfirm />} />
        <Route path='/api/v1/admin/users' element={<UserList />} />

        <Route path='/' element={<Home />} />

        <Route path='/api/v1/courses' element={<CourseListPage />} />
      </Routes>
  );
}

export default App;