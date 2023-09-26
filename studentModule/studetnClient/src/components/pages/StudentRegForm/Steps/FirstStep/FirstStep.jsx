import React, { useState } from "react";
import "./FirstStep.css";
import sealighthouse from "../../resources/SeaLighthouse-sunset.png";

import logo from "../../resources/rablo.png";
import backbtn from "../../resources/back.png";

const FirstStep = () => {
  const [formValues, setFormValues] = useState({
    address: "",
    city: "",
    dob: "",
    "first name": "",
    gender: "",
    fatherName: "",
    "last name": "",
    mobile: "",
    postalCode: "",
    referralCode: "",
    state: "",
  });
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value.trim() });
    console.log(formValues.gender);
  };

  const verifyForm = () => {
    formValues["first name"] == ""
      ? setFirstNameErr("This field cannot be blank")
      : setFirstNameErr("");
    formValues["last name"] == ""
      ? setLastNameErr("This field cannot be blank")
      : setLastNameErr("");
    formValues["gender"] == ""
      ? setGenderErr("This field cannot be blank")
      : setGenderErr("");
    formValues["mobile"] == ""
      ? setMobileErr("This field cannot be blank")
      : setMobileErr("");
    formValues["fatherName"] == ""
      ? fatherNameErr("This field cannot be blank")
      : fatherNameErr("");
    formValues["dob"] == ""
      ? setDobErr("This field cannot be blank")
      : setDobErr("");
    formValues["address"] == ""
      ? setAddressErr("This field cannot be blank")
      : setAddressErr("");
    formValues["state"] == ""
      ? setStateErr("This field cannot be blank")
      : setStateErr("");
    formValues["city"] == ""
      ? setCityErr("This field cannot be blank")
      : setCityErr("");
    formValues["mobile"] == ""
      ? setMobileErr("This field cannot be blank")
      : setMobileErr("");
    formValues["postalCode"] == ""
      ? setPostalCodeErr("This field cannot be blank")
      : setPostalCodeErr("");
    formValues["referralCode"] == ""
      ? setReferralCodeErr("This field cannot be blank")
      : setReferralCodeErr("");
  };

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

  const [firstNameErr, setFirstNameErr] = useState("");
  const [lastNameErr, setLastNameErr] = useState("");
  const [mobileErr, setMobileErr] = useState("");
  const [genderErr, setGenderErr] = useState("");
  const [addressErr, setAddressErr] = useState("");
  const [fathernameerror, fatherNameErr] = useState("");
  const [fatherfirstName, setfatherfirstName] = useState("");
  const [fatherlastname, setfatherlastname] = useState("");
  const [dobErr, setDobErr] = useState("");
  const [stateErr, setStateErr] = useState("");
  const [cityErr, setCityErr] = useState("");
  const [postalCodeErr, setPostalCodeErr] = useState("");
  const [referralCodeErr, setReferralCodeErr] = useState("");
  return (
    <>
      <div className="headerImageLogo">
        <img className="backHeaderImg" src={backbtn} alt="" />
        <img className="logoHeaderImage" src={logo} alt="rablo.in" />
      </div>
      <div className="firststep-grid-container">
        <div className="image-container-grid-firstStep">
          <img src={sealighthouse} alt="sealighthouse image" />
        </div>
        <div className="personalDetailContainer">
          <div className="HeadingContainer">
            <h1>Personal Details</h1>
            <p>Fill out the details</p>
          </div>
          {/* <pre>{JSON.stringify(formValues, undefined, 2)}</pre> */}

          <form action="" onSubmit={handleSubmit}>
            <h2 className="subheading-firststep" style={{ width: "100%" }}>
              Student Details
            </h2>
            <div className="inputbox" style={{ width: "48%" }}>
              <Label
                val="First Name"
                isrequired={true}
                errorMessage={formErrors.firstName}
              />
              <input
                type="text"
                name="first name"
                onChange={handleChange}
              ></input>
              <div className="errorBox">{firstNameErr}</div>
            </div>
            <div className="inputbox" style={{ width: "48%" }}>
              <Label
                val="Last Name"
                isrequired={true}
                errorMessage={formErrors.lastName}
              />
              <input type="text" name="last name" onChange={handleChange} />
              <div className="errorBox">{lastNameErr}</div>
            </div>

            <div className="inputbox" style={{ width: "48%" }}>
              <Label
                val="Gender"
                isrequired={true}
                errorMessage={formErrors.gender}
              />
              <div className=" radioButtonDiv">
                <div className="radiobutton">
                  <input
                    type="button"
                    id="male"
                    name="gender"
                    value="male"
                    onClick={handleChange}
                    style={{ display: "none" }}
                  />
                  <label htmlFor="male">Male</label>
                </div>

                <div className="radiobutton ">
                  <input
                    type="button"
                    id="female"
                    style={{ display: "none" }}
                    name="gender"
                    value="female"
                    onClick={handleChange}
                    htmlFor="female"
                  />
                  <label htmlFor="female">Female</label>
                </div>
                <div className="radiobutton ">
                  <input
                    type="button"
                    id="others"
                    style={{ display: "none" }}
                    name="gender"
                    value="others"
                    onClick={handleChange}
                  />
                  <label htmlFor="others">Others</label>
                </div>
              </div>
              <div className="errorBox">{genderErr}</div>
            </div>
            <div className="inputbox" style={{ width: "48%" }}>
              <Label
                val="mobile Number(whatsapp)"
                isrequired={true}
                errorMessage={formErrors.mobile}
              />
              <input
                type="number"
                name="mobile"
                onChange={handleChange}
              ></input>
              <div className="errorBox">{mobileErr}</div>
            </div>

            <div className="inputbox" style={{ width: "48%" }}>
              <Label
                val="Date Of Birth"
                isrequired={true}
                errorMessage={formErrors.dob}
              />

              <input
                type="text"
                placeholder="MM/DD/YYYY"
                onfocus="(this.type='date')"
                name="dob"
                onChange={handleChange}
              ></input>
              <div className="errorBox">{dobErr}</div>
            </div>
            <div className="inputbox" style={{ width: "48%" }}>
              <Label
                val="Father's Name"
                isrequired={true}
                errorMessage={formErrors.fatherName}
              />
              <input
                type="text"
                name="fatherName"
                onChange={handleChange}
              ></input>
              <div className="errorBox">{fathernameerror}</div>
            </div>
            <h2 className="subheading-firststep" style={{ width: "100%" }}>
              Parent Details
            </h2>

            <div className="inputbox" style={{ width: "48%" }}>
              <Label
                val="First Name"
                isrequired={true}
                errorMessage={formErrors.fatherName}
              />
              <input
                type="text"
                name="firstName"
                onChange={handleChange}
              ></input>
              <div className="errorBox">{fathernameerror}</div>
            </div>
            <div className="inputbox" style={{ width: "48%" }}>
              <Label
                val="Last Name"
                isrequired={true}
                errorMessage={formErrors.fatherName}
              />
              <input
                type="text"
                name="Last Name"
                onChange={handleChange}
              ></input>
              <div className="errorBox">{fathernameerror}</div>
            </div>
            <div className="inputbox" style={{ width: "100%" }}>
              <Label
                val="Address"
                isrequired={true}
                errorMessage={formErrors.address}
              />
              <input type="text" name="address" onChange={handleChange}></input>
              <div className="errorBox">{addressErr}</div>
            </div>

            <div className="inputbox" style={{ width: "48%" }}>
              <Label
                val="State"
                isrequired={true}
                errorMessage={formErrors.state}
              />
              <input type="text" name="state" onChange={handleChange}></input>
              <div className="errorBox">{stateErr}</div>
            </div>

            <div className="inputbox" style={{ width: "48%" }}>
              <Label
                val="City"
                isrequired={true}
                errorMessage={formErrors.city}
              />
              <input type="text" name="city" onChange={handleChange}></input>
              <div className="errorBox">{cityErr}</div>
            </div>

            <div className="inputbox" style={{ width: "48%" }}>
              <Label
                val="Postal Code"
                isrequired={true}
                errorMessage={formErrors.postalCode}
              />
              <input
                type="number"
                name="postalCode"
                onChange={handleChange}
              ></input>
              <div className="errorBox">{postalCodeErr}</div>
            </div>
            <div className="inputbox" style={{ width: "48%" }}>
              <Label
                val="Referral Code"
                isrequired={true}
                errorMessage={formErrors.referralCode}
              />
              <input
                type="text"
                name="referralCode"
                onChange={handleChange}
              ></input>
              <div className="errorBox">{referralCodeErr}</div>
            </div>
            <div className="buttonContainer">
              <button
                style={{ float: "right" }}
                type="submit "
                className="submitButton"
                onClick={handleSubmit}
              >
                Next &gt;
              </button>
              <div
                className="pageNo"
                style={{ float: "left", color:"rgba(0, 0, 0, 0.4)" }}
              >
                1/2
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FirstStep;
