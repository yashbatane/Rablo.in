import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const studentId="151"
export const getNofications = createAsyncThunk(
  "getNotification",
  async () => {
    try {
      const response = await fetch(
        `http://localhost:6500/api/notifications/show/${studentId}`
      );
      const result = await response.json();
      // console.log(result);
      return result;
    } catch (err) {
      return err.response.data;
    }
  }
);

export const Notifications = createSlice({
  name: "Notifications",
  initialState: {
    notifications: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    [getNofications.pending]: (state) => {
      state.loading = true;
    },
    [getNofications.fulfilled]: (state, action) => {
      state.loading = false;
      state.notifications = action.payload;
    },
    [getNofications.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export default Notifications.reducer;
