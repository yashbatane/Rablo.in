//Build by Shivam Agarwal
import backgroundImage from "./AboutUsbg.png";
import React from "react";
import "./AboutUsLanding.css";
import rocket from "./rocket.gif"
import { Link } from "react-router-dom";
// import Lottie from "react-lottie";
// import animationData from "../../../../../Lotties/rocket";
const AboutUsLanding = () => {
  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: animationData,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice",
  //   },
  // };
  return (
    <>
      <section
        className="AboutUsLandingContainer"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/*<img src={rocket} />*/}
        <div className="AboutUsLandingHeading">
          <span className="AboutUsLandingtitle">
            <span className="AboutUsLandingtitle1">
              A Ready To Teach
              <span className="AboutUsLandingtitle2"> Platform</span>
            </span>
          </span>
          <span className="AboutUsLandingSubtext">
            We help you to <strong>Connect</strong> your students,
            <strong>Conduct</strong> your classes, and establish{" "}
            <strong>credibility</strong> in the market.
          </span>
          <hr />
          <div className="AboutUsReadMore">
            <Link to="/join" className="AboutUsPreRegisterButton">Pre-Register Now</Link>
            <Link to="/support" className="AboutUsKnowMoreButton">Know More</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsLanding;
