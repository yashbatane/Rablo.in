import React from "react";
import "./CreatePlanFirst.css";
function CreatePlanFirst() {
  return (
    <div className="createPlanFirstMainContainer">
      <div className="box">
        <div className="header">
          <div className="logo"></div>
          <h4 className="heading">Create Plan !!</h4>
        </div>

        <div className="content">
          <div className="imageText">
            <i class="fa-solid fa-sack-dollar fa-2x"></i>{" "}
            <div className="attemptedQuestions">Total Coins : 120</div>
          </div>

          <div className="almostThere">
            To create your plan you, you have to spend 100 coins. <br />
            If you run out of coins you can purchase it !!
          </div>
          <div className="buttonsContainer">
            <button type="submit" className="prevButton">
              <p> Purchase New Coins </p>
            </button>
            <button type="submit" className="submitButton">
              <p> Spend Earn Coins</p>
            </button>
          </div>
        </div>
        <div className="bottomCornerImage">
          <img src="" alt="" />
        </div>
        <div className="paragraph">
          <button type="submit" className="finalizeButton">
            <p> Finalize Your Plan </p>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <i class="fa-solid fa-circle-check fa-2x"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreatePlanFirst;
