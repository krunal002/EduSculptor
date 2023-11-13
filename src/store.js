import { configureStore } from "@reduxjs/toolkit";
import { studentsSlice } from "./Features/Students/studentsSlice";
import { teachersSlice } from "./Features/Teachers/teachersSlice";

export default configureStore({
  reducer: {
    students: studentsSlice.reducer,
    teachers: teachersSlice.reducer
  }
});
