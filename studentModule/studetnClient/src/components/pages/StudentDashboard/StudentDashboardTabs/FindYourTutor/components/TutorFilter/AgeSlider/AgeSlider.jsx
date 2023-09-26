import React, { useEffect, useRef, useState } from "react";
import "./AgeSlider.css";
export default function AgeSlider() {
  const ageCeiling = 60;
  const [sliderWidth, setSliderWidth] = useState(10);
  const [minAge, setMinAge] = useState(20);
  const [maxAge, setMaxAge] = useState(50);
  const sliderRef = useRef();

  useEffect(() => {
    let width = sliderRef.current?.getBoundingClientRect().width;
    setSliderWidth(width);
  }, []);

  return (
    <div className="AgeSlider"  >
      <div className="AgeScale" ref={sliderRef}>
        <div
          className="minAge"
          data-age={minAge}
          style={{
            transform: `translateX(${(sliderWidth / ageCeiling) * minAge}px)`,
          }}
        ></div>
        <div
          className="rangeIndicator"
          style={{
            transform: `translateX(${(sliderWidth / ageCeiling) * minAge + 12}px)`,
            width: `${(sliderWidth / ageCeiling) * (maxAge - minAge) + 12}px`,
          }}
        ></div>
        <div
          className="maxAge"
          data-age={maxAge}
          style={{
            transform: `translateX(${(sliderWidth / ageCeiling) * maxAge}px)`,
          }}
        ></div>
      </div>
    </div>
  );
}
