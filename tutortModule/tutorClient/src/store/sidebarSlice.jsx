import { useState } from 'react';

const {createSlice} = require('@reduxjs/toolkit');

const initialState={
selectedTab:"1"
}


const sidebarSlice = createSlice({
    name:'sidebar',
    initialState,
    reducers : {
     setSelectedTab:(state,action)=>{
        state.selectedTab=action.payload
     }
    },
});



export const { setSelectedTab } = sidebarSlice.actions;
export default sidebarSlice.reducer;
