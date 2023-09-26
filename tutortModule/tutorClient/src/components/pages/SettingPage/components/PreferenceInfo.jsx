import React, { useRef, useContext } from "react";
import Editable from "./Editable";
import profileContext from "../context/profileContext";

const PreferenceInfo = () => {
  const inputRef = useRef();
  //const { profileData, setProfileData } = useContext(profileContext);
  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
    console.log(profileData);
  };
  return (
    <div className="tutorProfile__preferenceInfo">
      <div className="tutorProfile__sectionHeading">
        <span>3</span>
        <h1>Preference Information</h1>
      </div>

      <div className="tutorProfile__workExperience">
        <div className="tutorProfile__inputWrapper">
          <div>
            <label className="tutorProfile__inputLabel">
              Mode of classes :
            </label>
            <span className="tutorProfile__errorSpan"></span>
          </div>

          <Editable
            // text={profileData.mode || ""}
            type="input"
            childRef={inputRef}
          >
            <select
              // value={profileData.mode || ""}
              name="mode"
              onChange={handleChange}
              ref={inputRef}
            >
              <option value="online">Online</option>
              <option value="offline">Offline</option>
            </select>
          </Editable>
        </div>
      </div>
{/* 
      {profileData.mode === "offline" ? (
        <div className="tutorProfile__inputWrapper">
          <div>
            <label className="tutorProfile__inputLabel">Mode of Commute</label>
            <span className="tutorProfile__errorSpan"></span>
          </div>

          <Editable
            // text={profileData?.commute || ""}
            placeholder="Mode of Commute"
            type="input"
            childRef={inputRef}
          >
            <select
              // value={profileData.commute || ""}
              // name="commute"
              onChange={handleChange}
              ref={inputRef}
            >
              <option value="Self">Self</option>
              <option value="public">public</option>
            </select>
          </Editable>
        </div>
      ) : (
        ""
      )} */}

      <div className="tutorProfile__workExperience">
        <div className="tutorProfile__inputWrapper">
          <div>
            <label className="tutorProfile__inputLabel">
              Preffered languages :
            </label>
            <span className="tutorProfile__errorSpan"></span>
          </div>

          <Editable
            // text={profileData.language || ""}
            type="input"
            childRef={inputRef}
          >
            <select
              // value={profileData.language || ""}
              name="language"
              onChange={handleChange}
              ref={inputRef}
            >
              <option value="Hindi">Hindi</option>
              <option value="Bengali">Bengali</option>
              <option value="Telugu">Telugu</option>
              <option value="Tamil">Tamil</option>
              <option value="Gujrati">Gujrati</option>
              <option value="Urdu">Urdu</option>
              <option value="Kannada">Kannada</option>
              <option value="Odia">Odia</option>
              <option value="Malayalam">Malayalam</option>
              <option value="Punjabi">Punjabi</option>
              <option value="Assmamese">Assmamese</option>
              <option value="English">English</option>
            </select>
          </Editable>
        </div>
      </div>

      <div className="tutorProfile__workExperience">
        <div className="tutorProfile__inputWrapper">
          <div>
            <label className="tutorProfile__inputLabel">
              Preffered classes :
            </label>
            <span className="tutorProfile__errorSpan"></span>
          </div>

          <Editable
            // text={profileData.prefClasses || ""}
            type="input"
            childRef={inputRef}
          >
            <select
              // value={profileData.prefClasses || ""}
              name="prefClasses"
              onChange={handleChange}
              ref={inputRef}
            >
              <option value="Pri-primary">Pri-primary</option>
              <option value="Primary">Primary</option>
              <option value="Junior">Junior</option>
              <option value="High">High</option>
              <option value="Intermediate">Intermediate</option>
            </select>
          </Editable>
        </div>
      </div>

      <div className="tutorProfile__workExperience">
        <div className="tutorProfile__inputWrapper">
          <div>
            <label className="tutorProfile__inputLabel">No. of classes :</label>
            <span className="tutorProfile__errorSpan"></span>
          </div>

          <Editable
            // text={profileData.classNo || ""}
            type="input"
            childRef={inputRef}
          >
            {/* <select
              // value={profileData.classNo || ""}
              // name="classNo"
              onChange={handleChange}
              ref={inputRef}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              {profileData.jobType === "Full time" ? (
                <option value="4">4</option>
              ) : (
                ""
              )}
              {profileData.jobType === "Full time" ? (
                <option value="5">5</option>
              ) : (
                ""
              )}
              {profileData.jobType === "Full time" ? (
                <option value="6">6</option>
              ) : (
                ""
              )}
            </select> */}
          </Editable>
        </div>
      </div>

      <div className="tutorProfile__workExperience">
        <div className="tutorProfile__inputWrapper">
          <div>
            <label className="tutorProfile__inputLabel">
              Preferred hours :
            </label>
            <span className="tutorProfile__errorSpan"></span>
          </div>

          <Editable
            // text={profileData.prefHrs || ""}
            type="input"
            childRef={inputRef}
          >
            <select
              // value={profileData.prefHrs || ""}
              // name="prefHrs"
              onChange={handleChange}
              ref={inputRef}
            >
              <option value="1hr">1 hr</option>
              <option value="1hr 30 mins">1hr 30 mins</option>
              <option value="2hrs">2hrs</option>
            </select>
          </Editable>
        </div>
      </div>
    </div>
  );
};

export default PreferenceInfo;
