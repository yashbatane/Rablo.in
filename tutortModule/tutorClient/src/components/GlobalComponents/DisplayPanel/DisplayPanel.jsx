import React from "react";

import "./styles/DisplayPanel.css";
import RabloImg from "./styles/assets/rablo.png";
import { icons } from "./styles/assets/data";
import LogoutButton from "../Buttons/LogoutButton/LogoutButton";


const DisplayPanel = ()=>{
   
    return (
        <div className="displaypanel">
            <div className="displaypanel-top">
                <div>
                    {icons["back"]}
                </div>
                <div>
                    <img src={RabloImg} style={{height: "50px", width: "173px"}}/>
                </div>
            </div>
            <div className="displaypanel-bottom ">
                <LogoutButton />
            </div>
         
        </div>
    );
}

export default DisplayPanel;