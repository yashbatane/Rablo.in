import React, { useState } from "react";
import SidebarBg from "./Images/SeaLighthouse.png";
import Logo from "./Images/social/rablo.png";
import "./TutorVarification.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { RiLogoutCircleRLine } from "react-icons/ri";
import {
  TbSquareRoundedNumber1Filled,
  TbSquareRoundedNumber2Filled,
  TbSquareRoundedNumber3Filled,
  TbSquareRoundedNumber4Filled,
} from "react-icons/tb";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import QualificationSection from "./components/QualificationSection";
import PreferenceSection from "./components/PreferenceSection";
import VerificationSection from "./components/VerificationSection";
import SelfDeclarationSection from "./components/SelfDeclarationSection";
import { BsJustifyLeft } from "react-icons/bs";

const TutorVarification = () => {
  const [section, setSection] = useState(1);
  return (
    <div className="TutorVarification">

      {/* sidebar section*/}
      <div className="sidebar">
        <div className="sidebar-container">
          <img src={SidebarBg} alt="Sidebarbg-image" />
          <div className="arrow-logo-wrapper">
            <AiOutlineArrowLeft className="arrow-icon" />
            <div className="rablo-logo">
              <img src={Logo} alt="Logo-image" />
            </div>
          </div>

         
          <div className="logout-btn">
            <RiLogoutCircleRLine className="logout-icon" />
            Logout
          </div>
        </div>
      </div>


      {/* form section */}
      <div className="form-section">

        <div className="top-section">
          Having Trouble? <span>Need Help!</span>
        </div>
        <div className="container">
          <div className="jj">
            <div className="title">Qualification</div>
            <p className="description">Enter you qualification details here</p>


            {/* navigation */}
            <div className="form-container"><nav>
              <ul>
                <li className={section === 1 && "active-state"}>
                  <div className="nav-icons">
                    <TbSquareRoundedNumber1Filled />
                  </div>
                  Qualification
                </li>

                <li>
                  <IoIosArrowForward className="forward-icon" />
                </li>

                <li className={section === 2 && "active-state"}>
                  <div className="nav-icons">
                    <TbSquareRoundedNumber2Filled />
                  </div>
                  Prefences
                </li>

                <li>
                  <IoIosArrowForward className="forward-icon" />
                </li>

                <li className={section === 3 && "active-state"}>
                  <div className="nav-icons">
                    <TbSquareRoundedNumber3Filled />
                  </div>
                  Verification
                </li>

                <li>
                  <IoIosArrowForward className="forward-icon" />
                </li>

                <li className={section === 4 && "active-state"}>
                  <div className="nav-icons">
                    <TbSquareRoundedNumber4Filled />
                  </div>
                  <div>Self Declaration</div>
                </li>
                
              </ul>
            </nav>


              {/* progress bar */}


              {section < 5 && (
                <p className="progress">
                  <div>Start</div>
                  <div className="line">
                    <div className="line-completed">
                      <div className="progress-indication">60%</div>
                    </div>
                  </div>
                  <div>Completed</div>
                </p>
              )}

              <div className="form-container">
                <div className="main-form">
                  {section === 1 && <QualificationSection />}
                  {section === 2 && <PreferenceSection />}
                  {section === 3 && <VerificationSection />}
                  {section === 4 && <SelfDeclarationSection />}
                  
                </div>
              </div>
            </div>
            <div className="btns-section">
              {section > 1 && section < 4 && (
                <div
                  className="skip-btn"
                  onClick={() => {
                    setSection(section + 1);
                  }}
                >
                  Skip
                </div>
              )}
              <div className="next-btn-wrapper">
                {section > 1 && (
                  <button
                    className="back-btn"
                    onClick={() => {
                      section > 1 && setSection(section - 1);
                    }}
                  >
                    <IoIosArrowBack />
                    Back
                  </button>
                )}
                {section === 4 ? (
                  <button
                    className="next-btn"
                    onClick={() => {
                      section < 4 && setSection(section + 1);
                    }}
                  >
                    Accept
                    <IoIosArrowForward />
                  </button>
                ) : (
                  <button
                    className="next-btn"
                    onClick={() => {
                      section < 4 && setSection(section + 1);
                    }}
                  >
                    Next
                    <IoIosArrowForward />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorVarification;