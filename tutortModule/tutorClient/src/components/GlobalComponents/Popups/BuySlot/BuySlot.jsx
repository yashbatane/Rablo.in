import React from "react";
import "./styles/BuySlot.css";


function BuySlot(props) {

    return (
        <div className="buySlotParent" style={{ position: "absolute", height: "100vh", width: "100%", backgroundColor: "rgba(0, 0, 0, 0.30)", zIndex: 1, justifyContent: "center", alignItems: "center", display: "flex" }}>
            {/* marginTop: "-274px" */}
            <div className="buySlotBackground">
                <div className="buySlotContainer">
                    <div className="buySlottitleCloseBtn">
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 22 22" fill="none">
                                <path d="M2 2L20 20" stroke="#6764FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M2 20L20 2" stroke="#6764FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>

                    <div className="buySlottitle">

                        <h1 style={{ color: "#6764FF;", fontSize: "1.438rem" }}>This slot is locked !</h1>
                    </div>
                    <div className="buySlotbody">
                       Do you want to unlock the slot ?
                    </div>
                    <div className="buySlotfooter">
                        <button id="buySlotcancelBtn"> Cancel </button>
                        <button id="buySlotRemoveBtn">Buy Now</button>


                    </div>
                </div>
            </div>
        </div>
    );
}

export default BuySlot;

