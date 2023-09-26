import React from "react";

import "./styles/Details.css";
import GreetCard from "../../../../GlobalComponents/GreetCard/GreetCard";
import WrapupBar from "../../../../GlobalComponents/WrapupBar/WrapupBar";
import Journey from "../Journey/Journey";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchTutorDetails } from "../../../../../store/reducers/TutorDetails/TutorDetailsAPI";

const Details = (props) =>{
    const details = useSelector(state=>state.tutorbasicdetails.value.details);
    const dispatch = useDispatch();

    useEffect(()=>{
        fetchTutorDetails(dispatch);
    }, []);
    return (
        <div className="details" style={{ paddingLeft: props.pd }}>
            <GreetCard name={details.firstName+" "+details.lastName}/>
            <WrapupBar/>
            <Journey flow={{
                 "createAccount": true,
                 "profileVerified": true,
                 "createYourPlan":false,
                 "addStudent": false,
                 "createBatch": false,
                 "progressInsights": false,
                 "monthlyFeedback": false,
                 "monthlyFeeCredit": false,
            }}/>
        </div>
    );
}

export default Details;