import React from "react";
import "./styles/RemoveYourPlan.css";


function RemoveYourPlan(props) {

    return (
        <div className="removeYourPlanParent" style={{ position: "absolute", height: "100vh", width: "100%", backgroundColor: "rgba(0, 0, 0, 0.30)", zIndex: 1, justifyContent: "center", alignItems: "center", display: "flex" }}>
            {/* marginTop: "-274px" */}
            <div className="removeYourPlanBackground">
                <div className="removeYourPlanContainer">
                    <div className="removeYourPlantitleCloseBtn">
                        <button
                        // onClick={() => {
                        //     props.openLogout();
                        // }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 22 22" fill="none">
                                <path d="M2 2L20 20" stroke="#6764FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M2 20L20 2" stroke="#6764FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <div className="removeYourPlantitle">
                        <div className="removeYourPlanicon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                <path d="M11.0094 2.5L6.48438 7.0375M18.9844 2.5L23.5094 7.0375" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M2.5 9.8125C2.5 7.5 3.7375 7.3125 5.275 7.3125H24.725C26.2625 7.3125 27.5 7.5 27.5 9.8125C27.5 12.5 26.2625 12.3125 24.725 12.3125H5.275C3.7375 12.3125 2.5 12.5 2.5 9.8125Z" stroke="white" stroke-width="1.5" />
                                <path d="M12.2 17.5V21.9375M17.95 17.5V21.9375M4.375 12.5L6.1375 23.3C6.5375 25.725 7.5 27.5 11.075 27.5H18.6125C22.5 27.5 23.075 25.8 23.525 23.45L25.625 12.5" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                            </svg>

                        </div>
                        <h1 style={{ color: "rgba(101, 6, 6, 0.80)", fontSize: "1.438rem" }}>Want to Remove your Plan?</h1>
                    </div>
                    <div className="removeYourPlanbody">
                    This Plan will take <b>15 Days</b> to be removed due to <p>incomplete business cycle. </p>  
                    </div>
                    <div className="removeYourPlanfooter">
                        <button id="RemoveBtn">Remove</button>
                        <button
                            // onClick={() => {
                            //     props.openLogout();
                            // }}
                            id="cancelBtn"
                        >
                            Cancel
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default RemoveYourPlan;

