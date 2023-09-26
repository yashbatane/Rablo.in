import React, { useState } from "react";
import "./TestPortalNavBar.css";

function TestPortalNavBar() {
  const [instruction, setInstruction] = useState(false);
  const Instructions = [
    " 1. Fill up your personal details carefully",
    " 2. Fill up your personal details carefully",
    " 3. Fill up your personal details carefully",
    " 4. Fill up your personal details carefully",
    " 5. Fill up your personal details carefully",
    " 6. Fill up your personal details carefully",
  ];
  return (
    <div className="allContainer">
      <div className="SelectNavbar">
        <h4> Test Name ; Topics,Date,TotalMarks</h4>
        <div
          name="sort"
          className="instruction"
          onClick={() => setInstruction(true)}
        >
          <i class="fa-regular fa-file-lines"></i>
          &nbsp; Instructions &nbsp;&nbsp;
          <i class="fa-solid fa-arrow-up-right-from-square"></i>{" "}
        </div>
      </div>
      {instruction ? (
        <div className="box">
          <div className="headerDiv">
            <div className="iconDiv">
              <div className="icon"></div>
              <div className="cross" onClick={() => setInstruction(false)}>
                <i class="fa-sharp fa-solid fa-rectangle-xmark fa-3x"></i>
              </div>
            </div>
            <div style={{marginBottom:"12px"}}>
              {" "}
              <h4 className="heading">Instructions</h4>
            </div>
          </div>
          <div className="points">
            {Instructions.map((data,ind) => {
              return (
                <div key={ind} className="pointsInnerDiv">
                  <h4 className="pointsToRemember">{data} </h4>
                </div>
              );
            })}
          </div>
          <div className="checkDiv">
            <input type="checkbox" style={{ cursor: "pointer" }} />
            <p>i have read all the  instructions</p>
          </div>
          {/* <div className="proctoringImages">
            <div className="images"></div>
            <div className="images"></div>
            <div className="images"></div>
          </div> */}
        </div>
      ) : null}
    </div>
  );
}

export default TestPortalNavBar;
