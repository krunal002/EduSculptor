import "./styles.css";
import { Routes, Route } from "react-router-dom";

import Dashboard from "./Pages/Dashboard/dashboard";
import Students from "./Pages/Students/students";
import Teachers from "./Pages/Teachers/teachers";
import School from "./Pages/School/school";
import Sidebar from "./Components/Sidebar/sidebar";
import StudentForm from "./Features/Students/studentForm";

export default function App() {
  return (
    <div className="App">
      <div className="primary-app-container">
        <div className="primary-sidebar-wrapper">
          <Sidebar />
        </div>
        <div className="primary-route-wrapper">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/students" element={<Students />} />
            <Route path="/student-form" element={<StudentForm />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/school" element={<School />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
