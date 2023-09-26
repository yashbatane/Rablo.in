import { configureStore } from "@reduxjs/toolkit";
import rewardPackReducer from "./reducers/Rewards/slices/rewardsPackSlice";
import rewardjourneyReducer from "./reducers/Rewards/slices/rewardsPackSlice";
import tutorBasicDetailsReducer from "./reducers/TutorDetails/slices/TutorBasicDetailsSlice";

export default configureStore({
    reducer: {
        rewardpack: rewardPackReducer,
        rewardjourney: rewardjourneyReducer,
        tutorbasicdetails: tutorBasicDetailsReducer
    }
});