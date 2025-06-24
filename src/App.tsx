
import { Route, Routes } from "react-router-dom"
import CourseList from "./pages/admin/course/CourseList"
import InquiryCreate from "./pages/inquiry/InquiryCreate"
import PurchasePass from "./pages/payment/PurchasePass"
import CheckoutPage from "./pages/payment/CheckoutPage"
import PaymentConfirm from "./pages/admin/payment/PaymentConfirm"
import UserList from "./pages/admin/user/UserList"
import CreateCourse from "./pages/admin/course/CreateCourse"
import SignUp from './pages/auth/SignUp';
import SignIn from "./pages/auth/SignIn"
import PostDetail from "./pages/post/PostDetailPage"
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
// import Home from "./pages/main/Home"

import MyTrainerApplicationStatus from "./pages/trainer/application/MyTrainerApplicationStatus"
import TrainerApplicationList from "./pages/trainer/application/TrainerApplicationList"
import TrainerApplicationDetail from "./pages/trainer/application/TrainerApplicatinoDetail"
import EmailSend from "./pages/user/EmailSend"
import ResetPassword from './pages/user/ResetPassword';
import EmailVerification from './pages/user/EmailVerification';
import CreateTrainerProfile from "./pages/trainer/profile/CreateTrainerProfile"
import ViewTrainerProfile from "./pages/trainer/profile/ViewTrainerProfile"
import EditTrainerProfile from "./pages/trainer/profile/EditTrainerProfile"

function App() {
  return (
    <>
      <Routes>
        <Route path='/api/v1/posts/:id' element={<PostDetail />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/api/v1/posts' element={<PostListPage/> } />
        <Route path='/api/v1/posts' element={<PostCreate/> } />
        <Route path="/notices" element={<NoticeList />} />
        <Route path="/notices/:id" element={<NoticeDetail />} />
        <Route path="/notices/create" element={<NoticeCreate />} />

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

        <Route path='/api/v1/trainer-profile/create' element={<CreateTrainerProfile />} />
        <Route path='/api/v1/trainer-profile/view' element={<ViewTrainerProfile />} />
        <Route path='/api/v1/trainer-profile/edit' element={<EditTrainerProfile />} />

        {/* <Route path='/api/v1/posts' element={<PostDetailPage /> } /> */}
        {/* <Route path='/api/v1/posts' element={<PostListPage /> } /> */}
        <Route path='/myparticipation'element={<MyParticipationList />} />
        
        <Route path='/api/v1/healthdata' element={<HealthDataCreate />} />
        <Route path='/api/v1/healthdata/me' element={<HealthDataView />} />
        <Route path='/api/v1/healthdata/update' element={<HealthDataUpdate />} />
        <Route path='/api/v1/users/me' element={<GetUserInfo />} />
        <Route path='/api/v1/admin/create-course' element={<CreateCourse />} />
        <Route path='/api/v1/admin/courses' element={<CourseList />} />

        <Route path='/api/v1/purchases' element={<PurchasePass />} />
        <Route path='/api/v1/payments/request' element={<CheckoutPage />} />
        <Route path="/success" element={<PaymentSuccess />} />
        <Route path="/fail" element={<PaymentFail />} />
        <Route path='/api/v1/payments' element={<PaymentConfirm />} />
        <Route path='/api/v1/admin/users' element={<UserList />} />
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='/api/v1/courses' element={<CourseListPage />} />
      </Routes>
    </>
  );
}

export default App;
