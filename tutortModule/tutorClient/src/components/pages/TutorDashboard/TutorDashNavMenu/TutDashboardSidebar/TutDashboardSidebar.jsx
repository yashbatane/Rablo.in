import React, { useState } from "react";
import "./tutDashboardSidebar.css";
import { useNavigate } from "react-router-dom";

import rabloLogo from "../../../../GlobalComponents/Image/1.png";
import homeIcon from "./images/home.svg";
import getWorkIcon from "./images/get-work.svg";
import menuItemIcon from "./images/menu-item.svg";
import logoutIcon from "./images/logout.svg";
import settingsIcon from "./images/settings.svg";
import referral from "./images/referral.jpg";
import { formControlClasses } from "@mui/material";

// Helper micro component i.e a menu item
const MenuItem = ({ icon, text, selectedTab, id, handleClick, path }) => {
  return (
    <span
      className={`menuItem ${selectedTab === id ? "selected" : ""}`}
      onClick={() => handleClick(id, path)}
    >
      <img src={icon} alt="." />
      <p>{text}</p>
    </span>
  );
};

const TutDashboardSidebar = ({setshowForms}) => {
  const [selectedTab, setSelectedTab] = useState("1");
  //shows items when user click on profile button
  const [showItems, setShowItems] = useState(false);
  const navigate = useNavigate();

  const handleClick = (id, path) => {
    if (id===4){
      setShowItems((prev) => !prev);
      return;
    }
    setSelectedTab(id);
    console.log(id)
    navigate(path);
  
    
  };
  const handleProfileClick = (id,path) => {
    setSelectedTab(id);
    // setshowForms(1);
    navigate(path);
  };
  const handlePreferenceClick = (id,path) => {
    setSelectedTab(id);
    setshowForms();
    navigate(path);
  };
  const handleActiveLinks=()=>{
    // console.log(path);
    setSelectedTab("4");
    // console.log(e.target);
    // navigate(path);
    setShowItems((prev) => !prev);

  }

  return (
    <div className="SidebarContainer">
      <div className="logo">
        <img src={rabloLogo} alt="logo" />
      </div>

      <div className="menu">
        <p>Menu</p>
        <MenuItem
          text="Home"
          id="1"
          selectedTab={selectedTab}
          handleClick={handleClick}
          path="/"
          icon={homeIcon}
        />
        <MenuItem
          text="Get Work"
          id="2"
          selectedTab={selectedTab}
          handleClick={handleClick}
          path="/getwork"
          icon={getWorkIcon}
        />
        <MenuItem
          text="Coming Soon"
          id="3"
          selectedTab={selectedTab}
          handleClick={handleClick}
          path="temp1"
          icon={menuItemIcon}
        />
      </div>

      <div className="social">
        <p>Social</p>
        <MenuItem
          text="Profile"
          id="4"
          // handleClick={handleClick}
          handleClick={handleActiveLinks}
          selectedTab={selectedTab}
          // handleClick={handleActiveLinks}
       
          path="none"
          icon={menuItemIcon}
        />
        {showItems ? (
          <div className="profileInner">
            <MenuItem
              text="Education"
              id="5"
              selectedTab={selectedTab}
              handleClick={handleProfileClick}
              path="/profile"
              icon={menuItemIcon}
            />
            <MenuItem
              text="Preference"
              // id="4"
              id="6"
              selectedTab={selectedTab}
              handleClick={handlePreferenceClick}
              path="/profile"
              icon={menuItemIcon}
            />
          </div>
        ) : null}
        <MenuItem
          text="Placeholder 2"
          // id="7"
          id="7"
          selectedTab={selectedTab}
          handleClick={handleClick}
          path="temp3"
          icon={menuItemIcon}
        />
        <MenuItem
          text="Placeholder 3"
          // id="6"
          id="8"
          selectedTab={selectedTab}
          handleClick={handleClick}
          path="temp4"
          icon={menuItemIcon}
        />
      </div>

      <div className="general">
        <p>General</p>
        <MenuItem
          text="Settings"
          // id="7"
          id="9"
          selectedTab={selectedTab}
          handleClick={handleClick}
          path="temp5"
          icon={settingsIcon}
        />
        <MenuItem
          text="Log Out"
          // id="8"
          id="10"
          selectedTab={selectedTab}
          handleClick={handleClick}
          path="temp6"
          icon={logoutIcon}
        />
      </div>

      <div className="referral">
        <img src={referral} alt="." />
        <p>Tell your freinds about us!</p>
        <button>Refer to a Friend</button>
      </div>
    </div>
  );
};

export default TutDashboardSidebar;
