import React from "react";

import "./styles/MilestoneStatus.css";

const MilestoneStatus = (props) => {
    return (
        <div className="milestonestatus">
            <div className="milestonestatus-top">
                <div className="milestonestatus-top-head">
                    {props.data.nature}
                </div>
                <div className="milestonestatus-top-title">
                    {props.data.body.title}
                </div>
            </div>
            <div className="milestonestatus-middle">
                <div>
                    {
                        props.data.isLocked ?
                            props.THEME.StatusSvg["locked"]
                            :
                        props.data.body.status.isDone?
                            props.THEME.StatusSvg["completed"]
                            :
                            props.THEME.StatusSvg[props.data.id]

                    }
                </div>
                <div style={{color: (props.data.id===("completed")?"rgba(103, 100, 255, 0.5)":"#6764FF")}}>
                    {props.data.id.charAt(0).toUpperCase()+props.data.id.slice(1)}
                </div>
            </div>
            <div className="milestonestatus-bottom">
            </div>
        </div>
    );
}

export default MilestoneStatus;