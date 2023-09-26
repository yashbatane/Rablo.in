import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Date.scss"; 
const CustomDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <DatePicker
      selected={selectedDate}
      onChange={handleDateChange}
      placeholderText="Select a date"
      className="customDatePicker"
      // Add additional props and customization as needed
      calendarClassName="customCalendar"
      
    />
  );
};

export default CustomDatePicker;
