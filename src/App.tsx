import CourseList from "./pages/admin/course/CourseList"
import PaymentConfirm from "./pages/admin/payment/PaymentConfirm"
import UserList from "./pages/admin/user/UserList"
import InquiryCreate from "./pages/inquiry/InquiryCreate"
import InquiryAnswer from "./pages/inquiry/InquiryAnswer"
import InquiryUpdate from "./pages/inquiry/InquiryUpdate"
import InquiryListPage from "./pages/inquiry/InquiryListPage"
function App() {
  // 4. 폴더 구조 생성
  // assets, apis(ts), components(tsx), constants(ts), layouts(tsx)
  // , stores(ts), styles(ts), types(ts), views(tsx)
  return (
    <>
    <InquiryListPage />
    {/* <InquiryCreate /> */}
    {/* <InquiryAnswer /> */}
    {/* <InquiryUpdate /> */}
    </>
  )
}

export default App