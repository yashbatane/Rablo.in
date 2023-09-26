import React, { useState } from "react";
import ProfileContext from "./profileContext";

const profileDataFetched = {
  academicDesc:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio saepe iusto recusandae molestiae fugiat aliquam excepturi beatae consequatur in modi!",
  ageGroup: "20-25",
  classNo:3,
  commute: "public",
  currentRole: "Fresher",
  edInstitute: "srtsghs",
  everWorkedAs: "Professional tutor",
  expYrs: "2-5",
  firstName: "vision",
  gender: "Male",
  highestQual: "Intermediate",
  jobType: "Full time",
  language: "Hindi",
  lastEmployer: "fgb",
  lastName: "pc",
  mail: "visionpc@gmail.com",
  mode: "offline",
  phone: "9988776655",
  prefClasses: "Junior",
  subject: "Humanities",
  whatsApp: "9988776655",
  prefHrs:"1hr 30 min"
};
const ProfileState = (props) => {
  const [profileData, setProfileData] = useState(profileDataFetched);
  return (
    <ProfileContext.Provider value={{ profileData, setProfileData }}>
      {props.children}
    </ProfileContext.Provider>
  );
};

export default ProfileState;
