import React, { useState } from "react";
import "./TutorBatches.css";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveStudents from "./RemoveStudents/RemoveStudents";
import EditDetailsTutorBatches from "./EditDetails/EditDetailsTutorBatches";
import DashboardTutorBatches from "./consoleTutorBatch/DashboardTutorBatches";

let Batch1Students = Array.from({ length: 22 }, (_, index) => {
  return {
    index: index,
    isSelected: false,
    studentName: "Jane Cooper",
    attendance: "80%",
    parentname: "Eleanor Pena",
    contactNo: " +91 123456789",
    isFeePaid: false,
  };
});

export default function TutorBatches() {
  const [currentTab, setCurrentTab] = useState("Batch1");
  const [students, setStudents] = useState(Batch1Students);
  const [removeStudentPopup, setremoveStudentPopup] = useState(null);
  const [editStudentPopup, seteditStudentPopup] = useState(false);

  return (
    <>
      <div className="TutorBatchesContainer TutorbatchesBlur">
        <h1>Your Batches</h1>
        <div className="BatchesContainer">
          <div className="tabsContainer">
            {["Batch1", "Batch2", "Batch3", "Batch4", "Batch5"].map((tab) => (
              <div
                key={tab}
                className={`tab ${tab == currentTab ? "activeTab" : ""}`}
                onClick={() => setCurrentTab(tab)}
              >
                {tab}
              </div>
            ))}
            <button className="AddBatchButton">
              <AddIcon style={{ fontSize: "2rem", color: "#6764FF" }} />
              Add Batch
            </button>
          </div>
          {/* This part has to put here */}
          <DashboardTutorBatches seteditStudentPopup={seteditStudentPopup} />
          {/* Here is the console above */}
          <div className="tableContainer">
            <table>
              <thead>
                <tr>
                  <th>Attendance</th>
                  <th>Student Name</th>
                  <th>Attendance(%)</th>
                  <th>Parent Name</th>
                  <th>Phone No</th>
                  <th>Fee Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => {
                  return (
                    <tr>
                      <td>
                        <input
                          type="checkbox"
                          defaultChecked={student.isSelected}
                        ></input>
                      </td>
                      <td>
                        <p>{student.studentName}</p>
                      </td>
                      <td>
                        <p className="attendance">{student.attendance}</p>
                      </td>
                      <td>
                        <p>{student.parentname}</p>
                      </td>
                      <td>
                        <p>{student.contactNo}</p>
                      </td>
                      <td>
                        <div className="FeeStatusContainer">
                          {" "}
                          <div
                            className={`FeeStatus ${
                              student.isFeePaid ? "green" : "red"
                            }`}
                          ></div>
                        </div>
                      </td>
                      <td>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            setremoveStudentPopup(student);
                          }}
                        >
                          Remove <DeleteIcon />{" "}
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        {removeStudentPopup ? (
          <>
            <div
              className="overflowtutorBatches"
              onClick={() => {
                setremoveStudentPopup(null);
              }}
            ></div>
            <RemoveStudents
              stuDet={removeStudentPopup}
              setremoveStudentPopup={setremoveStudentPopup}
            />
          </>
        ) : (
          <></>
        )}
      </div>
      {/* edit details popup is here */}
      {editStudentPopup && (
        <>
          <div
            className="overflowtutorBatches"
            onClick={() => {
              seteditStudentPopup(null);
            }}
          ></div>
          <EditDetailsTutorBatches seteditStudentPopup={seteditStudentPopup} />
        </>
      )}
    </>
  );
}
