import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AdminTemplate from "./templates/AdminTemplate";
import AdminUser from "./pages/AdminUser/AdminUser";
import AdminCourse from "./pages/AdminCourse/AdminCourse";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<AdminTemplate />}>
          <Route index element={<AdminUser />} />
          <Route path="/admin/course" element={<AdminCourse />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
