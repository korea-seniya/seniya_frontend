
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
import PostUpdate from "./pages/post/PostUpdate"
import PostDetail from "./pages/post/PostDetailPage"
import InquiryListPage from "./pages/inquiry/InquiryListPage"
import InquiryDetail from "./pages/inquiry/InquiryDetail"
import InquiryAnswer from "./pages/inquiry/InquiryAnswer"
import InquiryUpdate from "./pages/inquiry/InquiryUpdate"
// import TrainerApplication from "./pages/trainer/TrainerApplication"
import PaymentSuccess from "./pages/payment/SuccessPage"
import PaymentFail from "./pages/payment/FailPage"
import CourseListPage from "./pages/course/CourseListPage"
import PostCreate from "./pages/post/PostCreate"
import PostListPage from "./pages/post/PostListPage"
import HealthDataCreate from "./pages/healthdata/HealthDataCreate"
import HealthDataView from "./pages/healthdata/HealthDataView"
import HealthDataUpdate from "./pages/healthdata/HealthDataUpdate"
import GetUserInfo from "./pages/mypage/GetUserInfo"



function App() {
  return (
    <>
      <Routes>
        <Route path='/api/v1/posts' element={<PostListPage/> } />
       <Route path='/api/v1/posts:id' element={<PostDetail/> } />
        <Route path='signup' element={<SignUp />} />
        <Route path='signIn' element={<SignIn />} />
        
        <Route path='/api/v1/inquiries' element={<InquiryListPage />} />
        <Route path='/api/v1/inquiry' element={<InquiryCreate />} />
        <Route path='/api/v1/inquiry/:id' element={<InquiryDetail />} />
        <Route path='/api/v1/inquiry/:id/update' element={<InquiryUpdate />} />
        <Route path='/api/v1/inquiry/:id/response' element={<InquiryAnswer />} />

        <Route path='/api/v1/healthdata' element={<HealthDataCreate />} />
        <Route path='/api/v1/healthdata/me' element={<HealthDataView />} />
         <Route path='/api/v1/healthdata/update' element={<HealthDataUpdate />} />
        
        {/* <Route path='/api/v1/trainer-application' element={<TrainerApplication />} /> */}
        {/* <Route path='/api/v1/posts' element={<PostListPage /> } /> */}

        <Route path='/api/v1/users/me' element={<GetUserInfo />} />

        <Route path='/api/v1/admin/create-course' element={<CreateCourse />} />
        <Route path='/api/v1/admin/courses' element={<CourseList />} />

        <Route path='/api/v1/purchases' element={<PurchasePass />} />
        <Route path='/api/v1/payments/request' element={<CheckoutPage />} />
        <Route path="/success" element={<PaymentSuccess />} />
        <Route path="/fail" element={<PaymentFail />} />
        <Route path='/api/v1/payments' element={<PaymentConfirm />} />
        <Route path='/api/v1/admin/users' element={<UserList />} />
        <Route path='/api/v1/courses/public' element={<CourseListPage />} />
      </Routes>
    </>
  );
}

export default App;
