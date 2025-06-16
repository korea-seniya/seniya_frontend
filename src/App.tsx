import { Route, Routes } from "react-router-dom";
import CourseList from "./pages/admin/course/CourseList";
import NoticeCreate from "./pages/notice/NoticeCreate";

function App() {
  return (
    <>
      <Routes>
        <Route path="/api/v1/courses" element={<CourseList />} />
        <Route path="/api/v1/notices" element={<NoticeCreate />} />
      </Routes>
    </>
  );
}

export default App;
