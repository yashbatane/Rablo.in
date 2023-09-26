import React, { useContext } from "react";
import "./FormDashboard.css";
import formDataContext from "../../../../context/formData/formDataContext";

const FormChild = ({label,name,placeholder,type,value,handlechange,isEmpty}) => {
  return (
    <div className="FormChild">
      <label htmlFor="">{label} <span style={{color:'red'}}>
        {name==='queries'?'':'*'}
        </span></label>
      <input type={type} placeholder={placeholder} name={name}
      value={value} onChange={handlechange}/>
      {(value===''&& !(name==='queries')&& isEmpty) &&<p>this field is required </p>}
    </div>
  );
};

const Selection=({handlechange,value,isEmpty})=>{
    return(
    <div className="FormChild">
      <label style={{marginBottom:'.5rem'}}>Country <span style={{color:'red'}}></span></label>
      <select name="country" onChange={handlechange}>
        <option >-Select-</option>
        <option value="India">India</option>
        <option value="Pakistan">Pakistann</option>
        <option value="Napal">Nepal</option>
        <option value="Bhutan">Bhutan</option>
        <option value="America">America</option>
        <option value="Europe">Europe</option>
      </select>
      {(value===''&& isEmpty) &&<p style={{marginTop:'.5rem'}}>this field is required </p>}
    </div>
    )
}
const Selection1=({handlechange,value,isEmpty})=>{
    return(
    <div className="FormChild">
      <label style={{marginBottom:'.5rem'}}>Preferred Class<span style={{color:'red'}}>*</span></label>
      <select name="preferredclass" onChange={handlechange}>
        <option value="">-Select-</option>
        <option value="Pre-Primary">Pre-Primary</option>
        <option value="Class-1">Class-1</option>
        <option value="Class-2">Class-2</option>
        <option value="Class-3">Class-3</option>
        <option value="Class-4">Class-4</option>
        <option value="Class-5">Class-5</option>
        <option value="Class-6">Class-6</option>
        <option value="Class-7">Class-7</option>
        <option value="Class-8">Class-8</option>
        <option value="Class-9">Class-9</option>
        <option value="High School">High School</option>
        <option value="Junior Year (11th)">Junior Year (11th)</option>
        <option value="Senior Year (12th)">Senior Year (12th)</option>
      </select>
      {(value===''&& isEmpty) &&<p style={{marginTop:'.5rem'}}>this field is required </p>}
      
    </div>
    )
}

const RadioCheck = ({type,label,labelChild1,name,labelChild2,labelChild,handlechange,isEmpty,value}) => {
  return (
    <div className="RadioCheck">
      <label >
        {label} <span style={{color:'red'}}>*</span>
      </label>
      <div className="RadioCheckChildContainer">
        <div className="RadioCheckChild">
          <div>
            <input type={type}  name={name} onChange={handlechange} value={type==='radio'?'Male':'At-Home'}/>
          </div>
          <div>
            <label >{labelChild}</label>
          </div>
        </div>
        <div className="RadioCheckChild">
          <div>
            <input type={type}  name={name} onChange={handlechange} value={type==='radio'?'Female':'Online'}/>
          </div>
          <div>
            <label >{labelChild1}</label>
          </div>
        </div>
        <div className="RadioCheckChild">
          <div>
            <input type={type}  name={name} onChange={handlechange} value={type==='radio'?'Prefer not to say':'Hybrid'}/>
          </div>
          <div>
            <label >{labelChild2}</label>
          </div>
        </div>
      </div>
      {value===''&& isEmpty &&<p>this field is required </p>}
      
    </div>
  );
};



const FormDashboard = () => {
  const {formData,handleChange,isEmpty}=useContext(formDataContext);
    console.log(formData);
  return (
    <div className="FormDashboardContainer">
      <div className="FormDashboardWrapper"  style={{marginBottom:"100px"}}>
        <h1>Let's know more about each other.</h1>
        <form action="" className="formInputContainer">
          <div className="div1">
            <div className="divChild">
              <FormChild name='fname' placeholder='First Name'
              label='First Name' type='text' 
              value={formData.fname} handlechange={handleChange}
              isEmpty={isEmpty}/>

            </div>
            <div className="divChild">
              <FormChild name='lname' placeholder='Last Name'
              label='Last Name' type='text'
              value={formData.lname} handlechange={handleChange}
              isEmpty={isEmpty}/>
            </div>
          </div>
          <div className="div">
            <Selection1 handlechange={handleChange} value={formData.preferredclass} isEmpty={isEmpty}/>
          </div>
          <div className="div">
            <FormChild name='mobile' placeholder='Mobile Number'
              label='Phone/Mobile' type='text'
              value={formData.mobile} handlechange={handleChange}
              isEmpty={isEmpty}/>
          </div>
          <div className="div">
          <FormChild name='expertise' placeholder='E.g Science,Math,Economics,Geography etc'
              label='Expertise Subjects' type='text'
              value={formData.expertise} handlechange={handleChange} isEmpty={isEmpty}/>
          </div>
          <div className="div">
          <FormChild name='email' placeholder='Email Address'
              label='Email' type='email'
              value={formData.email} handlechange={handleChange} isEmpty={isEmpty}/>
          </div>
          <div className="div1">
            <RadioCheck type='checkbox' label='Preferred Mode' labelChild='At-Home' labelChild1='Online' labelChild2='Hybrid' 
            name='preferredmode' handlechange={handleChange} value={formData.preferredmode} isEmpty={isEmpty}/>
          </div>
          <div className="div">
            <RadioCheck type='radio' label='Gender' labelChild='Male' labelChild1='Female' labelChild2='Prefer not to say' name='gender' value={formData.gender} handlechange={handleChange} isEmpty={isEmpty}/>
          </div>
          <h1 style={{marginBottom:'1rem'}}>Address</h1>
          <div className="div">

          <FormChild name='city' placeholder='City'
              label='City' type='text' value={formData.city} handlechange={handleChange} isEmpty={isEmpty}/>
          </div>
          <div className="div">
          <FormChild name='state' placeholder='State'
              label='State' type='text' value={formData.state} handlechange={handleChange} isEmpty={isEmpty}/>
          </div>
          <div className="div">
          <FormChild name='zipcode' placeholder='Zip Code'
              label='Zip Code' type='text' value={formData.zipcode} handlechange={handleChange} isEmpty={isEmpty}/>
          </div>
          <div className="div">
            <Selection handlechange={handleChange} value={formData.country} isEmpty={isEmpty}/>
          </div>
        </form>
       
      </div>
    </div>
  );
};

export default FormDashboard;
export {FormChild}
