import React from 'react'
import "./contact.css";
const Contact = ({ icon, type, content ,textTransform}) => {
  return (
    <div className="contact">
      <div className="img">{icon}</div>
      <div className="details">
        <p style={{ textTransform }}>{content}</p>
        <p>{type}</p>
      </div>
    </div>
  );
};

export default Contact
