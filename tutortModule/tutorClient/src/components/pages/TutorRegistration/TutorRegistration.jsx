import React from "react";
import DisplayPanel from "../../GlobalComponents/DisplayPanel/DisplayPanel";

import "./styles/TutorRegistration.css";
import NextButton from "../../GlobalComponents/Buttons/NextButton/NextButton";
import RegistrationForm from "./subcomponents/RegistrationForm/RegistrationForm";
import OTPverification from "./subcomponents/OTPverification/OTPverification";

const TutorRegistration = () => {
    return (
        <div className="registration">
            <DisplayPanel />
            <div className="registration-form">
                <div className="registration-form-top">
                    Having Trouble? <span>Need Help!</span>
                </div>
                <div className="registration-form-middle">
                    {
                        (window.location.pathname === "/register/verify") ?
                            <OTPverification />
                            :
                            (window.location.pathname === "/register") ?
                                <RegistrationForm /> : <></>
                    }
                </div>
                <div className="registration-form-bottom">
                    {
                        (window.location.pathname === "/register/verify") ?
                            <></>
                            :
                            (window.location.pathname === "/register") ?
                            <NextButton />
                            : <></>
                    }
                </div>
            </div>
        </div>
    );
}

export default TutorRegistration;

// import react from 'react';
// function TutorRegistration (){
//     return (
//         <div>
//             Hello
//         </div>
//     );
// }
// export default TutorRegistration ;