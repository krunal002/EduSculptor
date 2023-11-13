import "./sidebar.css";
import { NavLink } from "react-router-dom";

import DashboardIcon from "@mui/icons-material/SpaceDashboard";
import StudentIcon from "@mui/icons-material/School";
import TeacherIcon from "@mui/icons-material/CardMembership";
import SchoolIcon from "@mui/icons-material/LocationCity";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <header className="header-wrapper">
        <h2>EduSculptor</h2>
      </header>
      <nav className="navlink-container">
        <NavLink to="/" className="navlink-wrapper">
          <DashboardIcon /> Dashboard
        </NavLink>
        <NavLink to="/students" className="navlink-wrapper">
          <StudentIcon /> Students
        </NavLink>
        <NavLink to="/teachers" className="navlink-wrapper">
          <TeacherIcon /> Teachers
        </NavLink>
        <NavLink to="/school" className="navlink-wrapper">
          <SchoolIcon /> School
        </NavLink>
      </nav>
    </div>
  );
};
export default Sidebar;
