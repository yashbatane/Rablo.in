import React,{  useState, useRef } from "react";

import "./BulkAttendanceUpdater.css";
import BatchSideBar from "../BatchSideBar/BatchSideBar";
import doc from "./doc.svg";
import pdficon from "./pdficon.svg";
import { MdAppsOutage } from "react-icons/md";
let temp = Array.from({ length: 1 }, (_, index) => {
  return {
    field_submitted:0,
    student_present:43,
    student_present:4,
    invalidfields:2,
    attendance:74,
    avg_marks:51,
    pred_attendance:70,
    pred_avg:62,
  };
});
const BulkAttendance = ({bulk_stud}) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const handlefilechange = (event) => {
    const file=event.target.files[0];
    if (
      file.type ===
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    ) {
      setFile(file);
      setError(null);
    } else {
      setFile(null);
      setError("Invalid File type");
    }
  }
  


  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (
      file.type ===
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    ) {
      setFile(file);
      setError(null);
    } else {
      setFile(null);
      setError("Invalid File type");
    }
  };
  const inputRef= useRef();
// const BulkAttendaceUpdater{
  
// }
  return (
    <div className="BulkBackground">
      <BatchSideBar />
      <div className="BulkContent">
        <div className="BulkRow1">
          <p className="BulkRow1Heading">Bulk Attendance Updater</p>
          <p className="BulkRow1SubHeading">
            Upload your own prepared attendance sheet and get computed results
            in an instant!!{" "}
          </p>
        </div>
        <div className="BulkRow2">
          <div
            className="BulkRow2field"
            onDragOver={(event) => {
              event.preventDefault();
            }}
            onDrop={handleDrop}
          >
            <div className="BulkRow2fieldCombine">
              <img src={doc} alt="" />
              <input type="file" ref={inputRef} onChange={handlefilechange} style={{display : "none"}}/>
              <p style={{ fontWeight: "500" }}>
                Drag, Drop or{" "}
                <span style={{ fontWeight: "600", color: "#6764ff",cursor : "pointer" }} onClick={()=> inputRef.current.click()} >
                  {" "}
                   Browse{" "}
                </span>{" "}
              </p>
              <p
                style={{
                  fontSize: "13px",
                  fontWeight: "400",
                  color: "#000000A8",
                }}
              >
                Supported files: .XLSX
              </p>
            </div>
            <p style={{ fontSize: "15px", fontWeight: "500" }}>
              File :{" "}
              {file === null ? (
                <span style={{ color: "#6764FF" }}>No File Selected</span>
              ) : (
                <span style={{ color: "#6764FF" }}>{file.name}</span>
              )}  
            </p>
              {error === null ? (
                <></>
              ) : (
                <p><span style={{ color: "red",fontSize: "15px", fontWeight: "500"  }}>{error}</span></p>
              )}
            
          </div>
          <div className="BulkRow2download">
            <div className="BulkRow2downloadcontent">
              <p>Download report in PDF format</p>
              <a href="https://www.clickdimensions.com/links/TestPDFfile.pdf" download="test" style={{all : "unset"}}>
              <button type="submit" >
              <p>Download</p>
              <img src={pdficon} /> 
              </button>
              </a>
            </div>
            <hr style={{width : "100%",margin : '0'}} />
          </div>

          <div className="BulkRow2data">
            <div className="BulkRow2datacol1">
            {temp.map((bulk_stud)=>(
              <div className="BulkRow2datacol1content">
              
                <p>No of fields submitted</p>
                <p style={{ color: "#6764FF" , fontSize: "32px"}}>{bulk_stud.field_submitted}</p>
                <p>No of students present</p>
                <p style={{ color: "#6764FF" , fontSize: "32px"}}>{bulk_stud.student_present}</p>
              </div>))}
              <hr />
            </div>
            <div className="BulkRow2datacol1">
            {temp.map((bulk_stud)=>(
              <div className="BulkRow2datacol1content">

                <p>No of students absent</p>
                <p style={{ color: "#000000" , fontSize: "32px"}}>{bulk_stud.student_present}</p>
                <p>No of invalid fields</p>
                <p style={{ color: "#E73147" , fontSize: "32px"}}>{bulk_stud.invalidfields}</p>
              </div>))}
              <hr />
            </div>
            <div className="BulkRow2datacol1">
            {temp.map((bulk_stud)=>(
              <div className="BulkRow2datacol1content">
                <p>Attendance %</p>
                <p style={{ color: "#6764FF" , fontSize: "32px"}}>{bulk_stud.attendance}</p>
                <p>Average Marks</p>
                <p style={{ color: "#6764FF" , fontSize: "32px"}}>{bulk_stud.avg_marks}</p>
              </div>))}
              <hr />
            </div>
            <div className="BulkRow2datacol1">
            {temp.map((bulk_stud)=>(
              <div className="BulkRow2datacol1content">
                <p>Predicted Attendance %</p>
                <p style={{ color: "#6764FF", fontSize: "32px" }}>{bulk_stud.pred_attendance}</p>
                <p>Predicted avg marks</p>
                <p style={{ color: "#6764FF", fontSize: "32px" }}>{bulk_stud.pred_avg}</p>
              </div>))}
            </div>
          </div>
        </div>
        <div className="BulkRow3">
          <div className="BulkRow3content">
            <p style={{ color: "#6764ff"}}>Student Details</p>
            <p
              style={{
                fontSize: "16px",
                color: "color: rgba(0, 0, 0, 0.65);",
                fontWeight: "400",
              }}
            >
              Here you can enter a particular student’s ID to get idea of
              his/her attendance and marks
            </p>
          </div>
          <div className="BulkRow3student">
            <div className="BulkRow3studentcontent">
              <p>Enter Student ID</p>
              <input type="text" />
            </div>
            <div className="BulkRow3studentcontent">
              <p>Attendance %</p>
              <p>-</p>
            </div>
            <div className="BulkRow3studentcontent">
              <p>Predicted Attendance</p>
              <p>-</p>
            </div>
            <div className="BulkRow3studentcontent">
              <p>Predicted Marks</p>
              <p>-</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BulkAttendance;
