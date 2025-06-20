
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
import TrainerApplication from "./pages/trainer/application/TrainerApplication"
import PaymentSuccess from "./pages/payment/SuccessPage"
import PaymentFail from "./pages/payment/FailPage"
// import PostDetailPage from "./pages/post/PostDetail"
import MyTrainerApplicationStatus from "./pages/trainer/application/MyTrainerApplicationStatus"
import TrainerApplicationList from "./pages/trainer/application/TrainerApplicationList"
import TrainerApplicationDetail from "./pages/trainer/application/TrainerApplicatinoDetail"
import TrainerProfileForm from "./pages/trainer/profile/TrainerProfile"
import GetTrainerProfile from "./pages/trainer/profile/GetTrainerProfile"

function App() {
  return (
    <>
      <Routes>
        <Route path='/api/v1/posts/:id' element={<PostDetail/> } />
        <Route path='signup' element={<SignUp />} />
        <Route path='signIn' element={<SignIn />} />
        
        <Route path='/api/v1/inquiries' element={<InquiryListPage />} />
        <Route path='/api/v1/inquiry' element={<InquiryCreate />} />
        <Route path='/api/v1/inquiry/:id' element={<InquiryDetail />} />
        <Route path='/api/v1/inquiry/:id/update' element={<InquiryUpdate />} />
        <Route path='/api/v1/inquiry/:id/response' element={<InquiryAnswer />} />
        
        <Route path='/api/v1/trainer-application' element={<TrainerApplication />} />
        <Route path='/api/v1/trainer-application/me' element={<MyTrainerApplicationStatus />} />
        <Route path='/api/v1/trainer-applications' element={<TrainerApplicationList />} />
        <Route path='/api/v1/trainer-application/:id' element={<TrainerApplicationDetail />} />
        
        <Route path="/api/v1/trainer-profile/create" element={<TrainerProfileForm isEdit={false} />} />
        <Route path="/api/v1/trainer-profile/edit" element={<TrainerProfileForm isEdit={true} />} />
        <Route path="/api/v1/trainer-profile" element={<GetTrainerProfile />} />
        
        {/* <Route path='/api/v1/posts' element={<PostDetailPage /> } /> */}
        {/* <Route path='/api/v1/posts' element={<PostListPage /> } /> */}

        <Route path='/api/v1/admin/create-course' element={<CreateCourse />} />
        <Route path='/api/v1/admin/courses' element={<CourseList />} />

        <Route path='/api/v1/purchases' element={<PurchasePass />} />
        <Route path='/api/v1/payments/request' element={<CheckoutPage />} />
        <Route path="/success" element={<PaymentSuccess />} />
        <Route path="/fail" element={<PaymentFail />} />
        <Route path='/api/v1/payments' element={<PaymentConfirm />} />
        <Route path='/api/v1/admin/users' element={<UserList />} />
      </Routes>
    </>
  );
}

export default App;
