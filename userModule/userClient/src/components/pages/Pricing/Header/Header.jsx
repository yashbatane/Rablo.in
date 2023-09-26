import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div className="headerContainer">
      <div className="headerWrapper">
        <div className=""></div>
        <div className="second">
          <div className="span">
            <span>FOR EDUCATORS</span>
          </div>
          <div className="h1">
            <h1>
              <span style={{ color: "#5271ff" }}>Choose Your </span>Plan
            </h1>
          </div>
          <div className="p">
            <p>Choose your plan tailored to your needs!</p>
          </div>
        </div>
        <div className="last">
            <Link to="/" style={{color:'none'}}>
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

export default Header;
