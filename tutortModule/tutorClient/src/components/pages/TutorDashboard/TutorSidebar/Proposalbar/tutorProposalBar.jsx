import React from "react";
import Time from "../TutorSidePanel/time/Time"
import {
  IoIosArrowForward,
  IoMdArrowDropdown,
  IoMdArrowDropup,
} from "react-icons/io";
import {ImCross} from "react-icons/im"
import "./tutorProposalBar.css";
const TutorProposalBar = ({ proposal, setProposal }) => {
  return (
    <div className="tutorProposalBar">
      <h1>Create a Proposal</h1>
      <ImCross className="cross" onClick={()=>setProposal(!proposal)}/>
      <p>Try to offer the best for your future Student </p>
      <div className="row">
        <Time
          tag="Starting Time"
          time="09:30"
          abc="am"
          up={<IoMdArrowDropup className="icon" />}
          down={<IoMdArrowDropdown className="icon" />}
        />
        <Time
          tag="Duration"
          time="01:30"
          abc="hr"
          up={<IoMdArrowDropup className="icon" />}
          down={<IoMdArrowDropdown className="icon" />}
        />
      </div>
      <div className="schedule">
        <p>Weekly Schedule</p>
        <div className="days">
          <p>Mon</p>
          <p>Tue</p> <p>Wed</p> <p>Thu</p>
          <IoIosArrowForward className="rightArrow" />
        </div>
      </div>
      <div className="free-classes">
        {" "}
        <p>Free Trial Can be Started on</p>
        <p>Provide Min. 3 Next Available Demo Dates </p>
        <div className="classes">
          <div className="days">
            <p>M</p>
            <p>T</p> <p>W</p> <p>Th</p>
            <p>F</p>
            <p>S</p>
            <p>M</p>
            <p>T</p>
            <p>W</p>
          </div>
          <div className="days">
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>1</p>
            <IoIosArrowForward className="rightArrow" />
          </div>
        </div>
      </div>
      <div className="subjects">
        <p>Select the Subject</p>
        <p>Choose a subject from all the topics students need guidance in.</p>
        <select name="" id="">
          <option value="">Select Subjects You can Teach</option>
        </select>
      </div>
      <div className="salary">
        <p>Confirm Your Salary</p>
        <p>Parents are Proposing you to pay</p>
        <h1>
          ₹2500 <span> per month</span>
        </h1>
        <p>Are you Satisfied with the pay?</p>
        <div>
          <button>Yes</button>
          <button>No</button>
        </div>
      </div>
    </div>
  );
};

export default TutorProposalBar;
