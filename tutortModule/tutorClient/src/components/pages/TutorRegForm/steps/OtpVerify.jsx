import React, { useState, useContext, useEffect } from "react";
/* import { useDispatch } from 'react-redux'; */
import { useNavigate } from "react-router";
import linkedinSVG from "./../../../GlobalComponents/Image/linkedIn.svg";
import googleSVG from "./../../../GlobalComponents/Image/googleSVG.svg";
import appleSVG from "./../../../GlobalComponents/Image/appleSVG.svg";

import { IoIosArrowForward } from 'react-icons/io';

import { MdKeyboardArrowLeft } from 'react-icons/md';
/* import { multiStepContext } from '../MultistepContext' */
import { add } from "../../../../store/tutorSlice";
import jwt_decode from "jwt-decode";

export default function OtpVerify({ setStep }) {
  /* const navigate = useNavigate() */
  /* const {step , setStep , setUserId , setGoogleJWT} = useContext(multiStepContext) */
  /* const [step , setStep] = useState(0) */
  const [formValues, setFormValues] = useState({ gender: "" });
  const sidebarTitles = ["Login", "Basic Details"];
  const [googleJWT, setGoogleJWT] = useState("");
  const [userId, setUserId] = useState("");

  const handleLinkedInLogin = () => {};
  const handleAppleLogin = () => {};
  const handleGoogleLogin = () => {};
  const [googleid1, setGoogleid] = useState(0);
  /*  const dispatch = useDispatch(); */
  /*  useEffect(()=>{
        if (!googleid1) {
         ///////
        }
        else{
          navigate("/multistep");
        }
    
      },[googleid1]); */

  const handleCallback = async (response) => {
    /* console.log("JWT-TOKEN by google : " + response.credential);
          const data_google_signin = jwt_decode(response.credential);
         setGoogleid(data_google_signin.sub);
         dispatch(add(data_google_signin));
     
         const tokenId = response.credential;
         let result = await fetch("http://localhost:6500/api/auth/googlelogin", {
           method: "post",
           body: JSON.stringify({ tokenId: tokenId , frontend_client : process.env.REACT_APP_GOOGLE_CLIENT }),
           headers: {
             "Content-Type": "application/json",
           },
         });
         result = await result.json();
         console.log(result)
         setGoogleJWT(result.userToken)
         setUserId(result.user._id)
         if(result.success) setStep(step+1) */
  };
  useEffect(() => {
    /* global google */
    /*  window.google.accounts.id.initialize({
           client_id: '677554163762-mgjgi8fovk13phcogebvb1u9ll18h9vb.apps.googleusercontent.com',
           callback: handleCallback,
         });
         window.google.accounts.id.renderButton(document.getElementById("google-sign"), {
           type: "icon",
           shape: "square",
           theme: "filled_black",
           text: "continue with",
           size: "large",
         }); */
  }, []);
  const [otp, setOtp] = useState();
  const handleSubmitClick = () => {
    setOtpVerificationModalOpen(false);
    setOtpVerify(true);
    console.log("here");

    axios
      .post("http://localhost:6500/api/phoneAuthentication/verify", { otp })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const [otpValue, setOtpValue] = useState(new Array(4).fill(""));
  const handleChange = (ele, index) => {
    if (isNaN(ele.value)) return false;
    setOtpValue([...otpValue.map((dat, i) => (i === index ? ele.value : dat))]);
    if (ele.nextSibling) {
      ele.nextSibling.focus();
    }
  };
  return (
    <div className="OtpText">
      <div className="logootpsend">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="74"
          height="74"
          viewBox="0 0 54 54"
          className="msgboxotp"
        >
          <path
            fill="#6764ff"
            d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2m0 15.2L18.8 16H4V4h16v13.2Z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="54"
          height="54"
          viewBox="0 0 24 24"
        >
          <path
            fill="#6764ff"
            d="M15.5 1h-8A2.5 2.5 0 0 0 5 3.5v17A2.5 2.5 0 0 0 7.5 23h8a2.5 2.5 0 0 0 2.5-2.5v-17A2.5 2.5 0 0 0 15.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z"
          />
        </svg>
      </div>
      <div className="heading1">Verify Your Mobile Number</div>
      <div className="subtextotpsend">
        Verifying your number will give access to more features on Rablo.
        <br />
        Click the button to send a verification email
      </div>

      <div className="OtpInput">
        {otpValue.map((data, index) => {
          return (
            <input
              className="OtpModalInput"
              maxLength={1}
              type="text"
              key={index}
              onChange={(e) => handleChange(e.target, index)}
              onFocus={(e) => e.target.select()}
            />
          );
        })}
      </div>

      {/* <button
        className="ButtonBefore"
        type="button"
        onClick={handleSubmitClick}
      >
        Done
      </button> */}
      <div className="Buttons">
        <button
          className="ButtonBefore1"
          type="button"
          style={{ width:"200 px", border: "3px solid #6764FF", 
          borderRadius: "10px" ,color: "#6764FF", marginLeft:"5%"}}
        >
         <MdKeyboardArrowLeft/> Back
        </button>
        <button
          className="ButtonBefore"
          type="button"
          onClick={handleSubmitClick}
        >
          Verify<IoIosArrowForward style = { {color: "white" ,paddingLeft:"5%" }}/>
        </button>
      </div>
    </div>
  );
}
