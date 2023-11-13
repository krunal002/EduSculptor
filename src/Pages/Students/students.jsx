import "./students.css";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchStudents } from "../../Features/Students/studentsSlice";
import EntityListing from "../../Components/EntityListing/entityListing";

const Students = () => {
  const { students, status, error } = useSelector((state) => state.students);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchStudents());
    }
  }, [status, dispatch]);

  const handleError = () => {
    dispatch(fetchStudents());
  };

  return (
    <div>
      <header className="entity-header-container">
        <h1>Students</h1>
      </header>

      {status === "loading" && (
        <div className="display-center">
          <Box sx={{ display: "flex" }}>
            <CircularProgress color="inherit" />
          </Box>
        </div>
      )}

      {error && (
        <Button
          variant="contained"
          color="error"
          size="small"
          onClick={handleError}
          className="display-center"
        >
          Error
        </Button>
      )}

      {status === "success" && (
        <main>
          <aside>
            <EntityListing entity={"student"} data={students} />
          </aside>
        </main>
      )}
    </div>
  );
};
export default Students;
