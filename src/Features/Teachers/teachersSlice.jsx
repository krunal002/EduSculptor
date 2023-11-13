import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTeachers = createAsyncThunk(
  "school/fetchTeachers",
  async () => {
    const response = await axios.get(
      "https://edusculptor.krunalmandlekar.repl.co/teacher"
    );

    // console.log(response.data.teacher);
    if (response.status === 200) {
      return response.data.teacher;
    }
  }
);

export const addTeacher = createAsyncThunk(
  "teachers/addTeacher",
  async (newTeacher) => {
    const response = await axios.post(
      "https://edusculptor.krunalmandlekar.repl.co/teacher",
      newTeacher
    );
    console.log("New teacher : ", response);
    if (response.status === 200) {
      return response.data.teacher;
    }
  }
);

export const updateTeacher = createAsyncThunk(
  "teachers/updateTeacher",
  async ({ id, updatedTeacher }) => {
    const response = await axios.post(
      `https://edusculptor.krunalmandlekar.repl.co/teacher/${id}`,
      updatedTeacher
    );
    // console.log("New teacher : ", response);
    if (response.status === 200) {
      return response.data.teacher;
    }
  }
);

export const deleteTeacher = createAsyncThunk(
  "teachers/deleteTeacher",
  async (id) => {
    const response = await axios.delete(
      `https://edusculptor.krunalmandlekar.repl.co/teacher/${id}`
    );
    // console.log("fun", response);
    if (response.status === 200) {
      return response.data.teacher;
    }
  }
);

const initialState = {
  teachers: [],
  status: "idle",
  error: null
};

export const teachersSlice = createSlice({
  name: "teachers",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchTeachers.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchTeachers.fulfilled]: (state, action) => {
      state.status = "success";
      state.error = null;
      state.teachers = action.payload;
    },
    [fetchTeachers.rejected]: (state, action) => {
      state.status = "error";
      // console.log(action.error.message);
      state.error = action.error.message;
    },

    [addTeacher.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [addTeacher.fulfilled]: (state, action) => {
      state.status = "success";
      state.error = null;
      state.teachers.push(action.payload);
    },
    [addTeacher.rejected]: (state, action) => {
      state.status = "success";
      state.error = action.error.message;
    },

    [updateTeacher.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [updateTeacher.fulfilled]: (state, action) => {
      state.status = "success";
      state.error = null;
      state.teachers = state.teachers.map((teacher) =>
        teacher._id === action.payload._id ? action.payload : teacher
      );
    },
    [updateTeacher.rejected]: (state, action) => {
      state.status = "success";
      state.error = action.error.message;
    },

    [deleteTeacher.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [deleteTeacher.fulfilled]: (state, action) => {
      state.status = "success";
      state.error = null;
      state.teachers = state.teachers.filter(
        (teacher) => teacher._id !== action.payload._id
      );
    },
    [deleteTeacher.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    }
  }
});

export default teachersSlice.reducer;
