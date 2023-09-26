import React, { useEffect, useRef, useState } from "react";
// import { Questions } from "../Dashboard/Data/MCQTestQuesData";
import { Questions} from "../Dashboard/Data/MCQTestQuesData";
import "./MCQTestQuestions.css";
function MCQTestQuestions({
  data,
  number,
  size,
  increaseNumber,
  previousHandler,
  displayPortal,
  finalQuestion,
}) {
  const Ref = useRef(null);
  const state = {
    button: 1,
  };
  let questionCounter = 0;
  const [selectOption, setSelectOption] = useState("");
  const [timer, setTimer] = useState("Timer");
  const onSelect = (e) => {
    console.log(e.target.value);
    setSelectOption(e.target.value ? e.target.value : "wrong");
  };

  function handleSubmit(e) {
    e.preventDefault();
    let correctAnswer = "";
    console.log(selectOption);
    if (state.button === 1) {
      previousHandler();
    }

    if (state.button === 2) {
      if (data.answer === selectOption) {
        correctAnswer = "true";
      } else {
        correctAnswer = "false";
      }
      if (selectOption !== "") {
        increaseNumber(correctAnswer);
      }
    }
    if (state.button === 3) {
      increaseNumber("");
    }

    clearTimer(getDeadTime());
    document.getElementById("question").reset();
  }

  const endTest = (e) => {
    e.preventDefault();
    let correctAnswer = "";
    if (data.answer === selectOption) {
      correctAnswer = "true";
    } else {
      correctAnswer = "false";
    }

    displayPortal(correctAnswer);
  };
  const endQuestion = () => {
    let correctAnswer = "";
    if (data.answer === selectOption) {
      correctAnswer = "true";
    } else {
      correctAnswer = "false";
    }
    // if (selectOption !== "") {
    //   increaseNumber(correctAnswer);
    // }
    finalQuestion(correctAnswer);
  };
  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    return {
      total,
      hours,
      minutes,
      seconds,
    };
  };

  const startTimer = (e) => {
    let { total, hours, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      setTimer(
        (hours > 9 ? hours : "0" + hours) +
          ":" +
          (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    }
  };

  const clearTimer = (e) => {
    // setTimer("timer started");
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };
  const getDeadTime = () => {
    let deadline = new Date();

    deadline.setSeconds(deadline.getSeconds() + data.time);
    return deadline;
  };

  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);
  useEffect(() => {
    clearTimer(getDeadTime());
  }, [data]);

  useEffect(() => {
    if (timer === "00:00:00") {
      increaseNumber(false);
      clearTimer(getDeadTime());
    }
  }, [timer]);
  // console.log(number);
  // console.log(size);
  return (
    <form className="fullContainer" onSubmit={handleSubmit} id="question">
      <div className="testWrapper">
        <div className="mainQuestionSection">
          <div className="questionCard">
            <h5 className="questionHeading">
              Ques {number + 1}. {data.question ? data.question : null}{" "}
            </h5>

            {/* <h3 className="timer">Time Left : {timer}</h3> */}
          </div>

          <select
            multiple
            className="selectTag"
            id="exampleFormControlSelect"
            onChange={onSelect}
          >

            {data.option.map((i, index) => {
              return (
                <option id={i} className="optionSelect" value={i}>
                  <span className="optionSpan">
                    {String.fromCharCode(65+index) + "."}
                  </span>
                  {i}
                </option>
              );
            })}
          </select>
          <div className="buttonsContainer">
          <div>
            <button
              className="prevButton"
              type="submit"
              onClick={() => {
                state.button = 1;
              }}
            >
              <i class="fa-solid fa-arrow-left"></i>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <p>Previous</p>
            </button>
            </div>
            <div>
              {!(number === size - 1) ? (
                <button
                  type="submit"
                  className="submitButton"
                  onClick={() => {
                    state.button = 2;
                  }}
                >
                  <p> Save And Next </p>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <i class="fa-solid fa-circle-check"></i>
                </button>
              ) : null}
            </div>
            <div className="endButton">
              {!(number === size - 1) ? (
                <button
                  className="prevButton"
                  type="submit"
                  onClick={() => {
                    state.button = 3;
                  }}
                >
                  <p>Skip</p>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <i class="fa-solid fa-arrow-right"></i>
                </button>
              ) : (
                <button className="prevButton" type="submit" onClick={endTest}>
                  <p>Save And End</p>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <i class="fa-solid fa-arrow-right"></i>
                </button>
              )}
            </div>
          </div>


        </div>

        <div className="asideContainer">
          {/* <div className="timerDiv">       */}
          <h3 className="timer">Time Left : {timer}</h3>
          {/* </div> */}

          <h2 className="quickHeading"> Quick Overview </h2>
          {/* <div className="videoContainer">Video</div> */}
          {/* <div className="attemptedDiv">{`Attempted: ${
          Questions.filter((i) => {
            if (i.status === "saved") {
              return true;
            }
            return false;
          }).length
        } out of ${Questions.length}`}</div> */}
          <div className="questionNumbers">
            {Questions.map((i) => {
              let styleNumbers = "";
              if (i.status === "current") {
                styleNumbers = "numberCurrent";
              }
              if (i.status === "saved") {
                styleNumbers = "numberGreen";
              }
              if (i.status === "curUnattempted") {
                styleNumbers = "numberUnattempted";
              }
              return (
                <div className={`number ${styleNumbers}`}>
                  {++questionCounter}
                </div>
              );
            })}
          </div>

          <div className="quickFooter">
            <div className="dotParaContent">
              <div className="dot"></div>
              <p> Saved </p>
            </div>
            <div className="dotParaContent">
              <div
                className="dot"
                style={{ backgroundColor: "white", border: "1px solid black" }}
              ></div>
              <p> Unattempted </p>
            </div>
            <div className="dotParaContent">
              <div
                className="dot"
                style={{
                  backgroundColor: "#803caf",
                  border: "1px solid #803caf",
                }}
              ></div>
              <p> Current </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default MCQTestQuestions;
