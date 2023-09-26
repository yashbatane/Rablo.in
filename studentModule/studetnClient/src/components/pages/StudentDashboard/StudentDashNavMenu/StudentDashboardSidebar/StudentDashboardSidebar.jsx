import React, { useState } from "react";
import "./StudentDashboardSidebar.css";
import { NavLink, Router, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import SUNSET from "./images/sunset.png";

const StudentDashboardSidebar = () => {
  return (
    <div className="NavContainer" style={{ backgroundImage: `url(${SUNSET})` }}>
      <nav>
        <div className="NavElemsContainer">
          <MenuIcon style={{ color: "white" }} />
          <NavLink to="/">
            <HomeIcon style={{ color: "white" }} />
          </NavLink>
          <NavLink to="findTutor">
            <PersonAddAltIcon style={{ color: "white" }} />
          </NavLink>
        </div>
        <div className="LogoutContainer">
          <LogoutRoundedIcon style={{ color: "white" }} />
        </div>
      </nav>
    </div>
  );
};

export default StudentDashboardSidebar;
