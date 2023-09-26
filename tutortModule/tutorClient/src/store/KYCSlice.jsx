const {createSlice} = require('@reduxjs/toolkit');

const initialState={
    // step:1,isAddressSame:true,
    formData:{}
}


const KYCSlice = createSlice({
    name:'KYC',
    initialState,
    reducers : {
       setFormData:(state,action)=>{
            const formField = action.payload;
           state.formData={...state.formData,formField};
        //    console.log(state.formData);
        // state.formData={...state,action.payload};
        // state.formData=action.payload;
       }
    },
});



export const { setFormData } = KYCSlice.actions;
// export const KYCFormData = (state) => state.KYC
export default KYCSlice.reducer;
