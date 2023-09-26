import React from "react";
import { Link } from "react-router-dom";
import "./FormHeader.css";
const FormHeader = () => {
  return (
    <div className="FormHeaderContainer">
      <div className="FormHeaderWrapper">
        <div className="first1"></div>
        <div className="second">
          <div className="span">
            <span>FOR EDUCATORS</span>
          </div>
          <div className="h1">
            <h1>
              <span style={{ color: "#5E42BB" }}>Pre-Registration </span>Form
            </h1>
          </div>
          <div className="p">
            <p>We are launching our platform soon, you can book your slots now.</p>
          </div>
        </div>
        <div className="last">
            <Link to="/"  style={{color:'none'}}>
          <div className="lastWarapper">
            <span className="firstSpan"></span>
            <span className="secondSpan"></span>
          </div>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default FormHeader;
