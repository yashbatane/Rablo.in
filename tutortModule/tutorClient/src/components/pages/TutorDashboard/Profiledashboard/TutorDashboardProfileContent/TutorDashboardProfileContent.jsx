import React, { useEffect, useState } from "react";
import "./TutorDashboardProfileContent.css";
import { IoHomeSharp } from "react-icons/io5";
import { BsChatSquareDots } from "react-icons/bs";
import { BiBell } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { SlBadge } from "react-icons/sl";
import { FaWpforms } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import { FiLock } from "react-icons/fi";
import img from "./profile.svg";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import TutorDashboardSidebar from '../TutorDashboardSidebar/TutorDashboardSidebar';
import TutorDashboardRightSidebar from '../TutorDashboardRightSidebar/TutorDashboardRightSidebar';


const ProfileContent = ({minwidth}) => {
  const [date, setDate] = useState(new Date());
  const [viewProfile, setViewProfile] = useState(false); 

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  const dateTimeString = date.toLocaleDateString("en-US", options);
  const day = dateTimeString.split(" ");
  return (
    <div className="ProfileContentContainer" style={{minWidth:minwidth && '100vw',display : 'flex'}}>
      <TutorDashboardSidebar/>
      <div className="ProfileContentWrapper">
        <div className="ProfileContentHeader">
          <div className="ProfileContentHeaderFirst">
            <span>
              <h2 style={{ color: "#5271FF" }}>Rablo.i</h2>
              <IoHomeSharp />
            </span>
          </div>
          <div className="ProfileContentHeaderSecond">
            <span className="timeDate">
              {day[0]}
              {day[2]} {day[1]},{day[4]} {day[5]}
            </span>
            <span className="iconContainer">
              <span className="span">
                <BsChatSquareDots />
              </span>
              <span className="span1">
                <BiBell />
              </span>
            </span>
            <span className="imgContainer" onClick={() => {setViewProfile(!viewProfile)}}>
              <img src={img} alt="" />
            </span>
          </div>
        </div>
        <div className="ProfileNameContainer">
          <div className="ProfileNameWrapper">
            <div className="ProfileNameChild">
              <h1>Namaste, Md Danish</h1>
              <p>Let's Track All Your Students</p>
            </div>
            <div className="ProfileNameChild1">
              <a href="/">
                <span className="child1">Verify</span>
                <span className="child2">
                  <ArrowBackIosIcon />
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="ProfileWrappBar">
          <div className="ProfileWrappBarWrapper">
            <h1>Wrap-Up Bar</h1>
            <div
              className="ProfileWrappBarContainer"
              style={{ display: "flex", flexWrap: "wrap" ,justifyContent:'space-around'}}
            >
              <div className="ProfileWrappBarCard">
                <span className="imgIcon">
                  <BsPerson />
                </span>
                <span className="leftContainer">
                  <p>Available Student</p>
                  <div className="leftContainerChild">
                    <span className="price">200</span>
                    <div className="leftContainerChild1">
                      <a href="/" className="lca">
                        <span className="lcchild1">Add</span>
                        <span className="lcchild2">
                          <ArrowBackIosIcon className="arrowChild" />
                        </span>
                      </a>
                    </div>
                  </div>
                </span>
              </div>
              <div className="ProfileWrappBarCard">
                <span className="imgIcon">
                  <SlBadge />
                </span>
                <span className="leftContainer">
                  <p>Subscribed Student</p>
                  <div className="leftContainerChild">
                    <span className="price">0</span>
                    <div className="leftContainerChild1">
                      <a href="/" className="lca">
                        <span className="lcchild1">Manage</span>
                        <span className="lcchild2">
                          <ArrowBackIosIcon className="arrowChild" />
                        </span>
                      </a>
                    </div>
                  </div>
                </span>
              </div>
              <div className="ProfileWrappBarCard" style={{ border: "none" }}>
                <span className="imgIcon">
                  <FiLock />
                </span>
                <span className="leftContainer">
                  <p>Active Batch</p>
                  <div className="leftContainerChild">
                    {/* <span className="price">200</span> */}
                    <div className="leftContainerChild1">
                      <a href="/" className="lca">
                        <span className="lcchild1">Locked</span>
                        {/* <span className="lcchild2">
                        <ArrowBackIosIcon className='arrowChild' />
                      </span> */}
                      </a>
                    </div>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="ProfileFooter">
          <div className="ProfileFooterWrapper">
            <h1 className="footerh1">
              User <span className="h1span">Journey</span>
            </h1>
            <div className="ProfileFooterParent">
              <div className="ProfileFooterContainer" >
                <div className="ProfileFooterChild">
                  <span className="footerChild1">Step 1:</span>
                  <span className="footerChild2">Create Account</span>
                </div>
                <div className="ProfileFooterChild1" >
                  <span className="imgIcon" style={{background:'#0FA958',fontSize:'2rem'}}>
                    <FaWpforms />
                  </span>
                  <span className="border"></span>
                </div>
                <div className="ProfileFooterChild2">
                  <span style={{color:'#0FA958'}}> completed</span>
                </div>
              </div>
              <div className="ProfileFooterContainer">
                <div className="ProfileFooterChild">
                  <span className="footerChild1">Step 2:</span>
                  <span className="footerChild2">Complete Your Profile</span>
                </div>
                <div className="ProfileFooterChild1">
                  <span className="border1"></span>
                  <span className="imgIcon">
                    <BsPerson />
                  </span>
                  <span className="border"></span>
                </div>
                <div className="ProfileFooterChild2">
                  <span>Start</span>
                </div>
              </div>
              <div className="ProfileFooterContainer">
                <div className="ProfileFooterChild">
                  <span className="footerChild1">Step 3:</span>
                  <span className="footerChild2">Add Your Student</span>
                </div>
                <div className="ProfileFooterChild1">
                  <span className="border1"></span>
                  <span className="imgIcon">
                    <AiOutlinePlus />
                  </span>
                  <span className="border"></span>
                </div>
                <div className="ProfileFooterChild2">
                  <span>Add</span>
                </div>
              </div>
              <div className="ProfileFooterContainer">
                <div className="ProfileFooterChild">
                  <span className="footerChild1">Step 4:</span>
                  <span className="footerChild2">Create Your Account</span>
                </div>
                <div className="ProfileFooterChild1">
                  <span className="border1"></span>
                  <span className="imgIcon">
                    <FiLock />
                  </span>
                  
                </div>
                <div className="ProfileFooterChild2">
                  <span>Locked</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {viewProfile && <TutorDashboardRightSidebar /> }
    </div>
  );
};

export default ProfileContent;
