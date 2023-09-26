import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const createPhoneVerification = createAsyncThunk(
  "createPhoneVerification",
  async (data) => {
    // console.log(data);
    try {
      const response = await fetch(`http://localhost:6500/api/login/loginOTP`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
    //   console.log(result);
      return result;
    } catch (error) {
      return error.response.data;
    }
  }
);
export const PhoneVerification = createSlice({
  name: "PhoneVerification",
  initialState: {
    PhoneVerification: {},
    loading: false,
    error: null,
  },
  extraReducers: {
    [createPhoneVerification.pending]: (state) => {
      state.loading = true;
    },
    [createPhoneVerification.fulfilled]: (state, action) => {
      state.loading = false;
      state.PhoneVerification = action.payload;
    },
    [createPhoneVerification.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export default PhoneVerification.reducer;