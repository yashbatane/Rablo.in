import React, { useState } from "react";

import "./SearchAndLocateOnline.css";

import "./SearchAndLocateOffline.css"

// import profilepic from "../../../img/profilepic.webp";
// import { OfflineData } from "../Dashboard/Data/SearchAndLocateOfflineData";
function SearchAndLocateOffline() {
  // const [studentData, setStudentData] = useState(OfflineData[0]);

  return (
    <div className="onlineMainContainer">
      
      <div className="preferencesPart">
      <h1>You have selected "Online" Mode</h1>
      <h4>Preferences:</h4>
      <h5>Rating</h5>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      <h5>TimeSlot</h5>
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <h5>Platform</h5>
      <i className="fa-brands fa-google"></i>
      <i className="fa-solid fa-video"></i>
      <i className="fa-solid fa-user-plus"></i>
      <h5>Language</h5>
      <select name="language" id="language">
        <option value="Hindi">Hindi</option>
        <option value="English">English</option>
        <option value="French">French</option>
        <option value="Others">Others</option>
      </select>
      <button className="searchButton">Search</button>
      </div>
      <div className="divForCards">
      <div className="ProgressRegistrationBarCard">
        <div className="profileImag">
          {/* <img src={profilepic} alt="" /> */}
        </div>
        <h4>Varidh</h4>
        <h4>Subject teacher</h4>
 
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <h4>Classes</h4>
        <h4>Qualifications</h4>
        <i className="fa-brands fa-google"></i>
        <i className="fa-solid fa-video"></i>
        <i className="fa-solid fa-user-plus"></i>
        </div>
      <div className="ProgressRegistrationBarCard">
        <div className="profileImag">
          {/* <img src={profilepic} alt="" /> */}
        </div>
        <h4>Varidh</h4>
        <h4>Subject teacher</h4>
 
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <h4>Classes</h4>
        <h4>Qualifications</h4>
        <i className="fa-brands fa-google"></i>
        <i className="fa-solid fa-video"></i>
        <i className="fa-solid fa-user-plus"></i>
        </div>
      <div className="ProgressRegistrationBarCard">
        <div className="profileImag">
          {/* <img src={profilepic} alt="" /> */}
        </div>
        <h4>Varidh</h4>
        <h4>Subject teacher</h4>
 
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <h4>Classes</h4>
        <h4>Qualifications</h4>
        <i className="fa-brands fa-google"></i>
        <i className="fa-solid fa-video"></i>
        <i className="fa-solid fa-user-plus"></i>
        </div>
      <div className="ProgressRegistrationBarCard">
        <div className="profileImag">
          {/* <img src={profilepic} alt="" /> */}
        </div>
        <h4>Varidh</h4>
        <h4>Subject teacher</h4>
 
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <h4>Classes</h4>
        <h4>Qualifications</h4>
        <i className="fa-brands fa-google"></i>
        <i className="fa-solid fa-video"></i>
        <i className="fa-solid fa-user-plus"></i>
        </div>
        </div>
    </div>
  );
}

export default SearchAndLocateOffline;
