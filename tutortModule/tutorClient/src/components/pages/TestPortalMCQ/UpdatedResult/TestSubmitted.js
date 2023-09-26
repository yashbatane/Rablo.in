import React from "react";
import "./TestSubmitted.css";

function TestSubmitted(props) {
  const { score, total } = props;
  console.log(score, total);
  return (
    <div className="testSubmittedMainContainer">
      <div className="submittedBox">
        <div className="submittedHeader">
          <div className="submittedLogoDiv">
            <div className="logo"></div>

            <div className="crossDiv">
              <i class="fa-sharp fa-solid fa-circle-xmark fa-3x"></i>
            </div>
          </div>
          <div>
            {" "}
            <h4 className="heading">TEST SUBMITTED!</h4>
          </div>
        </div>

        <div className="submittedBody">
          <i class="fa-solid fa-check fa-6x"></i>

          <h2>Your Result will be displayed soon !!</h2>
        </div>
        <div className="submittedButtonsContainer">
          <button type="submit" className="prevButton">
            <i class="fa-solid fa-arrow-left fa-2x"></i>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <p> Dashboard </p>
          </button>
          <button type="submit" className="submitButton">
            <p> Review Test</p>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <i class="fa-solid fa-circle-check fa-2x"></i>
          </button>
        </div>
        <div className="submittedParagraph">
          <div className="images"></div>
        </div>
      </div>
    </div>
  );
}

export default TestSubmitted;
