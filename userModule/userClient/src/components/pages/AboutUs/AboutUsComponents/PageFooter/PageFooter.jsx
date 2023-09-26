import React from 'react'
import "./PageFooterre.css";
import waveimg from "../../../../pages/LandingPage/LandingPageComponents/WaveHeader/wave.png";

const PageFooter = () => {
  return (
    <div className="aboutpagefooter">
      <img src={waveimg} />
      <div className="aboutpagefootercontent">
        <h1 className="aboutpagfooterheading">Get Started Free</h1>
        <div className="catalogcontainer">
          <p className="desc">
            Rablo.in is a learning platform that provides online personalized
            tuitions all over Lucknow. We bridge the gap between students and
            tutors by helping them to find each other.
          </p>
          <hr></hr>
          <div className="data">
            <div className="category" >
              <div className="numbers">
                <h1 style={{ color: "white" }}> 1,214+</h1>
              </div>
              <div
                className="text"
                style={{
                  color: "yellow",
                  "margin-top": "10px",
                  "font-weight": "700",
                }}
              >
                TEACHERS
              </div>
            </div>
            <div className="category">
              <div className="numbers">
                <h1 style={{ color: "white" }}> 1,214+</h1>
              </div>
              <div
                className="text"
                style={{ color: "yellow", "margin-top": "10px" }}
              >
                STUDENTS
              </div>
            </div>
            <div className="category">
              <div className="numbers">
                <h1 style={{ color: "white", "margin-top": "10px" }}>
                  {" "}
                  1,214+
                </h1>
              </div>
              <div
                className="text"
                style={{ color: "yellow", "margin-top": "10px" }}
              >
                STUDY MATERIAL
              </div>
            </div>
          </div>
          
        </div>
        <button className='btn1'>Apply Today</button>
      </div>
    </div>
  );
};

export default PageFooter;
