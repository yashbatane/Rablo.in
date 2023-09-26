import React from "react";
import "./time.css";
const Time = ({
  tag,
  time,
  abc,
  up,
  down,
  fontSize,
  lineHeight,
  fontWeight,
}) => {
  return (
    <div className="times start">
      <p style={{ fontSize }}>{tag}</p>
      <div>
        <h2 style={{ lineHeight, fontWeight }}>
          {time} <span>{abc}</span>
        </h2>
        <div>
          {up}
          {down}
        </div>
      </div>
    </div>
  );
};

export default Time;
