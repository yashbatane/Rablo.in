import React, { useState, useEffect } from "react";
import "./Step1.css";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import logo from "../resources/rablo.png";
import backbtn from "../resources/back.png";
import { useDispatch, useSelector } from "react-redux";
import { createPhoneVerification } from "../../../../store/slices/phoneVerificationSlice";
import { useNavigate } from "react-router-dom";
export default function Step1() {
  const navigate = useNavigate();
  const data = useSelector((state) => state.phoneVerification);
  const status = data.PhoneVerification.status;
  console.log(status);
  const dispatch = useDispatch();
  const [changes, setChanges] = useState({
    countryCode: "",
    mobileNumber: "",
  });
  const handleChanges = (e) => {
    setChanges({ ...changes, [e.target.name]: e.target.value });
    console.log(changes);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(changes);
    dispatch(createPhoneVerification(changes));
  };
  useEffect(() => {
    if (status === "success") {
      navigate("/verification/otp");
    }
  }, [status, navigate]);

  return (
    <>
      <div className="Step1Container">
        <div className="ImageContainer">
          <div className="OTPIconContainer">
            <ChatBubbleOutlineIcon
              color="#D04E62"
              style={{ fontSize: "6rem", transform: "rotateY(180deg)" }}
            />
            <p>OTP</p>
          </div>
          <PhoneIphoneIcon color="#D04E62" style={{ fontSize: "8rem" }} />
        </div>
        <h1>Verify Your Mobile Number</h1>
        <p>
          Verifying your number will give access to more features on Rablo.
          Click the button to send a verification email
        </p>
        <form onSubmit={handleSubmit}>
          <div className="InputContainer">
            <input
              className="CountryCodeContainer"
              type="text"
              name="countryCode"
              placeholder="+91"
              onChange={handleChanges}
            />
            <input
              type="text"
              name="mobileNumber"
              placeholder="Mobile Number"
              onChange={handleChanges}
            />
          </div>
          <button type="submit">Send OTP</button>
        </form>
      </div>
    </>
  );
}
