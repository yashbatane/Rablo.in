import React from 'react';

import "./SideTutor.css";
import profile from "../resource/profile.png";

const SideTutor = ({sh}) => {
  return (sh?
    <div className='wrapper' >
      <div className="sideContainer">
        <div className="profileImageContainer">
          <img className="profileImg" src={profile} alt="profile" />
          <p>Namaste, John P.</p>
        </div>
        <div className="tutorName">
          <h2>Basic Instruction</h2>
        </div>
        <div className="tutorInfoList">
          <ul>
            <li>Select the best suitable student to mentor according to academic Details of the student. </li>
            <li>Match and Success Rate shows you chances to get the student Onboard.</li>
            <li>You send an Proposal by mentioning all the details like Timings, Fee per hour, etc.</li>
            <li>Make sure that provided information is up to latest updates.</li>
          </ul>
        </div>
      </div>
    </div>:<></>
  );
};

export default SideTutor;
