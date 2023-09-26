import React from "react";
import { BoxType4 } from "../../../../GlobalComponents/miniComponents/BoxType4/BoxType4";
import "./DescriptionCard.css";

function DescriptionCard() {
  return (
    <div className="description-card-wrapper" data-aos="fade-up">
      {/* second card */}
      <BoxType4
        Heading1={"Regular Class"}
        para={
          "   This program focus on 100% course completion with complete exampreparation"
        }
        thermolevel={"full "}
        Heading2={"Available Modes"}
        list={
          <>
            <li>At Home Class</li>
            <li>Online Mode</li>
            <li>Hybrid Mode</li>
          </>
        }
      />
      {/* second card */}
      <BoxType4
        Heading1={"Topic Explainer"}
        para={
          "This program deals with topic wise problems faced by the students."
        }
        thermolevel={"half"}
        Heading2={"Available Modes"}
        list={
          <>
            <li>At Home Class</li>
            <li>Online Mode</li>
          </>
        }
      />
      {/* third card */}
      <BoxType4
        Heading1={"Doubt Cleaner"}
        para={
          "  This program supports in betwwen the study when question-based doubt erupt."
        }
        thermolevel={"full"}
        Heading2={"Available Modes"}
        list={
          <>
            <li>Live Video Explanation</li>
            <li>Video Explanation</li>
          </>
        }
      />
    </div>
  );
}

export default DescriptionCard;
