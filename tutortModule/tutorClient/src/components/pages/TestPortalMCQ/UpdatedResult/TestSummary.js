import React from "react";
import "./TestSummary.css";
// import logo from ".../img/"

function TestSummary(props) {
  const { score, total } = props;
  console.log(score, total);
  return (
    <div className="testSummaryMainContainer" style={{ height: "100vh" }}>
      <div className="box">
        <div className="summaryHeader">
          <div className="logoDiv">
            <div className="logo"></div>
            <div className="crossDiv">
            <i class="fa-sharp fa-solid fa-circle-xmark fa-3x"></i>
          </div>
          </div>

          {/* <div className="headingDiv"></div> */}
          <h4 className="heading">TEST SUMMARY</h4>

        </div>

        <div className="summaryBody">
          <div className="attemptedQuestionsGreen">
            Questions <br />
            Attempted <br /> &nbsp;{score} / {total}
          </div>
          <div className="attemptedQuestions">
            Questions <br /> Unattempted <br /> &nbsp;{total - score} / {total}
          </div>
        </div>
        <div className="buttonsContainer">
          {/* <div className="buttonDiv"> */}
            {" "}
            <button type="submit" className="prevButton">
              <i class="fa-solid fa-arrow-left fa-2x"></i>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <p> View Answer </p>
            </button>
          {/* </div> */}
          {/* <div className="buttonDiv"> */}
            {" "}
            <button type="submit" className="submitButton">
              <p> Submit Test</p>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <i class="fa-solid fa-circle-check fa-2x"></i>
            </button>
          {/* </div> */}
        </div>
        <div className="paragraph">
          <h2>Your Result will be displayed soon !!</h2>
          <div className="images"></div>
        </div>
      </div>
    </div>
  );
}

export default TestSummary;
