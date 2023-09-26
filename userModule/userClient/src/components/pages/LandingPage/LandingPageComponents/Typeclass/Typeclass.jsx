import React from "react";
import "./Typeclass.css";
import home from "../../../../img/icon.webp";
import online from "../../../../img/online.webp";
import hybrid from "../../../../img/hybrid.webp";
import { BoxType3 } from "../../../../GlobalComponents/miniComponents/BoxType3/BoxType3";

function Typeclass() {
  return (
    <div className="type-class-container">
      <div className="text">
        <p>PAVE YOUR WAY</p>
        <p className="heading">Learn in the Way You Prefer:</p>
      </div>
      <hr className="horizontal-line" />
      <div className="boxesType3">
        <div className="boxesType3Inner">
          {" "}
          <BoxType3
            img={home}
            title={"At-Home Class"}
            para={
              " Our At-Home class brings top-Class Learning to your homes. We Assign Our Super Mentor Living near the vicinity for timely classes."
            }
          />
        </div>
        <div className="boxesType3Inner">
          {" "}
          <BoxType3
            img={online}
            title={"Online Class"}
            para={
              "  Our Online classes are powered by our Smart Platform for Best Quality Live One-to-One classes with Our Super Mentors."
            }
          />
        </div>
        <div className="boxesType3Inner">
          {" "}
          <BoxType3
            img={hybrid}
            title={"Hybrid Mode"}
            para={
              "  Our NEW Hybrid Mode is Designed with a mix of Both Modes for Better Reach and Affordability with the Same Quality Learning."
            }
          />
        </div>

        {/* 2 box */}

        {/* third box */}
      </div>
      <hr className="horizontal-line" />
    </div>
  );
}

export default Typeclass;
