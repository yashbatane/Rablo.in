import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const studentId = "7i7532edsadadet5uydgvdvfdtbft";

export const getFavouriteTutor = createAsyncThunk("getAllUser", async () => {
  try {
    const response = await fetch(
      `http://localhost:6500/api/fav/tutors/${studentId}`
    );
    const result = await response.json();
    // console.log(result);
    return result;
  } catch (err) {
    return err.response.data;
  }
});

export const delFav = createAsyncThunk("delFav", async (tutorObjId) => {
  console.log(tutorObjId);
  try {
    const response = await fetch(
      `http://localhost:6500/api/fav/del/${studentId}/${tutorObjId}`,
      {
        method: "DELETE",
      }
    );
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    return err.response.data;
  }
});

export const favouriteTutors = createSlice({
  name: "favouriteTutors",
  initialState: {
    favouriteTutor: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    [getFavouriteTutor.pending]: (state) => {
      state.loading = true;
    },
    [getFavouriteTutor.fulfilled]: (state, action) => {
      state.loading = false;
      state.favouriteTutor = action.payload;
    },
    [getFavouriteTutor.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    [delFav.pending]: (state) => {
      state.loading = true;
    },
    [delFav.fulfilled]: (state, action) => {
      state.loading = false;
      console.log(action.payload)
      state.favouriteTutor = state.favouriteTutor.filter((ele)=>{
        ele.tutorObjId !== action.payload._id;
      });
    },
    [delFav.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export default favouriteTutors.reducer;
