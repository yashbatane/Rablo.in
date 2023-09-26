import React from "react";
import "./BecPageFooter.css";

export const PageFoter = () => {
  return (
    <div className="becomeourtutorpageFooter">
      <h1 style={{}}>Popular Videos</h1>
      <div className="pageFootervideocontainer">
        <iframe
          className="video"
          id="video1"
          src="https://www.youtube.com/embed/0yiY1Q688S0"
          title="Student learning Experience with Rablo.in | Review Video"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          className="video"
          id="video2"
          src="https://www.youtube.com/embed/0yiY1Q688S0"
          title="Student learning Experience with Rablo.in | Review Video"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <button className="signuptoday">SIGN UP TODAY</button>
    </div>
  );
};
