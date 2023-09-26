import React from "react";
import "./StudentDetailsForm.css";
import FaceIcon from "@mui/icons-material/Face";
import Face3Icon from "@mui/icons-material/Face3";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const GenderOptions = [
  { name: "Male", icon: FaceIcon },
  { name: "Female", icon: Face3Icon },
  { name: "Others", icon: ExpandMoreIcon },
];
const states = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];
export default function StudentDetailsForm() {
  return (
    <div className="StudentDetailsContainer">
      <header>
        <h1>Personal Details</h1>
        <p>Fill out the details</p>
      </header>

      <form>
        <div className="FormGroup">
          <div className="FormElement large">
            <h2>Student Details</h2>
          </div>
          <label className="FormElement">
            First Name*
            <input type="text"></input>
          </label>
          <label className="FormElement">
            Last Name*
            <input type="text"></input>
          </label>
          <label className="FormElement">
            Gender*
            <div className="optionsContainer">
              {GenderOptions.map((option) => (
                <div className="option">
                  {<option.icon style={{ color: "#D04E62" }} />}
                  {option.name}
                </div>
              ))}
            </div>
          </label>
          <label className="FormElement">
            <div className="row">
               Mobile Number*
               <p>(WhatsApp)</p>
              </div>
            <input type="number"></input>
          </label>
          <label className="FormElement">
            Date of Birth*
            <input type="date" pattern="\d{2}-d{2}-d{4}"></input>
          </label>
          <label className="FormElement">
            Father's Name*
            <input type="number"></input>
          </label>
        </div>

        <div className="FormGroup">
          <div className="FormElement large">
            <h2>Personal Details</h2>
          </div>
          <label className="FormElement">
            First Name*
            <input type="text"></input>
          </label>
          <label className="FormElement">
            Last Name*
            <input type="text"></input>
          </label>
          <label className="FormElement large">
            Address
            <input type="text"></input>
          </label>
          <label className="FormElement">
            State*
            <select>
              {states.map((state) => (
                <option value={`${state}`}>{state}</option>
              ))}
            </select>
          </label>
          <label className="FormElement">
            City*
            <input type="text"></input>
          </label>
          <label className="FormElement">
            Postal Code*
            <input type="text"></input>
          </label>
          <label className="FormElement">
            Referral Code
            <input type="text"></input>
          </label>
        </div>

        <div className="FormActionContainer">
          <p>1/2</p>
          <button type="submit">
            Next <ChevronRightIcon />
          </button>
        </div>
      </form>
    </div>
  );
}
