import { createSlice } from "@reduxjs/toolkit";

export const tutorBasicDetailsSlice = createSlice({
    name: "tutorbasicdetails",
    initialState: {
        value: {
            details: []
        }
    },
    reducers: {
        setValue: (state)=>{
            state.value.test+=1;
        },
        setDetails: (state, action)=>{
            state.value.details = action.payload;
        }
    }
});


export default tutorBasicDetailsSlice.reducer;
export const {setDetails} = tutorBasicDetailsSlice.actions;