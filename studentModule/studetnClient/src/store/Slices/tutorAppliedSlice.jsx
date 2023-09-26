import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const getTutorApplied = createAsyncThunk("getTutorApplied", async () => {
  try {
    const response = await fetch(
      `http://localhost:6500/api/student/tutorApplied`
    );
    const result = await response.json();
    // console.log(result);

    return result;
  } catch (error) {
    // console.log(error);
    return error.response.data;
  }
});

export const TutorApplied = createSlice({
  name: "TutorApplied",
  initialState: {
    tutorApplied: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    [getTutorApplied.pending]: (state) => {
      state.loading = true;
    },
    [getTutorApplied.fulfilled]: (state, action) => {
      state.loading = false;
      state.tutorApplied = action.payload;
    },
    [getTutorApplied.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export default TutorApplied.reducer;