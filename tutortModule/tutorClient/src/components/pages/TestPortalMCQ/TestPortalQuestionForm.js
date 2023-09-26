import { Questions } from "../Dashboard/Data/MCQTestQuesData";

import React, { useEffect, useState } from "react";
import MCQTestQuestions from "./MCQTestQuestions";
// import { useNavigate } from "react-router-dom";
import TestPortalNavBar from "./TestPortalNavBar";
import TestResult from "./TestResult";
import "./TestPortalQuestionForm.css";
// import profilepic from "../../../../img/profilepic.webp"
const TestPortalQuestionForm = () => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [resultPortal, setResultPortal] = useState(false);
  const [score, setScore] = useState(0);
  const [attempted, setAttempted] = useState(0);
  const increaseNumber = (correctAnswer) => {
    console.log(score);
    if (correctAnswer === "true") {
      // setScore((score) => score + 1);
    }
    if (correctAnswer === "true" || correctAnswer === "false") {
      Questions[questionNumber].status = "saved";
      if (questionNumber < Questions.length - 1) {
        Questions[questionNumber + 1].status = "current";
      }
      setAttempted((prev) => prev + 1);
    } else {
      Questions[questionNumber].status = "curUnattempted";
      if (questionNumber < Questions.length - 1) {
        Questions[questionNumber + 1].status = "current";
      }
    }
    if (questionNumber < Questions.length) {
      setQuestionNumber(questionNumber + 1);
    }
    console.log(Questions);
    if (questionNumber > Questions.length) {
    }
  };

  const displayPortal = (correctAnswer) => {
    if (correctAnswer === "true" || correctAnswer === "false") {
      Questions[questionNumber].status = "saved";
 
      setAttempted((prev) => prev + 1);
    }
    setResultPortal(true);
  };
  const finalQuestion = (correctAnswer) => {
    // if (questionNumber === Questions.length) {
    console.log(correctAnswer);

    if (correctAnswer === "true" || correctAnswer === "false") {
      Questions[questionNumber].status = "saved";
      // if (questionNumber < Questions.length - 1) {
      //   Questions[questionNumber + 1].status = "current";
      // }
      setAttempted((prev) => prev + 1);
    } else {
      Questions[questionNumber].status = "curUnattempted";
      // if (questionNumber < Questions.length - 1) {
      //   Questions[questionNumber + 1].status = "current";
      // }
    }
    console.log("result");
    // }
  };
  const closePortal = () => {
    setResultPortal(false);
  };
  const previousHandler = () => {
    console.log(questionNumber);
    if (questionNumber > 0) {
      Questions[questionNumber - 1].status = "current";
      Questions[questionNumber].status = "unattempted";
      setQuestionNumber((questionNumber) => questionNumber - 1);
    }
  };

  return (
    // <>
    //   {(!resultPortal && questionNumber < Questions.length) ?(
    //     <div className="container">
    //       <div className="navBarArea">
    //         <TestPortalNavBar />
    //       </div>
    //       <div className="TestArea">
    //         <MCQTestQuestions
    //           data={Questions[questionNumber]}
    //           number={questionNumber}
    //           increaseNumber={increaseNumber}
    //           previousHandler={previousHandler}
    //         />
    //       </div>
    //       <h2>{score}</h2>
    //     </div>
    //   ) : (
    //     <TestResult score={score} total={Questions.length} />
    //   )}
    // </>

    <>
      {/* {(!resultPortal && questionNumber < Questions.length) ?( */}
      <div className="container">
        <div className="navBarArea">
          <TestPortalNavBar />
        </div>
        <div className="TestArea">
          <MCQTestQuestions
            data={Questions[questionNumber]}
            number={questionNumber}
            size={Questions.length}
            increaseNumber={increaseNumber}
            previousHandler={previousHandler}
            displayPortal={displayPortal}
            finalQuestion={finalQuestion}
          />
        </div>
      </div>
      {/* ) : ( */}
      {resultPortal ? (
        <TestResult
          score={attempted}
          total={Questions.length}
          closePortal={closePortal}
        />
      ) : null}
      {/* )} */}
    </>
  );
};

export default TestPortalQuestionForm;
