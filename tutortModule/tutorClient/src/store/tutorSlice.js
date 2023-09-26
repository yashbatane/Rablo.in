const {createSlice} = require('@reduxjs/toolkit');
// const initialState=[];

const tutorSlice = createSlice({
    name:'tutor',
    initialState:[],
    reducers : {
        add(state,action) {
            state.push(action.payload)
        },
        // remove(state, action) {
        //     return state.filter((item) => item.id !== action.payload);
        // },
    },
});



// export const { add, remove } = cartSlice.actions;
export const { add } = tutorSlice.actions;
export default tutorSlice.reducer;
