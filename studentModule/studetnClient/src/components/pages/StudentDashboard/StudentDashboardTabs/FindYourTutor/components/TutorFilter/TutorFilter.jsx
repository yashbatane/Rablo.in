import React from "react";
import "./TutorFilter.css";
import FaceIcon from "@mui/icons-material/Face";
import Face3Icon from "@mui/icons-material/Face3";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AgeSlider from "./AgeSlider/AgeSlider";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
const filterItems = [
  "Language",
  "Gender & Age",
  "Qualification",
  "Experience",
  "Location",
  "Rating and Ranking",
  "Budget",
];

const LanguageOptions = [
  "English",
  "Hindi",
  "Bengali",
  "Marathi",
  "Tamil",
  "Malayalam",
  "Gujarati",
  "Urdu",
  "Kannada",
  "Odia",
  "Punjabi",
  "Assamese",
  "Telugu",
  "Others",
];

const GenderOptions=[
    {name:"Male",icon:FaceIcon},
    {name:"Female",icon:Face3Icon},
    {name:"Others",icon:ExpandMoreIcon},
]

export default function TutorFilter() {
  return (
    <div className="TutorFilterContainer">
      <h1>Filter the best that suits your need</h1>
      <div className="filter">
        <div className="filterItems">
          {filterItems.map((item) => (
            <div className="filterItem" key={item}>
              {item}
            </div>
          ))}
        </div>
        <div className="filterOptions">
          <div className="category">
            <h3>Language</h3>
            <p>Please select the Language of the tutor</p>
            <div className="optionsContainer">
              {LanguageOptions.map((option) => (
                <div className="option">{option}</div>
              ))}
            </div>
          </div>
          <div className="category">
          <h3>Gender & Age</h3>
            <p>Please select gender for your tutor</p>
            <div className="optionsContainer">
              {GenderOptions.map((option) => (
                <div className="option">{<option.icon style={{color:"#D04E62"}}/>}{option.name}</div>
              ))}
            </div>
          </div>
          <div className="category">
            <p>Please select age for your tutor</p>
            <AgeSlider/>
          </div>
          <div className="ButtonContainer">
            <button type="button" className="TransparentButton">Clear all</button>
            <button type="button" className="SolidButton">Filter <KeyboardArrowRightIcon style={{fontSize:"0.85rem"}}/ ></button>
          </div>
        </div>
      </div>
    </div>
  );
}
