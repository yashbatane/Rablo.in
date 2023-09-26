import React from "react";
import "./UnderConstruction.css";
import logo from "./logo.webp";
import logo2 from "./logo.png";
const UnderConstruction = () => {
  return (
    <div className="constructionContainer">
    <div className="logoDiv">
        <img src={logo2} />
    </div>
      <div className="constructionWrapper">
      
        <div className="textDiv">
          <h1>SORRY! WE ARE UNDER SCHEDULE MAINTAINCE</h1>
          <h5>
            Our website is currently undergoing scheduled maintaince,will be
            right back in few days
          </h5>
          <h5>Thank You</h5>
          <button>
            Redirect to old website <a href="#" />{" "}
            <lord-icon
              src="https://cdn.lordicon.com/zmkotitn.json"
              trigger="hover"
              style={{ width: "25px", height: "25px",color:"white",marginLeft:"4px" }}
            ></lord-icon>
          </button>
          {/* <a href="#" >{" "}
          Redirect to old website
            <lord-icon
              src="https://cdn.lordicon.com/zmkotitn.json"
              trigger="hover"
              style={{ width: "25px", height: "25px",color:"white",marginLeft:"4px" }}
            ></lord-icon>
            
            </a> */}
       
        </div>
        <div className="imgDiv">
          <img src="https://img.freepik.com/premium-vector/flat-system-update-illustration_108061-430.jpg?w=740" />
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;
