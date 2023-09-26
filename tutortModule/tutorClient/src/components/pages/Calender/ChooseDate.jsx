// Developed by->Dhanush

//package name->react-multi-date picker

import React, { useState, useRef } from "react";
import DatePicker, { Calendar, DateObject } from "react-multi-date-picker";
import colors from "react-multi-date-picker/plugins/colors";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import "./ChooseDate.css";
const ChooseDate = () => {
  const datepickerRef = useRef();
  //available dates
  const [aDates, setAdates] = useState([]);
  //unavailable dates
  const [unDates, setUndates] = useState([]);
  //partially occupied
  const [pDates, setPDates] = useState([]);
  //completely occupied
  const [fDates, setFDates] = useState([]);

  const yesterday = new DateObject().subtract(1, "day");

  const today = new DateObject();
  const tomorrow = new DateObject().add(1, "day");

  console.log(datepickerRef);

  // yesterday.color = "red";
  today.color = "blue";
  // tomorrow.color = "red";
  //read input from user from which date to which date user is available
  const [startdate, setStartDate] = useState({
    startTime: new Date(),
    endTime: new Date(),
  });

  //read input from user from which date to which date user is available

  const [enddate, setEndDate] = useState({
    startTime: new Date(),
    endTime: new Date(),
  });

  //read input from user from which date to which date user is partially available

  const [partialdate, setPartialDate] = useState({
    startTime: new Date(),
    endTime: new Date(),
  });

  //read input from user from which date to which date user is fully occupied

  const [fulldate, setFullDate] = useState({
    startTime: new Date(),
    endTime: new Date(),
  });

  // const [value, setValue] = useState();

  const [props, setProps] = useState({
    multiple: true,
    value: new Date(),
    plugins: [
      colors({ colors: ["green", "red", "yellow", "blue"] }),
      <DatePanel sort="color" />,
    ],
  });
  const getAvailableDate = (event) => {
    setStartDate({ ...startdate, [event.target.name]: event.target.value });
  };
  const getNotAvailableDate = (event) => {
    setEndDate({ ...enddate, [event.target.name]: event.target.value });
  };

  const getPartialOccupiedDates = (event) => {
    setPartialDate({ ...partialdate, [event.target.name]: event.target.value });
  };

  const getFullyOccupiedDate = (event) => {
    setFullDate({ ...fulldate, [event.target.name]: event.target.value });
  };

  //below 4 function function take start and end date and gives array of days which are avialble or not available or partilly or fully occupied
  const setAvailableDates = () => {
    let start = startdate.startTime.split("-")[2];
    let end = startdate.endTime.split("-")[2];
    // console.log(start);
    let arr = [];
    let ind = 0;
    for (let i = start; i <= end; i++) {
      arr[ind] = parseInt(i);
      ind++;
    }
    setAdates(arr);
  };
  const setPartialDates = () => {
    let start = partialdate.startTime.split("-")[2];
    let end = partialdate.endTime.split("-")[2];
    let arr = [];
    let ind = 0;
    for (let i = start; i <= end; i++) {
      arr[ind] = parseInt(i);
      ind++;
    }
    setPDates(arr);
    // console.log()
  };
  console.log(pDates);
  console.log(fDates);
  const setFullDates = () => {
    let start = fulldate.startTime.split("-")[2];
    let end = fulldate.endTime.split("-")[2];
    // console.log(start);
    let arr = [];
    let ind = 0;
    for (let i = start; i <= end; i++) {
      arr[ind] = parseInt(i);
      ind++;
    }
    setFDates(arr);
  };
  const setUnAvailableDates = () => {
    let start = enddate.startTime.split("-")[2];
    let end = enddate.endTime.split("-")[2];
    let arr = [];
    let ind = 0;
    for (let i = start; i <= end; i++) {
      arr[ind] = parseInt(i);
      ind++;
    }
    setUndates(arr);
  };
  console.log(aDates);
  console.log(unDates);
  return (
  
    <div className="chooseDateContainer">
      <div className="chooseDateWrapper">
        <div className="chooseDateDiv">
          <div className="innerDiv">
            <p>Available</p>
            <div className="inputDiv">
              <input type="date" onChange={getAvailableDate} name="startTime" />
              <input type="date" onChange={getAvailableDate} name="endTime" />
            </div>

            <button onClick={setAvailableDates}>Set Availability</button>
          </div>
          <div className="innerDiv">
            <p>Not Available</p>
            <div className="inputDiv">
              <input
                type="date"
                onChange={getNotAvailableDate}
                name="startTime"
              />
              <input
                type="date"
                onChange={getNotAvailableDate}
                name="endTime"
              />
            </div>

            <button onClick={setUnAvailableDates}>Set UnAvailability</button>
          </div>
          <div className="innerDiv">
            <p>Partially Occupied</p>
            <div className="inputDiv">
              <input
                type="date"
                onChange={getPartialOccupiedDates}
                name="startTime"
              />
              <input
                type="date"
                onChange={getPartialOccupiedDates}
                name="endTime"
              />
            </div>

            <button onClick={setPartialDates}>Partial Occupied</button>
          </div>
          <div className="innerDiv">
            <p>Fully Occupied</p>
            <div className="inputDiv">
              <input
                type="date"
                onChange={getFullyOccupiedDate}
                name="startTime"
              />
              <input
                type="date"
                onChange={getFullyOccupiedDate}
                name="endTime"
              />
            </div>

            <button onClick={setFullDates}>Fully Occupied</button>
          </div>
        </div>
        {/* <DatePicker
          mapDays={({ date }) => {
            let color;

            //here we are using those days array to mark colors for specific days

            if (aDates.includes(date.day)) color = "green";
            if (unDates.includes(date.day)) color = "red";
            if (pDates.includes(date.day)) color = "yellow";
            if (fDates.includes(date.day)) color = "blue";

            if (color) return { className: "highlight highlight-" + color };
          }}
          multiple
        /> */}
        <Calendar
          mapDays={({ date }) => {
            let color;

            //here we are using those days array to mark colors for specific days

            if (aDates.includes(date.day)) color = "green";
            if (unDates.includes(date.day)) color = "red";
            if (pDates.includes(date.day)) color = "yellow";
            if (fDates.includes(date.day)) color = "blue";

            if (color) return { className: "highlight highlight-" + color };
          }}
          multiple

          // numberOfMonths={1}
        />
      </div>
    </div>
  );
};

export default ChooseDate;
