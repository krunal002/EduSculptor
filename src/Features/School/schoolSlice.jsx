import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchSchools = createAsyncThunk("school/fetchSchools");
const initialState = {
  schools: [],
  status: "idle",
  error: null
};

export const schoolSlice = createSlice({
  name: "school",
  initialState,
  reducers: {},
  extraReducers: {}
});
