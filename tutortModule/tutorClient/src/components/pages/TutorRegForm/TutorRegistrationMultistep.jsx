import React, { useContext } from "react";

import { multiStepContext } from "./MultistepContext";
import { useState } from "react";
import FirstStep from "./steps/FirstStep";
import OtpSend from "./steps/OtpSend";
import OtpVerify from "./steps/OtpVerify";
import SecondStep from "./steps/SecondStep";
import "./style.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import logo from "../../GlobalComponents/Image/rablo.png";
import back from "../../GlobalComponents/Image/back.png";
import { RiLogoutCircleRLine } from "react-icons/ri";
/* import  {multiStepContext}  from './MultistepContext' */

export default function TutorRegistrationMultistep() {
  /* const {sidebarTitles , step} = useContext(multiStepContext) */
  const [step, setStep] = useState(1);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);


  const sidebarTitles = ["Login", "Basic Details"];
  const displayStep = () => {
    if (step === 0) return <FirstStep setStep={setStep} />;
    else if (step === 1) return <SecondStep />;
    else if (step === 2) return <OtpSend />;
    else if (step === 3) return <OtpVerify />;
  };
  const handleLogout = () => {
    setShowLogoutPopup(true);
  };

  const handleConfirmLogout = () => {
    // Perform logout action here
    setShowLogoutPopup(false);
  };

  const handleCancelLogout = () => {
    setShowLogoutPopup(false);
  };

  return (
    <div className="msf-main-container" style={{ height: "100vh", border: "1px solid" }}>
      <div className="msf-sidebar" style={{ background: "rgb(103,100,255, 0.56)", borderRadius: "0" }}>
        <div className="" style={{ display: "flex", height: "fit-content" }}>
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30 50L10 30L30 10L33.5625 13.5L19.5625 27.5H50V32.5H19.5625L33.5625 46.5L30 50Z" fill="white" />
          </svg>
          <span><img className="logoimage-reg" src={logo} /></span>
        </div>

        <div className="logout-btn" style={{ background: "white", padding: "5px" }}>
          <RiLogoutCircleRLine className="logout-icon" onClick={handleLogout} />
          Logout
        </div>
      </div>
      {showLogoutPopup && (
        <div className="logout-popup-container">
          <div className="logout-popup">
            <div className="logout-popup-content">
              <h2 style={{ color: "rgba(101, 6, 6, 0.8)", alignItems: "center" }}>Leaving So Soon?</h2>
              <p>You will be logged out from the account</p>
              <div className="logout-popup-buttons">
                <button className="logout-button" onClick={handleConfirmLogout} >
                  Leave
                </button>
                <button className="cancel-button" onClick={handleCancelLogout}>
                  Cancel
                </button>

              </div>
            </div>
          </div>
        </div>
      )}

      <>
        {/* {step === 1 ? (
            <div
              className="form-container"
              style={{
                background: "#FFFFFF"
              }}
            >
              <div
                className="progress"
                style={{
                  background: "#FFFFFF",
                  // marginTop: "15%",
                  // margin:"30%"
                }}
              >
                <div>Start</div>
                <div
                  className="line"
                  style={{
                    background: "#FFFFFF",
                  }}
                >
                  <div className="line-completed">
                    <div className="progress-indication">65%</div>
                  </div>
                </div>
                <div>Completed</div>
              </div>
            </div>
          ) : (
            <></>
          )} */}

        <div className="msf-form lineUp" style={{ width: "100%", background: "white", height: "100vh" }}>
          {displayStep()}
          {/* <OtpSend /> */}
          {/* <SecondStep /> */}
          {/* <OtpSend /> */}
        </div>
      </>
    </div>
  );
}
