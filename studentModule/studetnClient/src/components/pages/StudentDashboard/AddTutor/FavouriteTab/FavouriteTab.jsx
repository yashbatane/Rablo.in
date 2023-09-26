import React from "react";
import img from "./image/img.png";
import starImg from "./image/star.png";
import infoImg from "./image/infoImg.png";
import langHindi from "./image/langHindi.png";
import circle from "./image/circleProgress.png";
import "./FavouriteTab.css";
import { Star } from "@mui/icons-material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  delFav,
  getFavouriteTutor,
} from "../../../../../store/slices/favouriteTutorSlice";

// let details = Array.from({ length: 22 }, (_, index) => {
//   return {
//     name: "John Pope",
//     id: `FYT100${index}`,
//     subject: "Science",
//     exp: "5",
//     rating: 4.5,
//     language: "hindi",
//     subs_stu: 70,
//     free_live_courses: 3,
//     percentage: 80,
//     time: ["4.30 p.m.", "6:00 p.m.", "7:30 p.m."],
//     price: 200,
//   };
// });

const FavouriteTab = () => {

  const decodeTime=(time) =>{
    console.log(time)
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
  }


  const data = useSelector((state) => state.favouriteTutor);
  const tutorDetails = data.favouriteTutor;
  // console.log(tutorDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavouriteTutor());
  }, []);
  if (data.loading) {
    return <h2>Loading...</h2>;
  }
  if (data.error != null) {
    return <h3>{data.error}</h3>;
  }
  return (
    <>
      {tutorDetails.map((tutor_details, index) => {
        return (
          <div className="gridcontainer-fav" key={index}>
            <div className="tutDetCard-container-substut">
              <div className="tudDet_card_image">
                <img src={tutor_details.profilePic} alt="tutor image" />
              </div>
              <div className="middle-container">
                <div className="midContainer-topRow">
                  <div className="tutorName-mid-container">
                    {tutor_details.tutorName}
                  </div>
                  <div className="percent-mid-container">
                    {/* <div className="circle-mid-container">
            </div> */}
                    <img src={circle} alt="" />
                    <div>{80}%</div>
                  </div>
                  <div>
                    <button>
                      <img src={infoImg} alt="" style={{ width: "1.5rem" }} />
                    </button>
                  </div>
                </div>
                <div className="midContainer-midRow">
                  <div className="subject-midRow">{tutor_details.stream}</div>
                  <div className="dot-in-midrow">
                    <hr />
                  </div>
                  <div className="exp-midRow">
                    {tutor_details.experience} Yrs Exp
                  </div>
                  <div className="dot-in-midrow">
                    <hr />
                  </div>

                  <div className="rating-midrow">{tutor_details.ratings}</div>
                  <img className="starImageTutCardComp" src={starImg} alt="" />
                  <div className="dot-in-midrow">
                    <hr />
                  </div>

                  <div>
                    {tutor_details.language == "hindi" ? (
                      <>
                        <img
                          src={langHindi}
                          alt=""
                          style={{ width: "2.5rem" }}
                        />
                      </>
                    ) : (
                      <>e</>
                    )}
                  </div>
                </div>
                <div className="midContainer-bottomRow">
                  <div className="num-content-container">
                    <div className="num-content">
                      {tutor_details.numberOfSubscribedStudents}
                    </div>
                    <div className="subScript-numcontent">
                      Subscribed <br />
                      students
                    </div>
                  </div>
                  <div className="num-content-container">
                    <div className="num-content">
                      {tutor_details.numberOfFreeLiveClass}
                    </div>
                    <div className="subScript-numcontent">
                      Free Live <br />
                      Classes
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <hr className="divider" />
              </div>
              <div className="rightMost-container">
                <div className="heading-rightmost-container">
                  Session Starts at
                </div>
                <div className="time-slots">
                  {tutor_details.sessionTimings.map((time_slot, index) => (
                    <div key={index}>
                      <div className="insideTimeSlot">
                        <div>{decodeTime(time_slot)}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="price-container-rightmost-container">
                  <div className="price-container-flex">
                    <div className="price">{tutor_details.pricePerHour}</div>
                    <div className="perhourRightMostContainer"> Per Hour</div>
                  </div>
                  <div>
                    <button className="priceContainer-button">
                      View {" >"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="subsStatus">
              <b>
                Favourite Tutor{" "}
                <Star
                  style={{ color: "#F9BD22", height: "15px", width: "15px" }}
                />
              </b>
              <div>
                You have saved as favourite tuotor you can unselect also
              </div>
              <button>
                View <div>{" >"}</div>
              </button>

              <span
                onClick={() => {
                  dispatch(delFav(tutor_details.tutorObjId));
                }}
              >
                Undo
              </span>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default FavouriteTab;
