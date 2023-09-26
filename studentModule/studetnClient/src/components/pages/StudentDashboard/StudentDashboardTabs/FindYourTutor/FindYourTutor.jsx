import React, { useState } from "react";
import "./FindYourTutor.css";
import TutDet_cardComponent from "./TutorDetails_card_component/TutDet_cardComponent";
import notmatched from "./TutorDetails_card_component/image/nomatch.png";
import sortImg from "./TutorDetails_card_component/image/sortImg.png";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTutor } from "../../../../../store/slices/allTutorSlice";

// make an array in the store to store all this information, along with some extra information like
// which all classes do they teach
// What are the timings

let tutorList_temp = Array.from({ length: 1 }, (_, index) => {
  return {
    name: "John Pope",
    id: `FYT100${index}`,
    subject: "Science",
    exp: "5",
    rating: 4.5,
    language: "hindi",
    subs_stu: 70,
    free_live_courses: 3,
    percentage: 80,
    time: ["4.30 p.m.", "6:00 p.m.", "7:30 p.m."],
    price: 200,
    degree: "Bsc.(Physics)",
  };
});

const FindYourTutor = () => {
  const data = useSelector((state) => state.allTutor);
  const tutorDetailss = data.allTutor;
  console.log(tutorDetailss);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTutor());
  }, []);
  const [filter, setFilter] = useState("false");
  const [tutorDetails, setTutordetails] = useState("notNull");
  return (
    <div className="FindYourTut-container">
      <div className="FYT-heading-container">
        <div className="FYT-heading-1">Find Your Tutor</div>
        <div className="FYT-subheading-container">
          You are doing Excellent! Keep it up
        </div>
      </div>
      <div className="FYT-Menu-container">
        <div className="fyt-menu-search-container">
          {/* Changed the placeholder from search student to search teacher */}
          <input type="text" placeholder="Search Teacher" />
          <button>
            <SearchIcon />
          </button>
        </div>
        <select name="fytclass" id="fytclass">
          <option value="className">Class 5</option>
          <option value="className">Class 6</option>
          <option value="className">Class 7</option>
          <option value="className">Class 8</option>
          <option value="className">Class 9</option>
          <option value="className">Class 10</option>
          <option value="className">Class 11</option>
          <option value="className">Class 12</option>
        </select>
        <select name="fytvalue" id="fytvalue">
          <option value="Timings">08:00</option>
          <option value="Timings">09:00</option>
          <option value="Timings">10:00</option>
          <option value="Timings">11:00</option>
          <option value="Timings">12:00</option>
          <option value="Timings">13:00</option>
          <option value="Timings">14:00</option>
          <option value="Timings">15:00</option>
          <option value="Timings">16:00</option>
          <option value="Timings">17:00</option>
          <option value="Timings">18:00</option>
        </select>
        {/* What should be there in rating, low to high, high to low
        or is it gonna be 1, 2,3 ,4,5 starts */}
        <select name="fytrating" id="fytrating">
          <option value="Rating">Rating</option>
        </select>
        <button
          onClick={(e) => {
            e.preventDefault();
            setFilter("true");
          }}
        >
          Filter
          <span>
            <FilterListIcon />
          </span>
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            setFilter("true");
          }}
        >
          Sort
          <span>
            {/* <ImportExportRoundedIcon/> */}
            <img src={sortImg} alt="" />
          </span>
        </button>
      </div>
      {data.loading ? <h1>loading ...</h1> : ""}
      {data.error !== null ? <h3>{data.error}</h3> : ""}
      {tutorDetailss.map((tutor_details) => {
        return <TutDet_cardComponent tutor_details={tutor_details} />;
      })}
    </div>
  );
};

export default FindYourTutor;
