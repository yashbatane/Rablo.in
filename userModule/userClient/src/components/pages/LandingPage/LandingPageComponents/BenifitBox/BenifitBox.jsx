import { BoxType1 } from "../../../../GlobalComponents/miniComponents/BoxType1/BoxType1";
import React from "react";
import "./Benefitbox.css";

export const BenifitBox = () => {
  return (
    <>
      <div className="benifitboxcontainer" data-aos="fade-up">
        <div className="benifitboxinfo" data-aos="fade-up">
          <div className="benefitboxinfocontent">
            <i className="benifitboxinfoicon fa-solid fa-building-columns"></i>
            <h1 className="heading1">Join Our Tuition-Verse!</h1>
            <p>
              Regardless of the mode, all of our classes are connected under one
              network, creating a dynamic virtual Competitive ecosystem where
              the students can see their level of preparation without leaving
              the room.
            </p>
            <button>LEARN MORE</button>
          </div>
        </div>
        <div className="boxesType1">
          <div className="boxesTypeWrapper">
            <div className="boxesType1Inner">
              {" "}
              <BoxType1
                Heading={"TRAINED & CERTIFIED SUPER MENTOR"}
                icon={"fa-solid fa-piggy-bank"}
                para={
                  "All the Super mentors are Trained and Certified by the Segment’s Master Mentors."
                }
                id={""}
                fade={"fade-up"}
              />
            </div>
            <div className="boxesType1Inner" id="bbb2">
              {" "}
              <BoxType1
                Heading={"TWO TEACHER BENEFITS"}
                icon={"fa-solid fa-piggy-bank"}
                para={
                  "It means classes are conducted by our Trained and Certified Super Mentor but assisted, regulated and designed by the Master Mentors. "
                }
                id={""}
                fade={"fade-up"}
              />
            </div>
            <div className="boxesType1Inner">
              {" "}
              <BoxType1
                Heading={"ROUND THE CLOCK AVAILABILITY"}
                icon={"fa-solid fa-piggy-bank"}
                para={
                  "Our Online Classes are Available 24/7 for Explaining you any topic or Clearing your Doubts"
                }
                id={""}
                fade={"fade-up"}
              />
            </div>
            <div className="boxesType1Inner">
              <BoxType1
                Heading={"NATIONAL SCHOLARSHIP PREPS"}
                icon={"fa-solid fa-piggy-bank"}
                para={
                  "We prepare our children to compete in scholarship or Olympiad Tests for their view over the Competitive Learning"
                }
                id={""}
                fade={"fade-up"}
              />
            </div>

            <div className="boxesType1Inner" id="bbb5">
              <BoxType1
                Heading={"MODE SWITCH ANYTIME"}
                icon={"fa-solid fa-piggy-bank"}
                para={
                  "Students or Parents can switch the mode of class from online to offline or vice-versa, anytime with the Same Mentor. No Extra charge will be asked."
                }
                id={""}
                fade={"fade-up"}
              />
            </div>
            <div className="boxesType1Inner">
              <BoxType1
                Heading={"SMART PRACTICE & EXAM PORTAL"}
                icon={"fa-solid fa-piggy-bank"}
                para={
                  "Our Program is backed by a Smart portal for content, practice & Examination Support. It provides live updates and progresses analysis & reporting."
                }
                id={""}
                fade={"fade-up"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
