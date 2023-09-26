// tutorReportSlice.js

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const reportTutor = createAsyncThunk(
  " reportTutor",
  async (data) => {
    try {
      const response = await fetch(
        "http://localhost:6500/api/subs/report/sub1",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      console.log(result)
      return result;
    } catch (error) {
      return error.response.data;
    }
  }
);

// const reportedTutorsSlice = createSlice({
//   name: "reportedTutors",
//   initialState: {
//     reportedTutor: [],
//     loading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: {
//     [reportTutor.pending]: (state) => {
//       state.loading = true;
//     },
//     [reportTutor.fulfilled]: (state, action) => {
//       state.loading = false;
//       state.reportedTutor.push(action.payload);
//     },
//     [reportTutor.rejected]: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     },
//   },
// });

// export default reportedTutorsSlice.reducer;
