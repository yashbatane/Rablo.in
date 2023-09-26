import React from "react";

import "./styles/JourneyCard.css";

const JourneyCard = (props) => {
    return (
        <div className="journey-body-card">
            <div className="body-card-top">
                <div>
                    Step {props.step}:
                </div>
                <div>
                    {props.title}
                </div>
            </div>
            <div className="body-card-bottom">
                <div>
                    <div style={{ width: "100%", height: '0px', borderTop: (props.step > 1) ? "1px dashed" : "" }}>
                    </div>
                    <div>
                        {props.icon}
                    </div>
                    <div style={{ width: "100%", height: '0px', borderTop: (props.step < 8) ? "1px dashed" : "" }}>
                    </div>
                </div>
                <div>
                    {props.status}
                </div>
            </div>
        </div>
    );
}

export default JourneyCard;