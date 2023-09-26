import React from "react";
import "./CreatePlanContent.css";
function CreatePlanContent() {
  return (
    <div className="createPlanContentMainContainer">
      <div className="weekendClassesContainer">
        <div className="numberclassHeading">
          <i class="fa-sharp fa-solid fa-file fa-3x"></i>
          <h2>Number Of Classes per Week</h2>
        </div>
        <div className="cardContainer">
          <div className="alternateCard">
            <h2>Rablo's Choice</h2>
            <h1>Alternate</h1>
            <h3>
              Tutor has to conduct <br />
              Two Classes/week for <br />
              atleast 6 hours.
            </h3>
            <div className="buttonContainer">
              <button className="TTSButton">TTS</button>
              <button className="MWFButton">MWF</button>
            </div>
          </div>
          <div className="eachCard">
            <h1 className="weekendClasses">Weekend Classes</h1>
            <h3>
              Tutor has to conduct <br />
              Two Classes/week for <br />
              atleast 6 hours.
            </h3>
            <div className="buttonContainer">
              <button className="TTSButton">Sat + Sun</button>
              <button className="MWFButton">Fri + Sat</button>
            </div>
          </div>
          <div className="eachCard">
            <h1 className="weekendClasses">Weekend Classes</h1>
            <h3>
              Tutor has to conduct <br />
              Two Classes/week for <br />
              atleast 6 hours.
            </h3>
            <div className="buttonContainer">
              <button className="TTSButton">Sat + Sun</button>
              <button className="MWFButton">Fri + Sat</button>
            </div>
          </div>
          <div className="eachCard">
            <h1 className="weekendClasses">Weekend Classes</h1>
            <h3>
              Tutor has to conduct <br />
              Two Classes/week for <br />
              atleast 6 hours.
            </h3>
            <div className="buttonContainer">
              <button className="TTSButton">Sat + Sun</button>
              <button className="MWFButton">Fri + Sat</button>
            </div>
          </div>
        </div>
      </div>

      <div className="finalizeWeekDaysContainer">
        <div className="finalizeDayHeader">
        <i class="fa-regular fa-calendar-days fa-3x"></i>
          <h2>Finalize the week Days</h2>
        </div>
        <div className="weekNameContainer">
          <div className="weekNameBoxAlternate">Monday</div>
          <div className="weekNameBox">Tuesday</div>
          <div className="weekNameBoxAlternate">Wednesday</div>
          <div className="weekNameBox">Thursday</div>
          <div className="weekNameBoxAlternate">Friday</div>
          <div className="weekNameBox">Saturday</div>
          <div className="weekNameBoxAlternate">Sunday</div>
        </div>
      </div>

      <div className="fillTime">
        <div className="fillTimeHeader">


        <i class="fa-solid fa-user-clock fa-3x"></i>
          <h2>Fill your Preferred Time to Start Classes</h2>
        </div>

        <div className="fillTimeSelection">
          <select name="selectClassHours" id="">
            <option value="default">Select Your Class Hours</option>
            <option value="thirty">30 minutes</option>
            <option value="one">1 Hour</option>
            <option value="onePointFive">1.5 Hours</option>
          </select>
        </div>

        <div className="fillTimeHeaderSecond">
          <i></i>
          <h2>Fill your Preferred Time to Start Classes</h2>
        </div>

        <div className="fillTimeInput">
          <input type="text" placeholder="Preference 1" />
          <input type="text" value="04:30 PM" />
          <input type="text" placeholder="Preference 3" />
        </div>
      </div>

      <div className="payExpectPerDay">
        <div className="payExpectHeader">
        <i class="fa-solid fa-sack-dollar fa-3x"></i>
        
           <h2>What pay do you expect per day ??</h2>
        </div>

        <div className="payExpectContainer">
          <div><h2>0 200 350 500 650 800 1000 1250 1550 1900 2400</h2>
          <div className="payExpectBar">
            <i>💷</i> 
            <i>💷</i> 
           
          </div>
          <div className="startedIntialSalaryBox">
            24k teachers started their <br /> initial salary from here
          </div>
          </div>
          <div className="commentSection">
          {/* <i>💭</i> */}
          <div className="commentIcon"></div>
           <h3>Dear Tutor, major
          professions  <br /> with almost same  profile are  <br /> opting the wages in the range   <br />
          of 500 to 800 Rupees. <br /> We also suggest you the  <br /> same :)</h3>
   <img src="" alt=""  className="tutorImage"/>
        </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePlanContent;
