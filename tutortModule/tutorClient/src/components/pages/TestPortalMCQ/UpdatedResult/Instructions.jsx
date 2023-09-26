import React, { useState } from "react";
import "./Instructions.css";

function Instructions() {
  return (
    <div className="InstructionsMainContainer">
      <div className="box">
        <div className="instructionHeader">
          <div className="icon"></div>
          <h4 className="heading">INSTRUCTIONS</h4>
          <div className="cross">
            Drop Test
            <i class="fa-solid fa-arrow-down"></i>
          </div>
        </div>
        <div className="points">
          <div>
            {" "}
            <h4 className="pointsToRemember">
              1. Fill up your personal details carefully
            </h4>
          </div>
          <div>
            {" "}
            <h4 className="pointsToRemember">
              2. Fill up your personal details carefully fill up your personal
            </h4>
          </div>
          <div>
            {" "}
            <h4 className="pointsToRemember">
              3. Fill up your personal details carefully fill up your personal
              details carefully
            </h4>
          </div>
          <div>
            <h4 className="pointsToRemember">
              4. Fill up your personal details carefully
            </h4>
          </div>
          <div>
            <h4 className="pointsToRemember">
              5. Fill up your personal details carefully
            </h4>
          </div>
          <div>
            {" "}
            <h4 className="pointsToRemember">
              6. Fill up your personal details carefully
            </h4>
          </div>
          <div>
            {" "}
            <h4 className="pointsToRemember">
              7. Fill up your personal details carefully
            </h4>
          </div>
          <div>
          <input type="checkbox" style={{ cursor: "pointer" }} />{" "}
          <span>
            {" "}
            I have read all the instructions and is now ready to appear for
            test.
          </span>
          </div>
        </div>

        <div className="proctoringImages">
          <div className="buttonsContainer">
            <button type="submit" className="submitButton">
              <i class="fa-solid fa-arrow-left fa-2x"></i>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <p> View Answer </p>
            </button>
            {/* <div className="paragraph">
                            <div className="images"></div>
                        </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Instructions;
