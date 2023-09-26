import React from "react";
import { BoxType1 } from "../../../../GlobalComponents/miniComponents/BoxType1/BoxType1";
import "./BecomeOurTutotBB1.css";

export const BoxesType1 = () => {
  return (
    <div
      className="boxesType1"
      style={{
        "margin-top": "0px",
        "margin-bottom": "50px",
      }}
    >
      <div className="BecOurTutBBoxWraper">
        <div className="boxes">
          <BoxType1
            Heading={"TRAINING & CERTIFICATION"}
            icon={"fa-solid fa-piggy-bank"}
            para={
              "Upskill your teaching with our Training & Certification under Our Master Educator."
            }
            id={""}
          />
        </div>
        <div className="boxes">
          <BoxType1
            Heading={"REACH STUDENTS ACROSS THE NATION"}
            icon={"fa-solid fa-graduation-cap"}
            para={
              "We boost your reach to the students nationwide to better earning opportunities."
            }
            id={"two"}
          />
        </div>
        <div className="boxes">
          <BoxType1
            Heading={"FEE PROTECTION & AUTO-CREDIT"}
            icon={"fa-solid fa-book-open"}
            para={
              "We credit your Salary in the 1st week of the month without any delay or risk."
            }
            id={""}
          />
        </div>
        <div className="boxes">
          <BoxType1
            Heading={"YOUR COMMUTE IS ON US."}
            icon={"fa-solid fa-hourglass"}
            para={
              "Our Offline students will be assigned within 3 km, We pay for your commute beyond that limit."
            }
            id={"two"}
          />
        </div>
        <div className="boxes">
          <BoxType1
            Heading={"COMPLETE CONTENT & EXAM ASSISTANCE"}
            icon={"fa-solid fa-book-open"}
            para={
              "All the content & Test Series used for any of our classes is either provided or verified by the company. We"
            }
            id={""}
          />
        </div>
        <div className="boxes">
          <BoxType1
            Heading={"GUIDED PROGRAMS"}
            icon={"fa-solid fa-hourglass"}
            para={
              "All classes are conducted under the curriculums designed & supervised by Our Master Educator."
            }
            id={"two"}
          />
        </div>
      </div>
    </div>
  );
};
