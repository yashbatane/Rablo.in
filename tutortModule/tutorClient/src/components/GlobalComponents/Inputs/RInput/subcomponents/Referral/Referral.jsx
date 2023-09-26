import React from "react";

import "./styles/Referral.css";
import { useState } from "react";

const Referral = () => {
    const [isVerified, setIsVerified] = useState(0);
    const [referral, setReferral] = useState("");

    const handleVerify = () => {
        setIsVerified(-1);
    }
    const handleCross = () => {
        setIsVerified(0);
        setReferral("");
    }
    return (
        <>
            <div className="referral-box">
                {
                    (isVerified === -1) ?
                        <div className="referral-ip">
                            <div style={{
                                borderRadius: "6px",
                                background: (isVerified === -1) ? "rgba(248, 32, 131, 0.80)" : "#6764ff",
                                width: "fit-content",
                                padding: "5px .77rem",
                                color: "#ffffff"
                            }}>
                                {referral}
                                <span style={{ marginLeft: "1rem", cursor: "pointer" }} onClick={handleCross}>
                                    <svg width="12" height="12" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 1.5L14 13.5" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M2 13.5L14 1.5" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                        :
                        (isVerified === 1) ?

                            <div className="referral-ip">
                                <div style={{
                                    borderRadius: "6px",
                                    background: (isVerified === -1) ? "rgba(248, 32, 131, 0.80)" : "#6764ff",
                                    width: "fit-content",
                                    padding: "5px .77rem",
                                    color: "#ffffff"
                                }}>
                                    {referral}
                                    <span style={{ marginLeft: "1rem", cursor: "pointer" }} onClick={handleCross}>
                                        <svg width="12" height="12" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2 1.5L14 13.5" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M2 13.5L14 1.5" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </span>
                                </div>
                            </div> :
                            <div className="referral-ip">
                                <input type="text" placeholder="Referral code" onChange={(e) => setReferral(e.target.value)} />
                            </div>
                }
                <div
                    className="referral-verify"
                    style={{
                        opacity: (referral.length === 0) ? "0.5" : "1",
                        background: (isVerified === -1) ? "rgba(248, 32, 131, 0.80)" : (isVerified === 1) ? "#ffffff" : "#6764ff",
                        border: (isVerified === 1) ? "1px solid #6764ff" : "none",
                        color: (isVerified === 1) ? "#6764ff" : "#ffffff"
                    }}
                    onClick={handleVerify}>
                    {
                        (isVerified === -1) ?
                            "Retry" :
                            (isVerified === 1) ?
                                "Applied" :
                                "Verify"
                    }
                </div>
            </div>
            {
                (isVerified == 1) ?
                    <div className="referral-valid">
                        {"FREE 500 REWARD COINS"}
                    </div>
                    :
                    <></>
            }

        </>
    );
}

export default Referral;