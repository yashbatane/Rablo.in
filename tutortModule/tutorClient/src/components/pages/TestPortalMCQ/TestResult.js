import React from "react";
import ReactDom from "react-dom";
import "./TestResult.css";
function TestResult(props) {
  const { score, total, closePortal } = props;
  console.log(score, total);
  const submitHandler = () => {
    closePortal();
  };
  return ReactDom.createPortal(
    <>
      <div className="contentContainer">
        <div className="box">
          <div className="summaryHeader">
            <div className="logo"></div>
            <div className="headingDiv">
              <h4 className="heading">TEST SUMMARY</h4>
            </div>
          </div>

          <div className="summaryBody">
            <div className="attemptedQuestions">
              Questions Attempted : &nbsp;{score} / {total}
            </div>
            <div className="attemptedQuestions">
              Questions Unattempted : &nbsp;{total - score} / {total}
            </div>
          </div>
          <div className="buttonsContainer">
            {/* <button type="submit" className="prevButton">
            <i class="fa-solid fa-arrow-left fa-2x"></i>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <p> View Answers </p>
          </button> */}
            <button
              type="submit"
              className="submitButton"
              onClick={submitHandler}
            >
              <p> Submit Test </p>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <i class="fa-solid fa-circle-check fa-2x"></i>
            </button>
          </div>
          <div className="paragraph">
            <div style={{ margin: "auto" }}>
              <h2>Your Result will be displayed soon !!</h2>
            </div>
            <div className="images" style={{ flex: "" }}></div>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}

export default TestResult;
