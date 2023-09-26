import React from "react";
// import ProfileNav from "./ProfileNav";
import PreferenceForm from "../../PreferenceForm/PreferenceForm";
import "./profile.css";
const Preference = () => {
  return (
    <div className="profileContainer">
      <div className="profileWrapper">
        <div className="preferenceFormDiv">
          <PreferenceForm />
        </div>
      </div>
    </div>
  );
};

export default Preference;
