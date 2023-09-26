import React from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ProfileImg from "../../../StudentHomeTab/resources/profile.jpg";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AddIcon from "@mui/icons-material/Add";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

import "./ViewTutor.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleTutor } from "../../../../../../../store/slices/singleTutorSlice";

export default function ViewTutor() {
const decodeTime = (time) => {
  console.log(time);
  const date = new Date(time);
  const hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours >= 12 ? "pm" : "am";
  let decodedHours = hours % 12;
  decodedHours = decodedHours ? decodedHours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  const decodedTime = decodedHours + ":" + minutes + ampm;
  console.log(decodedTime);
  return decodedTime;
};

  const tutorId = "887766";

  const data = useSelector((state) => state.singleTutor);
  const tutorDetails = data.SingleTutor;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingleTutor(tutorId));
  });
  return (
    <div className="TutorProfileContainer">
      <div className="ProfileItems">
        <div className="BackButtonContainer">
          <ChevronLeftIcon />
        </div>
        <div className="ProfileImageContainer">
          <img src={tutorDetails.profilePic} />
          <div className="StarContainer">
            <StarIcon style={{ fontSize: "1rem", color: "#F9BD22" }} />
          </div>
        </div>
        <div className="ProfileInfoContainer">
          <h1>{tutorDetails.tutorName}</h1>
          <p>{tutorDetails.profession }</p>
        </div>
        <div className="RoutineContainer">
          <div className="Routine">
            <div className="timeContainer">
              <AccessTimeIcon />
              {tutorDetails.timeSlot != null &&
                tutorDetails.timeSlot.map((time_slot) => (
                  <h2>{decodeTime(time_slot)}</h2>
                ))}
            </div>
            <div className="DaysContainer">
              <p>Mon</p>
              <p>Tue</p>
              <p>Wed</p>
              <p>Thu</p>
              <p>Fri</p>
              <p>Sat</p>
            </div>
          </div>
          <div className="AddRoutine">
            <AddIcon />
          </div>
        </div>
        <div className="AboutContainer">
          <h3>About</h3>
          <p>{tutorDetails.aboutTutor}</p>
        </div>

        <div className="InfoContainer">
          <div className="info">
            <h4>Age</h4>
            <p>{tutorDetails.tutorAge}</p>
          </div>
          <div className="info">
            <h4>Gender</h4>
            <p>{tutorDetails.tutorGender}</p>
          </div>
          <div className="info">
            <h4>Rating</h4>
            <p>{tutorDetails.tutorRating}</p>
            <div className="ratingContainer">
              <StarIcon style={{ fontSize: "0.85rem", color: "#F9BD22" }} />
              <StarIcon style={{ fontSize: "0.85rem", color: "#F9BD22" }} />
              <StarIcon style={{ fontSize: "0.85rem", color: "#F9BD22" }} />
              <StarIcon style={{ fontSize: "0.85rem", color: "#F9BD22" }} />
              <StarBorderIcon
                style={{ fontSize: "0.85rem", color: "#F9BD22" }}
              />
            </div>
          </div>
          <div className="info">
            <h4>Location</h4>
            <p>Rohini, Delhi</p>
          </div>
        </div>
        <button type="button">Join</button>
      </div>
    </div>
  );
}
