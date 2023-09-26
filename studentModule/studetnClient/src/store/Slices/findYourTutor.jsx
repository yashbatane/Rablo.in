import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const findYourTutor = createAsyncThunk("findYourTutor",async (data) => {
  try {
    const response =await fetch(`http://localhost:6500/api/findtutors`, {
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
    console.log(error)
  }
});

export const FindYourTutor = createSlice({
  name: "FindYourTutor",
  initialState: {
    findYourTutor: {},
    loading: false,
    error: null,
  },
  extraReducers:{
    [findYourTutor.pending]:(state)=>{
        state.loading=true;
    },
    [findYourTutor.fulfilled]:(state,action)=>{
        state.loading=false
        state.findYourTutor=action.payload;
    },
    [findYourTutor.rejected]:(state,action)=>{
        state.loading=false,
        state.error=action.payload
    }
  }
});
export default FindYourTutor.reducer;
