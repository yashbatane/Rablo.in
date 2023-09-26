import React from "react"
import danger from "../assets/danger.png";
export const panelDetail= () => {
  return {
    icon:  <img src={danger} style={{ height: "1.8rem", width: "1.8rem" }} />,
    button: "Complete Your Profile",
    style: "panelcontent-bottom",
    buttonIcon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
      <g clip-path="url(#clip0_2245_32560)">
        <path d="M5.88612 0.500001L15.3437 8.375L5.88612 16.25L4.20739 14.8522L11.9863 8.375L4.20739 1.89781L5.88612 0.500001Z" fill="black" fill-opacity="0.5" />
      </g>
      <defs>
        <clipPath id="clip0_2245_32560">
          <rect x="18" y="15.5" width="18" height="15" rx="7.5" transform="rotate(180 18 15.5)" fill="white" />
        </clipPath>
      </defs>
    </svg>
  }
}
