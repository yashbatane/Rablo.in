import React from "react";
import "../styles/videoPopup.css";

// Images
import rabloLogo from "../assets/rablo.png";
import tutorImg from "../assets/tutor.png";
import closeIcon from "../assets/close.svg";
import playPause from "../assets/playPause.svg";

function VideoPopup({ closePopup }) {
  // Variable that represents the current second of video playback out of 60 seconds
  const currentTime = 30;

  return (
    <div className="TutorDemoVideoVerificationPopupContainer">
      <img className="rabloLogo" src={rabloLogo} alt="Rablo.in logo" />
      <button className="closePopup" onClick={closePopup}>
        <img src={closeIcon} alt="" />
      </button>

      <div className="videoContainer">
        <img className="video" src={tutorImg} alt="." />

        <div className="controls">
          <img src={playPause} alt="" />
          <div className="progressbar">
            {/* Div representing elpsed time in terms of percentage*/}
            <div
              className="filled"
              style={{ width: `${(currentTime / 60) * 100}%` }}
            ></div>
            <div className="empty"></div>
            <p className="time">{`00:${currentTime}:00`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoPopup;
