import React, { useState, useEffect } from "react";
import "./PrefferedSection.css";
import "./Qualification.css";
import MultipleSelectPlaceholder from "./PrefferedLanguage";
// import illustrator from "./Image/student_illustrator.png";
// import rablo from "../../../img/logo.webp";
// import validate from "./Validation";
import illustrator from "./Image/student_illustrator.png";
import rablo from "./Image/logo.webp";
import validate from "./Validation";
import ImageUpload from "../TutorVarification/ImageUpload";
import Editable from "../../SettingPage/components/Editable";
import { BsArrowLeft, BsArrowLeftShort, BsArrowRight } from "react-icons/bs";
import NavBar from "../Profiledashboard/TutorDashboardSidebar/TutorDashboardSidebar";
const Qualification = ({ hidePreference }) => {
  //Google credentials

  let id = JSON.parse(localStorage.getItem("user_id"));

  let token = JSON.parse(localStorage.getItem("userToken"));
  console.log(id);
  console.log(token);

  // Required Star
  const Star = () => {
    return <span style={{ color: "rgb(228,116,112)" }}>*</span>;
  };
  // Lable
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

//   const preferredLanguage = [
//     { key: "value-0", text: "English" },
//     { key: "value-1", text: "Hindi" },
//     { key: "value-2", text: "Marathi" },
//     { key: "value-3", text: "Gujarati" },
//     { key: "value-4", text: "Tamil" },
//     { key: "value-5", text: "Bengali" },
//     { key: "value-6", text: "Punjabi" },
//     { key: "value-7", text: "Assamese" },
//     { key: "value-8", text: "kannada" },
//     { key: "value-9", text: "Telugu" },
//     { key: "value-10", text: "odia" },
//     { key: "value-11", text: "Kannada" },
//     { key: "value-12", text: "Malayalam" },
//     { key: "value-13", text: "Others" },
//   ];

  // const PrefferedType = ['Offline', 'Online'];
  const [prefferedType, setPrefferedType] = useState({});
  const [formValues, setFormValues] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
    const [option, setOption] = useState(false);
    // handle change
    const handleModes = (e) => {
      setPrefferedType(e.target.value);
    };
    const handleChange = (e) => {
      console.log(e.target);
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
      console.log(formValues);
    };
    console.log("preference");
    // handlesubmit
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("clicked");
      setFormErrors(validate(formValues));
      setIsSubmit(true);

      // hidePreference();
    };
    //
    useEffect(() => {
      console.log(formErrors);
      if (Object.keys(formErrors).length === 0 && isSubmit) {
        console.log(formValues);
      }
    }, [formErrors]);

    console.log(formErrors);
    return (
        
      <div className="preferencesMainContainer">
        <NavBar/>
        {/* <div className="TutorDetailNav">
        <div className="RabloLogo"><img src={rablo} alt="" /></div>
      </div> */}
        <div className="prefferedSectionContainer">
          {/* <div className="prefferedSectionIllustrator">
          <img src={illustrator} alt="" />
        </div> */}
          <div className="PreferenceForm">
            <div className="PrefferedHeader">
              {/* <h1>Start your journey with us 👋</h1> */}
              {/* <p>Discover the best community of tutor and students</p> */}
            </div>
            {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
            <div className='ui message success'>Submitted Successfully</div>
          ) : (
            <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
          )} */}
            <div>
              <h3>Qualification</h3>
              <small className="qualification">
                Enter your qualification details here
              </small>
            </div>
            <form action="" onSubmit={handleSubmit}>
              <div className="inputbox" style={{ width: "44%" }}>
                <Label
                  val="Ever Work As"
                  isrequired={true}
                  errorMessage={formErrors.jobtype}
                />

                <div className="TutoJobRoleCheckBox">
                  <select
                    name="jobtype"
                    onChange={handleChange}
                    className={`${formErrors.jobtype ? "hasError" : ""}`}
                    style={{ marginTop: "20px" }}
                  >
                    <option key="value-0" value="">
                      {" "}
                    </option>
                    {/* <option key="value-0" value="full-time">
                      full-time{" "}
                    </option>
                    <option key="value-0" value="part-time">
                      part-time{" "}
                    </option> */}
                  </select>
                </div>
                <p className="Error">{formErrors.jobptype}</p>
              </div>
              <div className="inputbox" style={{ width: "44%" }}>
                <Label
                  val="Current Role"
                  isrequired={true}
                  errorMessage={formErrors.jobtype}
                />

                <div className="TutoJobRoleCheckBox">
                  <select
                    name="jobtype"
                    onChange={handleChange}
                    className={`${formErrors.jobtype ? "hasError" : ""}`}
                    style={{ marginTop: "20px" }}
                  >
                    {/* <option key="value-0" value="">
                      {" "}
                    </option>
                    <option key="value-0" value="full-time">
                      full-time{" "}
                    </option>
                    <option key="value-0" value="part-time">
                      part-time{" "}
                    </option> */}
                  </select>
                </div>
                <p className="Error">{formErrors.jobptype}</p>
              </div>{" "}
              <div className="inputbox" style={{ width: "44%" }}>
                <Label
                  val="Highest Qualification"
                  isrequired={true}
                  errorMessage={formErrors.jobtype}
                />

                <div className="TutoJobRoleCheckBox">
                  <select
                    name="jobtype"
                    onChange={handleChange}
                    className={`${formErrors.jobtype ? "hasError" : ""}`}
                    style={{ marginTop: "20px" }}
                  >
                    <option key="value-0" value="">
                      {" "}
                    </option>
                    {/* <option key="value-0" value="full-time">
                      full-time{" "}
                    </option>
                    <option key="value-0" value="part-time">
                      part-time{" "}
                    </option> */}
                  </select>
                </div>
                <p className="Error">{formErrors.jobptype}</p>
              </div>
              <div className="inputbox" style={{ width: "44%" }}>
                <Label
                  val="Name of Institiute"
                  isrequired={true}
                  errorMessage={formErrors.jobtype}
                />

                <div className="TutoJobRoleCheckBox">
                  <select
                    name="jobtype"
                    onChange={handleChange}
                    className={`${formErrors.jobtype ? "hasError" : ""}`}
                    style={{ marginTop: "20px" }}
                  >
                    <option key="value-0" value="">
                      {" "}
                    </option>
                    {/* <option key="value-0" value="full-time">
                      full-time{" "}
                    </option>
                    <option key="value-0" value="part-time">
                      part-time{" "}
                    </option> */}
                  </select>
                </div>
                <p className="Error">{formErrors.jobptype}</p>
              </div>{" "}
              <div className="inputbox" style={{ width: "44%" }}>
                <Label
                  val="Course"
                  isrequired={true}
                  errorMessage={formErrors.jobtype}
                />

                <div className="TutoJobRoleCheckBox">
                  <select
                    name="jobtype"
                    onChange={handleChange}
                    className={`${formErrors.jobtype ? "hasError" : ""}`}
                    style={{ marginTop: "20px" }}
                  >
                    <option key="value-0" value="">
                      {" "}
                    </option>
                    {/* <option key="value-0" value="full-time">
                      full-time{" "}
                    </option>
                    <option key="value-0" value="part-time">
                      part-time{" "}
                    </option> */}
                  </select>
                </div>
                <p className="Error">{formErrors.jobptype}</p>
              </div>{" "}
              <Editable title={"Upload Final Marksheet"} />
              <div className="inputbox" style={{ width: "44%" }}>
                <Label
                  val="Year of Experienece"
                  isrequired={true}
                  errorMessage={formErrors.jobtype}
                />

                <div className="TutoJobRoleCheckBox">
                  <select
                    name="jobtype"
                    onChange={handleChange}
                    className={`${formErrors.jobtype ? "hasError" : ""}`}
                    style={{ marginTop: "20px" }}
                  >
                    <option key="value-0" value="">
                      {" "}
                    </option>
                    {/* <option key="value-0" value="full-time">
                      full-time{" "}
                    </option>
                    <option key="value-0" value="part-time">
                      part-time{" "}
                    </option> */}
                  </select>
                </div>
                <p className="Error">{formErrors.jobptype}</p>
              </div>{" "}
              <div className="inputbox" style={{ width: "44%" }}>
                <Label
                  val="Select Your Expertise Catgoery"
                  isrequired={true}
                  errorMessage={formErrors.jobtype}
                />

                <div className="TutoJobRoleCheckBox">
                  <select
                    name="jobtype"
                    onChange={handleChange}
                    className={`${formErrors.jobtype ? "hasError" : ""}`}
                    style={{ marginTop: "20px" }}
                  >
                    <option key="value-0" value="">
                      {" "}
                    </option>
                    {/* <option key="value-0" value="full-time">
                      full-time{" "}
                    </option>
                    <option key="value-0" value="part-time">
                      part-time{" "}
                    </option> */}
                  </select>
                </div>
                <p className="Error">{formErrors.jobptype}</p>
              </div>
              <div>
                <span>
                  Are You An Ex-Reputed School/ College Or Coaching Teacher?
                </span>
              </div>
              <br />
              <div
                className="row"
                style={{
                  position: "relative",

                  marginBottom: "35px",
                }}
              >
                <span
                  className={`yes  ${option === "yes" ? "active" : ""}`}
                  onClick={() => setOption("yes")}
                >
                  Yes
                </span>
                <span
                  className={`yes  ${option === "no" ? "active" : ""}`}
                  onClick={() => setOption("no")}
                >
                  No
                </span>
              </div>
              <div>
                <span>
                  <span style={{ color: "#6764FF" }}> Note:</span>
                  Any Detail that are not verified yet contribute to profile
                  strength.
                </span>
              </div>
              <div className="JoinUsButton">
                <button className="submitBtn" type="submit">
                  <span style={{ color: "white" }}>Next</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Qualification;