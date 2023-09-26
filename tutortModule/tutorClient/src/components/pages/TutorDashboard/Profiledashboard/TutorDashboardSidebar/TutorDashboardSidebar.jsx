import React, { useState } from "react";
import "./TutorDashboardSidebar.css";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { RiHome5Line } from "react-icons/ri";
import { AiOutlineUserAdd } from "react-icons/ai";
import { CiSettings } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const NavBar = (props) => {
  const [expand, setExpand] = useState(false);
  return (
    <div className="Leftsidebar">
      {expand ? (
        <div className="expanded">
          <div className="navbar">
            <RxCross2 className="icon" onClick={() => {setExpand(!expand); props.show(expand)}} />
            <p>Dashboard</p>
            <div className="first">
              <div>
                <RiHome5Line className="icons" />
                <p>Home</p>
              </div>
              <div>
                <AiOutlineUserAdd className="icons" />
                <p>Add Students</p>
              </div>
              <div>
                <CiSettings className="icons" />
                <p>Complete Your Profile</p>
              </div>
            </div>
            <div className="middle">
              <p></p>
            </div>
            <div className="last">
              <p>Setting </p>
              <div>
                <FaRegUserCircle className="icons" />
                <p>My Profile</p>
              </div>
              <div>
                <IoMdLogOut className="icons" />
                <p>Logout</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="collapsed">
          <div className="navbar">
            <HiOutlineMenuAlt1
              className="icons"
              onClick={() => {setExpand(!expand); props.show(expand)}}
            />
            <div>
              <RiHome5Line className="icons" />
              <AiOutlineUserAdd className="icons" />
              <CiSettings className="icons" />
            </div>
            <div>
              <FaRegUserCircle className="icons" />
              <IoMdLogOut className="icons" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
