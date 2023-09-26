// develop by Varidh
// Join us components in landing page

import React from "react";
import "./JoinUsNow.css";
import wave from "./Image/wave-haikei.png";
// import Wave from "react-wavify";
const JoinUsNow = () => {
  return (
    <div className="JoinUsNowMainContainer">
      {/* <div className="JoinUsNowImage">
            <img src={wave} alt="" />
        </div> */}
      <div className="JoinUsNowComponents">
        <div className="heading">
          <h1>Join us Now !</h1>
        </div>
        <div className="Content">
          <p>
            {" "}
            We are ready to teach Platform to help private educators and small &
            midsize tuition businesses grow their businesses, run their classes,
            and establish credibility in the market
          </p>
        </div>
        <div className="JoinCounting">
          <div className="JoinUsCountingContent">
            <div className="CountNumber">
              <h1>2,200+</h1>
            </div>
            <div className="CountHead">
              <p>Courses</p>
            </div>
          </div>
          <div className="JoinUsCountingContent">
            <div className="CountNumber">
              <h1>4,250,000+</h1>
            </div>
            <div className="CountHead">
              <p>STUDENTS</p>
            </div>
          </div>
          <div className="JoinUsCountingContent">
            <div className="CountNumber">
              <h1>250+</h1>
            </div>
            <div className="CountHead">
              <p>COURSE CATEGORIES</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUsNow;
