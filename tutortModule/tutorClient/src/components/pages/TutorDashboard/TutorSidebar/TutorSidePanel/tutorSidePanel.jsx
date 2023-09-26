import React from "react";
import "./tutorSidePanel.css";
import student from "./asserts/profile.png";
import Progress from "./progress/Progress";
import Salary from "./salary/Salary";
import Time from "./time/Time";
import {MdArrowBackIosNew} from 'react-icons/md'
import { AiOutlineUsergroupDelete } from "react-icons/ai";
import { TiTick } from "react-icons/ti";

const TutorSidePanel = ({ proposal, setProposal, setCurrentStudent }) => {
  return (
    <div className="sidePanel">
      <MdArrowBackIosNew
        className="sideArrow"
        onClick={() => setCurrentStudent(null)}
      />
      <div className="header">
        <p>ID 234156</p>
        <div className="profiles">
          <img src={student} alt="student" />
        </div>
        <h2>Zack Seth</h2>
        <p>
          XI <span>Class</span> CBSE <span>Boards</span>
        </p>
        <div className="progresses">
          <div className="row">
            <Progress
              para="Profile Match"
              per={80}
              fontSize=" 11px"
              lineHeight="18px"
              icon={<AiOutlineUsergroupDelete className="icons" />}
            />
            <Progress
              para="Success Rate"
              per={50}
              fontSize=" 11px"
              lineHeight="18px"
              icon={<TiTick className="icons" />}
            />
          </div>
        </div>
      </div>
      <div className="salary">
        <p>Your Salary</p>
        <div className="row">
          <Salary
            para="Proposed By Parents"
            rupees="2500"
            fontWeight="400"
            fontSize="11px"
            lineHeight="18px"
            color="#D04E62CC"
          />
          <Salary
            para="Avg. Market Value"
            rupees="4000"
            fontWeight="400"
            fontSize="11px"
            lineHeight="18px"
            color="#6764FFCC"
          />
        </div>
      </div>

      <div className="sub">
        <p>Subjects</p>
        <div className="subject">
          <div>Science</div>
          <div>Maths</div>
          <div>Hindi</div>
          <div>Science</div>
          <div>Maths</div>
          <div>Hindi</div>
        </div>
      </div>
      <div className="time">
        <h3>Timings</h3>
        <div className="row">
          <Time
            tag="Start"
            time="06:30"
            abc="pm"
            fontSize="12px"
            lineHeight="38px"
            fontWeight="600px"
          />
          <Time
            tag="to"
            time="09:30"
            abc="pm"
            fontSize="12px"
            lineHeight="38px"
            fontWeight="600px"
          />
        </div>
      </div>
      <button onClick={() => setProposal(!proposal)}>
        Create Your Proposal
      </button>
    </div>
  );
};

export default TutorSidePanel;
