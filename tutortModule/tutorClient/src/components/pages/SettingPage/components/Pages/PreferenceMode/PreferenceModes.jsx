import "./PreferenceMode.css";
import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export default function PreferenceModes() {
  const handleClick = () => {
    document.getElementById("option-btn").style.background = "#6764FF";
    document.getElementById("option-btn").style.color = "#ffffff";
  };
  function MyFun()
  {
   var click=document.getElementsByClassName('alert-container');
   click[0].style.display="block";
  }
  function myFun2()
  {
   var click=document.getElementsByClassName('alert-container');
   click[0].style.display="none";
  }
  return(
    <div className="preference-modes-main-container">
      <h3>Preference</h3>
     {/* .......alert code option temrary locked ........*/}
     <div class="alert-container">
           <div class="close"   onclick={myFun2} ><i class="fa-regular fa-xmark"></i><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M2 2L20 20" stroke="#6764FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2 20L20 2" stroke="#6764FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
           </div>
              <div class="text-container">
               <div class="symbol">
                 <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                 <path d="M15 18.3346V16.668C15 13.9013 15.8333 11.668 20 11.668C24.1667 11.668 25 13.9013 25 16.668V18.3346M20 24.3346C20.1313 24.3346 20.2614 24.3088 20.3827 24.2585C20.504 24.2083 20.6142 24.1346 20.7071 24.0417C20.8 23.9489 20.8736 23.8386 20.9239 23.7173C20.9741 23.596 21 23.466 21 23.3346C21 23.2033 20.9741 23.0733 20.9239 22.952C20.8736 22.8306 20.8 22.7204 20.7071 22.6275C20.6142 22.5347 20.504 22.461 20.3827 22.4108C20.2614 22.3605 20.1313 22.3346 20 22.3346C19.7348 22.3346 19.4804 22.44 19.2929 22.6275C19.1054 22.8151 19 23.0694 19 23.3346C19 23.5999 19.1054 23.8542 19.2929 24.0417C19.4804 24.2293 19.7348 24.3346 20 24.3346Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                 <path d="M24.1641 28.332H15.8307C12.4974 28.332 11.6641 27.4987 11.6641 24.1654V22.4987C11.6641 19.1654 12.4974 18.332 15.8307 18.332H24.1641C27.4974 18.332 28.3307 19.1654 28.3307 22.4987V24.1654C28.3307 27.4987 27.4974 28.332 24.1641 28.332Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                 <path d="M20.0026 36.6654C29.2076 36.6654 36.6693 29.2037 36.6693 19.9987C36.6693 10.7937 29.2076 3.33203 20.0026 3.33203C10.7976 3.33203 3.33594 10.7937 3.33594 19.9987C3.33594 29.2037 10.7976 36.6654 20.0026 36.6654Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                 </svg>
              </div>
              <div class="text">
                 <h2>This Option is Temporarily Locked!</h2>
                  <p>Please complete your <strong>profile verification</strong>profile verification to <strong>Unlock this Feature.</strong> </p>
              </div>
              <div class="verify">
                  <h2>Get Verified</h2>
             </div>
         </div>
       </div>
      <div id="select-category">
        <div id="type-of-job">
          <p>How much time you can invest?</p>
          <select>
            <option >Full-Time</option>
            <option >Part-Time</option>
          </select>
        </div>
        <div id="mode-of-class">
          <p>Mode of Class</p>
          <select>
            <option>Online</option>
          </select>
        </div>
      </div>
      <div id="selection-class">
        <p>Select the Section of Class you want to teach? </p>
        <span>
          Choosing a class section can attract students falling under that
          range. The first student's preference automatically selects the exact
          standard. For example, if the first student is from 4th standard,
          selecting the primary section will auto-select 4th standard as the
          primary class for that student.
        </span>
        <button>Pre-Primary (Nus-2nd)</button>
        <button>Primary (3rd - 5th)</button>
        <button>Junior Section (6th - 8th)</button>
        <button>High School (9th-10th)</button>
      </div>

      {/* select preference mode */}
      <p>What will be the Common language of the Class?</p>

      {/* options */}
      <div id="options">
        <button
          id="option-btn"
          onClick={() => {
            handleClick();
          }}
        >
          English
        </button>
        <button
          id="option-btn"
          onClick={() => {
            handleClick();
          }}
        >
          Hindi
        </button>
        <button
          id="option-btn"
          onClick={() =>{
            handleClick();
          }}
        >
          Bengali
        </button>
        <button
          id="option-btn"
          onClick={() => {
            handleClick();
          }}
        >
          Marathi
        </button>
        <button
          id="option-btn"
          onClick={() => {
            handleClick();
          }}
        >
          Tamil
        </button>
        <button
          id="option-btn"
          onClick={() => {
            handleClick();
          }}
        >
          Telugu
        </button>
        <button
          id="option-btn"
          onClick={() => {
            handleClick();
          }}
        >
          Malayalam
        </button>
        <button
          id="option-btn"
          onClick={() => {
            handleClick();
          }}
        >
          Gujrati
        </button>
        <button
          id="option-btn"
          onClick={() => {
            handleClick();
          }}
        >
          Urdu
        </button>
        <button
          id="option-btn"
          onClick={() => {
            handleClick();
          }}
        >
          Kannada
        </button>
        <button
          id="option-btn"
          onClick={() => {
            handleClick();
          }}
        >
          Odia
        </button>
        <button
          id="option-btn"
          onClick={() => {
            handleClick();
          }}
        >
          Punjabi
        </button>
        <button
          id="option-btn"
          onClick={() => {
            handleClick();
          }}
        >
          Assamese
        </button>
        <button
          id="option-btn"
          onClick={() => {
            handleClick();
          }}
        >
          Others
        </button>
      </div>
      <p>
        Your common means of Communication will be in Hindi & English as per the
        above selection
      </p>
      {/* Back and update button */}
      <div id="back-update">
        {/*........... click event on opetion temrary locked.......... */}
        <button id="back" onclick={MyFun}>
          {" "}
          <ArrowBackIosIcon /> Back
        </button>
        <button id="update">Save</button>
      </div>
    </div>
  );
}
