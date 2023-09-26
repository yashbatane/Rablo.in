import React, { useState } from "react";
import BasicInfo from "./components/Pages/BasicInfo/BasicInfo";
import Educational from "./components/Pages/Educational/Educational";
import PreferenceModes from "./components/Pages/PreferenceMode/PreferenceModes";
import { ArrowBack } from "@mui/icons-material";
import "./Profile.css";
import TutorDashBoardSideBar from "../TutorDashboard/Profiledashboard/TutorDashboardSidebar/TutorDashboardSidebar";
import HeaderBanner from "./components/Pages/HeaderBanner/HeaderBanner";
import SideBar from "../../GlobalComponents/SideBar/SideBar";
import TopBar from "../../GlobalComponents/TopBar/TopBar";
import Panel from "../../GlobalComponents/Panel/Panel";
const Profile = () => {
  const [currentTab, setCurrentTab] = useState("Basic Info");
  const [show, setShow] = useState(true);


  return (
    <div id="main-cotainer-with-sidebar" >
      <SideBar show={setShow} />
      <div
        style={{
          width: "100%",
          height: "100vh",
          background: "#F8F8F8"
        }}
      >
        <TopBar />
        <div id="content" style={{ background: "#F8F8F8"}}>
          <div className="below-banner-container">
            <h1 id="edit-profile-heading" style={{ fontSize: "1.44rem", color: "rgb(0,0,0,0.7)"}}>
              <svg width="18" height="18" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.2012 24.6914L0.201172 12.6914L12.2012 0.691406L14.3387 2.79141L5.93867 11.1914H24.2012V14.1914H5.93867L14.3387 22.5914L12.2012 24.6914Z" fill="black" fill-opacity="0.7" />
              </svg>

              <span style={{marginLeft: "7px"}}>Edit Your Profile</span>
            </h1>
            <main>
              <div className="dataContainer">
                <div className="tabsContainer">
                  {["Basic Info", "Academic", "Preference"].map((tab) => (
                    <div
                      key={tab}
                      className={`tab ${tab == currentTab ? "activeTab" : ""}`}
                      onClick={() => setCurrentTab(tab)}
                    >
                      {tab}
                    </div>
                  ))}
                </div>

                {currentTab === "Academic" ? (
                  <Educational />
                ) : currentTab === "Basic Info" ? (
                  <BasicInfo />
                ) : (
                  <PreferenceModes />
                )}
              </div>
            </main>
          </div>
        </div>
      </div>
      {
        show ?
          <Panel

          /> : <></>
      }
    </div>
  );
};

// function Profile(){
//   return(
//     <div>HHIiiiiiiiiiii</div>
//   )
// }
export default Profile;
