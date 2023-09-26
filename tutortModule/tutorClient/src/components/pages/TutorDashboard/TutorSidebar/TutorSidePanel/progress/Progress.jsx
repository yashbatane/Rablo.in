import React from 'react'
import "./progress.css"
import CircularProgressBar from '../CircularProgressBar';

const Progress = ({ para, per, icon, fontSize, lineHeight }) => {
  return (
    <div className="progress">
      <CircularProgressBar per={per} />
      <div>
        {icon}
        <p style={{ marginTop:30,marginBottom:0,fontSize, lineHeight }}>{para}</p>
        <h1>
          {per}
          <span>%</span>{" "}
        </h1>
      </div>
    </div>
  );
};

export default Progress
