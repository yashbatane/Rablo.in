import React, { useState } from "react";
import "./RemoveStudents.css";

const RemoveStudents = (props) => {
  const [stuName, setStuName] = useState(props.stuDet.studentName); // This usestate is temproary, the actual name should be fetched from the tutorBatches via prop;

  const [selectedReason, setSelectedReason] = useState(null);
  return (
    <div className="RemoveStuTutBatches">
      <div className="headRmStu">
        <div className="removeKeyStuTut">Remove</div>
        <div className="nameStuTutRm">{stuName}</div>
      </div>
      <div className="reasons-of-removal-StuTut">
        <div>Please Specify reasons for removal</div>
        <div className="buttons-for-reasons-stuTut">
          <button
            className={
              selectedReason === "ineligible"
                ? "remove-btn-stuTut-selected"
                : "remove-btn-stuTut-unSelected"
            }
            onClick={(e) => {
              e.preventDefault();
              setSelectedReason("ineligible");
            }}
          >
            Ineligibility
          </button>
          <button
            className={
              selectedReason === "unethicalBehave"
                ? "remove-btn-stuTut-selected"
                : "remove-btn-stuTut-unSelected"
            }
            onClick={(e) => {
              e.preventDefault();
              setSelectedReason("unethicalBehave");
            }}
          >
            Unethical Behaviour
          </button>
          <button
            className={
              selectedReason === "lowAttendance"
                ? "remove-btn-stuTut-selected"
                : "remove-btn-stuTut-unSelected"
            }
            onClick={(e) => {
              e.preventDefault();
              setSelectedReason("lowAttendance");
            }}
          >
            Low Attendance
          </button>
        </div>
      </div>
      <div className="reason-mention-txt-stuTut">
        <div className="another-reason-rmStuBathc">
          For other reasons, please mention below
        </div>
        <div>
          <textarea
            rows="9"
            cols="105"
            placeholder="Please type here ..."
          ></textarea>
        </div>
      </div>
      <div className="bottomButtons-StuTut-remove">
        <button className="remove-button-bottom-StuRem">Remove</button>
        <button
          onClick={(e) => {
            e.preventDefault();
            props.setremoveStudentPopup(null);
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default RemoveStudents;
