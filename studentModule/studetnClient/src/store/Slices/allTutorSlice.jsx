import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllTutor = createAsyncThunk("getAllUser", async () => {
  try {
    const response = await fetch(`http://localhost:6500/api/findtutors`);
    const result = await response.json();
    // console.log(result);
    return result;
  } catch (err) {
    return err.response.data;
  }
});


export const AllTutor = createSlice({
  name: "SubscribedTutor",
  initialState: {
    allTutor: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    [getAllTutor.pending]: (state) => {
      state.loading = true;
    },
    [getAllTutor.fulfilled]: (state, action) => {
      state.loading = false;
      state.allTutor = action.payload;
    },
    [getAllTutor.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export default AllTutor.reducer;