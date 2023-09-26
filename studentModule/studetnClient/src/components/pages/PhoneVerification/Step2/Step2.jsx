import React, { useState } from "react";
import img from "./images/SeaLighthouse-sunset.png";
import "./Step2.css";
import smarphoneImage from "./images/otpPhone.png";
import logo from "./images/rablo.png";
import backbtn from "./images/back.png";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import {useDispatch} from "react-redux"
import { createOtpVerification } from "../../../../store/slices/otpVerification";
const Step2 = () => {
  const [otpValue, setOtpValue] = useState(["", "", "", "","",""]);
  const handleChange = (ele, index) => {
    if (isNaN(ele.value)) return false;
    setOtpValue([...otpValue.map((dat, i) => (i === index ? ele.value : dat))]);
    if (ele.nextSibling) {
      ele.nextSibling.focus();
    }
  };
  const dispatch=useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault();
    const otpValues = otpValue.join("");
    dispatch(createOtpVerification({ otp: otpValues }));
    console.log({otp:otpValues});
  };

  return (
    <div className="otp-input-container">
      <div className="otp-image">
        <img src={smarphoneImage} alt="" />
      </div>
      <div className="bold-text">Verify Your Mobile Number</div>
      <div className="subtext">
        Verifying your number will give access to more features on Rablo. Click
        the button to send a verification email
      </div>
      <div className="otp-input-text">
        <form onSubmit={handleSubmit}>
          {otpValue.map((data, index) => {
            return (
              <input
                className="otpINputVerification"
                maxLength={1}
                type="text"
                key={index}
                onChange={(e) => handleChange(e.target, index)}
                onFocus={(e) => e.target.select()}
              />
            );
          })}
          <button type="submit" className="otpverification-button">
            Done
          </button>
        </form>
      </div>
    </div>
  );
};

export default Step2;
