import React, { useContext, useState } from "react";
import "./FormDashboard.css";
import { FormChild } from "./FormDashboard";
import formDataContext from "../../../../context/formData/formDataContext";
import { CloseRounded } from "@mui/icons-material";



const Tab=({value,id,handleDelete})=>{

  
    return(
      <div className="tabContainer" id={id}>
        <div className="tabWrapper" >
          <span>{value}</span>
          <div className="tabButton">
          <CloseRounded onClick={handleDelete}/>
          </div>
        </div>
        
      </div>
    )
  }





const Selection = ({ handlechange,value,isEmpty }) => {
  return (
    <div className="FormChild">
      <label style={{ marginBottom: ".5rem" }}>
        What challenge or problem are you facing as an educator that you want
        Rablo to solve? <span style={{ color: "red" }}>*</span>
      </label>
      <div style={{width:'auto',display:'flex',flexWrap:'wrap',marginBottom:'.3rem',gap:'.2rem'}}>
      {value.map((item,index)=>{
      return(
        <Tab value={item} id={index} key={index} handleDelete={''}/>
      )
      })}
      </div>
      <select name="challenges" onChange={handlechange} >
        <option value="">Please select all that apply</option>
        <option value="Heavy commission and Charges in the market">
          Heavy commission and Charges in the market
        </option>
        <option value="Expensive Marketing and Outreach course">
          Expensive Marketing and Outreach course
        </option>
        <option value="Class Management">Class Management</option>
        <option value="Payment Security risk and Time management">
          Payment Security risk and Time management
        </option>
        <option value="Student Aquisition">Student Aquisition</option>
        <option value="Content Creation ,Storage & Sales know-how">
          Content Creation ,Storage & Sales know-how
        </option>
        <option value="Personalized Technology and Tools for your need">
          Personalized Technology and Tools for your need
        </option>
        <option value="Growth and Career Development">
          Growth and Career Development
        </option>
        <option value="Other Unspecified issues">
          Other Unspecified issues
        </option>
      </select>
      {value.length===0&&isEmpty &&<p style={{ marginTop: ".5rem" }}>this field is required </p>}
      
    </div>
  );
};




const FormChild1 = ({handlechange,handleclickSpan,styles,value,isEmpty,id}) => {
  
 
  return (
    <div className="FormChild">
      <label>
        Choose what best describes your understanding of our business after
        going through our website? <span style={{ color: "red" }}>*</span>
      </label>
      <div className="spanContainer" >
        <label htmlFor="span1" >
          <input type="checkbox" id="span1" value='Student Provider' name="understanding" onChange={handlechange} />
          <span style={{backgroundColor:(id==='span1'?styles.backgroundColor:''),color:(id==='span1'?styles.color:'')}}>Student Provider</span>
        </label>
        <label htmlFor="span2">
          <input type="checkbox" id="span2" value='Software as a Service' name="understanding" onChange={handlechange} />
          <span style={{backgroundColor:(id==='span2'?styles.backgroundColor:''),color:(id==='span2'?styles.color:'')}}>Software as a Service</span>
        </label>
        <label htmlFor="span3">
          <input type="checkbox" id="span3" value='Marketing and Outreach Platform' name="understanding" onChange={handlechange} />
          <span style={{backgroundColor:(id==='span3'?styles.backgroundColor:''),color:(id==='span3'?styles.color:'')}}>Marketing and Outreach Platform</span>
        </label>
        <label htmlFor="span4">
          <input type="checkbox" id="span4" value='Quality & Assurance Ragulator' name="understanding" onChange={handlechange} />
          <span style={{backgroundColor:(id==='span4'?styles.backgroundColor:''),color:(id==='span4'?styles.color:'')}}>Quality & Assurance Ragulator</span>
        </label>
        <label htmlFor="span5">
          <input type="checkbox" id="span5" value='Payment Gateway' name="understanding" onChange={handlechange} />
          <span style={{backgroundColor:(id==='span5'?styles.backgroundColor:''),color:(id==='span5'?styles.color:'')}}>Payment Gateway</span>
        </label>
        <label htmlFor="span6" onClick={handleclickSpan}>
          <input type="checkbox" id="span6"  />
          <span style={{backgroundColor:(id==='span6'?styles.backgroundColor:''),color:(id==='span6'?styles.color:'')}}>Other (unspecified)</span>
        </label>
      </div>
      {value.length===0&&isEmpty&&<p>this field is required </p>}
    </div>
  );
};






const FormDashboard1 = () => {
  const { formData, handleChange,handleSpanChange,show,handleClickSpan,styles,isEmpty,id} = useContext(formDataContext);
  console.log(formData);
  
  return (
    <div className="FormDashboardContainer">
      <div className="FormDashboardWrapper">
        <h1>Help us improve your experience.</h1>
        <form action="" className="formInputContainer">
          <div className="div" style={{ minWidth: "100%" }}>
            <FormChild1 handlechange={handleSpanChange} handleclickSpan={handleClickSpan} styles={styles} value={formData.understanding} isEmpty={isEmpty} id={id}/>
          </div>
          {show && 
          <div className="div" style={{ minWidth: "100%" }}>
            <FormChild
              name="understanding"
              placeholder="Type Your Understanding"
              label="Enter your understanding of our business after going through our website?"
              type="text"
              value={formData.understanding}
              handlechange={handleChange}
              isEmpty={isEmpty}
            />
          </div>}
          
          <div className="div" style={{ minWidth: "100%" }}>
            <Selection handlechange={handleSpanChange} value={formData.challenges} isEmpty={isEmpty}/>
          </div>
          <div className="div" style={{ minWidth: "100%" }}>
            <FormChild
              name="queries"
              placeholder="Type any question or query coming in your mind"
              label="Let us answer your doubts. (Optional)"
              type="text"
              value={formData.queries}
              handlechange={handleChange}
              isEmpty={isEmpty}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormDashboard1;
