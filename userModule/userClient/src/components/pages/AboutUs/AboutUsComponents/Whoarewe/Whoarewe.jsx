import React from "react";
import "./Whoarewe.css";
export const Whoarewe = () => {
  return (
    <>
      <div className="whoarewecontainer">
        <div className="whoarewetitle">WHO ARE WE?</div>
        <div className="whoarewebody">
          Our company is an AI-Powered Personalised Learning Ecosystem that
          offers technology services related to business growth and teaching
          management with a wide range of Freemium growth and technology add-ons
          to assist private educators and small and mid-sized tuition businesses
          in expanding their reach, improving quality, and automating their
          operations.{" "}
        </div>
        <br></br>
        <div className="whoarewecounter">
          <div className="counterelements">
            <div className="countervalue">2200+</div>
            <div className="countername">COURSES</div>
          </div>
          <div className="counterelements">
            <div className="countervalue">4,250,000+</div>
            <div className="countername">CATEGORIES</div>
          </div>
          <div className="counterelements">
            <div className="countervalue">250+</div>
            <div className="countername">COURSE CATEGORIES</div>
          </div>
        </div>
      </div>
      <br></br>
    </>
  );
};