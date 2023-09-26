import React, { useContext, useState } from 'react'
/* import { multiStepContext } from '../MultistepContext' */
/* const axios = require('axios').default; */

import './SecondStep.scss'

export default function SecondStep() {

  /*   const {step , formValues , setFormValues , userId , googleJWT} = useContext(multiStepContext) */

  const [step, setStep] = useState(0)
  const [formValues, setFormValues] = useState({ gender: "" })
  const sidebarTitles = ["Login", "Basic Details"]
  const [googleJWT, setGoogleJWT] = useState("")
  const [userId, setUserId] = useState("")

  const handleChange = e => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = e => {
    /*  e.preventDefault();
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
     }) */

  };

  const handleVerifyClick = () => {
    setOtpVerificationModalOpen(true)
    /*  axios.post("http://localhost:6500/api/phoneAuthentication/login" , {phoneNumber : formValues.phone})
     .then(function(response){
       console.log(response)
     })
     .catch(function(error){
       console.log(error)
     }) */
  }

  return (
    <>
      <div >
         {/* First name */}
         <div className='TutorBasicDetailForm lineUp'>
         <div className='inputbox tbd-fname'>
                  <label>Student Name</label>
                  <input
                    type='text'
                    className="inputclass"
                    name='studentName'
                    placeholder='Student Name'
                    autoComplete='off'
                    value={formValues.studentName}
                    onChange={handleChange}
                  />
                  {/* <p className="Error" >{formErrors.firstname}</p> */}
                </div>

                {/* last name  */}
                <div className='inputbox tbd-lname' id='lnamebox'>
                <label>Parent Name</label>
                  <input
                    type='text'
                    className={`inputclass`}
                    placeholder='Parent Name'
                    autoComplete='off'
                    name='parentName'
                    value={formValues.parentName}
                    onChange={handleChange}
                  />
                  {/* <p className="Error">{formErrors.lastname}</p> */}
                </div>
              
       
        <div className='inputbox tbd-whtsno'>
        <label>WhatsApp Number</label>
          <input className='inputclass' placeholder='WhatsApp Number' name='whatsappNumber' onChange={handleChange} />
        </div>

        <div className='inputbox tbd-schoolName'>
        <label>School Name</label>
        
          <input className='inputclass' placeholder='School Name' name='SchoolName' onChange={handleChange} />
        
        </div>

        <div className='inputbox tbd-schoolBoard'>
        <label>School Board</label>
        
          <input className='inputclass' placeholder='School Board' name='SchoolBoard' onChange={handleChange} />
        
        </div>

        <div className='inputbox tbd-class'>
        <label>Class</label>
        
          <input className='inputclass' placeholder='Class' name='Class' onChange={handleChange} />
        
        </div>

        <div className='inputbox tbd-modeclass'>
        <label>Mode of Class</label>
          <select
            name='modeOfClass'
            id='classm'
            onChange={handleChange}
          >
            <option value='null'>Select Mode Of Class</option>
            <option value='Online'>Online</option>
            <option value='Offline'>Offline</option>
            <option value='Hybrid'>Hybrid</option>
          </select>
        </div>

        {/* Gender */}
        <div className='inputbox tbd-gender'>
          <label>Gender</label>
          {/* "selected" className is applied if the gender is selected */}
          <div className='radiobuttonGender'>
            <div className='radiobuttonDiv'>
              <input
                type='radio'
                id='Male'
                name='gender'
                value='Male'
                onChange={handleChange}
              />
              <label
                htmlFor='Male'
                className={`GenderLabel ${formValues.gender === 'Male' ? 'selected' : ''
                  }`}
              >
                <span className='GenderIcon'> 👨</span> Male
              </label>
            </div>
            <div className='radiobuttonDiv'>
              <input
                type='radio'
                id='Female'
                name='gender'
                onChange={handleChange}
                value='Female'
              />
              <label
                htmlFor='Female'
                className={`GenderLabel ${formValues.gender === 'Female' ? 'selected' : ''
                  }`}
              >
                <span className='GenderIcon'>🚺</span> Female
              </label>
            </div>
            <div className='radiobuttonDiv'>
              <input
                type='radio'
                id='Transgender'
                name='gender'
                onChange={handleChange}
                value='Transgender'
              />
              <label
              
                htmlFor='Transgender'
                className={`GenderLabel ${formValues.gender === 'Transgender' ? 'selected' : ''
                  }`}
              >
                <span className='GenderIcon'>🌈</span> Transgender
              </label>
            </div>
          </div>
        
          {/* <p className="Error">{formErrors.gender}</p> */}
        </div>
        <div className='inputbox tbd-agegrp'>
        <label>Age Group</label>
          <select
            name='ageGroup'
            id='agegroup'
            onChange={handleChange}
          >
            <option value='null'>Select age group</option>
            <option value='18-25 Years'>18-25 Years</option>
            <option value='25-35 Years'>25-35 Years</option>
            <option value='35+ Years'>35+ Years</option>
          </select>
        </div>
        <div className="inputbox tbd-address">
        <label >Address</label>
        <input className='inputclass' placeholder='Address' name='address' onChange={handleChange} />
        <input className='inputclass' placeholder='Zipcode' name='zipcode' onChange={handleChange} />
         
        
        </div>
        
        <div className="JoinUsButton">
        <button className='btn1' onClick={handleSubmit}>Submit</button>
        </div>
        </div>
      </div>
      
    </>
  )
}
