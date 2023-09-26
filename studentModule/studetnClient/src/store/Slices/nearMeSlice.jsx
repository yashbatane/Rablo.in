import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const createNearMe = createAsyncThunk("nearMe", async (data) => {
    console.log(data);
  try {
    const response = await fetch(`http://localhost:6500/api/nearme/1`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result =await response.json();
    console.log(result);
    return result;
  } catch (error) {
    return error.response.data;
  }
});

export const nearMe = createSlice({
  name: "Near-Me",
  initialState: {
    nearMe: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    [createNearMe.pending]:(state)=>{
        state.loading=true;
    },
    [createNearMe.fulfilled]:(state,action)=>{
        state.loading=false;
        state.nearMe.push(action.payload)
    },
    [createNearMe.rejected]:(state)=>{
        state.erorr=action.payload;
    }
  },
});
export default nearMe.reducer;