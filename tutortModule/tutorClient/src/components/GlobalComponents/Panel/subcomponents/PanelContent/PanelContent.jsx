import React, { useEffect, useState } from "react";
import "./styles/PanelContent.css";
import dummyprofile from "./styles/assets/dummyprofile.png";
import { flag } from "./styles/assets/data";

const PanelContent = (props) => {
    const [color, setColor] = useState("");
    const [time, setTime] = useState(new Date().getHours())
    useEffect(() => {
        if (time > 6 && time < 18) {
            setColor("black")
        }
        else {
            setColor("white")
        }
    }, [time])
    return (
        <div className="panelcontent">
            <div className="panelcontent-top">
                <div>
                    <svg width="34.5" height="34.5" viewBox="0 0 45 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="22.002" cy="22" r="22" transform="rotate(-180 22.002 22)" fill="white" fill-opacity="0.3" />
                        <path d="M27.123 11.7324L16.3471 20.788C15.0745 21.8574 15.0745 23.6074 16.3471 24.6769L27.123 33.7324" stroke="white" stroke-width="5.28426" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <div>
                    {props.panelDetail.icon}
                </div>
            </div>
            <div className="panelcontent-middle">
                <div>
                    <img src={dummyprofile} style={{ height: "120px", width: "120px", borderRadius: "100%", background: "#ffffff" }} />
                </div>
                <div style={{ color: `${color}` }}>
                    {props.details.firstName + " " + props.details.lastName}
                </div>
                <div>
                    {flag["ind"]} <span style={{ marginLeft: "5px", color: `${color}`, fontSize: "1.25rem", textAlign: "center", justifyContent: "center", alignItems: "center", display: "inline" }}>{props.details.city + ", " + props.details.state}</span>
                </div>
            </div>
            {props.panelDetail.button === "Complete Your Profile" ? <div className={props.panelDetail.style} style={{ backgroundColor: "#FFD400" }}>
                <div style={{ color: "black" }}>
                    {props.panelDetail.button}
                </div>
                <div>
                    {props.panelDetail.buttonIcon}
                </div>
            </div> : <div className={props.panelDetail.style}>
                <div>
                    {props.panelDetail.buttonIcon}
                </div>
                <div style={{ color: "white" }}>
                    {props.panelDetail.button}
                </div>
            </div>}
        </div>
    );
}

export default PanelContent;