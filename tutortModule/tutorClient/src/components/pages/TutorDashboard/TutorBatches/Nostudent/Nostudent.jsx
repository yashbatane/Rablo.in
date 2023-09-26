import React from "react";
import "./Nostudent.css";
import blackCircleImg from "./resources/person.png";
import BatchSideBar from "../../BatchSideBar/BatchSideBar";

const Nostudent = () => {
  return (
    <div className="noStudentContainer">
      <div className="left_section">
        <BatchSideBar />
      </div>
      <div className="right_section">
        <div className="heading">
          <h3>Your Batches</h3>
        </div>
        <div className="img_text">
          <div className="imageVector">
            <img src={blackCircleImg} alt="image vector" />
          </div>
          <h3 className="subText1">Looks like nothing is here!!</h3>
          <p className="subtext2">
            Batches created by you after adding students will be shown here
          </p>
        </div>
      </div>
    </div>
  );
};

export default Nostudent;
