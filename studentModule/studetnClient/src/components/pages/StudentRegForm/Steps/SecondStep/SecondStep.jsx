import React, { useState } from "react";
import sealighthouse from "../../resources/SeaLighthouse-sunset.png";
import "./SecondStep.css";

import logo from "../../resources/rablo.png";
import backbtn from "../../resources/back.png";

const SecondStep = () => {
  const [formValues, setFormValues] = useState({
    class: "",
    boards: "",
    schoolname: "",
  });
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value.trim() });
    console.log(formValues.gender);
  };

  const verifyForm = () => {
    formValues["class"] == ""
      ? setClassError("This field cannot be blank")
      : setClassError("");
    formValues["boards"] == ""
      ? setboardsError("This field cannot be blank")
      : setboardsError("");
    formValues["schoolname"] == ""
      ? setSchoolnameerror("This field cannot be blank")
      : setSchoolnameerror("");
  };

  const [submaths, setsubmaths] = useState(false);
  const [subphysics, setsubphysics] = useState(false);
  const [subenglish, setsubenglish] = useState(false);
  const [subhindi, setsubhindi] = useState(false);
  const [subbiology, setsubbiology] = useState(false);
  const [subchemistry, setsubchemistry] = useState(false);
  const [subgeography, setsubgeography] = useState(false);
  const [subhistory, setsubhistory] = useState(false);
  const [subpoliticalScience, setsubpoliticalScience] = useState(false);
  const [subaccountancy, setsubaccountancy] = useState(false);
  const [subeconomics, setsubeconomics] = useState(false);
  const [subbusinessstudies, setsubbusinessstudies] = useState(false);
  const [subcs, setsubcs] = useState(false);
  const [subother, setsubother] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    verifyForm();
  };
  const Star = () => {
    return <span style={{ color: "rgb(228,116,112)" }}>*</span>;
  };
  const Label = ({ val, isrequired, errorMessage }) => {
    return (
      <label
        className={errorMessage ? "hasValidation headingLabel" : "headingLabel"}
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

  const [classError, setClassError] = useState("");
  const [boardsError, setboardsError] = useState("");
  const [schoolnameerror, setSchoolnameerror] = useState("");
  return (
    <div>
      <div className="headerImageLogo">
        <img className="backHeaderImg" src={backbtn} alt="" />
        <img className="logoHeaderImage" src={logo} alt="rablo.in" />
      </div>
      <div className="secondstep-grid-container">
        <div className="image-container-grid-firstStep">
          <img src={sealighthouse} alt="sealighthouse image" />
        </div>
        <div className="secondStep-personalDetailContainer">
          <div className="HeadingContainer">
            <h1>Personal Details</h1>
            <p>Fill out the details</p>
          </div>
          <form action="" onSubmit={handleSubmit}>
            <h2 className="subheading-firststep" style={{ width: "100%" }}>
              Academic Details
            </h2>
            <div className="inputbox" style={{ width: "48%" }}>
              <Label
                val="Class"
                isrequired={true}
                errorMessage={formErrors.firstName}
              />
              <input type="text" name="class" onChange={handleChange}></input>
              <div className="errorBox">{classError}</div>
            </div>
            <div className="inputbox" style={{ width: "48%" }}>
              <Label
                val="Boards"
                isrequired={true}
                errorMessage={formErrors.lastName}
              />
              <input type="text" name="boards" onChange={handleChange} />
              <div className="errorBox">{boardsError}</div>
            </div>

            <div className="inputbox" style={{ width: "48%" }}>
              <Label
                val="School Name"
                isrequired={true}
                errorMessage={formErrors.mobile}
              />
              <input
                type="text"
                name="schoolname"
                onChange={handleChange}
              ></input>
              <div className="errorBox">{schoolnameerror}</div>
            </div>

            <div className="inputbox" style={{ width: "100%" }}>
              <Label
                val="Subject Name"
                isrequired={true}
                errorMessage={formErrors.mobile}
              />
            </div>

            <div className="subject-button-container">
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  setsubmaths(!submaths);
                }}
                className={submaths ? "subjectButtonActive" : "subjectButtonInActive"}
              >
                Maths
              </button>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  setsubphysics(!subphysics);
                }}
                className={subphysics ? "subjectButtonActive" : "subjectButtonInActive"}
              >
                Physics
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setsubenglish(!subenglish);
                }}
                className={subenglish ? "subjectButtonActive" : "subjectButtonInActive"}
              >
                English
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setsubhindi(!subhindi);
                }}
                className={subhindi ? "subjectButtonActive" : "subjectButtonInActive"}
              >
                Hindi
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setsubbiology(!subbiology);
                }}
                className={subbiology ? "subjectButtonActive" : "subjectButtonInActive"}
              >
                Biology
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setsubchemistry(!subchemistry);
                }}
                className={subchemistry ? "subjectButtonActive" : "subjectButtonInActive"}
              >
                Chemistry
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setsubgeography(!subgeography);
                }}
                className={subgeography ? "subjectButtonActive" : "subjectButtonInActive"}
              >
                Geography
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setsubhistory(!subhistory);
                }}
                className={subhistory ? "subjectButtonActive" : "subjectButtonInActive"}
              >
                History
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setsubpoliticalScience(!subpoliticalScience);
                }}
                className={subpoliticalScience ? "subjectButtonActive" : "subjectButtonInActive"}
              >
                Political Science
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setsubaccountancy(!subaccountancy);
                }}
                className={subaccountancy ? "subjectButtonActive" : "subjectButtonInActive"}
              >
                Accountancy
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setsubeconomics(!subeconomics);
                }}
                className={subeconomics ? "subjectButtonActive" : "subjectButtonInActive"}
              >
                Economics
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setsubbusinessstudies(!subbusinessstudies);
                }}
                className={subbusinessstudies ? "subjectButtonActive" : "subjectButtonInActive"}
              >
                Business Studies
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setsubcs(!subcs);
                }}
                className={subcs ? "subjectButtonActive" : "subjectButtonInActive"}
              >
                Computer Science
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setsubother(!subother);
                }}
                className={subother ? "subjectButtonActive" : "subjectButtonInActive"}
              >
                Other
              </button>
            </div>

            <div className="buttonContainer">
              <button
              style={{float:"right"}}
                type="submit "
                className="submitButton"
                onClick={handleSubmit}
              >
                Next &gt;
              </button>
              <div className="pageNo" style={{float:"left",color: "rgba(0, 0, 0, 0.4)"}}>1/2</div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SecondStep;
