import React from "react";
import MilestoneStatus from "../MilestoneStatus/MilestoneStatus";
import MilestoneCard from "../MilestoneCard/MilestoneCard";


import "./styles/MilestoneContainer.css";

const MilestoneContainer = (props)=> {
    return (
        <div className="milestonecontainer">
            <MilestoneStatus THEME={props.THEME} data={props.data}/>
            <MilestoneCard data={props.data} THEME={props.THEME}/>
        </div>
    );
}

export default MilestoneContainer;