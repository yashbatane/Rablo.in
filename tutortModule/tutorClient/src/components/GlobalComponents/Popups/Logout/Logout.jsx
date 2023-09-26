import React from "react";
import "./styles/Logout.css";

function Logout(props) {

  return (
    <div className="logoutParent" style={{ position: "absolute", height: "100vh", width: "100%", backgroundColor: "rgba(0, 0, 0, 0.30)", marginTop: "-274px", zIndex: 1, justifyContent: "center", alignItems: "center", display: "flex" }}>


    {/* // Rewards POints */}
      {/* <div className="logoutParent" style={{ position: "absolute", height: "100vh", width: "100%", backgroundColor: "rgba(0, 0, 0, 0.30)", marginTop: "-230px", zIndex: 1, justifyContent: "center", alignItems: "center", display: "flex" }}>  */}
      <div className="logoutBackground">
        <div className="logoutContainer">
          <div className="logouttitleCloseBtn">
            <button
              onClick={() => {
                props.openLogout();
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 22 22" fill="none">
                <path d="M2 2L20 20" stroke="#6764FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M2 20L20 2" stroke="#6764FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </div>
          <div className="logouttitle">
            <div className="logouticon">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="28" viewBox="0 0 30 30" fill="none">
                <path d="M11.125 9.4498C11.5125 4.9498 13.825 3.1123 18.8875 3.1123H19.05C24.6375 3.1123 26.875 5.34981 26.875 10.9373V19.0873C26.875 24.6748 24.6375 26.9123 19.05 26.9123H18.8875C13.8625 26.9123 11.55 25.0998 11.1375 20.6748M18.75 14.9998H4.525M7.3125 10.8123L3.125 14.9998L7.3125 19.1873" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

            </div>
            <h1 style={{ color: "rgba(101, 6, 6, 0.80)", fontSize: "1.438rem", marginTop: "-30px" }}>Leaving So Soon ?</h1>
          </div>
          <div className="logoutbody">
            You will be logged out from the account
          </div>
          <div className="logoutfooter">
            <button id="leaveBtn">Leave</button>
            <button
              onClick={() => {
                props.openLogout();
              }}
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

export default Logout;