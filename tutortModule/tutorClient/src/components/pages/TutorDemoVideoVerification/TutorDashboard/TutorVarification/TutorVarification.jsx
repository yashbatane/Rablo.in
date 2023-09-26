import React, { useState, useEffect } from "react";
import step1illustrator from "./Image/tutor_illustrator.png";
import "./TutorVarification.css";

import rablo from "./Image/logo.webp";
import ImageUpload from "./ImageUpload";
import validate from "./Validation";
const TutorVarification = ({setShowProfile}) => {
  // Required Star
  const Star = () => {
    return <span style={{ color: "rgb(228,116,112)" }}>*</span>;
  };
  // Lable
  const Label = ({ val, isrequired }) => {
    return (
      <label>
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

  const [formValues, setFormValues] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  // handle change
  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };
  // handlesubmit
  const handleSubmit = (e) => {
    console.log(formErrors);
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    setShowProfile(false);
  };
  //
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const uploadtypes = ["Adhaar Card", "Driving Licence"];
  const [UploadType, setUploadType] = useState(0);
  return (
    <div className="TutorVerificationMainContainer">
      <div className="TutorverificationNav">
        <div className="RabloLogo">
          <img src={rablo} alt="" />
        </div>
      </div>
      <div className="TutorVerificationContainer">
        <div className="TutorVerificationDoddle">
          <img src={step1illustrator} alt="" />
        </div>
        <div className="TutorVerificationFormContainer">
          <div className="TutorVerificationHeader">
            <h1>Start your journey with us 👋</h1>
            <p>Discover the best community of tutor and students</p>
          </div>
          <div className="TutorVerificationForm">
            <form action="" onSubmit={handleSubmit}>
              <div className="inputbox">
                <Label val=" Upload Your Profile Picture " isrequired={true} />
                <ImageUpload {...formValues} />
                <p>Upload your Best Picture.</p>
                <p>
                  Upload your Best Picture. Please make sure the dimensions are
                  (600 x 600px) or square crop.
                </p>
                <p className="Error">{formErrors.profileimage}</p>
                {/* <p className="Error">{formErrors.UploadImage}</p> */}
              </div>
              <div className="inputbox">
                <Label isrequired={true} val="Your Parmanent Address" />
                <input
                  type="text"
                  name="address1"
                  //id=""
                  placeholder="Adress Line 1"
                  value={formValues.address1}
                  className="inputclass"
                  onChange={handleChange}
                  style={{marginTop:"20px"}}
                />
                <p>Address line 1</p>
                <p className="Error">{formErrors.address1}</p>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder=""
                  className="inputclass"
                />
                <p>Address line 2</p>
              </div>
              <div className="formnamecontaier">
                <div className="inputbox">
                  <p>City</p>
                  <input
                    type="text"
                    name="city"
                    //id=""
                    placeholder="City"
                    value={formValues.city}
                    className="inputclass"
                    onChange={handleChange}
                  />

                  <p className="Error">{formErrors.city}</p>
                </div>
                <div className="inputbox" id="state">
                  <p>State</p>

                  <input
                    type="text"
                    name="state"
                    //id=""
                    placeholder="State"
                    value={formValues.state}
                    className="inputclass"
                    onChange={handleChange}
                  />
                  <p className="Error">{formErrors.state}</p>
                </div>
              </div>
              <div className="postal-code">
                <div className="inputbox">
                  <p>Postal Code</p>
                  <input
                    type="text"
                    name="postalcode"
                    //id=""
                    placeholder="Postal Code"
                    value={formValues.postalcode}
                    className="inputclass"
                    onChange={handleChange}
                  />

                  <p className="Error">{formErrors.postalcode}</p>
                </div>
              </div>
              <div className="inputbox">
                <Label val="Mode of Verification" isrequired={true} />
              </div>
              <div className="inputbox">
                <div className="radiobox-hr">
                  {uploadtypes.map((value, index) => {
                    return (
                      <div className="radiobutton" key={index}>
                        <input
                          type="radio"
                          id={value}
                          name="Upload-mode"
                          value={value}
                          checked={value === UploadType}
                          onChange={(e) => setUploadType(e.target.value)}
                        ></input>
                        <label htmlFor={value}>{value}</label>
                      </div>
                    );
                  })}
                </div>
              </div>
              {UploadType === 0 ? (
                <div>
                  <Label
                    // val="Please select any Varification option"
                    isrequired={true}
                  />
                </div>
              ) : (
                <div className="inputbox">
                  <Label val={UploadType + " Number"} isrequired={true} />

                  {UploadType === "Adhaar Card" ? (
                    <div className="RegUploadVarification">
                      <input
                        type="text"
                        placeholder={"Enter Your " + UploadType}
                        className="inputclass"
                        name="adharno"
                        value={formValues.adharno}
                        onChange={handleChange}
                      />
                      <p className="Error">{formErrors.adharno}</p>
                      <div className="inputbox">
                        <Label
                          val={"Upload " + UploadType + " Front-Side"}
                          isrequired={true}
                        />
                        <ImageUpload />
                        <p>Upload your Address Proof</p>
                      </div>
                      <div className="inputbox">
                        <Label
                          val={"Upload " + UploadType + " Back-Side"}
                          isrequired={true}
                        />
                        <ImageUpload />
                        <p>Upload your Address Proof</p>
                      </div>
                    </div>
                  ) : (
                    <div className="RegUploadVarification">
                      <input
                        type="text"
                        placeholder={"Enter yYour " + UploadType}
                        className="inputclass"
                      />
                      <div className="inputbox">
                        <Label val={"Upload " + UploadType} isrequired={true} />
                        <ImageUpload />
                        <p>Upload your Address Proof</p>
                      </div>
                    </div>
                  )}
                </div>
              )}
              <div className="JoinUsButton">
                <button className="btn1" type="submit">
                  Join Us
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorVarification;
