// Developed by Shivam Agarwal

import React from "react";
import "./Aboutuscards.css";
export const Aboutuscards = () => {
  return (
    <>
      <div className="aboutuscardscontainer">
        <div className="aboutuscard">
          {" "}
          <div class="card">
            <img className="card-img-top" src="..." alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">READY TO TEACH</h5>
              <p className="card-text">
              Our Ready to Teach Ecosystem supports educators in teaching better, growing their businesses, and building their brands.
              </p>
            </div>
          </div>
        </div>
        <div className="aboutuscard">
          <div class="card">
            <img className="card-img-top" src="..." alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">NOT JUST A SAAS</h5>
              <p className="card-text">
              It is not just another SAAS product, but a step-by-step approach to upskilling educators and making things easier for them.
              </p>
            </div>
          </div>
        </div>
        <div className="aboutuscard">
          {" "}
          <div className="card">
          <i className="bi bi-telegram iconcards"></i>
            <div className="card-body">
              <h5 className="card-title">CHOOSE WHAT’S BEST</h5>
              <p className="card-text">
              Our goal is to facilitate the free-will decision-making of participants while maintaining a commitment to quality.
              </p>
            </div>
          </div>
        </div>
        <div className="aboutuscard">
          {" "}
          <div class="card">
            <img className="card-img-top" src="..." alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">ALL IN ONE SOLUTION</h5>
              <p className="card-text">
              We are not tied to any specific format or mode and are striving to serve our clients in every available format or Categories.
              </p>
            </div>
          </div>
        </div>
      </div>
      <br></br>
    </>
  );
};