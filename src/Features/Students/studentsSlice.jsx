import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchStudents = createAsyncThunk(
  "students/fetchStudents",
  async () => {
    const response = await axios.get(
      "https://edusculptor.krunalmandlekar.repl.co/student"
    );

    if (response.status === 200) {
      return response.data.student;
    }
  }
);

export const addStudent = createAsyncThunk(
  "students/addStudent",
  async (newStudent) => {
    const response = await axios.post(
      "https://edusculptor.krunalmandlekar.repl.co/student",
      newStudent
    );
    console.log("add student : ", response);
    if (response.status === 200) {
      return response.data.student;
    }
  }
);

export const updateStudent = createAsyncThunk(
  "students/updateStudent",
  async ({ id, updatedStudent }) => {
    const response = await axios.post(
      `https://edusculptor.krunalmandlekar.repl.co/student/${id}`,
      updatedStudent
    );

    if (response.status === 200) {
      return response.data.student;
    }
  }
);

export const deleteStudent = createAsyncThunk(
  "students/deleteStudent",
  async (id) => {
    const response = await axios.delete(
      `https://edusculptor.krunalmandlekar.repl.co/student/${id}`
    );

    if (response.status === 200) {
      return response.data.student;
    }
  }
);

const initialState = {
  students: [],
  status: "idle",
  error: null
};

export const studentsSlice = createSlice({
  name: "students",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchStudents.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchStudents.fulfilled]: (state, action) => {
      state.status = "success";
      state.error = null;
      state.students = action.payload;
    },
    [fetchStudents.rejected]: (state, action) => {
      state.status = "error";
      // console.log(action.error.message);
      state.error = action.error.message;
    },

    [addStudent.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [addStudent.fulfilled]: (state, action) => {
      state.status = "success";
      state.error = null;
      state.students.push(action.payload);
    },
    [addStudent.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    },

    [updateStudent.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [updateStudent.fulfilled]: (state, action) => {
      state.status = "success";
      state.error = null;
      state.students = state.students.map((student) =>
        student._id === action.payload?._id ? action.payload : student
      );
    },
    [updateStudent.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    },

    [deleteStudent.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [deleteStudent.fulfilled]: (state, action) => {
      state.status = "success";
      state.error = null;
      state.students = state.students.filter(
        (student) => student._id !== action.payload._id
      );
    },
    [deleteStudent.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    }
  }
});

export default studentsSlice.reducer;
