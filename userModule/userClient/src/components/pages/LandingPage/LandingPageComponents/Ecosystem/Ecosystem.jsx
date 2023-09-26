import React from "react";
import "./Ecosystems.css";
const Ecosystem = () => {
  return (
    // <>
    <div className="ecosystem">
      <i className="font-icon-svg e-fas-university"></i>
      <div className="container">
        <div className="containerHeading">
          {" "}
          <h2>#1 Online Tutorial Site</h2>
        </div>
        <div>
          {" "}
          <p>
            Incubated under <br />
            <strong> Wadhwani Foundation </strong> &{" "}
            <strong>
              {" "}
              AIC-BIMTECH <br />{" "}
            </strong>
            Recognized by <br />
            #StartupIndia & MSME India <br />
          </p>
        </div>
        <div className="learnButton">
          {" "}
          <button className="learn">Learn More</button>
        </div>
        {/* <div className="waveBottom">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
       
            fill="#9d00ff"
            fill-opacity="1"
            d="M0,288L60,266.7C120,245,240,203,360,165.3C480,128,600,96,720,74.7C840,53,960,43,1080,53.3C1200,64,1320,96,1380,112L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </div> */}
      </div>
      <div className="waveBottom">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#9d00ff"
            fill-opacity="1"
            d="M0,288L60,266.7C120,245,240,203,360,165.3C480,128,600,96,720,74.7C840,53,960,43,1080,53.3C1200,64,1320,96,1380,112L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </div>
      {/* <div className="waveBottom">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
       
            fill="#9d00ff"
            fill-opacity="1"
            d="M0,288L60,266.7C120,245,240,203,360,165.3C480,128,600,96,720,74.7C840,53,960,43,1080,53.3C1200,64,1320,96,1380,112L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </div> */}

      {/* <div>
        {" "}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#0099ff"
            fill-opacity="1"
            d="M0,224L48,192C96,160,192,96,288,74.7C384,53,480,75,576,106.7C672,139,768,181,864,176C960,171,1056,117,1152,106.7C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>{" "}
      </div> */}
    </div>
  );
};

export default Ecosystem;
