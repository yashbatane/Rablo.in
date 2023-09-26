import React, { useEffect, useState } from "react";

import "./styles/RewardStatus.css";
import MilestoneContainer from "./subcomponents/MilestoneContainer/MilestoneContainer";

import { THEME, data } from "../../data/THEME.js";
import { fetchJourney } from "../../../../../store/reducers/Rewards/RewardsAPI";
import { useDispatch, useSelector } from "react-redux";

const RewardsStatus = (props) => {

    const [dataD, setdataD] = useState(data);
    const [focus, setFocus] = useState(-1);

    const dispatch = useDispatch();
    const payload = useSelector(state=>state.rewardjourney.value.journey);

    useEffect(()=>{
        fetchJourney(dispatch, {tutorId: "123"});
    },[])

    const all = ()=> {
        setdataD(data);
        setFocus(0);
    }

    //filtering milestone
    const filterMilestone = () => {
        const newData = data.filter(data => {
            return data.nature === "Milestone"
        });
        setdataD(newData);
        setFocus(1);
    }

    //filtering challenges
    const filterChallenges = () => {
        const newData = data.filter(data => {
            return data.nature === "Challenge"
        });
        setdataD(newData);
        setFocus(2);

    }

    //filtering bonuses
    const filterBonuses = () => {
        const newData = data.filter(data => {
            return data.nature === "Bonus"
        });
        setdataD(newData);
        setFocus(3);
    }

    //filtering completed
    const filterCompleted = () => {
        const newData = data.filter(data => {
            return data.body.status.isDone
        });
        setdataD(newData);
        setFocus(4);
    }

    return (
        <div className="rewardstatus">
            <div className="rewardstop">
            {/* Heading */}
            <div className="rewardstatus-head">
                Earn Reward Points
            </div>
            {/* Description */}
            <div className="rewardstatus-desc">
                Collect your earned reward points or buy them directly!!
            </div>
            {/* Search */}
            <div className="rewardstatus-search">
                Sort by
                <button
                    style={{ 
                        border: "1px solid #6764FFCC", 
                        background: (focus!==0)?"#FFFFFF":"#6764FFCC", 
                        color: (focus===0)?"#FFFFFF":"#6764FFCC"
                    }}
                    onClick={all}
                > All({21}) </button>
                <button
                    style={{ 
                        border: "1px solid #6764FFCC",
                        background: (focus!==1)?"#FFFFFF":"#6764FFCC", 
                        color: (focus===1)?"#FFFFFF":"#6764FFCC"
                    }}
                    onClick={filterMilestone}
                >Milestone({5})</button>
                <button
                    style={{ 
                        border: "1px solid #FFA500CC", 
                        background: (focus!==2)?"#FFFFFF":"#FFA500CC", 
                        color: (focus===2)?"#FFFFFF":"#FFA500CC"
                    }}
                    onClick={filterChallenges}
                >Challenges({4})</button>
                <button
                    style={{ 
                        border: "1px solid #F82083CC", 
                        background: (focus!==3)?"#FFFFFF":"#F82083CC", 
                        color: (focus===3)?"#FFFFFF":"#F82083CC"
                    }}
                    onClick={filterBonuses}
                >Bonus({2})</button>
                <button
                    style={{ 
                        border: "1px solid #15DB1D", 
                        background: (focus!==4)?"#FFFFFF":"#15DB1D", 
                        color: (focus===4)?"#FFFFFF":"#15DB1D"
                    }}
                    onClick={filterCompleted}
                >Completed({0})</button>
            </div>
            </div>
            {/* Rewards unlock */}
            <div className="rewardstatus-unlock">
                {
                    dataD.map((x, i) => {
                        return <MilestoneContainer data={x} THEME={THEME} />;
                    })
                }
            </div>

        </div>
    );
}

export default RewardsStatus;