
import { Route, Routes } from "react-router-dom"
import CourseList from "./pages/admin/course/CourseList"
import InquiryCreate from "./pages/inquiry/InquiryCreate"
import PurchasePass from "./pages/payment/PurchasePass"
import CheckoutPage from "./pages/payment/CheckoutPage"
import PaymentConfirm from "./pages/admin/payment/PaymentConfirm"
import UserList from "./pages/admin/user/UserList"
import CreateCourse from "./pages/admin/course/CreateCourse"

function App() {
  return (
    <>
      <Routes>
        <Route path='/api/v1/inquiries' element={<InquiryCreate />} />
        <Route path='/api/v1/create-course' element={<CreateCourse />} />
        <Route path='/api/v1/courses' element={<CourseList />} />
        <Route path='/api/v1/purchases' element={<PurchasePass />} />
        <Route path='/api/v1/payments/request' element={<CheckoutPage />} />
        <Route path='/api/v1/payments/confirm' element={<PaymentConfirm />} />
        <Route path='/api/v1/users' element={<UserList />} />
      </Routes>
    </>
  );
}

export default App;
