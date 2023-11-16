import { useEffect } from "react";
import "./school.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchStudents } from "../../Features/Students/studentsSlice";
import { fetchTeachers } from "../../Features/Teachers/teachersSlice";
const School = () => {
  const { students } = useSelector((state) => state.students);
  const { teachers } = useSelector((state) => state.teachers);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchStudents());
    dispatch(fetchTeachers());
  }, [dispatch]);

  const totalStudents = students?.length;
  const totalTeachers = teachers?.length;
  const avgMarks = Math.round(
    students.reduce((acc, curr) => acc + curr.marks, 0) / students.length,
  );
  const avgAttendance = Math.round(
    students.reduce((acc, curr) => acc + curr.attendance, 0) / students.length,
  );
  const topScorer = students
    .slice()
    .sort((a, b) => b.marks - a.marks)
    .slice(0, 3);
  // console.log(topScorer);

  return (
    <main>
      <header className="entity-header-container">
        <h1>School</h1>
      </header>
      <article className="school-container">
        <p>
          Total Students <span>{totalStudents}</span>
        </p>
        <p>
          Total Teachers <span>{totalTeachers}</span>
        </p>
        <p>
          Average Marks <span>{avgMarks}</span>
        </p>
        <p>
          Average Attendance <span>{avgAttendance}</span>
        </p>
        <section className="top-scorer-wrapper">
          <h4>Top scorer </h4>
          {topScorer.map((student, index) => (
            <h3 key={student._id}>
              {index + 1}. {student.name} : {student.marks}
            </h3>
          ))}
        </section>
      </article>
    </main>
  );
};
export default School;
