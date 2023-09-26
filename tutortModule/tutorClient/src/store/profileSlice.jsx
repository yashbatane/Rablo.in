
const {createSlice} = require('@reduxjs/toolkit');
// const initialState=[];

const initialState={
    showProfile:true,
    hidePref:true,
    formStatus:false,
}


const profileSlice = createSlice({
    name:'profile',
    initialState,
    reducers : {
       setShowProfile:(state,action)=>{
        state.showProfile=action.payload;
        },
        setHidePref:(state,action)=>{
            state.hidePref=action.payload
        },
        setFormStatus:(state,action)=>{
            state.formStatus=action.payload
        }
    },
});



// export const { add, remove } = cartSlice.actions;
export const { setHidePref,setShowProfile,setFormStatus } = profileSlice.actions;
export default profileSlice.reducer;
