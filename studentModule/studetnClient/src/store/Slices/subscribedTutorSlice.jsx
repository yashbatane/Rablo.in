import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const studentId="7i7532edsadadet5uydgvdvfdtbft"

export const getSubscribedTutor = createAsyncThunk("getAllUser", async () => {
  try {
    const response = await fetch(
      `http://localhost:6500/api/subs/subscribed-tutors/${studentId}`
    );
    const result = await response.json();
    // console.log(result);
    return result;
  } catch (err) {
    return err.response.data;
  }
});


export const SubscribedTutor = createSlice({
  name: "SubscribedTutor",
  initialState: {
    subscribedTutor: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    [getSubscribedTutor.pending]: (state) => {
      state.loading = true;
    },
    [getSubscribedTutor.fulfilled]: (state, action) => {
      state.loading = false;
      state.subscribedTutor = action.payload;
    },
    [getSubscribedTutor.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export default SubscribedTutor.reducer;
