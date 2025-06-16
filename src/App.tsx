import { Route, Routes } from "react-router-dom"
import CourseList from "./pages/admin/course/CourseList"

function App() {
  // 4. 폴더 구조 생성
  // assets, apis(ts), components(tsx), constants(ts), layouts(tsx)
  // , stores(ts), styles(ts), types(ts), views(tsx)
  return (
    <>
      <Routes>
        <Route path='/api/v1/courses' element={<CourseList />} />

      </Routes>
    </>
  )
}

export default App