import React from "react";
import "./styles/PaymentSuccessful.css";
function PaymentSuccessful() {
    return (
        <div className="paymentSuccessfulParent" style={{ position: "absolute", height: "100vh", width: "100%", backgroundColor: "rgba(0, 0, 0, 0.30)", zIndex: 1, justifyContent: "center", alignItems: "center", display: "flex" }}>
            <div className="paymentSuccessfulBackground">
                <div className="paymentSuccessfulContainer">
                    <div className="paymentSuccessfultitleCloseBtn">
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 22 22" fill="none">
                                <path d="M2 2L20 20" stroke="#6764FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M2 20L20 2" stroke="#6764FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <div className="paymentSuccessfultitle">
                        <div className="paymentSuccessfulicon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                <path d="M17.5 2.5C20 2.5 21.25 3.7625 21.25 6.2875V15.1C21.25 17.5875 19.4875 18.55 17.325 17.25L15.675 16.25C15.3 16.025 14.7 16.025 14.325 16.25L12.675 17.25C10.5125 18.55 8.75 17.5875 8.75 15.1V6.2875C8.75 3.7625 10 2.5 12.5 2.5H17.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M8.525 6.23672C4.2625 6.94922 2.5 9.57422 2.5 14.8742V18.6617C2.5 24.9742 5 27.4992 11.25 27.4992H18.75C25 27.4992 27.5 24.9742 27.5 18.6617V14.8742C27.5 9.48672 25.675 6.84922 21.25 6.19922" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </div>
                        <h1 style={{ color: "rgba(101, 6, 6, 0.80)", textAlign: "center", fontSize: "23px", fontStyle: "normal", fontWeight: "600", lineHeight: "normal", marginTop: "-35px" }}>Payment Successful!</h1>
                    </div>
                    <div className="paymentSuccessfulbody">
                        Your payment has been received.
                    </div>
                    <div className="paymentSuccessfulfooter">
                        <button id="ProceedBtn">Proceed</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentSuccessful;