import React, { useState } from "react";
import "./Addtutor.css";
import RequestTab from "./RequestTab/RequestTab";
import NearMeTab from "./NearMe/NearMeTab";
import SubscribedTutor from "./SubscribedTutor/SubscribedTutor";
import FavouriteTab from "./FavouriteTab/FavouriteTab";
import PostNeeded from "./PostNeeded/PostNeeded";
import AppliedTab from "./AppliedTab/AppliedTab";

const AddTutor = () => {
  const [currentTab, setCurrentTab] = useState("Request");
  const [currentStudent, setCurrentStudent] = useState(null);
  return (
    <div className="AddStudentContainer">
      <main>
        <div className="headerContainer">
          <div className="heading-headercontainer">Add Tutors</div>
          <div className="subhead-headercontainer">
            Add your tutors from the given list
          </div>
        </div>
        <div className="dataContainer">
          <div className="tabsContainer">
            {[
              "Request",
              "Applied",
              "Subscribed tutor",
              "Favourite",
              "Near me",
              "Post Needed",
            ].map((tab) => (
              <div
                key={tab}
                className={`tab ${tab == currentTab ? "activeTab" : ""}`}
                onClick={() => setCurrentTab(tab)}
              >
                {tab}
              </div>
            ))}
          </div>
          <div className="tableContainer">
            {currentTab == "Request" ? (
              <>
                <RequestTab
                  currentStudent={currentStudent}
                  setCurrentStudent={setCurrentStudent}
                />
              </>
            ) : null}
            {currentTab == "Near me" ? (
              <>
                <NearMeTab />
              </>
            ) : null}
            {currentTab == "Applied" ? <></> : null}
            {currentTab == "Subscribed tutor" ? <SubscribedTutor /> : null}

            {currentTab == "Favourite" ? <FavouriteTab /> : null}
            {currentTab == "Post Needed" ? <PostNeeded currentStudent={currentStudent}
                  setCurrentStudent={setCurrentStudent}/> : null}
                  {currentTab == "Applied" ? <AppliedTab currentStudent={currentStudent}
                  setCurrentStudent={setCurrentStudent}/> : null}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AddTutor;
