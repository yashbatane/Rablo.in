import React from "react";

import "./styles/StepOTPButton.css";

const StepOTPButton = (props) => {
    return (
        <div className="stepotpbutton" onClick={(props.onClick)?props.onClick(true):null}>
            <span style={{fontSize: ".9625rem", color: "#ffffff"}}>{props.text}</span>
        </div>
    );
}

export default StepOTPButton;