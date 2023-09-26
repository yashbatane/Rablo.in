import React from "react";
import "./profile.css";
import NavBar from "../TutorDashboard/Profiledashboard/TutorDashboardSidebar/TutorDashboardSidebar";
import { AiOutlinePlus, AiFillEdit, AiOutlineStar } from "react-icons/ai";
import star1 from "./assests/star1.png";
import user from "./assests/user.png";
import reward from "./assests/reward.png";
import lock from "./assests/lock.png";
import overview from "./assests/over-view.png";
import preference from "./assests/preference.png";
import financials from "./assests/financials.png";
import mail from "./assests/mail.png";
import phone from "./assests/phone.png";
import whatsapp from "./assests/whatsapp.png";
import location from "./assests/location.png";
import eng from "./assests/eng.png";
import hindi from "./assests/hindi.png";
import gujurat from "./assests/gujurat.png";
import college from "./assests/college.png";
import school from "./assests/school.png";
import pingstar from "./assests/pingstar.png"
import greenstar from "./assests/greenstar.png";
import silverstar from "./assests/silverstar.png";
import goldenstar from "./assests/goldenstar.png";
import { MdEdit } from "react-icons/md";
import WrapUp from "./Wrapup/WrapUp";
import Contact from "./contact/Contact";
import Map from "./Map/map";
const TutorProfile = () => {
  return (
    <div className="my-tutor-profile">
      <NavBar />
      <div className="tutor-profile">
        <div className="tutor-details">
          <div className="row-1">
            <div className="img">
              <img
                src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
                alt="pofile-pic"
              />
              <p>
                4.3
                <AiOutlineStar className="icon" />
              </p>
              <p>Ratings </p>
            </div>
            <div className="details">
              <div className="tutor-name">
                <h1>
                  John Pope,
                  <span>
                    5 <span> Yrs Exp.</span>
                  </span>
                </h1>
                <div className="award">
                  <div className="stars">
                    <img className="star-img" src={pingstar} />
                    <img className="star-img" src={goldenstar} alt="" />
                    <img className="star-img" src={silverstar} alt="" />
                    <img className="star-img" src={greenstar} alt="" />
                  </div>
                  <p>Awards</p>
                </div>
                <div className="edit-profile">
                  <MdEdit /> Profile
                </div>
              </div>

              <p>Details</p>
              <p>
                I am intrested in Science & Web Technology. Basic Lorem Ipsum is
                simply.
              </p>
              <div className="subs">
                <div>Science</div>
                <div>Maths</div>
                <div>Hindi</div>
                <div>
                  <AiOutlinePlus className="icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wrap-up">
          <h1>Wrap-up Bar</h1>
          <div className="row-1">
            <WrapUp
              icon={<img src={user} alt="" className="imgs" />}
              desc="Available Student"
              num="200"
              order="Add >"
              margin="8px 30px"
            />
            <WrapUp
              icon={<img src={reward} alt="" className="imgs" />}
              desc="Subscribed Student"
              num="0"
              order="Manage >"
              margin="10px 30px 0 30px"
            />
            <WrapUp
              icon={<img src={lock} alt="" className="imgs" />}
              desc="Active Batch"
              order="Locked"
              background="rgba(94, 66, 187, 0.8)"
            />
          </div>
        </div>
        <div className="reveiws">
          <div className="row-1">
            <div>
              <img src={overview} alt="" className="imgs" />
              Overview
            </div>
            <div>
              <img src={star1} alt="" className="imgs" />
              Reviews
            </div>
            <div>
              <img src={preference} alt="" className="imgs" />
              preference
            </div>
            <div>
              <img src={financials} alt="" className="imgs" />
              Financials
            </div>
          </div>
        </div>
        <div className="contacts">
          <div className="row-1">
            <p>Contact Details</p>
            <p>
              <AiFillEdit />
              Edit
            </p>
          </div>
          <div className="row-1">
            <Contact
              icon={<img src={mail} alt="" className="imgs" />}
              type="Email Address"
              content="email.address@gmail.com"
            />
            <Contact
              icon={<img src={phone} alt="" className="imgs" />}
              type="Mobile Number"
              content="+91 7007 881 594"
            />
          </div>
          <div className="row-1">
            <Contact
              icon={<img src={whatsapp} alt="" className="imgs" />}
              type="WhatsApp Number"
              content="+91 7007 881 594"
            />
            <Contact
              icon={<img src={location} alt="" className="imgs" />}
              type="Permanent Address"
              content="Lucknow, Uttar Pradesh"
            />
          </div>
          <div className="location">
            <div className="row-1">
              <p>Current Location</p>
              <p>
                <AiFillEdit />
                Edit
              </p>
            </div>
            <Map />
          </div>
          <div className="languages">
            <div className="row-1">
              <p>Language</p>
              <p>
                <AiFillEdit />
                Edit
              </p>
            </div>
            <div className="row-1">
              <Contact
                icon={<img src={eng} alt="" className="imgs" />}
                type="Native Speaker"
                content="English"
                textTransform="capitalize"
              />

              <Contact
                icon={<img src={hindi} alt="" className="imgs" />}
                type="Fluent Speaker"
                content="Hindi"
                textTransform="capitalize"
              />
              <Contact
                icon={<img src={gujurat} alt="" className="imgs" />}
                type="Proficient Speaker"
                content="Gujrati"
                textTransform="capitalize"
              />
            </div>
          </div>
          <div className="Education">
            <div>
              <div className="row-1">
                <p>Educational Information </p>
                <p>
                  <AiFillEdit />
                  Edit
                </p>
              </div>
            </div>
            <div className="row-1">
              <Contact
                icon={<img src={college} alt="" className="imgs" />}
                type="Bangalore, Indiar"
                content="B.Tech. Acharya College of Engineering"
                textTransform="capitalize"
              />
              <Contact
                icon={<img src={school} alt="" className="imgs" />}
                type="Bangalore, India"
                content="ABC ICSE School"
                textTransform="capitalize"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorProfile;
