import React from "react";
import img from "./image/img.png";
import starImg from "./image/star.png";
import infoImg from "./image/infoImg.png";
import langHindi from "./image/langHindi.png";
import circle from "./image/circleProgress.png";
import "./SubscribedTutor.css";
import ReportForm from "./reportForm";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSubscribedTutor } from "../../../../../store/slices/subscribedTutorSlice";

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

const SubscribedTutor = () => {
  const data = useSelector((state) => state.subscribedTutor);
  const tutorDetails = data.subscribedTutor;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSubscribedTutor());
  }, []);
  if (data.loading) {
    return <h2>Loading...</h2>;
  }
  if (data.error != null) {
    return <h3>{data.error}</h3>;
  }
  return (
    <>
      <ReportForm />

      {tutorDetails.map((tutor_details, index) => {
        return (
          <div className="gridcontainer-substut" key={index}>
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
                    <div>{tutor_details.percentage}%</div>
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
                        <div>{time_slot}</div>
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
              <div>
                Subscribed on{" "}
                {new Date(tutor_details.subscriptionDate).toLocaleDateString(
                  "en-GB"
                )}
              </div>
              <div>
                Last Class on{" "}
                {new Date(tutor_details.lastClassDate).toLocaleDateString(
                  "en-GB"
                )}
              </div>
              <div>
                Expires on{" "}
                {new Date(tutor_details.expiryDate).toLocaleDateString(
                  "en-GB"
                )}
              </div>
              <button>View {" >"}</button>
              <div>Report</div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default SubscribedTutor;
