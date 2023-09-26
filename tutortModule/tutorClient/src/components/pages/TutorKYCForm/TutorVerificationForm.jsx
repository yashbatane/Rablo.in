import React, { useState, useContext } from "react";
import AddressFields from "./components/AddressFields";
import BasicDetails from "./components/BasicDetails";
import formContext from "./context/form/formContext";
import UploadAddressProof from "./components/UploadAddressProof";
import ClassMode from "./components/ClassMode";
import Acknowledgement from "./components/Acknowledgement";
import "./TutorVerificationForm.scss";
import formImage from "./components/images/formImage1.jpg";
import { ArrowBackOutlined } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { setFormData } from "../../../store/KYCSlice";
import { KYCFormData } from "../../../store/KYCSlice";
const TutorVerificationForm = () => {
const dispatch = useDispatch();
// const formData = useSelector(KYCFormData);
console.log(formData);
  const { formData, setFormData } = useContext(formContext);
  
  const nextStep = (e) => {
    e.preventDefault();
    // validate form
    setFormData({ ...formData, step: ++formData.step });
    // dispatch(
    //   setFormData("hellotrue")
    // )
    console.log(formData)
  };
  return (
    <div className="tutorVerification">
      <div className="tutorVerification__form__wrapper">
        <div className="tutorVerification__header">
          <button
          name="step"
            className="tutorVerification__btn__prev"
            disabled={formData.step === 1}
            onClick={() => {
              setFormData({ ...formData, step: --formData.step });
            }}
          >
            <ArrowBackOutlined />
          </button>
          
          <div style={{ width: "100%" }}>
            
            
            
              <div style={{ display:"flex", alignItems:"center", gap:'20px'}}><span className="tutorVerification__stepHeadings">
                
               {
                formData.step === 1 ? (
                 "Basic Details"
                ) : formData.step === 2 ? (
                  "Address Details"
                ) : formData.step === 3 ? (
                  "Choose the mode of your class"
                ) : formData.step === 4 ? (
                  " Upload the document of address proof"
                ) : formData.step === 5 ? (
                  "You're almost done !!"
                ) : (
                  "KYC completed"
                )
               }
                
                </span> 
                <span className="tutorVerification__stepHeadings__stepCount">
                  {formData.step} of 6
                  </span>
              </div>
            
            <div className="tutorVerification__progressbar">
              <div
                className="tutorVerification__progress"
                style={{ width: `${(formData.step / 6) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
          <div style={{padding:"10px", flex:"1",maxHeight:'100%', overflowY:"scroll"}} className="tutorVerification__form">

          
        {formData.step === 1 ? (
          <BasicDetails />
        ) : formData.step === 2 ? (
          <AddressFields />
        ) : formData.step === 3 ? (
          <ClassMode />
        ) : formData.step === 4 ? (
          <UploadAddressProof />
        ) : formData.step === 5 ? (
          <Acknowledgement />
        ) : (
          "KYC completed"
        )}
</div>
        <div style={{position:"sticky", bottom:"0", background:"#fff"}}>
          <button
            disabled={formData.step === 6}
            className="tutorVerification__btn__next"
            onClick={nextStep}
          >
            {formData.step === 6 ? "Submit" : "Continue"}
          </button>
        </div>
      </div>
      <div className="tutorVerification__formImage">
        <img src={formImage} alt="..." />
      </div>
    </div>
  );
};

export default TutorVerificationForm;
