import PrefferedLanguage from "./PrefferedLanguage";
import React, { useState } from "react";
import "./Educational/Educational.css";
import "./PrefferedSection.css";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import v1 from "./icons/Vector.png";
const PreferedModes = () => {
  const [formValues, setFormValues] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange = () => {};
  //label
  const Label = ({ val, isrequired, errorMessage }) => {
    return (
      <label
        className={errorMessage ? "hasValidation" : ""}
        data-content={errorMessage || null}
      >
        {isrequired ? (
          <>
            {val} <Star />
          </>
        ) : (
          val
        )}
      </label>
    );
  };
  const preferredLanguage = [
    { key: "value-0", text: "English" },
    { key: "value-1", text: "Hindi" },
    { key: "value-2", text: "Marathi" },
    { key: "value-3", text: "Gujarati" },
    { key: "value-4", text: "Tamil" },
    { key: "value-5", text: "Bengali" },
    { key: "value-6", text: "Punjabi" },
    { key: "value-7", text: "Assamese" },
    { key: "value-8", text: "kannada" },
    { key: "value-9", text: "Telugu" },
    { key: "value-10", text: "odia" },
    { key: "value-11", text: "Kannada" },
    { key: "value-12", text: "Malayalam" },
    { key: "value-13", text: "Others" },
  ];

  // const PrefferedType = ['Offline', 'Online'];
  const [prefferedType, setPrefferedType] = useState({});
  const languages = [
    "English",
    "Hindi",
    "Marathi",
    "Bengali",
    "Gujrati",
    "Tamil",
    "Telugu",
    "Malayam",
    "Urdu",
    "Kannada",
    "Punjabi",
    "Others",
  ];
  return (
    <div className="form">
      <h3>Prefrences</h3>
      <small>Select the mode of class you want to teach</small>
      <div className="row" style={{ marginTop: "20px" }}>
        <div className="col">
          <label>Select the type of Job</label>
          <select
            name="preferredtype"
            onChange={handleChange}
            className={`${formErrors.preferredtype ? "hasError" : ""}`}
            style={{ marginTop: "20px" }}
            onClick={(e) => {
              handleModes(e);
            }}
          >
            <option key="value-0" value="">
              {" "}
            </option>
            <option key="value-1" value="Online">
              online
            </option>
            <option key="value-2" value="Offline">
              Offline
            </option>
          </select>
        </div>
        <div className="col">
          <label style={{ width: "50vw" }}>Select the mode of class</label>
          <select
            name="preferredtype"
            onChange={handleChange}
            className={`${formErrors.preferredtype ? "hasError" : ""}`}
            style={{ marginTop: "20px" }}
            onClick={(e) => {
              handleModes(e);
            }}
          >
            <option key="value-0" value="">
              {" "}
            </option>
            <option key="value-1" value="Online">
              online
            </option>
            <option key="value-2" value="Offline">
              Offline
            </option>
          </select>
        </div>
      </div>

      <PrefferedLanguage />

      <div className="row">
        <div className="col">
          <label>Select prefred classes</label>
          <select
            name="preferredtype"
            onChange={handleChange}
            className={`${formErrors.preferredtype ? "hasError" : ""}`}
            style={{ marginTop: "20px" }}
            onClick={(e) => {
              handleModes(e);
            }}
          >
            <option key="value-0" value="">
              {" "}
            </option>
            <option key="value-1" value="Online">
              online
            </option>
            <option key="value-2" value="Offline">
              Offline
            </option>
          </select>
        </div>
        <div className="col">
          <label style={{ width: "50vw" }}>
            Select the number of class in days
          </label>
          <select
            name="preferredtype"
            onChange={handleChange}
            className={`${formErrors.preferredtype ? "hasError" : ""}`}
            style={{ marginTop: "20px" }}
            onClick={(e) => {
              handleModes(e);
            }}
          >
            <option key="value-0" value="">
              {" "}
            </option>
            <option key="value-1" value="Online">
              online
            </option>
            <option key="value-2" value="Offline">
              Offline
            </option>
          </select>
        </div>
      </div>

      <div className="row" style={{ marginTop: "20px" }}>
        <div className="col">
          <label>Start Time For Classes</label>
          <div style={{ display: "flex" }}>
            <div className="inputbox" style={{ width: "23%" }}>
              <select
                name="numOfSessions"
                id="classs"
                value={formValues.numberofsession}
                onChange={handleChange}
                style={{ marginTop: "20px" }}
              >
                <option value=""></option>
              </select>
            </div>
            <div className="inputbox" style={{ width: "23%" }}>
              <select
                name="numOfSessions"
                id="classs"
                value={formValues.numberofsession}
                onChange={handleChange}
                style={{
                  marginLeft: "15px",
                  marginTop: "20px",
                  marginRight: "15px",
                }}
              >
                <option value=""></option>
              </select>
            </div>
            <div style={{ marginTop: "45px", marginLeft: "20px" }}>
              <span className="yes">AM</span>
              {"     "}
              <span className="yes">PM</span>
            </div>
          </div>
        </div>
        <div className="col">
          <label>End Time For Classes</label>
          <div style={{ display: "flex" }}>
            <div className="inputbox" style={{ width: "23%" }}>
              <select
                name="numOfSessions"
                id="classs"
                value={formValues.numberofsession}
                onChange={handleChange}
                style={{ marginTop: "20px" }}
              >
                <option value=""></option>
              </select>
            </div>
            <div className="inputbox" style={{ width: "23%" }}>
              <select
                name="numOfSessions"
                id="classs"
                value={formValues.numberofsession}
                onChange={handleChange}
                style={{
                  marginLeft: "15px",
                  marginTop: "20px",
                  marginRight: "15px",
                }}
              >
                <option value=""></option>
              </select>
            </div>
            <div style={{ marginTop: "45px", marginLeft: "20px" }}>
              <span className="yes">AM</span>
              {"     "}
              <span className="yes">PM</span>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <button className="first__btn">
            <span>
              <BsArrowLeft style={{ marginTop: "3px", width: "15px" }} />
            </span>
            <span> Back</span>
          </button>
        </div>
        <div className="col">
          <button className="last__btn">
            {" "}
            <span style={{ color: "white" }}> Update</span>
            {/* <span>
              <BsArrowRight style={{ width: "15px", color: "white" }} />
            </span> */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreferedModes;
