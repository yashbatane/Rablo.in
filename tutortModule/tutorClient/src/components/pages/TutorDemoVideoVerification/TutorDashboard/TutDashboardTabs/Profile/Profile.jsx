import React, { useEffect } from "react";
import "./profile.css";
import { useState } from "react";
import { useSelector ,useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import TutorVarification from "../../TutorVarification/TutorVarification";
import Preference from "./Preference";
import PreferenceForm from "../../PreferenceForm/PreferenceForm";
import TutorEducation from "../../TutorEducationalField/TutorEducation";
import { setHidePref, setShowProfile,setFormStatus } from "../../../../../store/profileSlice";
import { setSelectedTab } from "../../../../../store/sidebarSlice";

// imprort TutorEducation
const Profile = ({ showForms }) => {
  console.log("form is" + showForms);
  const navigate = useNavigate();
  // const [showProfile, setShowProfile] = useState(true);
  const [showFullpage, setShowFullPage] = useState(true);
  // const [hidePref,setHidePref]=useState(true);
  const [hideProf,setHideProf]=useState(true);
  const [count,setCount]=useState(0);
const formStatus=useSelector(state=>state.profile.formStatus)
const showProfile=useSelector((state)=>state.profile.showProfile)
const hidePref=useSelector((state)=>state.profile.hidePref)
const dispatch=useDispatch()

useEffect(()=>{
console.log(showProfile)
},[formStatus]
)

  const handlePreferenceClick = (e) => {
    // setShowProfile(false);    
    dispatch(setShowProfile(false))
    dispatch(setSelectedTab("6"))
    dispatch(setFormStatus(true));
    // setHidePref(false);
  };
  const handleProfileClick = () => {
    // setShowProfile(true);
    dispatch(setShowProfile(true))
    dispatch(setSelectedTab("5"))
  };
  const hidePreference=()=>{
    // console.log("clicle");
    // setHidePref(false);
    dispatch(setHidePref(false))
  }
  const showPreference=()=>{
    setHideProf(false);
  }
 
  return (
    <div className="profileContainer">
      <div className="profileWrapper">
        <div className="profileNav">
          <div>
            {" "}
            <h3>Education Information</h3>
          </div>
          <div className="profileNavInner">
          <button
              onClick={handleProfileClick}
              value="profile"
              className={showProfile ? "markBlue" : ""}
            >
              Profile
            </button>
            {hidePref?<button 
           disabled={!formStatus ? true :false}
              onClick={handlePreferenceClick}
              value="preference"
              className={!showProfile ? "markBlue" : ""}
            >
              Preference
            </button>:""}
          </div>
        </div>
        <div className="profileFormDiv">
          {showProfile ? (
           <TutorEducation showPreference={handlePreferenceClick} />
          ) : (hidePref ? <PreferenceForm hidePreference={hidePreference} />:""
          )}
          {/* {!showForms?<PreferenceForm />:"null"} */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
// hidePref ? <PreferenceForm hidePreference={hidePreference} />:""