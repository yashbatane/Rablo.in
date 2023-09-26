import React from "react";
import { useState } from "react";
import { reportTutor } from "../../../../../store/slices/tutorReportSlice";
import { useDispatch } from "react-redux";

const reportForm = ({ subId }) => {
  const dispatch = useDispatch();
  const [reasons, setReason] = useState({
    report:""
  });
  const handleChanges=(e)=>{
    setReason({...reasons,[e.target.name]:e.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(reasons);
    dispatch(reportTutor(reasons));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="reason">Reason for reporting:</label>
      <input
        name="report"
        type="text"
        onChange={handleChanges}
      />
      <button type="submit">Report</button>
    </form>
  );
};

export default reportForm;
