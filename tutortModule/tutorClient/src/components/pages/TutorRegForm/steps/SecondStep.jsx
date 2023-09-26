import React, { useContext, useState } from "react";
// import SidebarBg from "../../TutorDashboard/TutorVarification/Image/SeaLighthouse.png";
import { AiOutlineArrowLeft } from "react-icons/ai";
import CustomDatePicker from "./CustomDatePicker";
import { RiLogoutCircleRLine } from "react-icons/ri";
/* import { multiStepContext } from '../MultistepContext' */
import PhoneVerificationModal from "../PhoneVerificationModal";
import "./SecondStep2.css";
// import SideBar from "../Dashboard/TutorDashboard/DashboardComponents/Sidebar/TutordashboardSidebar";
// import ImageUpload from "../../TutorDashboard/TutorVarification/TutorVarification/ImageUpload";


import female from "./female.png";
import male from "./Vector.png";
import { RiCalendar2Line } from 'react-icons/ri';
const axios = require("axios").default;

export default function SecondStep() {
  const [showDatePicker, setShowDatePicker] = useState(false);
  
  const handleClickIcon = () => {
    setShowDatePicker(true);
  };
  const [stateOptions, setStateOptions] = useState([
    "State 1",
    "State 2",
    "State 3",
  ]);
  const [cityOptions, setCityOptions] = useState([
    "City 1",
    "City 2",
    "City 3",
  ]); // Example city options
  /*   const {step , formValues , setFormValues , userId , googleJWT} = useContext(multiStepContext) */
  const [otpVerficationModalOpen, setOtpVerificationModalOpen] =
    useState(false);
  const [step, setStep] = useState(0);
  const [colorBtn, setcolorBtn] = useState(false);
  const [formValues, setFormValues] = useState({
    address: "",
    city: "",
    dob: "",
    "first name": "",
    gender: "",
    houseNo: "",
    "last name": "",
    mobile: "",
    postalCode: "",
    referralCode: "",
    state: "",
  });
  const sidebarTitles = ["Login", "Basic Details"];
  const [googleJWT, setGoogleJWT] = useState("");
  const [userId, setUserId] = useState("");
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
    formValues["houseNo"] == ""
      ? setHouseNoErr("This field cannot be blank")
      : setHouseNoErr("");
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
    e.preventDefault();
     console.log(formValues);
     const  id = userId ;
     const google_jwt = googleJWT;
     
     axios.post('http://localhost:6500/api/registration/tutor' , 
     {
       ...formValues ,
       userId : id 
     } ,
     {
       headers:{
         authorization : `Bearer ${google_jwt}`
       }
     })
     .then(function(response){
       console.log(response)
     })
     .catch(function(error){
       console.log(error)
     })
  };

  const handleVerifyClick = () => {
    setOtpVerificationModalOpen(true);
    axios.post("http://localhost:6500/api/phoneAuthentication/login" , {phoneNumber : formValues.phone})
     .then(function(response){
       console.log(response)
     })
     .catch(function(error){
       console.log(error)
     }) 
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
  const [houseNoErr, setHouseNoErr] = useState("");
  const [dobErr, setDobErr] = useState("");
  const [stateErr, setStateErr] = useState("");
  const [cityErr, setCityErr] = useState("");
  const [postalCodeErr, setPostalCodeErr] = useState("");
  const [referralCodeErr, setReferralCodeErr] = useState("");
  return (
    <>
      {/* <SideBar/> */}
      {/* <div className="sidebar">
        <div className="sidebar-container">
          <img src={SidebarBg} alt="Sidebarbg-image" />
          <div className="arrow-logo-wrapper">
            <AiOutlineArrowLeft className="arrow-icon" />
            <div className="rablo-logo">
              <img src={Logo} alt="Logo-image" />
            </div>
          </div>
          <div className="logout-btn">
            <RiLogoutCircleRLine className="logout-icon" />
            Logout
          </div>
        </div>
      </div> */}
      <div className="form-section">
        <div className="top-section">
          Having Trouble? <span>Need Help!</span>
        </div>
        <div className="HeadingContainer">
            <h1>Personal Details</h1>
            <p>Fill out the details</p>
          </div>
        <div className="personalDetailContainer">
          
          {/* <div className="form-container">
            <div className="progress">
              <div>Start</div>
              <div className="line">
                <div className="line-completed">
                  <div className="progress-indication">65%</div>
                </div>
              </div>
              <div>Completed</div>
            </div>
          </div> */}
          
          {/* <pre>{JSON.stringify(formValues, undefined, 2)}</pre> */}
          <div
              className="form-container"
              style={{
                background: "#FFFFFF"
              }}
            >
              <div
                className="progress"
                style={{
                  background: "#FFFFFF",
                  // marginTop: "15%",
                  // margin:"30%"
                }}
              >
                <div>Start</div>
                <div
                  className="line"
                 
                >
                  <div className="line-completed">
                    <div className="progress-indication">65%</div>
                  </div>
                </div>
                <div style={{ padding: "5px" }}>Completed</div>
              </div>
            </div>
          <form action="" onSubmit={handleSubmit}>
            <div className="maindiv">
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
                  placeholder="  Type your First Name"
                ></input>
                <div className="errorBox">{firstNameErr}</div>
              </div>
              <div className="inputbox" style={{ width: "48%" }}>
                <Label
                  val="Last Name"
                  isrequired={true}
                  errorMessage={formErrors.lastName}
                />

                <input
                  type="text"
                  name="last name"
                  onChange={handleChange}
                  placeholder="   Type your Last Name"
                />
                <div className="errorBox">{lastNameErr}</div>
              </div>
            </div>

            <div
              className="maindiv"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <Label
                val="Upload your Best Profile Picture"
                isrequired={false}
              />
              <ImageUpload />
            </div>

            <div className="maindiv"style={{ marginTop: "9px" }}>
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
                    <label htmlFor="male">
                      {/* <FcBusinessman /> */}
                      <img src={male} alt="" style={{width : '15px', alignContent:"center",paddingRight:"3%"}}/>
                      Male
                    </label>
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
                    <label htmlFor="female">
                      {/* <FcBusinesswoman /> */}
                      <img src={female} alt="" style={{width : '15px', alignContent:"center",paddingRight:"3%"}}/>
                      Female
                    </label>
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
                  val="Mobile Number(WhatsApp)"
                  isrequired={true}
                  errorMessage={formErrors.mobile}
                />
                <input
                  type="number"
                  name="mobile"
                  onChange={handleChange}
                  placeholder="   +91 85234 52648"
                ></input>
                <div className="errorBox">{mobileErr}</div>
              </div>
            </div>

            <div className="maindiv">
              <div className="inputbox" style={{ width: "48%" }}>
                <Label
                  val="Apartment/House No"
                  isrequired={true}
                  errorMessage={formErrors.houseNo}
                />
                <input
                  type="text"
                  name="houseNo"
                  onChange={handleChange}
                  placeholder="   Type your Address"
                  
                ></input>
                <div className="errorBox">{houseNoErr}</div>
              </div>

              <div className="inputbox" style={{ width: "48%" }}>
                <Label
                  val="Date Of Birth"
                  isrequired={true}
                  errorMessage={formErrors.dob}
                  
                />
                
                <div className="inputWithIcon">
                 <input
                  type="text"
                  name="dob"
                  onChange={handleChange}
                  placeholder="DD-MM-YYYY"
                  onBlur={(e) => (e.target.type = "text")}
                  onFocus={(e) => (e.target.type = "date")}
                />
    <RiCalendar2Line className="calendarIcon" onClick={handleClickIcon} />
  </div>
  {showDatePicker && <CustomDatePicker />}
                  
                <div className="errorBox">{dobErr}</div>
              </div>
            </div>

            <div className="maindiv">
              <div className="inputbox" style={{ width: "100%",marginTop:"0" }}>
                <Label
                  val="Address"
                  isrequired={true}
                  errorMessage={formErrors.address}
                  // style={{ marginTop: "0" }}
                />
                <input
                  type="text"
                  name="address"
                  onChange={handleChange}
                  placeholder="   Address Line 2"
                ></input>
                <div className="errorBox">{addressErr}</div>
              </div>
            </div>
            <div className="maindiv"style={{ height: "114px" }}>
              

              <div
                className="inputbox"
                style={{ width: "48%", marginTop: "3%" }}
              >
                <Label
                  val="City"
                  isrequired={true}
                  errorMessage={formErrors.city}
                />
                <select name="city" onChange={handleChange}>
                  {cityOptions.map((city, index) => (
                    <option key={index} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
                <div className="errorBox">{cityErr}</div>
              </div>
              <div
                className="inputbox"
                style={{ width: "48%", marginTop: "3%" }}
              >
                <Label
                  val="State"
                  isrequired={true}
                  errorMessage={formErrors.state}
                />
                <select
                  name="state"
                  onChange={handleChange}
                  placeholder="sdkewoghn"
                >
                  {/* <option value="">Select State</option> */}
                  <span style={{ color: "gray" }}>
                    <option value="" disabled selected style={{ color: "red" }}>
                      <span style={{ color: "gray" }}>Select City</span>
                    </option>
                  </span>
                  {stateOptions.map((state, index) => (
                    <option key={index} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
                <div className="errorBox">{stateErr}</div>
              </div>
            </div>

            <div className="maindiv" style={{ height: "114px" }}>
              <div
                className="inputbox"
                style={{ width: "48%", marginTop: "3%" }}
              >
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
              <div
                className="inputbox"
                style={{ width: "48%", marginTop: "3%" }}
              >
                <Label
                  val="Referral Code"
                  // isrequired={true}
                  errorMessage={formErrors.referralCode}
                />
                <input
                  type="text"
                  name="referralCode"
                  onChange={handleChange}
                ></input>
                <div className="errorBox">{referralCodeErr}</div>
              </div>
            </div>

            <div className="buttonContainer" style={{ marginTop: "5%" }}>
              <button
                type="submit "
                className="submitButton"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
