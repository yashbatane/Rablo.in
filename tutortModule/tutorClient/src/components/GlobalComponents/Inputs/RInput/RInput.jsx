import React from "react";

import "./styles/RInput.css";
import DropBox from "./subcomponents/DropBox/DropBox";
import Gender from "./subcomponents/Gender/Gender";
import Referral from "./subcomponents/Referral/Referral";

const RInput = (props) => {
    return (
        <div className="rinput" style={props.style}>
            <div className="rinput-label">
                <div>
                    {props.label}
                </div>
                <div>
                    <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle id="Ellipse 270" cx="3" cy="3" r="3" transform="matrix(-1 0 0 1 6 0)" fill="#EC3737" />
                    </svg>
                </div>
                <div style={{
                    color: '#999',
                    fontSize: '.77rem',
                    fontWeight: 400
                }}>
                    {
                        (props.pretext) ? props.pretext : ""
                    }
                </div>
            </div>
            <div className="rinput-inputs" style={{background: (props.type=="dropbox")?"#ffffff":"#6764ff"}}>
            {
                props.type === "dropbox" ?
                    <DropBox onChange={props.onChange} />
                    :
                props.type === "gender" ?
                    <Gender onChange={props.onChange}/>
                    :
                props.type === "referral" ?
                    <Referral />
                    :
                    <input className="default-input" type={props.type} placeholder={props.placeholder} onChange={props.onChange} style={{letterSpacing: (props.type === "number")?"4.96px":""}}/>

            }
            </div>
        </div>
    );

}

export default RInput;