import React from "react";
import "./Footeraboutus.css";
import Atal from "./images/Atal.png";
import Wadhwani from "./images/Wadhwani.png";
export const Footeraboutus = () => {
  return (
    <>
      <div className="Footeraboutuscontainer">
        <div className="logocontainer">
          <img src={Wadhwani} className="img1"width="120px"></img>
          <img src={Atal} className="img1"  width="120px"></img>
        </div>
        <div className="Middletitle">
          <span>India's 1st </span>{" "}
          <span className="Footertitle2">All In One Platform</span>
        </div>
        <div className="Footerbelowtitle">
          Recognized by StartupIndia & MSME India
        </div>
      </div>
    </>
  );
};
