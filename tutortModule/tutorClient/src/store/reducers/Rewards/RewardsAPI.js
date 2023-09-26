import { setJourney } from "./slices/rewardsJourneySlice";
import { setPackList } from "./slices/rewardsPackSlice";

export async function fetchPack(dispatch) {
    await fetch("http://localhost:4000/api/rewardPoints/getRewardPointsPacks", {
        method: "get",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.json()).then(data => {
        dispatch(setPackList(data));
    });
}
export async function fetchJourney(dispatch, data) {
    await fetch("http://localhost:4000/api/rewardPoints/getRewardPointsJourney:/tutorid", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then(res => res.json()).then(data => {
        console.log(data);
        dispatch(setJourney(data));
    });
}