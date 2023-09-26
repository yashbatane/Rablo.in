import React, { useState } from "react";
import "../TutorVarification.css";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { FiMapPin, FiEdit } from "react-icons/fi";
import { TbLetterA } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";

import mapImg from "../Images/Map.png";

let defaultLanguages = [
  {
    name: "English",
    selected: false,
  },
  {
    name: "Hindi",
    selected: false,
  },
  {
    name: "Bengali",
    selected: false,
  },
  {
    name: "Marathi",
    selected: false,
  },
  {
    name: "Tamil",
    selected: false,
  },
  {
    name: "Malyalam",
    selected: false,
  },
  {
    name: "Gujarati",
    selected: false,
  },
  {
    name: "Urdu",
    selected: false,
  },
  {
    name: "Odia",
    selected: false,
  },
  {
    name: "Punjabi",
    selected: false,
  },
  {
    name: "Assamese",
    selected: false,
  },
  {
    name: "Telugu",
    selected: false,
  },
];

let classMode = ["Online", "Offline (at-HOme)", "Hybrid"];
let classOptions = [
  "Pre-Primary (Nus-2nd)",
  "Primary (3rd-5th)",
  "Junior Section (6th-8th)",
  "HighSchool (9th-10th)",
  "Intermediate (11th-12th",
  "Exam Prep",
  "Others",
];
const PreferenceSection = () => {
  const [openDropdown1, setOpenDropdown1] = useState(false);
  const [openDropdown2, setOpenDropdown2] = useState(false);
  const [languages, setLanguages] = useState(defaultLanguages);
  const [addVisible, setAddVisible] = useState(false);
  const [newLanguage, setNewLanguage] = useState("");

  const languageSelectHandler = (index) => {
    setLanguages((prev) => {
      return prev.map((curr, idx) => {
        if (idx === index) {
          return {
            ...curr,
            selected: !curr.selected,
          };
        } else {
          return curr;
        }
      });
    });
  };
  const addLanguage = () => {
    setAddVisible(!addLanguage);

    if (newLanguage === "") {
      return;
    }
    setLanguages((prev) => [...prev, { name: newLanguage, selected: false }]);
    setNewLanguage("");
  };
  return (
    <div className="form">
      <div className="two-section">
        <div className="group">
          <label>How Much Time You Can Invest?</label>
          <button
            className="dropdown-btn"
            onClick={() => setOpenDropdown1(!openDropdown1)}
          >
            Your Highest Qualification
            <IoIosArrowDown className="dropdown-icon" />
          </button>

          {/* dropdonws items */}
          <div
            className={
              openDropdown1
                ? "dropdown dropdown-open"
                : "dropdown dropdown-close"
            }
          >
            {classMode.map((curr, idx) => {
              return (
                <div className="dropdown-items" key={idx}>
                  <button className="dropdown-items-btn">
                    {String.fromCharCode(65 + idx)}
                  </button>
                  <div>{curr}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="group">
          <label>How Much Time You Can Invest?</label>
          <button
            className="dropdown-btn"
            onClick={() => setOpenDropdown2(!openDropdown2)}
          >
            Your Preferred Mode Of Class
            <IoIosArrowDown className="dropdown-icon" />
          </button>

          {/* dropdonws items */}
          <div
            className={
              openDropdown2
                ? "dropdown dropdown-open"
                : "dropdown dropdown-close"
            }
          >
            {classMode.map((curr, idx) => {
              return (
                <div className="dropdown-items" key={idx}>
                  <button className="dropdown-items-btn">
                    {String.fromCharCode(65 + idx)}
                  </button>
                  <div>{curr}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="address-section">
        <label>Current Address</label>
        <div className="address-section-wrapper">
          <FiMapPin className="address-icon" />
          <input type="text" placeholder="Pin The Mark Or Enter The Address" />
          <FiEdit className="address-icon" />
        </div>
        <div className="map-image-wrapper">
          <img src={mapImg} alt="map-image" />
        </div>
      </div>

      {/* class select section */}
      <div className="class-select-section">
        <label>Select The Class You Want To Teach?</label>
        <p>
          Choosing a class section can attract students falling under that
          range. The first student's preference automatically selects the exact
          standard. For example, if the first student is from 4th standard,
          selecting the primary section will auto-select 4th standard as the
          primary class for that student.
        </p>

        <div className="options">
          {classOptions.map((curr, idx) => {
            return (
              <div className="options-wrapper" key={idx}>
                <div className="letter-icon">
                  {String.fromCharCode(65 + idx)}
                </div>
                <div>{curr}</div>
              </div>
            );
          })}
        </div>
        <div className="down-icon-wrapper">
          <IoIosArrowDown className="down-icon" />
        </div>
      </div>

      {/* Language section */}
      <div className="language-select-section">
        <label>What Will Be The Common Language Of The Class?</label>
        <div className="languages-container">
          {languages.map((curr, idx) => {
            return (
              <div
                className="languages"
                key={idx}
                onClick={() => languageSelectHandler(idx)}
              >
                <div
                  className={
                    curr.selected
                      ? "language-wrapper language-selected"
                      : "language-wrapper"
                  }
                >
                  {curr.name}
                </div>
              </div>
            );
          })}

          <div className="languages">
            <div className={addVisible ? "other" : "language-wrapper"}>
              <div onClick={() => setAddVisible(!addVisible)}>Others</div>
              {addVisible === true && (
                <div className="icon-input-wrapper">
                  <IoIosArrowForward />
                  <div className="add-language">
                    <input
                      type="text"
                      placeholder="Type"
                      value={newLanguage}
                      onChange={(e) => setNewLanguage(e.target.value)}
                    />

                    <AiOutlinePlus onClick={() => addLanguage()} />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <p>
          Your common means of communication will be in{" "}
          <span>Hindi & English</span> as per the above selection.
        </p>
      </div>
    </div>
  );
};

export default PreferenceSection;
