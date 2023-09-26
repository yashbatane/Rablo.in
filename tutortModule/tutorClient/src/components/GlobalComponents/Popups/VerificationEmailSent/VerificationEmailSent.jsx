
import React from 'react';
import "./styles/VerificationEmailSent.css";


function VerificationEmailSent() {
    return (
        <div>
            <div className="verificationEmailSentParent" style={{ position: "absolute", height: "100vh", width: "100%", backgroundColor: "rgba(0, 0, 0, 0.30)", zIndex: 1, justifyContent: "center", alignItems: "center", display: "flex" }}>
                <div className="verificationEmailSentBackground">
                    <div className="verificationEmailSentContainer">
                        <div className='verificationEmailSentcontainer'>
                            <div className='verificationEmailSenticon'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="74" height="78" viewBox="0 0 74 78" fill="none">
                                    <path d="M36.9987 48.75L12.332 32.5V58.5H61.6654V32.5L36.9987 48.75Z" fill="#699BF7" fill-opacity="0.3" />
                                    <path d="M9.25 26.1977C9.25 25.0655 9.80901 24.0149 10.7255 23.4245L37 6.5L63.2743 23.4245C64.191 24.0149 64.75 25.0655 64.75 26.1977V58.5C64.75 60.295 63.3696 61.75 61.6667 61.75H12.3333C10.6305 61.75 9.25 60.295 9.25 58.5V26.1977Z" stroke="#699BF7" stroke-width="2" stroke-linecap="round" />
                                    <path d="M9.25 27.625L37 45.5L64.75 27.625" stroke="#699BF7" stroke-width="2" stroke-linecap="round" />
                                </svg>
                            </div>
                            <div className='verificationEmailSenttitle'><h2>Verification Mail Sent!</h2></div>

                            <div className='verificationEmailSentbody'>
                                <p className='verificationEmailSenttext'>This action require email verification. Please
                                    check your inbox and follow the instructions.

                                    <p className='verificationEmailSenttext'> Email sent to :</p>

                                    <p className='verificationEmailSenttext' style={{ marginTop: "20px" }}> xyzxyz@gmail.com</p>
                                </p>
                            </div>
                            <div className='verificationEmailSentfooter'>
                                <button className='OkButton'><h1> OK</h1></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VerificationEmailSent;