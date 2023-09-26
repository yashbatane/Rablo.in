import React, {useEffect, useState, useContext } from "react";
import formContext from "../context/form/formContext"; //Context
import DatePicker from "react-multi-date-picker"

const BasicDetails = () => {
  const handleChange = () => { setFormData({ ...formData, [e.target.name]: e.target.value });}
  const { formData, setFormData } = useContext(formContext);
  const [DOB,setDOB] = useState(new Date());
  useEffect(()=>{
    setFormData({ ...formData, DOB: DOB?.format?.("MMMM D YYYY")})
    
  },[DOB]);

  return (
    <div>
    
     
      <form
        className="tutorReg__basicDetails"
        onSubmit={(e) => {
          e.preventDefault();
          // validate form
          setFormData({ ...formData, step: ++formData.step });
        }}
      >
        <div className="tutor__basicDetails__nameWrapper">
        <div className="input__wrapper">
          <label htmlFor="firstName">
            First Name
            </label>
            <input
            id="firstName"
            name="firstName"
              type="text"
              placeholder="First Name"
              value={formData?.firstName || ""}
              onChange={(e) => {
                setFormData({ ...formData, firstName: e.target.value });
              }}
            />
          
        </div>

        <div className="input__wrapper">
          <label htmlFor="lastName">
            Last Name
            </label>
            <input
              type="text"
              id="lastName"
              placeholder="Last Name"
              value={formData?.lastName || ""}
              onChange={(e) => {
                setFormData({ ...formData, lastName: e.target.value });
              }}
            />
          
        </div>
        </div>
        <div className="input__wrapper">
          <label htmlFor="fatherName">
            Father's/Mother's Name
            </label>
            <input
              type="text"
              id="fatherName"
              placeholder="Father/Mother Name"
              value={formData?.fatherName || ""}
              onChange={(e) => {
                setFormData({ ...formData, fatherName: e.target.value });
              }}
            />
          
        </div>

        <div className="input__wrapper">
          <span>Gender</span>
        <div className="tutor__basicDetails__genderWrapper">
          <div className="basicDetails__genderWrapper">
          <label htmlFor="male">
          👨Male
          </label>
            <input
              type="radio"
              id="male"
              value="male"
              name="gender"
              onClick={(e) => {
                setFormData({ ...formData, gender: e.target.value });
              }}
            />
          </div>
          <div className="basicDetails__genderWrapper">
         
          
          <label htmlFor="female">
          🚺 Female
            </label>
            <input
              type="radio"
              id="female"
              value="female"
              name="gender"
              onClick={(e) => {
                setFormData({ ...formData, gender: e.target.value });
              }}
            />
            </div>
          <div className="basicDetails__genderWrapper">
         
          
          <label htmlFor="otherGender">
          🌈 Other
            </label>
            <input
              type="radio"
              id="otherGender"
              value="other"
              name="gender"
              onClick={(e) => {
                setFormData({ ...formData, gender: e.target.value });
              }}
            />
            </div>
          
          
        </div>
        </div>
       

        <div className="input__wrapper">
          <label htmlFor="DOB">
            DOB
            </label>
            <DatePicker 
      value={DOB}
      onChange={setDOB}
        
    />
          
          
        </div>

        <div className="input__wrapper">
          <label htmlFor="phone">
            Phone
            </label>
            <input
              type="number"
              id="phone"
              value={formData?.phone || ""}
              placeholder="Phone"
              onChange={(e) => {
                setFormData({ ...formData, phone: e.target.value });
              }}
            />
         
        </div>

        <div className="input__wrapper">
          <label htmlFor={"email"}>
            Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="E-mail"
              value={formData?.email || ""}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
              }}
            />
    
        </div>

        <div className="input__wrapper">
          <label htmlFor="nationality">
            Nationality
            </label>
            <select
              id="nationality"
              value={formData?.nationality||""}
              onChange={(e) => {
                setFormData({...formData,nationality:e.target.value});
              }}
            >
              <option value={0}>Select</option>
              <option value="country1">country 1</option>
              <option value="country2">country 2</option>
              <option value="country3">country 3</option>
              <option value="country4">country 4</option>
            </select>
        
        </div>

       
      </form>
    </div>
  );
};

export default BasicDetails;
