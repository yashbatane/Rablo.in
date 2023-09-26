import React, { useState } from "react";
import "./SearchAndLocateOffline.css"
// import profilepic from "../../../img/profilepic.webp";
// import { OfflineData } from "../Dashboard/Data/SearchAndLocateOfflineData";
function SearchAndLocateOffline() {
  // const [studentData, setStudentData] = useState(OfflineData[0]);

  
  return (
    <div className="onlineMainContainer">
      <div className="upperPart">
      <div className="preferencesPart">
      <h1>You have selected "Offline" Mode</h1>
      <h4>Preferences:</h4>
      <h5>Rating</h5>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      <h5>Distance Range</h5>
      <input type="range" min="1" max="100"  className="slider" id="myRange" />

      <h5>Class Strength</h5>
      <input type="range" min="1" max="100" className="slider" id="myRange" />
      <h5>Mode</h5>
      <select name="language" className="language">
        <option value="Hindi">One to One</option>
        <option value="English">One to Many</option>
        <option value="French">Many to One</option>
        <option value="Others">Many to Many</option>
      </select>
      <button className="searchButton">Search</button>
      </div>

      <div className="mapPart">
      <input type="text" placeholder="Search Tutor Near you"/>
      <button className="findButton">Find</button>
      <div className="map"></div>
      </div>
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
