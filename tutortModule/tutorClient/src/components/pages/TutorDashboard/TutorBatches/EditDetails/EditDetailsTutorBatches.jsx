import React, { useState } from "react";
import "./EditDetailsTutorBatch.css";
import EditIcon from "@mui/icons-material/Edit";

const EditDetailsTutorBatches = (props) => {
  // the below dateedited and timeedited const are for temproary use, the data from the database should be replaced with that.
  const dateEdited = "16-03-2022";
  const timeEdited = "20:22 pm";

  //buttons for days as sunday monday tuesday
  const [sunday, setsunday] = useState(false);
  const [monday, setmonday] = useState(false);
  const [tuesday, settuesday] = useState(false);
  const [wednesday, setwednesday] = useState(false);
  const [thursday, setthursday] = useState(false);
  const [friday, setfriday] = useState(false);
  const [saturday, setsaturday] = useState(false);

  //buttons for the subjects

  const [Physics, setPhysics] = useState(false);
  const [Maths, setMaths] = useState(false);
  const [Chemistry, setChemistry] = useState(false);
  const [English, setEnglish] = useState(false);
  const [Others, setOthers] = useState(false);
  const [Electronics, setElectronics] = useState(false);

  return (
    <>
      <div className="editDetailsContainer TutorbatchesBlur">
        <div className="headingContainer-editDetails">
          <div className="editDet-heading">Edit Details</div>
          <div className="lastEdit-editDet">
            Last edited on {dateEdited}, {timeEdited}
          </div>
        </div>
        <div className="infoContainer-editDetails">
          <div className="batchName-editDetails">
            <p>Batch Name</p>

            <input
              type="text"
              name="batch-name-editDet"
              id=""
              placeholder="Batch Name"
            />
            <i>
              <EditIcon />
            </i>

            {/* <EditIcon /> */}
          </div>
          <div className="scheduleContainer-editDetials">
            <p>Schedule</p>
            <button
              className={
                sunday ? "selected-editDetails" : "unselected-editDetails"
              }
              onClick={(e) => {
                e.preventDefault();
                setsunday(!sunday);
              }}
            >
              S
            </button>
            <button
              className={
                monday ? "selected-editDetails" : "unselected-editDetails"
              }
              onClick={(e) => {
                e.preventDefault();
                setmonday(!monday);
              }}
            >
              M
            </button>
            <button
              className={
                tuesday ? "selected-editDetails" : "unselected-editDetails"
              }
              onClick={(e) => {
                e.preventDefault();
                settuesday(!tuesday);
              }}
            >
              T
            </button>
            <button
              className={
                wednesday ? "selected-editDetails" : "unselected-editDetails"
              }
              onClick={(e) => {
                e.preventDefault();
                setwednesday(!wednesday);
              }}
            >
              W
            </button>
            <button
              className={
                thursday ? "selected-editDetails" : "unselected-editDetails"
              }
              onClick={(e) => {
                e.preventDefault();
                setthursday(!thursday);
              }}
            >
              T
            </button>
            <button
              className={
                friday ? "selected-editDetails" : "unselected-editDetails"
              }
              onClick={(e) => {
                e.preventDefault();
                setfriday(!friday);
              }}
            >
              F
            </button>
            <button
              className={
                saturday ? "selected-editDetails" : "unselected-editDetails"
              }
              onClick={(e) => {
                e.preventDefault();
                setsaturday(!saturday);
              }}
            >
              S
            </button>
          </div>
          <div className="timingsContainer-editDet">
            <p>Timings</p>
            <div className="timingWrapper-editDet">
              <div className="start-timing-editDet">
                <label htmlFor="starteditDet">START</label>
                <input type="time" name="starteditDet" id="" />
                <i>
                  <EditIcon />
                </i>
              </div>
              <div className="end-timing-editDet">
                <label htmlFor="endeditDet">END</label>
                <input type="time" name="endeditDet" id="" />
                <i>
                  <EditIcon />
                </i>
              </div>
            </div>
          </div>
          <div className="subjectsContainer-editDetials">
            <p>Subject</p>
            <button
              className={
                Physics ? "selected-editDetails" : "unselected-editDetails"
              }
              onClick={(e) => {
                e.preventDefault();
                setPhysics(!Physics);
              }}
            >
              Physics
            </button>
            <button
              className={
                Maths ? "selected-editDetails" : "unselected-editDetails"
              }
              onClick={(e) => {
                e.preventDefault();
                setMaths(!Maths);
              }}
            >
              Maths
            </button>
            <button
              className={
                Chemistry ? "selected-editDetails" : "unselected-editDetails"
              }
              onClick={(e) => {
                e.preventDefault();
                setChemistry(!Chemistry);
              }}
            >
              Chemistry
            </button>
            <button
              className={
                English ? "selected-editDetails" : "unselected-editDetails"
              }
              onClick={(e) => {
                e.preventDefault();
                setEnglish(!English);
              }}
            >
              English
            </button>
            <button
              className={
                Electronics ? "selected-editDetails" : "unselected-editDetails"
              }
              onClick={(e) => {
                e.preventDefault();
                setElectronics(!Electronics);
              }}
            >
              Electronics
            </button>
            <button
              className={
                Others ? "selected-editDetails" : "unselected-editDetails"
              }
              onClick={(e) => {
                e.preventDefault();
                setOthers(!Others);
              }}
            >
              Others
            </button>
          </div>
        </div>
        <div className="buttonContainer-editDetails">
          <button className="selected-editDetails">Save</button>
          <button className="unselected-editDetails" onClick={()=>{
            props.seteditStudentPopup(null);
          }}>Cancel</button>
        </div>
      </div>
    </>
  );
};

export default EditDetailsTutorBatches;
