import React from "react";


import "./styles/OTPInput.css";

const OTPInput = () => {

    const handleOnChange = (e) => {
        if (e.target.id === "ip-1") {
            document.getElementById("ip-2").focus();
        }
        else if (e.target.id === "ip-2") {
            document.getElementById("ip-3").focus();

        }
        else if (e.target.id === "ip-3") {
            document.getElementById("ip-4").focus();

        }
        else if (e.target.id === "ip-4") {
        }
    }

    return (
        <div className="otp">
            <div className="otp-ip">
                <input className="ip" type="text" id="ip-1" onChange={handleOnChange} />
                <input className="ip" type="text" id="ip-2" onChange={handleOnChange} />
                <input className="ip" type="text" id="ip-3" onChange={handleOnChange} />
                <input className="ip" type="text" id="ip-4" onChange={handleOnChange} />
            </div>
            <div className="otp-resend" style={{ height: "15px" }}>
                <div className="otp-resend-p">
                    Time Left: {"00:" + 10}
                </div>
                <div className="otp-resend-p">
                    {"Resend >"}
                </div>
            </div>
        </div>
    );
}

export default OTPInput;