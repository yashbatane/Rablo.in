import React from 'react'
import "./Salary.css"
const Salary = ({ para, rupees, fontWeight,fontSize,lineHeight, color }) => {
  return (
    <div className="salaries">
      <p style={{ fontSize,lineHeight, fontWeight }}>{para}</p>
      <h2 style={{  color }}>₹{rupees} </h2>
      <span>per month</span>
    </div>
  );
};

export default Salary
