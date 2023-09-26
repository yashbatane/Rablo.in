import { createSlice } from "@reduxjs/toolkit";

export const rewardJourneySlice = createSlice({
    name: "rewardjourney",
    initialState: {
        value: {
            journey: []
        }
    },
    reducers: {
        setValue: (state)=>{
            state.value.test+=1;
        },
        setJourney: (state, action)=>{
            state.value.journey = action.payload;
        }
    }
});


export default rewardJourneySlice.reducer;
export const {setJourney} = rewardJourneySlice.actions;