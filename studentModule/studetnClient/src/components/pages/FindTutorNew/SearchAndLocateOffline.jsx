import React, { useEffect, useState } from "react";
import "./SearchAndLocateOffline.css"
import TutorCard from "./TutorCard";
// import profilepic from "../../../img/profilepic.webp";
// import { OfflineData } from "../Dashboard/Data/SearchAndLocateOfflineData";

import axios from 'axios'

function SearchAndLocateOffline() {
  
  const [tutorData , setTutorData] = useState([])
  
  useEffect(()=>{
    axios.get('http://localhost:5003/api/tutor/')
    .then(function(response){
      console.log(response.data.tutors)
      setTutorData(response.data.tutors)
    })
    .catch(function(error){
      console.log(error)
    })
  } ,[])

  
  const handleSearchClick = () => {
    
  }

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
      <button className="searchButton" onClick={handleSearchClick}>Search</button>
      </div>

      <div className="mapPart">
      <input type="text" placeholder="Search Tutor Near you"/>
      <button className="findButton">Find</button>
      <div className="map"></div>
      </div>
      </div>

      <div className="divForCards">
          {tutorData.map((tutor , idx) => {
            return (
              <div key = {idx} >
                <TutorCard tutor={tutor}/>
              </div>
            )
          })}
      </div>
    </div>
  );
}

export default SearchAndLocateOffline;
