import React from "react";
import "./styles/MobileNumberVerified.css";
function MobileNumberVerified() {
    return (
        <div className="mobileNumberVerifiedParent" style={{ position: "absolute", height: "100vh", width: "100%", backgroundColor: "rgba(0, 0, 0, 0.30)", zIndex: 1, justifyContent: "center", alignItems: "center", display: "flex" }}>
            <div className="mobileNumberVerifiedBackground">
                <div className="mobileNumberVerifiedContainer">

                    <div className="mobileNumberVerifiedtitle">
                        <div className="mobileNumberVerifiedicon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                                <path d="M12.2207 17.5001L15.7353 21.0293L22.779 13.9709" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M15.677 3.5728C16.6832 2.71239 18.3311 2.71239 19.352 3.5728L21.6561 5.55614C22.0936 5.9353 22.9103 6.24155 23.4936 6.24155H25.9728C27.5186 6.24155 28.7874 7.5103 28.7874 9.05614V11.5353C28.7874 12.1041 29.0936 12.9353 29.4728 13.3728L31.4561 15.677C32.3165 16.6832 32.3165 18.3311 31.4561 19.352L29.4728 21.6561C29.0936 22.0936 28.7874 22.9103 28.7874 23.4936V25.9728C28.7874 27.5186 27.5186 28.7874 25.9728 28.7874H23.4936C22.9249 28.7874 22.0936 29.0936 21.6561 29.4728L19.352 31.4561C18.3457 32.3166 16.6978 32.3166 15.677 31.4561L13.3728 29.4728C12.9353 29.0936 12.1186 28.7874 11.5353 28.7874H9.01237C7.46654 28.7874 6.19779 27.5186 6.19779 25.9728V23.4791C6.19779 22.9103 5.89154 22.0936 5.52695 21.6561L3.5582 19.3374C2.71237 18.3311 2.71237 16.6978 3.5582 15.6916L5.52695 13.3728C5.89154 12.9353 6.19779 12.1186 6.19779 11.5499V9.04155C6.19779 7.49572 7.46654 6.22697 9.01237 6.22697H11.5353C12.104 6.22697 12.9353 5.92072 13.3728 5.54155L15.677 3.5728Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </div>
                        <h1 style={{ color: "rgba(101, 6, 6, 0.80)", textAlign: "center", fontSize: "23px", fontStyle: "normal", fontWeight: "600", lineHeight: "normal", marginTop: "-35px" }}>Verified!</h1>
                    </div>
                    <div className="mobileNumberVerifiedbody">
                        Your Phone Number has ben Verified.
                    </div>
                    <div className="mobileNumberVerifiedfooter">
                        <button id="ProceedBtn">Proceed</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default MobileNumberVerified;