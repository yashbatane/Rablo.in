import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getSingleTutor = createAsyncThunk("getAllUser", async (data) => {
  try {
    const response = await fetch(
      `http://localhost:6500/api/tutor/info/${data}`
    );
    const result = await response.json();
    // console.log(result);
    return result;
  } catch (err) {
    return err.response.data;
  }
});

export const SingleTutor = createSlice({
  name: "SingleTutor",
  initialState: {
    SingleTutor: {},
    loading: false,
    error: null,
  },
  extraReducers: {
    [getSingleTutor.pending]: (state) => {
      state.loading = true;
    },
    [getSingleTutor.fulfilled]: (state, action) => {
      state.loading = false;
      state.SingleTutor = action.payload;
    },
    [getSingleTutor.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export default SingleTutor.reducer;
