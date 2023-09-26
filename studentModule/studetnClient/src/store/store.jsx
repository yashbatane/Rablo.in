import { configureStore } from "@reduxjs/toolkit";
import SubscribedTutor from "./slices/subscribedTutorSlice";
import FavouriteTutor from "./slices/favouriteTutorSlice";
import AllTutor from "./slices/allTutorSlice";
import SingleTutor from "./slices/singleTutorSlice";
import reportedTutors from "./slices/tutorReportSlice";
import Notifications from "./slices/notificationSlice";
import nearMe from "./slices/nearMeSlice";
import PhoneVerification from "./slices/phoneVerificationSlice";
import OtpVerification from "./slices/otpVerification";
import TutorApplied from "./slices/tutorAppliedSlice";
import FindYourTutor from "./slices/findYourTutor";
import RequestSlice from "./slices/requestSlice";
// import GoogleAuthSlice from "./slices/googleAuthSlice"
export const store = configureStore({
  reducer: {
    subscribedTutor: SubscribedTutor,
    favouriteTutor: FavouriteTutor,
    allTutor: AllTutor,
    singleTutor: SingleTutor,
    // reportedTutors: reportedTutors,
    notifications: Notifications,
    nearMe: nearMe,
    phoneVerification: PhoneVerification,
    otpVerification: OtpVerification,
    tutorApplied: TutorApplied,
    findYourTutor: FindYourTutor,
    getRequset: RequestSlice,
  },
});
