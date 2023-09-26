import React from "react";
import "./styles/TemporarilyLocked.css";
function TemporarilyLocked() {
    return (

        <div className="temporarilyLockedBackground">
            <div className="temporarilyLockedContainer">
                <div className="temporarilyLockedtitleCloseBtn">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 22 22" fill="none">
                            <path d="M2 2L20 20" stroke="#6764FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M2 20L20 2" stroke="#6764FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>
                <div className="temporarilyLockedtitle">
                    <div className="temporarilyLockedicon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                            <path d="M15 18.3346V16.668C15 13.9013 15.8333 11.668 20 11.668C24.1667 11.668 25 13.9013 25 16.668V18.3346M20 24.3346C20.1313 24.3346 20.2614 24.3088 20.3827 24.2585C20.504 24.2083 20.6142 24.1346 20.7071 24.0417C20.8 23.9489 20.8736 23.8386 20.9239 23.7173C20.9741 23.596 21 23.466 21 23.3346C21 23.2033 20.9741 23.0733 20.9239 22.952C20.8736 22.8306 20.8 22.7204 20.7071 22.6275C20.6142 22.5347 20.504 22.461 20.3827 22.4108C20.2614 22.3605 20.1313 22.3346 20 22.3346C19.7348 22.3346 19.4804 22.44 19.2929 22.6275C19.1054 22.8151 19 23.0694 19 23.3346C19 23.5999 19.1054 23.8542 19.2929 24.0417C19.4804 24.2293 19.7348 24.3346 20 24.3346Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M24.168 28.332H15.8346C12.5013 28.332 11.668 27.4987 11.668 24.1654V22.4987C11.668 19.1654 12.5013 18.332 15.8346 18.332H24.168C27.5013 18.332 28.3346 19.1654 28.3346 22.4987V24.1654C28.3346 27.4987 27.5013 28.332 24.168 28.332Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M19.9987 36.6654C29.2037 36.6654 36.6654 29.2037 36.6654 19.9987C36.6654 10.7937 29.2037 3.33203 19.9987 3.33203C10.7937 3.33203 3.33203 10.7937 3.33203 19.9987C3.33203 29.2037 10.7937 36.6654 19.9987 36.6654Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </div>
                    <h1 style={{ color: "rgba(101, 6, 6, 0.80)", textAlign: "center", fontSize: "23px", fontStyle: "normal", fontWeight: "600", marginTop: "-30px" }}>This Option is Temporarily Locked!</h1>
                </div>
                <div className="temporarilyLockedbody">
                    Please complete your <b>  Profile Verification</b>  to <b> Unlock this Feature.</b>
                </div>
                <div className="temporarilyLockedfooter">
                    <button id="VerifiedBtn">Get Verified</button>
                </div>
            </div>
        </div>

    )
}

export default TemporarilyLocked;