import React, { useEffect, useState } from "react";
import "./styles/MobileOTP.css";

function MobileOTP() {

    const [seconds, setSeconds] = useState(60);
    const [otp, setOtp] = useState(new Array(4).fill(""));


    var timer;
    useEffect(() => {

        timer = setInterval(() => {
            if(seconds>0){
            setSeconds(seconds - 1);
            }else{
                clearInterval(timer);
            }
        }, 1000)

        return () => clearInterval(timer);

    },[seconds]);

    const restart = () => {
        setOtp(new Array(4).fill(""));
        setSeconds(60);
        // setMinutes(0);
    }



    const handleChange = (element, index) => {
        if (element.key === "Backspace" && index > 0 && otp[index+1]==="") {
            // Handle backspace key by moving focus to the previous input field
            otp[index - 1] = "";
            setOtp([...otp]);
            if (element.previousSibling) {
                element.previousSibling.focus();
            }
        }

        if (isNaN(element.value)) return false;

        setOtp([...otp.map((d, idx) => (idx === index) ? element.value : d)]);

        if (element.value !== "" && element.nextSibling) {
            element.nextSibling.focus();
        }
        else if (element.value === "" && element.previousSibling && otp[index+1]==="") {
            element.previousSibling.focus();
        }
    };

    const empty = () => {
        { e => setOtp([...otp.map(v => "")]) }

    };


    return (
        <div className="moblieOTPBackground">
            <div className="moblieOTPContainer">
                <div className="moblieOTPicon">
                    <div className="moblieOTPbox-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 70 70" fill="none">
                            <path d="M62.332 0.832031H7.66536C3.90703 0.832031 0.832031 3.90703 0.832031 7.66536V48.6654C0.832031 52.4237 3.90703 55.4987 7.66536 55.4987H55.4987L69.1654 69.1654V7.66536C69.1654 3.90703 66.0904 0.832031 62.332 0.832031ZM62.332 52.7654L58.232 48.6654H7.66536V7.66536H62.332V52.7654Z" fill="#6764FF" />
                        </svg>
                    </div>

                    <div id="moblieOTPphone-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 112 112" fill="none">
                            <path d="M72.332 4.66797H34.9987C31.9045 4.66797 28.937 5.89713 26.7491 8.08506C24.5612 10.273 23.332 13.2404 23.332 16.3346V95.668C23.332 98.7622 24.5612 101.73 26.7491 103.918C28.937 106.105 31.9045 107.335 34.9987 107.335H72.332C75.4262 107.335 78.3937 106.105 80.5816 103.918C82.7695 101.73 83.9987 98.7622 83.9987 95.668V16.3346C83.9987 13.2404 82.7695 10.273 80.5816 8.08506C78.3937 5.89713 75.4262 4.66797 72.332 4.66797ZM53.6654 102.668C49.792 102.668 46.6654 99.5413 46.6654 95.668C46.6654 91.7946 49.792 88.668 53.6654 88.668C57.5387 88.668 60.6654 91.7946 60.6654 95.668C60.6654 99.5413 57.5387 102.668 53.6654 102.668ZM74.6654 84.0013H32.6654V18.668H74.6654V84.0013Z" fill="#6764FF" />
                        </svg>
                    </div>
                </div>
                <div className="moblieOTPtitle">
                    <h1 style={{ fontWeight: "500" }}>Verify Your Mobile Number</h1>
                    <p style={{ fontSize: "15px" }}>Verifying your number will give  access to more features on Rablo. A one time password has been sent to +91 9677169628</p>
                </div>

                <div className='moblieOTPcontainer'>
                    {
                        otp.map((data, index) => {
                            return (
                                <input
                                    className='otp-field'
                                    type="text"
                                    name="otp"
                                    maxLength="1"
                                    key={index}
                                    value={data}
                                    onChange={e => handleChange(e.target, index)}
                                    onFocus={e => e.target.select()}
                                    autoFocus = {index===0?true:false}
                                />
                            )
                        })
                    }

                </div>
                {/* {minutes < 10 ? "0" + minutes : minutes}:{seconds < 10 ? "0" + seconds : seconds} */}
                {/* <p>OTP Entered - {otp.join("")} </p> */}

                <div>
                    <h5 style={{ textAlign: "center", color: "#1D2CA1", fontFamily: "Poppins" }}>Time Left : 0{Math.floor(seconds / 60)}:{seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60}</h5>

                </div>

                <div >
                    <div className="moblieOTPbtns">
                        <button className="moblieOTPVerifyBtn"
                            onClick={e =>
                                alert("Entered OTP is " + otp.join(""))
                            }>
                            Verify &gt;</button>
                    </div>
                    <div className="moblieOTPbtns">
                        <button className="moblieOTPButton" onClick={restart}><h5>Resend OTP &gt;</h5></button>

                    </div>
                    <div className="moblieOTPbtns ">
                        <button className="moblieOTPButton"><h5>Entered Incorrect number?</h5></button>
                    </div>
                </div>

            </div >
        </div >

    )
}

export default MobileOTP;