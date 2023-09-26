import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import profile_vector from "./../resource/profile1.png";
import "./proposalSidebar.css";
import backImg from "./../resource/backarrow.png";
import starImg from "./../resource/star.png"
import circleImg from "./../resource/circle.png"

const ProposalSidebar = ({ student, setCurrentStudent1 }) => {
  const updateCurrStd = () => {
    setCurrentStudent1(null);
  };

  return (
    <div className="mainSidebar2">
      <div className="upperChild">
        <div className="left-button2">
          <button className="backButton" onClick={updateCurrStd}>
            <img src={backImg} alt="" />
          </button>
        </div>
        <div className="profileImageContainer2">
          <img className="profileImg2" src={profile_vector} alt="" />
          <img className="sideContainer1StarImg" src={starImg} alt="star" />
          <img
            src={circleImg}
            alt="circle"
            className="sideContainer1CircleImg"
          />
          {/* <h2>{currentStudent.name}</h2> */}
          <h2>{student.name}</h2>kjhskahdkhkkhA
          <p>
            {student.class}
            {/* Class 10 */}
          </p>
        </div>
        <div className="sidebarStatus">
          <p>STATUS : </p>
          <button> {student.status}</button>
        </div>
      </div>
      <div className="lowerChild">
        <div className="sidebarSubjects">
          <p className="subs">Subjects</p>
          {student.subject.map((sub) => (
            <div key={sub} className="subject">
              {sub}
            </div>
          ))}
        </div>
        <div className="classDesc">
          <div className="classDuration">
            <p>
              Class Duration : <span>1.5 hrs</span>
            </p>
          </div>
          <div className="availableTiming">
            <p>
              Available Timing : <span>2:30 pm</span>
            </p>
          </div>

          <div className="classPerWeek">
            <p>No of Classes per Week : </p>
            <div className="classNumber">
              <p>2</p>
            </div>
          </div>
          <div className="payPerClass">
            <p>
              Pay per Class : <span>500 rs</span>
            </p>
          </div>
          <div className="commencement">
            <p>
              Commencement of classes: <span>1st April</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProposalSidebar;
