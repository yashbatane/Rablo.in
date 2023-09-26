import React, { useState } from "react";
import "../TutorVarification.css";
import "./QualificationSection.scss";
import { TbSquareRoundedNumber1Filled } from "react-icons/tb";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { HiCalendar } from "react-icons/hi";


let workedAs = ["FreeLancer", "Professional Tutor", "Both", "None"];
let currentRole = [
  "Student",
  "Fresher",
  "Employed",
  "Retired",
  "Self-Employed",
];
let qualification = [
  "High School",
  "Intermediate",
  "Diploma",
  "Graduation",
  "Post-Graduation",
];
let experience = ["0-2 Years", "2-5 Years", "5+ Years"];
let expertise = [
  "All Subject",
  "Humanities",
  "Science",
  "Math's",
  "Programming",
  "Language",
  "Commerce",
];

const QualificationSection = () => {
  const [openDropdown1, setOpenDropdown1] = useState(false);
  const [openDropdown2, setOpenDropdown2] = useState(false);
  const [openDropdown3, setOpenDropdown3] = useState(false);
  const [openDropdown4, setOpenDropdown4] = useState(false);
  const [openDropdown5, setOpenDropdown5] = useState(false);

  return (
    <div className="form">
      <div className="two-section">
        <div className="group">
          <label>Ever Worked as</label>
          <button
            className="dropdown-btn"
            onClick={() => setOpenDropdown1(!openDropdown1)}
          >
            Select That Describes You Best
            <IoIosArrowDown className="dropdown-icon" />
          </button>

          {/* dropdonws items */}
          <div
            className={
              openDropdown1
                ? "dropdown dropdown-open"
                : "dropdown dropdown-close"
            }
          >
            {workedAs.map((curr, idx) => {
              return (
                <div className="dropdown-items" key={idx}>
                  <button className="dropdown-items-btn">
                    {String.fromCharCode(65 + idx)}
                  </button>
                  <div>{curr}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="group">
          <label>CurrentRole</label>
          <button
            className="dropdown-btn"
            onClick={() => setOpenDropdown2(!openDropdown2)}
          >
            Select Your Current Role
            <IoIosArrowDown className="dropdown-icon" />
          </button>
          <div
            className={
              openDropdown2
                ? "dropdown dropdown-open"
                : "dropdown dropdown-close"
            }
          >
            {currentRole.map((curr, idx) => {
              return (
                <div className="dropdown-items" key={idx}>
                  <button className="dropdown-items-btn">
                    {String.fromCharCode(65 + idx)}
                  </button>
                  <div>{curr}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="two-section">
        <div className="group">
          <label>Highest Qualification</label>
          <button
            className="dropdown-btn"
            onClick={() => setOpenDropdown3(!openDropdown3)}
          >
            Your Highest Qualification
            <IoIosArrowDown className="dropdown-icon" />
          </button>
          <div
            className={
              openDropdown3
                ? "dropdown dropdown-open"
                : "dropdown dropdown-close"
            }
          >
            {qualification.map((curr, idx) => {
              return (
                <div className="dropdown-items" key={idx}>
                  <button className="dropdown-items-btn">
                    {String.fromCharCode(65 + idx)}
                  </button>
                  <div>{curr}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="group">
          <label>Date Of Passing</label>
            <div className="date-input">
              <input type="text" placeholder="DD-MM-YYYY" />
              <HiCalendar className="calender-icon" />
            </div>
          </div>
       
      </div>
      
        
      {/* academics section */}
      <div className="academics-section">
      <label>Name Of School Or University</label>
         <p><input type="text" placeholder="Type Your Institute Name" /></p> 
        <label>Tell Us More About Your Academics                             </label>
        <p>
          Enter Your Course Or Subjects eg. B.Com , M.Tech Or Intermediate Form
        </p>
        <input
          type="text"
          placeholder="B.Tech With Computer Science"
          className="academics-input"
        />
      </div>

      {/* file upload section */}
      <div className="file-upload-section">
        <input type="file" id="upload-marksheet" />
        <div className="file-upload-wrapper">
          <label className="file-upload-btn" htmlFor="upload-marksheet">
            Upload Experience Proof
          </label>
          <div>Or</div>
          <div>Drop Here</div>
        </div>
      </div>

      {/* experience and experties section */}
      <div className="two-section">
        <div className="group">
          <label>Years Of Experience</label>
          <button
            className="dropdown-btn"
            onClick={() => setOpenDropdown4(!openDropdown4)}
          >
            Select Your Experience
            <IoIosArrowDown className="dropdown-icon" />
          </button>

          {/* dropdonws items */}
          <div
            className={
              openDropdown4
                ? "dropdown dropdown-open"
                : "dropdown dropdown-close"
            }
          >
            {experience.map((curr, idx) => {
              return (
                <div className="dropdown-items" key={idx}>
                  <button className="dropdown-items-btn">
                    {String.fromCharCode(65 + idx)}
                  </button>
                  <div>{curr}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="group">
          <label>Select Expertise Category</label>
          <button
            className="dropdown-btn"
            onClick={() => setOpenDropdown5(!openDropdown5)}
          >
            Select Your Experties
            <IoIosArrowDown className="dropdown-icon" />
          </button>
          <div
            className={
              openDropdown5
                ? "dropdown dropdown-open"
                : "dropdown dropdown-close"
            }
          >
            {expertise.map((curr, idx) => {
              return (
                <div className="dropdown-items" key={idx}>
                  <button className="dropdown-items-btn">
                    {String.fromCharCode(65 + idx)}
                  </button>
                  <div>{curr}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* question section */}
      <div>
        <label>Are You an Ex-Reputed School/College Or Coaching Teacher?</label>
        <div className="btns-wrapper">
          <div className="btn">
            <span>A</span> <div>Yes</div>
          </div>

          <div className="btn">
            <span>B</span> <div>No</div>
          </div>
        </div>
      </div>

      {/* certification recognition or award section */}
      <div className="certification-section">
        <label>Any Certification, Recognition Or Award</label>
        <p>
          Enter details about relevant certification or Recognition awarded by a
          recognized institute with publishing date to strengthen your profile.
        </p>

        <input type="text" placeholder="Title Of Certification" />
        <div className="two-section">
          <div className="group">
            <input type="text" placeholder="Type Your Institute Name" />
          </div>
          <div className="group">
            <div className="date-input">
              <input type="text" placeholder="DD-MM-YYYY" />
              <HiCalendar className="calender-icon" />
            </div>
          </div>
        </div>
      </div>

      {/* marksheet upload section */}
      <div className="file-upload-section">
        <input type="file" id="upload-marksheet" />
        <div className="file-upload-wrapper">
          <label className="file-upload-btn" htmlFor="upload-marksheet">
            Upload Final Marksheet
          </label>
          <div>Or</div>
          <div>Drop Here</div>
        </div>
      </div>
    </div>
  );
};

export default QualificationSection;
