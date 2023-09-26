import React from "react";
import "./Congratulations.css";

export default function Congratulations() {
  return (
    <div className="main_Container">
      <div className="congratulations_container">
        <h1>Congratulations&#127881;</h1>
        <p>
          Your profile has be completed <br></br>Click here to visit your
          profile
        </p>
        <button type="button" className="SolidButton">
          view my profile
        </button>
      </div>
    </div>
  );
}
