import React, { useEffect, useState } from "react";
import "./SearchStudent.css"
import StudentCard from "./StudentCard";
// import profilepic from "../../../img/profilepic.webp";
// import { OfflineData } from "../Dashboard/Data/SearchAndLocateOfflineData";

import axios from 'axios'

function SearchAndLocateOffline() {
  
  const [studentData , setStudentData] = useState([])
  
  useEffect(()=>{
    axios.get('http://localhost:6500/api/student/getAllStudents')
    .then(function(response){
      console.log(response.data.data)
      setStudentData(response.data.data)
    })
    .catch(function(error){
      console.log(error)
    })
  } ,[])

  const handleSearchClick = () => {
    // implement search endpoint 
  }

  return (
    <div className="onlineMainContainer">
      <div className="upperPart">
      <div className="preferencesPart">
      <h1>You have selected "Offline" Mode</h1>
      <h4>Preferences:</h4>
      <h5>Rating</h5>
      <input type="number"></input>
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

      <h5>Gender</h5>
      <select name="language" className="language">
        <option value="Male">Male</option>
        <option value="Female">Female</option>
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
          {studentData.map((student , idx) => {
            return (
              <div key = {idx} >
                <StudentCard student={student}/>
              </div>
            )
          })}
      </div>
    </div>
  );
}

export default SearchAndLocateOffline;
