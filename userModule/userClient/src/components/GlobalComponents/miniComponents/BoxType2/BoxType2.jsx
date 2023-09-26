import React from "react";
import "./BoxType2.css";

export const BoxType2 = ({ title, icon }) => {
  return (
    <div className="roundBox" data-aos="fade-left">
      {/* Front */}
      <div className="first">
        <i className={"roundboxicon " + icon}></i>
        <h2 className="title">{title}</h2>
      </div>
      {/* Back */}
      <h2 className="start">START HERE</h2>
    </div>
  );
};
