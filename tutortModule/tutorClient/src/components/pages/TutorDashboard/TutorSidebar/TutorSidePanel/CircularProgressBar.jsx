import React, { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";
import "./CircularProgressBar.css";

function CircularProgressBar({per,icon}) {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (percentage < per) {
        setPercentage(percentage + 1);
      }
    }, 50);
  }, [percentage]);

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ width: 75, marginTop: 13 }}>
        <CircularProgressbar value={percentage}  />
      </div>
    </div>
  );
}
export default CircularProgressBar;
