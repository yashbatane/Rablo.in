import React from "react";

import "./styles/CInput.css";
const CInput = ()=> {
    return (
        <div className="cinput">
            <div>
                {"+91"}
            </div>
            <input type="number" className="cinput-field" placeholder="_ _ _ _ _ _ _ _ _ _"/>
        </div>
    );
}
export default CInput;