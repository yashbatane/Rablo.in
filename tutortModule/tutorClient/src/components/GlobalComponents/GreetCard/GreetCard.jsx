import React from "react";

import "./styles/GreetCard.css";

const GreetCard = (props) => {
    return (
        <div className="greetcard">
            <div className="greetcard-left">
                <div>
                    Namaste, {props.name}
                </div>
                <div>
                    Let’s Track All Your Students
                </div>
            </div>
            <div className="greetcard-right">
                <div className="greetcard-right-text">Create Plan</div>
                {/* <div className="greetcard-right-text">Add Student</div> */}
                <div>
                    <svg width="10" height="14" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.46094 16.5967L11.2623 10.6584C12.3017 9.9571 12.3017 8.80952 11.2623 8.10822L2.46094 2.16992" stroke="#6764FF" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default GreetCard;