import React, { useState } from "react";
import SearchAndLocateOffline from "./SearchAndLocateOffline";
import SearchAndLocateOnline from "./SearchAndLocateOnline";
import "./FindTutorPage.css";

import "./FindTutor.css";
const FindTutorPage = () => {
  const [offlineButton, setOfflineButton] = useState(false);
  const [onlineButton, setOnlineButton] = useState(false);

  const handleOffline = () => {
    setOfflineButton(true);
    setOnlineButton(false);

  };
  const handleOnline = () => {
    setOfflineButton(false);
    setOnlineButton(true);
  };


  return (
    
    <div>
      <div className="tutorPage">
        <div className="subjectDetailsCard">
          <ul>
            <i class="fa-solid fa-angle-right" />
            Commerce
          </ul>

          <ul>
            <i class="fa-solid fa-angle-right" />
            Programming
          </ul>

          <ul>
            <i class="fa-solid fa-angle-right" />
            Science
          </ul>

          <ul>
            <i class="fa-solid fa-angle-right" />
            Mathematics
          </ul>

          <ul>
            <i class="fa-solid fa-angle-right" />
            Humanities
          </ul>

          <ul>
            <i class="fa-solid fa-angle-right" />
            Co Curricular
          </ul>

          <ul>
            <i class="fa-solid fa-angle-right" />
            Language
          </ul>
        </div>
        <div className="headings">
          <h1>
            Get Your <br />
            Personal Tutor Now
          </h1>
          <h4>
            <span>The Best Collection</span> place for gaining power of
            knowledge,
            <br /> skills and new opportunities.
          </h4>
          <h3>Select Your Mode :</h3>
          <div className="buttons">
            <button onClick={handleOffline}>Offline</button>
            <button onClick={handleOnline}>Online</button>
          </div>
        </div>

      </div>

      {offlineButton ? <SearchAndLocateOffline /> : null}
      {onlineButton ? <SearchAndLocateOnline /> : null}




      {/* <div className="searchAndLocatePart">
        <h1 className="headingSL">Search & Locate</h1>
        <div className="buttons">

          <button onClick={handleOffline}>Offline</button>
          <button onClick={handleOnline}>Online</button>
          {offlineButton ? <SearchAndLocateOffline /> : null}
          {onlineButton ? <SearchAndLocateOnline /> : null}
        </div>
      </div> */}
    </div>
  );
};

export default FindTutorPage;
