import React, { useState } from "react";
import "./PhoneVerification.css";

import Step1 from "./Step1/Step1";
import SunsetGIF from "./resources/SeaLighthouse-sunset.gif";
import StudentDetailsForm from "./StudentDetailsForm/StudentDetailsForm";
import Step2 from "./Step2/Step2";

import logo from "./resources/rablo.png";
import backbtn from "./resources/back.png";

export default function PhoneVerification() {
  const [currentStep, setCurrentStep] = useState(3);
  return (

    <>
      <div className="headerImageLogoOTp">
        <button>
          <img className="backHeaderImgOtp" src={backbtn} alt="" />
        </button>
        <img className="logoHeaderImageOtp" src={logo} alt="rablo.in" />
      </div>
      <div className="PhoneVerificationContainer">
        <img src={SunsetGIF} className="backgroundGIF" />
        {currentStep == 1 ? <Step1 /> : ""}
        {currentStep == 2 ? <Step2 /> : ""}
        {currentStep == 3 ? <StudentDetailsForm /> : ""}
      </div>
    </>
  );
}
