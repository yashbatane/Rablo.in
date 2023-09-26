import { createSlice } from "@reduxjs/toolkit";

export const rewardPackSlice = createSlice({
    name: "rewardPack",
    initialState: {
        value: {
            test: 0,
            packList: [
               {tag:'Best Price',coins:500,packName:'Classroom Pack',suitableFor:'To Acquire Mid to Large Batch',actualPrice:500,discountedPrice:400},{tag:'Most Prefered',coins:200,packName:'Freelance Pack',suitableFor:'To Acquire to Mid Batch',actualPrice:200,discountedPrice:200},{tag:'Available Once Only',coins:50,packName:'Trial Pack',suitableFor:'To give a try to the skills',discountedPrice:50} 
            ]
        }
    },
    reducers: {
        setValue: (state)=>{
            state.value.test+=1;
        },
        setPackList: (state, action)=>{
            state.value.packList = action.payload;
        }
    }
});


export default rewardPackSlice.reducer;
export const {setValue,setPackList} = rewardPackSlice.actions;


