//Libraries 
import React, { useState } from "react";


import TopBar from "../../GlobalComponents/TopBar/TopBar";
import SideBar from "../../GlobalComponents/SideBar/SideBar";
import PaymentDetails from "./components/PaymentDetails/PaymentDetails";
import PaymentSummary from "./components/PaymentSummary/PaymentSummary";


import "./styles/Payment.css";

//Payment -> page for making payment 
const Payment = () => {

    const [show, setShow] = useState(true);
    return (
        <div className="payments" >
            <SideBar show={setShow} />
            <div style={{
                width: "100%",
                height: "100vh",
                background: "#ffffff"
            }}>
                <TopBar />

                {/* todo-> padding */}
                {/* container for summary and list */}
                <div
                    style={{ padding: "1rem" }}
                >
                    {/* todo -> distance between summary and details */}
                    {/* todo -> paymentdetails component */}
                    <PaymentDetails style={(show) ? "7.29rem" : "10rem"} />
                    {/* payment summary not visible after expanding the sidebar */}
                    {
                        show ?
                            // todo paymentsummary
                            <PaymentSummary /> : <></>
                    }
                </div>
            </div>
        </div>
    );
}

export default Payment;

// //Libraries 
// import React, { useState } from "react";


// import TopBar from "../../GlobalComponents/TopBar/TopBar";
// import SideBar from "../../GlobalComponents/SideBar/SideBar";
// import PaymentDetails from "./components/PaymentDetails/PaymentDetails";
// import PaymentSummary from "./components/PaymentSummary/PaymentSummary";


// import "./styles/Payment.css";

// //Payment -> page for making payment 
// const Payment = () => {

//     const [show, setShow] = useState(true);
//     return (
//         <div className="payments" >
//             <SideBar show={setShow} />
//             <div style={{
//                 width: "100%",
//                 height: "100vh",
//                 background: "#ffffff"
//             }}>
//                 <TopBar />

//                 {/* todo-> padding */}
//                 {/* container for summary and list */}
//                 <div
//                     style={{ padding: "1rem" }}
//                 >
//                     {/* todo -> distance between summary and details */}
//                     {/* todo -> paymentdetails component */}
//                     <PaymentDetails style={(show) ? "7.29rem" : "10rem"} />
//                     {/* payment summary not visible after expanding the sidebar */}
//                     {
//                         show ?
//                             // todo paymentsummary
//                             <PaymentSummary /> : <></>
//                     }
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Payment;
