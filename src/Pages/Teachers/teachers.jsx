import "./teachers.css";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTeachers } from "../../Features/Teachers/teachersSlice";
import EntityListing from "../../Components/EntityListing/entityListing";

const Teachers = () => {
  const { teachers, status, error } = useSelector((state) => state.teachers);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchTeachers());
    }
  }, [status, dispatch]);

  const handleError = () => {
    dispatch(fetchTeachers());
  };

  return (
    <div>
      <header className="entity-header-container">
        <h1>Teachers</h1>
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
        >
          Error
        </Button>
      )}

      {status === "success" && (
        <main>
          <aside>
            <EntityListing entity={"teacher"} data={teachers} />
          </aside>
        </main>
      )}
    </div>
  );
};
export default Teachers;
