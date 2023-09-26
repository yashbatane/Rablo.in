import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getRequest=createAsyncThunk("getRequest",async()=>{
    try {
        const response = await fetch(
          "http://localhost:6500/api/requests/received/7i7532edsadadet5ydgvdvfdbft"
        );
          const result=await response.json();
          console.log(result);
          return result
        
    } catch (error) {
        console.log(error);
    }
})

export const RequestSlice = createSlice({
  name: "RequestSlice",
  initialState: {
    loading: false,
    RequestSlice: {},
    error: null,
  },
  extraReducers: {
    [getRequest.pending]: (state) => {
      state.loading = true;
    },
    [getRequest.fulfilled]: (state, action) => {
      state.loading = false;
      state.RequestSlice = action.payload;
    },
    [getRequest.rejected]: (state,action) => {
      state.error = action.payload;
    },
  },
});
export default RequestSlice.reducer;