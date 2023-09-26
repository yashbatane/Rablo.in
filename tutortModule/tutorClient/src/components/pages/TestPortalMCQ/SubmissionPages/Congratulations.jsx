import React from "react";
import "./Congratulations.css";
function Congratulations() {
  return (
    <div className="congratulationsMainContainer">
      <div className="box">
        <div className="header">
          <div className="square"><i class="fa-solid fa-square fa-2x"></i></div>
          <div className="star"><i class="fa-solid fa-star-of-life fa-3x"></i></div>
          <div className="circlePlay"><i class="fa-solid fa-circle-play fa-2x"></i></div>
          <div className="crossDiv">
            <i class="fa-sharp fa-solid fa-circle-xmark fa-3x"></i>
          </div>
          <div className="shapes"><i class="fa-solid fa-shapes fa-2x"></i></div>
          <div className="triangle"><i class="fa-solid fa-play fa-2x"></i></div>
          <div className="circle"> <i class="fa-solid fa-circle fa-2x"></i></div>
        </div>
        <div className="badgeImage">
          <img src="" alt="" />
        </div>
        <div>
          <p>Congratulations</p>
          <h1>Plan Created Successfully !!</h1>
        </div>
      </div>
    </div>
  );
}

export default Congratulations;
