import React from "react";
import "./wrapUp.css";
const WrapUp = ({ icon, desc, num, order, background,margin }) => {
  return (
    <div className="Wrap-up">
      <div className="row" style={{ gap: 15 }}>
        <div className="img" style={{ background }}>
          {icon}
        </div>
        <div className="details">
          <p>{desc}</p>
          <div className="xyz">
            <p >{num}</p>
            <p style={{margin}}>{order}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WrapUp;
