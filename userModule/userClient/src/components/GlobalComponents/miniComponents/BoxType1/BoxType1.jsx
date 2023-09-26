import React from "react";
import "./Boxtype1.css";
export const BoxType1 = ({ Heading, icon, para, id, fade }) => {
  return (
    <div className="bbox" id={id} data-aos={fade}>
      <div className="iconcontainer">
        <i className={"bbnicon " + icon}></i>
      </div>

      <h1 className="heading">{Heading}</h1>
      <p>{para}</p>
    </div>
  );
};
