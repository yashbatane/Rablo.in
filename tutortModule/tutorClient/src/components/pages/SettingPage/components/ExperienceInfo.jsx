import React, { useState, useRef, useContext } from "react";
import Editable from "./Editable";
import EditableFileInput from "./EditableFileInput";
import profileContext from "../context/profileContext";

const ExperienceInfo = () => {
  const { profileData, setProfileData } = useContext(profileContext);
  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
    console.log(profileData);
  };
  
  const inputRef = useRef();

  const [edInstituteMarksheet, setEdInstituteMarksheet] = useState();

  return (
    <div className="tutorProfile__experienceInfo">
      <div className="tutorProfile__sectionHeading">
        <span>2</span>
        <h1>Qualification,Experience and expertise</h1>
      </div>

      <div className="tutorProfile__workExperience">
        <div className="tutorProfile__inputWrapper">
          <div>
            <label className="tutorProfile__inputLabel">Ever Worked as :</label>
            <span className="tutorProfile__errorSpan"></span>
          </div>

          <Editable
            text={profileData.everWorkedAs || ""}
            placeholder="Ever worked as"
            type="input"
            childRef={inputRef}
          >
            <select
              type="text"
              name="everWorkedAs"
              placeholder="Mobile"
              value={profileData.everWorkedAs || ""}
              onChange={handleChange}
              ref={inputRef}
            >
              <option value="Freelancer">Freelancer</option>
              <option value="Professional tutor">Professional tutor</option>
              <option value="Both">Both</option>
              <option value="none">none</option>
            </select>
          </Editable>
        </div>
      </div>

      <div className="tutorProfile__workExperience">
        <div className="tutorProfile__inputWrapper">
          <div>
            <label className="tutorProfile__inputLabel">Current Role :</label>
            <span className="tutorProfile__errorSpan"></span>
          </div>

          <Editable
            text={profileData.currentRole || ""}
            placeholder="Current role"
            type="input"
            childRef={inputRef}
          >
            <select
              type="text"
              name="currentRole"
              placeholder="Mobile"
              value={profileData.currentRole || ""}
              onChange={handleChange}
              ref={inputRef}
            >
              <option value="Student">Student</option>
              <option value="Fresher">Fresher</option>
              <option value="Employed">Employed</option>
              <option value="Employed">Employed</option>
              <option value="Retired">Retired</option>
              <option value="Self-employed">Self-employed</option>
            </select>
          </Editable>
        </div>
      </div>

      <div className="tutorProfile__workExperience">
        <div className="tutorProfile__inputWrapper">
          <div>
            <label className="tutorProfile__inputLabel">
              Highest Qualification :
            </label>
            <span className="tutorProfile__errorSpan"></span>
          </div>

          <Editable
            text={profileData.highestQual || ""}
            type="input"
            childRef={inputRef}
          >
            <select
              value={profileData.highestQual || ""}
              onChange={handleChange}
              ref={inputRef}
              name="highestQual"
            >
              <option value="High School">High School</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Diploma">Diploma</option>
              <option value="Employed">Employed</option>
              <option value="Graduation">Graduation</option>
              <option value="Post Graduation">Post Graduation</option>
            </select>
          </Editable>
        </div>
      </div>

      <div className="tutorProfile__workExperience">
        <div className="tutorProfile__inputWrapper">
          <div>
            <label className="tutorProfile__inputLabel">
              Tell us more about your Academics :
            </label>
            <span className="tutorProfile__errorSpan"></span>
          </div>

          <Editable
            text={profileData.academicDesc || ""}
            placeholder="Your course , subjects etc"
            type="input"
            childRef={inputRef}
          >
            <textarea
              value={profileData.academicDesc || ""}
              text="Your course , subjects etc"
              placeholder="Your course , subjects etc"
              onChange={handleChange}
              rows={4}
              name="academicDesc"
              ref={inputRef}
            />
          </Editable>
        </div>
      </div>

      <div className="tutorProfile__workExperience">
        <div className="tutorProfile__inputWrapper">
          <div>
            <label className="tutorProfile__inputLabel">
              Name of School/College/University :
            </label>
            <span className="tutorProfile__errorSpan"></span>
          </div>

          
          <EditableFileInput
            text={profileData.edInstitute || ""}
            type="input"
            childRef={inputRef}
            placeholder=" Name of current/last employer/company :"
          >
            <div>
            <input
                type="text"
                name="edInstitute"
                placeholder="Name of School/College/University :"
                value={profileData.edInstitute || ""}
                onChange={handleChange}
                ref={inputRef}
              />
              <input
                type="file"
                name="edInstituteMarksheet"
                placeholder="Latest marksheet of School/College/University :"
                onChange={(e)=>setProfileData({...profileData,edInstituteMarksheet:e.target.files[0]})}
              />
            </div>
          </EditableFileInput>
        </div>
      </div>

      <div className="tutorProfile__workExperience">
        <div className="tutorProfile__inputWrapper">
          <div>
            <label className="tutorProfile__inputLabel">
              Name of current/last employer/company :
            </label>
            <span className="tutorProfile__errorSpan"></span>
          </div>

          <EditableFileInput
            text={profileData.lastEmployer || ""}
            type="input"
            childRef={inputRef}
            placeholder=" Name of current/last employer/company :"
          >
            <div>
              <input
                type="text"
                name="lastEmployer"
                placeholder=" Name of current/last employer/company : :"
                value={profileData.lastEmployer || ""}
                onChange={handleChange}
                ref={inputRef}
              />
              <input
                type="file"
                name="lastEmployerCert"
                placeholder=" Name of current/last employer/company :"
                onChange={(e)=>setProfileData({...profileData,lastEmployerCert:e.target.files[0]})}
                ref={inputRef}
              />
            </div>
          </EditableFileInput>
        </div>
      </div>

      <div className="tutorProfile__workExperience">
        <div className="tutorProfile__inputWrapper">
          <div>
            <label className="tutorProfile__inputLabel">
              Years of experience :
            </label>
            <span className="tutorProfile__errorSpan"></span>
          </div>

          <Editable
            text={profileData.expYrs || ""}
            type="input"
            childRef={inputRef}
          >
            <select
              value={profileData.expYrs || ""}
              onChange={handleChange}
              name="expYrs"
              ref={inputRef}
            >
              <option value="0-2">0-2</option>
              <option value="2-5">2-5</option>
              <option value="5+">5+</option>
            </select>
          </Editable>
        </div>
      </div>

      <div className="tutorProfile__workExperience">
        <div className="tutorProfile__inputWrapper">
          <div>
            <label className="tutorProfile__inputLabel">
              Subject of expertise :
            </label>
            <span className="tutorProfile__errorSpan"></span>
          </div>

          <Editable
            text={profileData.subject || ""}
            type="input"
            childRef={inputRef}
          >
            <select
              value={profileData.subject || ""}
              name="subject"
              onChange={handleChange}
              ref={inputRef}
            >
              <option value="all subjects">all subjects</option>
              <option value="Humanities">Humanities</option>
              <option value="Science">Science</option>
              <option value="Maths">Maths</option>
              <option value="Programming">Programming</option>
              <option value="language">language</option>
              <option value="Commenrce">Commenrce</option>
            </select>
          </Editable>
        </div>
      </div>

      <div className="tutorProfile__workExperience">
        <div className="tutorProfile__inputWrapper">
          <div>
            <label className="tutorProfile__inputLabel">Job Type :</label>
            <span className="tutorProfile__errorSpan"></span>
          </div>

          <Editable
            text={profileData.jobType || ""}
            type="input"
            childRef={inputRef}
          >
            <select
              value={profileData.jobType || ""}
              onChange={handleChange}
              name="jobType"
              ref={inputRef}
            >
              <option value="Part time">Part time</option>
              <option value="Full time">Full time</option>
            </select>
          </Editable>
        </div>
      </div>

      
    </div>
  );
};

export default ExperienceInfo;
