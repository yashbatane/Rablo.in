import "./RoundBox.css";
import React from "react";
import { BoxType2 } from "../../../../GlobalComponents/miniComponents/BoxType2/BoxType2";

export const RoundBox = () => {
  return (
    <div className="boxesType2" data-aos="fade-up">
      <h1 className="head">MOST POPULAR SUBJECTS CATEGORIES</h1>
      <hr></hr>
      {/* Programming Tutor section */}
      <BoxType2 title={"Programming Tutor"} icon={"fa-solid fa-code"} />
      {/* Maths Tutor section */}
      <BoxType2
        title={
          <>
            Mathematics <br></br>Tutor
          </>
        }
        icon={"fa-solid fa-infinity"}
      />
      {/* Humanities Tutor section */}
      <BoxType2
        title={
          <>
            Humanities<br></br> Tutor
          </>
        }
        icon={"fa-solid fa-utensils"}
      />
      {/* Co-curricular Tutor section */}
      <BoxType2
        title={
          <>
            Co curricular <br></br>Tutor
          </>
        }
        icon={"fa-solid fa-paintbrush"}
      />

      {/* Science Tutor section */}

      <BoxType2
        title={
          <>
            Science<br></br> Tutor
          </>
        }
        icon={"fa-solid fa-microscope"}
      />
      {/* Commerce Tutor section */}
      <BoxType2
        title={
          <>
            Commerce <br></br>Tutor
          </>
        }
        icon={"fa-solid fa-sack-dollar"}
      />
      {/* Languge Tutor section */}
      <BoxType2
        title={
          <>
            Language<br></br> Tutor
          </>
        }
        icon={"fa-solid fa-language"}
      />
    </div>
  );
};
