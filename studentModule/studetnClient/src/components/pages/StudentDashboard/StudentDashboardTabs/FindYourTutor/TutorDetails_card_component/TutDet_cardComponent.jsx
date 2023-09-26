import React from "react";
import img from "./image/img.png";
import "./TutDet_cardComponent.css";
import starImg from "./image/star.png";
import infoImg from "./image/infoImg.png";
import langHindi from "./image/langHindi.png";
import circle from "./image/circleProgress.png";
import { TbCurrencyRupee } from "react-icons/tb";

const TutDet_cardComponent = ({ tutor_details }) => {
  return (
    <div className="container">
      <div className="grid">
        <div className="tudDet_card_image">
          <img
            src={tutor_details.profilePictureUrl}
            alt="tutor image"
            style={{ width: "220 px", margin: "200 px" }}
          />
          <img id="langHindi" src={langHindi} alt="" />
          <img id="circleProgress" src={circle} alt="" />
          <img id="starImg" src={starImg} alt="" />
          <div className="rating">{tutor_details.ratings}</div>
          <div className="sub_drop">
            <select name="subs" id="subs">
              <option value="science">{tutor_details.stream}</option>
              {/* <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option> */}
            </select>
          </div>
        </div>
        <div class="text">
          <div className="tutorName-mid-container">
            {tutor_details.Name} ,{" "}
            <span className="exp-midRow">
              {tutor_details.experience} Yrs Exp
            </span>
          </div>
          <div className="tutordegree">
            {tutor_details.educationalBackground}
          </div>
          <div className="subsdiv">
            <div className="num-content">
              {tutor_details.numberOfSubscribedStudents}
              <span className="subScript-numcontent">
                Subscribed <br />
                students
              </span>
            </div>
            <div>
              <span className="num-content-1">
                {tutor_details.numberOfFreeLiveClass}
              </span>
              <span className="subScript-numcontent-1">Free Live Classes</span>
            </div>
          </div>

          <div className="timing">Session timings</div>
          <div className="time-slots">
            {tutor_details.sessionTimings.map((time_slot, index) => (
              <div key={index}>
                <div className="insideTimeSlot">
                  <div>{time_slot}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="price-container-flex">
            <div className="price">
              <TbCurrencyRupee />
              {tutor_details.pricePerHour}
              <span className="price1"> Per Hour</span>
              {/* <span className="pricebtn"> */}
              <button className="priceContainer-button"> Hindi </button>
              {/* </span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutDet_cardComponent;
