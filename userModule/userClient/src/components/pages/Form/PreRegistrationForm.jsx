import React, { useContext } from "react";
import './PreRegistrationForm.scss'
import FormHeader from "./FormHeader/FormHeader";
import Footer from '../Pricing/Footer/Footer'
import FormDataState from "../../../context/formData/formDataState";
import FormDashboard from "./FormDashboard/FormDashboard";
import FormDashboard1 from "./FormDashboard/FormDashboard1";
import formDataContext from "../../../context/formData/formDataContext";


const Button=()=>{
  const {handelPrevClick,handelNextClick,count}=useContext(formDataContext)
  console.log(count);
  return(
  <div className="button">
    <div className="buttonWrapper" style={count===1?{justifyContent:'flex-end'}:{justifyContent:'space-between'}}>
      {count>1 && <button onClick={handelPrevClick}>
        Previous
      </button>}
      <button onClick={handelNextClick} style={count===1?{backgroundColor:'#4d3699',color:'white'}:{backgroundColor:'',color:''}}>
        {count===1?'Next':'Submit'}
      </button>
      </div>
  </div>
  )
}


const Congratulation=()=>{
  
  return(
    <div className="congratulation">
      <div className="congratulationWrapper">
          <h1>Congratulations</h1>
          <h4>Thank you for your message. We will get in touch with you shortly</h4>
      </div>
    </div>
  )
}



const PreRegistrationForm = () => {
  const {count,display}=useContext(formDataContext)
  return (
    <div className="PreRegistrationFormContainer">
      <div className="PreRegistrationFormWrapper">
        <div className="PreRegistrationFormcontentWrapper">
            <FormHeader/>
            {count==1 && <FormDashboard/>}
            {count==2 && <FormDashboard1/>}
            {/* <FormDashboard1/> */}
            <Button/>
            {count===2&&display && <Congratulation/>}
            <Footer/>
        </div>
      </div>
    </div>
  );
};

export default PreRegistrationForm;
