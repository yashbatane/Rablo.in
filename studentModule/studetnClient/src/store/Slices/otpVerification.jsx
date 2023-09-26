import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const createOtpVerification = createAsyncThunk(
  "createOtpVerification",
  async (data) => {
    console.log(data);
    try {
      const response = await fetch(
        `http://localhost:6500/api/login/api/verify`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      return error.response.data;
    }
  }
);


export const OtpVerification = createSlice({
  name: "OtpVerification",
  initialState: {
    OtpVerification: {},
    loading: false,
    error: null,
  },
  extraReducers: {
    [createOtpVerification.pending]: (state) => {
      state.loading = true;
    },
    [createOtpVerification.fulfilled]: (state, action) => {
      state.loading = false;
      state.OtpVerification = action.payload;
    },
    [createOtpVerification.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export default OtpVerification.reducer;