import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token:"",
  firstName: "",
  lastName: "",
  gender: "",
  mobileNo: "",
  houseNo: "",
  dob: "",
  address: "",
  state: "",
  city: "",
  postalCode: "",
  referalCode: ""
};

export const tutorOnBoardingFormSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action) => {
      state.lastName = action.payload;
    },
    setGender: (state, action) => {
      state.gender = action.payload;
    },
    setMobileNo: (state, action) => {
      state.mobileNo = action.payload;
    },
    setHouseNo: (state, action) => {
      state.houseNo = action.payload;
    },
    setDob: (state, action) => {
      state.dob = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setState: (state, action) => {
      state.state = action.payload;
    },
    setCity: (state, action) => {
      state.city = action.payload;
    },
    setPostalCode: (state, action) => {
      state.postalCode = action.payload;
    },
    setReferalCode: (state, action) => {
      state.referalCode = action.payload;
    },
  },
});

export const { setToken, setFirstName, setLastName, setGender, setMobileNo, setHouseNo, setAddress, setState, setCity, setPostalCode, setReferalCode } = tutorOnBoardingFormSlice.actions;

//Selectors:

export const selectFirstName = (state) => state.form.firstName;
export const selectToken = (state) => state.form.token;
export const selectLastName = (state) => state.form.lastName;
export const selectGender = (state) => state.form.gender;
export const selectMobileNo = (state) => state.form.mobileNo;
export const selectHouseNo = (state) => state.form.houseNo;
export const selectAddress = (state) => state.form.address;
export const selectState = (state) => state.form.state;
export const selectCity = (state) => state.form.city;
export const selectPostalCode = (state) => state.form.postalCode;
export const selectReferalCode = (state) => state.form.referalCode;

export default tutorOnBoardingFormSlice.reducer;
