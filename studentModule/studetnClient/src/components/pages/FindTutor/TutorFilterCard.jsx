import React from "react";
import "./TutorFilterCard.css";
import TutorCardPage from "./TutorCardPage";
function TutorFilterCard() {
  return (
    <div className="fullContainer">
      <div className="sidebar">
        <h1>Filter</h1>
        <h3>Mode</h3>
        <select name="mode" className="mode">
          <option value="Online">Online</option>
          <option value="Offline">Offline</option>
        </select>
        <h3>Subject</h3>
        <div className="subjectDetailsCard">
          <ul>
            <i class="fa-solid fa-angle-right" />
            Commerce
          </ul>

          <ul>
            <i class="fa-solid fa-angle-right" />
            Programming <br />
            <div className="programmingCheckBox">
            <input type="checkbox" name="java" id="java" />
            <label for="java"> Java</label>
            <br></br>
            <input type="checkbox" name="java" id="java" />
            <label for="java"> C++</label>
            <br></br>
            <input type="checkbox" name="java" id="java" />
            <label for="java"> Python</label>
            <br></br>
            <input type="checkbox" name="java" id="java" />
            <label for="java"> R</label>
            <br></br>
            <input type="checkbox" name="java" id="java" />
            <label for="java"> SQL</label>
            <br></br>
            </div>
          </ul>

          <ul>
            <i class="fa-solid fa-angle-right" />
            Science
          </ul>

          <ul>
            <i class="fa-solid fa-angle-right" />
            Mathematics
          </ul>

          <ul>
            <i class="fa-solid fa-angle-right" />
            Humanities
          </ul>

          <ul>
            <i class="fa-solid fa-angle-right" />
            Co Curricular
          </ul>

          <ul>
            <i class="fa-solid fa-angle-right" />
            Language
          </ul>
        </div>
        <h3>TimeSlot</h3>
        <select name="time" className="time">
          <option value="fourfive">05:00 - 06:00 PM</option>
          <option value="fourfive">05:00 - 06:00 PM</option>
          <option value="fourfive">05:00 - 06:00 PM</option>
          <option value="fourfive">05:00 - 06:00 PM</option>
          <option value="fourfive">05:00 - 06:00 PM</option>
          <option value="fourfive">05:00 - 06:00 PM</option>
        </select>
        <h3>Class Duration</h3>
        <div className="durationHours">
          <h4 className="hour">1 hours</h4>
          <h4 className="hour">1 hours</h4>
          <h4 className="hour">1 hours</h4>
        </div>
        <h3>Ratings</h3>
        <input type="range" name="rating" id="rating" />
        <h3>Class Strength</h3>
        <select name="strength" className="strength">
          <option value="rablo">Teachers Choice</option>
          <option value="feature">Less than 10 +Rs.2000</option>
          <option value="feature">Less than 10 +Rs.2000</option>
          <option value="feature">Less than 10 +Rs.2000</option>
          <option value="feature">Less than 10 +Rs.2000</option>
        </select> 
        <h3>Teaching Method</h3>
        <select name="method" className="method">
          <option value="Hindi">One to One</option>
          <option value="English">One to Many</option>
          <option value="French">Many to One</option>
          <option value="Others">Many to Many</option>
        </select>
      </div>
      <div className="content">
        <TutorCardPage />
      </div>
    </div>
  );
}

export default TutorFilterCard;
