import React from 'react'
import { BoxType1 } from "../../../../GlobalComponents/miniComponents/BoxType1/BoxType1";
import "./HowweWork12.css";

const HowWeWork = () => {
  return (
    <div className="howweworkcontainer">
      <div className="howweworktitle">How we work?
      </div>
      <hr className="horizontal-line" />
      <div className="boxesType1" data-aos="fade-left">
        <BoxType1
          Heading={"TELL US YOUR REQUIREMENTS"}
          icon={"fa-solid fa-piggy-bank"}
          id={"first"}
          para={
            "We prepare our children to compete in scholarship or Olympiad Tests for their view over the Competitive Learning"
          }
        />
        <BoxType1
          Heading={"FREE TRIAL WITH EXPERT"}
          icon={"fa-solid fa-book-open"}
          id={""}
          para={
            "We arrange a free demo class session for three days by our professional home tutors. "
          }
        />
        <BoxType1
          Heading={"CONTINUE WHEN SATISFIEDS"}
          icon={"fa-solid fa-hourglass"}
          id={""}
          para={
            "After the trial class, evaluate the teacher and if you are satisfied with their teaching ability confirm them."
          }
        />
        <BoxType1
          Heading={"100% MANAGEMENT BY US"}
          icon={"fa-solid fa-graduation-cap"}
          id={""}
          para={
            "We will manage and support all the aspects of the Sessions held at your doorstep."
          }
        />
      </div>
    </div>
  );
};

export default HowWeWork;
