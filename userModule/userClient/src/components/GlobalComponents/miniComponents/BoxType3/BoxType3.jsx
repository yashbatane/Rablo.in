import React from "react";
import "./BoxType3.css";

export const BoxType3 = ({ img, title, para }) => {
  return (
    <div className="mode-type">
      <div className="mode-content">
        <img src={img} alt="Home-icon" />
        {/* </div> */}
        <div className="mode-title">
          <h3>{title}</h3>
        </div>
        <div className="mode-body">
          <p className="paragraph">{para}</p>
        </div>
      </div>
    </div>
  );
};
