import React from "react";
import "./Founders.css";
import founder1 from "./images/founder1.png";
import founder2 from "./images/founder2.png";
export const Founders = () => {
  return (
    <>
      <div className="Founderscontainer">
        <div className="Foundershead">
          <div className="heading1">THEY LAID OUR FOUNDATIONS</div>
          <div className="heading2">Meet Our Founders</div>
        </div>
        <div className="Foundersbody">
          <div className="Founderscard">
            <div className="card">
              <img className="imagecontainer" src={founder1} width="100%" height="250px">

              </img>

              <div className="card-body">
                <h5 className="card-title">SORABH JAIN</h5>
                <h6 className="card-sub-title">E, PGDHR, SHRM-CP</h6>
                <p className="card-text">
                  13+ Year Experience with Business Operations, People
                  Management, Leadership & project implementation.
                </p>
                <h6 className="card-sub-title">Director (Operations)</h6>
              </div>
            </div>
          </div>
          <div className="Founderscard">
            <div className="card">
            <img className="imagecontainer" src={founder2} width="100%" height="250px"></img>

              <div className="card-body">
                <h5 className="card-title">JAI GUPTA</h5>
                <h6 className="card-sub-title">B.COM HONS (FINANCE)</h6>
                <p className="card-text">
                7+ years exp. with private tutoring & Ed-tech. and Entrepreneurship Certification from Wadhwani Foundation and AIC-BIMTECH
                </p>
                <h6 className="card-sub-title">Director (Marketing & Tech.)</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
