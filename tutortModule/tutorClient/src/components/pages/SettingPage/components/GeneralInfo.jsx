import React, {  useRef,useContext }  from 'react'
import Editable from "./Editable";
import profileContext from "../context/profileContext";


const GeneralInfo = () => {
  const inputRef = useRef();
  //const { profileData, setProfileData } = useContext(profileContext);
  const handleChange =(e)=>{
    setProfileData({...profileData,[e.target.name]:e.target.value});
    console.log(profileData)
  }
  return (
    <div className="tutorProfile__generalInfo">
        <div className="tutorProfile__sectionHeading">
          <span>1</span>
          <h1>General Information</h1>
        </div>

        <div className="tutorProfile__nameContainer">
            {/* {firstName} */}
          <div className="tutorProfile__inputWrapper">
            <div>
              <label className="tutorProfile__inputLabel">
                First Name
              </label>
              <span className="tutorProfile__errorSpan"></span>
            </div>

            <Editable
              // text={profileData.firstName || ''}
              placeholder="First Name"
              type="input"
              childRef={inputRef}
            >
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                // value={profileData?.firstName || ''}
                onChange={handleChange}
                ref={inputRef}
              />
            </Editable>
          </div>
          {/* {SecondName} */}
          <div className="tutorProfile__inputWrapper">
            <div>
              <label className="tutorProfile__inputLabel" >
                Last Name
              </label>
              <span className="tutorProfile__errorSpan"></span>
            </div>

            <Editable
              // text={profileData?.lastName||''}
              // placeholder="Last Name"
              type="input"
              childRef={inputRef}
            >
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                // value={profileData?.lastName||''}
                onChange={handleChange}
                ref={inputRef}
              />
            </Editable>
          </div>
        </div>

        <div className="tutorProfile__mobileContainer">
             {/* {Mobile number} */}
          <div className="tutorProfile__inputWrapper">
            <div>
              <label className="tutorProfile__inputLabel">
                Phone
              </label>
              <span className="tutorProfile__errorSpan"></span>
            </div>

            <Editable
              // text={profileData?.phone||''}
              // placeholder="Mobile"
              type="input"
              childRef={inputRef}
            >
              <input
                type="number"
                name="phone"
                placeholder="Mobile"
                // value={profileData?.phone||''}
                onChange={handleChange}
                ref={inputRef}
              />
            </Editable>
          </div>
        </div>

        <div className="tutorProfile__mobileContainer">
             {/* {Mobile number} */}
          <div className="tutorProfile__inputWrapper">
            <div>
              <label className="tutorProfile__inputLabel" >
                WhatsApp
              </label>
              <span className="tutorProfile__errorSpan"></span>
            </div>

            <Editable
              // text={profileData.whatsApp||''}
              placeholder="WhatsApp"
              type="input"
              childRef={inputRef}
            >
              <input
                type="text"
                name="whatsApp"
                placeholder="WhatsApp"
                // value={profileData?.whatsApp||''}
                onChange={handleChange}
                ref={inputRef}
              />
            </Editable>
          </div>
        </div>

        <div className="tutorProfile__emailContainer">
             {/* {email} */}
          <div className="tutorProfile__inputWrapper">
            <div>
              <label className="tutorProfile__inputLabel" >
                E-mail Address
              </label>
              <span className="tutorProfile__errorSpan"></span>
            </div>

            <Editable
              // text={profileData.mail||''}
              placeholder="email address"
              type="input"
              childRef={inputRef}
            >
              <input
                type="email"
                name="mail"
                placeholder="email address"
                // value={profileData?.mail||''}
                onChange={handleChange}
                ref={inputRef}
              />
            </Editable>
          </div>
        </div>

        <div>
        <div className="tutorProfile__inputWrapper">
            <div>
              <label className="tutorProfile__inputLabel" htmlFor="gender">
                Gender
              </label>
              <span className="tutorProfile__errorSpan"></span>
            </div>

            <Editable
              // text={profileData?.gender||''}
              // placeholder={profileData?.gender||''}
              type="input"
              childRef={inputRef}
            >
              <div>
              <select
                type="text"
                name="gender"
                // placeholder={profileData?.gender||''}
                // value={profileData?.gender||''}
                onChange={handleChange}
                ref={inputRef}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="LGBTQ+">LGBTQ+</option>
                </select>
              
              </div>
             
            </Editable>
          </div>

          <div className="tutorProfile__inputWrapper">
            <div>
              <label className="tutorProfile__inputLabel" >
                Age Group
              </label>
              <span className="tutorProfile__errorSpan"></span>
            </div>

            <Editable
              // text={profileData.ageGroup||''}
              placeholder="ageGroup"
              type="input"
              childRef={inputRef}
            >
              <select
                type="text"
                name="ageGroup"
                placeholder="ageGroup"
                // value={profileData?.ageGroup||''}
                // onChange={handleChange}
                ref={inputRef}
              >
                <option value="20-25">20-25</option>
                <option value="30-45">30-45</option>
                </select>
            </Editable>
          </div>
        </div>


      </div>
  )
}

export default GeneralInfo