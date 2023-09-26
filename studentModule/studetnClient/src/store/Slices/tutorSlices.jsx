import { createSlice } from "@reduxjs/toolkit";

const tutorSlice = createSlice({
    name: "tutor",
    initialState: {
        id: null,
        name: null,
        gender: null,
        subject: null,
        exp: null,
        rating: null,
        language: null,
        subs_stu: null,
        free_live_courses: null,
        percentage: null,
        time: null,
        price: null,
        city:null,
        state:null,
        postalCode: null,
        email: null,
        phone: null
    },
    reducers: {
        changeId(state, action) {
            return {...state, id:action.payload};
        },
        changeName(state, action) {
            return { ...state, name:action.payload};
        },
        changeGender(state, action) {
            return { ...state, gender:action.payload}
        },
        changeSubjects(state, action) {
            return{...state, subject: action.payload};
        },
        changeExp(state, action) {
            return {...state, exp:action.payload};
        },
        changeRating(state, action) {
            return {...state, rating:action.payload};
        },
        changeLanguage(state, action) {
            return {...state, language:action.payload};
        },
        changeSubs_stu(state, action) {
            return {...state, subs_stu:action.payload};
        },
        changeFreeLiveCourses(state, action) {
            return {...state, free_live_courses:action.payload};
        },
        changePercentage(state, action) {
            return {...state, percentage:action.payload};
        },
        changeTime(state, action) {
            return {...state, time:action.payload};
        },
        changePrice(state, action) {
            return {...state, price:action.payload};
        },
        changeCity(state, action) {
            return { ...state, city:action.payload}
        },
        changeState(state, action) {
            return { ...state, state:action.payload}
        },
        changePostalCode(state, action) {
            return { ...state, postalCode:action.payload}
        },
        changeEmail(state, action) {
            return { ...state, email:action.payload}
        },
        changePhone(state, action) {
            return { ...state, phone:action.payload}
        }
    }
})

export default tutorSlice.reducer;

export const {
    changeId,
    changeName,
    changeGender,
    changeSubjects,
    changeExp,
    changeRating,
    changeLanguage,
    changeSubs_stu,
    changeFreeLiveCourses,
    changePercentage,
    changeTime,
    changePrice,
    changeCity,
    changeState,
    changePostalCode,
    changeEmail,
    changePhone
} = tutorSlice.actions;