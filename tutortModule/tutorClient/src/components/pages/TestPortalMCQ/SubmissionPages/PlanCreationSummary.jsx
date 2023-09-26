import React from "react";
import "./PlanCreationSummary.css";

function PlanCreationSummary() {
  return (
    <div className="planCreationSummaryMainContainer">
      <div className="box">
        <div className="header">
          <div className="logo"></div>
          <h4 className="heading">Plan Creation Summary !</h4>
        </div>
       
        <div className="content">
            <div className="contentUpper">
          <div className="imageText">
          <img src="" alt="" className="image"/>
          <div className="attemptedQuestions">Coins Earned : 80%</div>
          </div>
          <div className="imageText">
          <div className="attemptedQuestions">Plan Created : 100%</div>
          <img src="" alt="" className="image"/>
          </div>
          </div>
          <div className="almostThere">
            You are almost there, view your plan Summary
          </div>
        </div>
        {/* <div className="buttonsContainer">
          <button type="submit" className="prevButton">
            <i class="fa-solid fa-arrow-left fa-2x"></i>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <p> View Answers </p>
          </button>
          <button type="submit" className="submitButton">
            <p> Submit Test </p>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <i class="fa-solid fa-circle-check fa-2x"></i>
          </button>
        </div> */}
        <div className="paragraph">
          <h2>Summarizing your plan .....</h2>
        </div>
      </div>
    </div>
  );
}

export default PlanCreationSummary;
