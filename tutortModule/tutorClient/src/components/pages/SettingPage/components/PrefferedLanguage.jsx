import React, { useState, useEffect } from "react";
import "./PrefferedSection.css";
import MultipleSelectPlaceholder from "./PrefferedLanguage";
// import illustrator from "./Image/student_illustrator.png";
// import rablo from "../../../img/logo.webp";
// import validate from "./Validation";
import illustrator from "./Image/student_illustrator.png";
import rablo from "./Image/logo.webp";
import validate from "./Validation";
const PreferenceLanguage = ({ hidePreference }) => {
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
        style={{ marginLeft: "270px" }}
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
  const [formValues, setFormValues] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
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
      <div className="prefferedSectionContainer">
        <div className="PreferenceForm">
          <form>
            <div className="inputbox">
              <Label
                style={{ marginLeft: "10px" }}
                val="Preffered Language"
                isrequired={false}
              />

              <div className="radiobox-hr">
                {preferredLanguage.map((item) => {
                  return (
                    <div
                      className="radiobutton"
                      style={{
                        width: "170px",
                        height: "50px",
                        padding: "5px 5px",
                      }}
                      key={item.key}
                    >
                      <input
                        type="button"
                        id={item.key}
                        name="prefferedLanguage"
                        value={item.text}
                        checked={item.text === formValues.prefferedLanguage}
                        className={
                          item.text === formValues.prefferedLanguage
                            ? "checked"
                            : ""
                        }
                        style={{
                          width: "170px",
                          height: "50px",
                          padding: "5px 5px",
                          border: "#7209B7 2px solid",
                        }}
                        onClick={(e) => handleChange(e)}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PreferenceLanguage;
