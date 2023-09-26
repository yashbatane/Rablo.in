import React, { useEffect } from "react";
import "./profile.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TutorVarification from "../../TutorVarification/TutorVarification";
import Preference from "./Preference";
import PreferenceForm from "../../PreferenceForm/PreferenceForm";
import TutorEducation from "../../TutorEducationalField/TutorEducation";
import SelfDeclaration from "../../SelfDeclaration/SelfDeclaration";
// imprort TutorEducation
const Profile = ({ showForms }) => {
  console.log("form is" + showForms);
  const navigate = useNavigate();
  const [showProfile, setShowProfile] = useState(false);
  const [showFullpage, setShowFullPage] = useState(true);
  const [showPref, setShowPref] = useState(false);
  const [showVerification, setShowVerification] = useState(false);
  const [hideProf, setHideProf] = useState(true);
  const [count, setCount] = useState(0);
  const [showSelfDeclaration, setShowSelfDeclaration] = useState(true);

  const handlePreferenceClick = (e) => {
    setShowProfile(false);
    // setHidePref(false);
  };
  const handleProfileClick = () => {
    setShowProfile(true);
  };
  const hidePreference = () => {
    console.log("clicle");
    setHidePref(false);
  };
  const showPreference = () => {
    setHideProf(false);
  };

  return (
    <div className="profileContainer">
      <div className="profileWrapper">
        <div className="profileNav">
        <div className="profileHeading">
            {showProfile ? (
              <div className="subHeading">
                <h1>Qualification</h1>
                <p>Enter your Qualification details here</p>
              </div>
            ) : showPref ? (
              <div className="subHeading">
                <h1>Preference</h1>
                <p>Select the mode of class you want to teach</p>
              </div>
            ) : showVerification ? (
              <div className="subHeading">
                <h1>Verification</h1>
                <p>Select the mode of verification</p>
              </div>
            ) : showSelfDeclaration ? (
              <div className="subHeading">
                <h1>Self Declaration</h1>
                <p>Accepting the terms</p>
              </div>
            ) : ("")}
            {/* {showSelfDeclaration && <SelfDeclaration />} */}
            <div className="havingTrouble">
              Having Trouble ?{" "}
              <span style={{ color: "#6764FF", cursor: "pointer" }}>
                Need Help
              </span>
            </div>
          </div>
          {/* <div className="profileNavInner">
          <button
              onClick={handleProfileClick}
              value="profile"
              className={showProfile ? "markBlue" : ""}
            >
              Profile
            </button>
            {hidePref?<button
              onClick={handlePreferenceClick}
              value="preference"
              className={!showProfile ? "markBlue" : ""}
            >
              Preference
            </button>:""}
          </div> */}
        </div>
        <div className="profileFormDiv">
          {showProfile ? (
            <TutorEducation showPreference={handlePreferenceClick} />
          ) : showPref ? (
            <PreferenceForm hidePreference={hidePreference} />
          ) : (
            ""
          )}
          {showVerification && <TutorVarification />}
          {/* {!showForms?<PreferenceForm />:"null"} */}
        </div>
        <div className="profileFormDiv">
          {showSelfDeclaration && <SelfDeclaration />}
        </div>
      </div>
    </div>
  );
};

export default Profile;
// hidePref ? <PreferenceForm hidePreference={hidePreference} />:""
