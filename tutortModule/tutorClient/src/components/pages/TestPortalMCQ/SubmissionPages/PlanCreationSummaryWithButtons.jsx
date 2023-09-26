import React from "react";
import "./PlanCreationSummaryWithButtons.css";
function PlanCreationSummaryWithButtons() {
  return (
    <div className="planCreationSummaryWithButtonsMainContainer">
      <div className="box">
        <div className="header">
          <div className="logo"></div>
          <h4 className="heading">Plan Creation Summary !</h4>
        </div>

        <div className="content">
          <div className="modeOnline">
            <div className="label">
              <i class="fa-sharp fa-solid fa-laptop"></i> <h3> &nbsp;Mode :</h3>
            </div>
            <div className="attemptedQuestions">Online</div>
          </div>
          <div className="rangeEight">
            <div className="label">
            <i class="fa-solid fa-sack-dollar"></i><h3> &nbsp;Range :</h3>
            </div>
            <div className="attemptedQuestions">Rs 800 /-</div>
          </div>
          <div className="slotTime">
            <div className="label">
            <i class="fa-solid fa-user-clock"></i> <h3> &nbsp;Slot :</h3>
            </div>
            <div className="attemptedQuestions">4:00 PM - 5:30 PM</div>
          </div>
          <div className="formatBatch">
            <div className="label">
            <i class="fa-sharp fa-solid fa-file"></i><h3> &nbsp;Format :</h3>
            </div>
            <div className="attemptedQuestions">Miny Batch</div>
          </div>
          <div className="days">
            <div className="label">
            <i class="fa-solid fa-calendar-days"></i><h3> &nbsp;Days :</h3>
            </div>
            <div className="attemptedQuestions">Monday, Wednesday, Friday</div>
          </div>
        </div>
        <div className="buttonsContainer">
          <button type="submit" className="prevButton">
            <i class="fa-solid fa-arrow-left fa-2x"></i>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <p> Edit Choices </p>
          </button>
          <button type="submit" className="submitButton">
            <p> Create Plan</p>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <i class="fa-solid fa-circle-check fa-2x"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlanCreationSummaryWithButtons;
