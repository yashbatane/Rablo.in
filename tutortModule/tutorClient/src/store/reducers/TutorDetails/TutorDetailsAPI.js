import { setDetails } from "./slices/TutorBasicDetailsSlice";

export async function fetchTutorDetails(dispatch) {
    await fetch("http://localhost:4000/api/tutor/getTutorContactDetails/1234", {//multiple config files (env files), 
        method: "get",
        headers: {
            "Content-Type": "application/json"
        } 
    }).then(res => res.json()).then(data => {
        dispatch(setDetails(data));
    });
}