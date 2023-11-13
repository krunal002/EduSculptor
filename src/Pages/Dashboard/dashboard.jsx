import "./dashboard.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";

import { fetchStudents } from "../../Features/Students/studentsSlice";
import { fetchTeachers } from "../../Features/Teachers/teachersSlice";

const Dashboard = () => {
  const { students } = useSelector((state) => state.students);
  const { teachers } = useSelector((state) => state.teachers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStudents());
    dispatch(fetchTeachers());
  }, [dispatch]);

  const topScorer = students?.slice().sort((a, b) => b.marks - a.marks)[0];
  // console.log(topScorer);

  return (
    <div>
      <header className="entity-header-container">
        <h1>Dashboard</h1>
      </header>

      {!students.length && !teachers.length ? (
        <div className="display-center">
          <Box sx={{ display: "flex" }}>
            <CircularProgress color="inherit" />
          </Box>
      </div>
      ) : (
        <main>
        <section className="quote-container">
            <h1>"Education is the key to unlock the golden door of freedom." </h1>
            <p><small>George Washington Carver</small></p>
        </section>

        <section className="dashboard-container">
          <div className="primary-item-container">
            <div className="dashboard-item-container">
                <h1>{students?.length}</h1>
                <h3>Students</h3>
            </div>

            <div className="dashboard-item-container">
                <h1>{teachers?.length}</h1>
                <h3>Teachers</h3>
            </div>
          </div>

          <div className="top-scorer-container">
            <h3>School Topper</h3>
              <div className="top-student-wrapper">
                <h1>{topScorer?.name}</h1>
                <p>From Class - <strong>{topScorer?.class}</strong></p>
                <p>with <strong className="marks">{topScorer?.marks}%</strong></p>
              </div>
          </div>
        </section>
      
      </main>
      )}
    </div>
  );
};

export default Dashboard;
