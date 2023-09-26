import React from "react";
import { useRef } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Editable from "../../Editable";
import EditableFileInput from "../../EditableFileInput";
import "./Educational.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// import v1 from "./icons/Vector.png";
const Educational = () => {
  const inputRef = useRef(null);
  const inputRef2 = useRef(null);

  const handleCertificate = () => {
    inputRef2.current.click();
  };

  const handleSubmission = () => {
    inputRef.current.click();
  };

  const changeHandler = (e) => {
    const fileObj = e.target.files && e.target.files[0];
  };

  const changeHandler2 = (e) => {
    const fileObj2 = e.target.files && e.target.files[0];
  };
  /////////////new alert code temprary locked popup/////////////////////
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
  return (
   
    <div className="educational-details-main-container">
      <h2>Change Your Expertise</h2>
      {/* for entering highest qualification and name of institute */}
      <div id="qualification-institute">
        {/* for qualification */}
        <div id="qualification">
          <p>Years of Experience</p>
          <div id="inputs">
            <input placeholder="Select your Experience"></input>
          </div>
        </div>
        {/* for name of institute */}
        <div id="qualification">
          <p>Select Your Exterties Category</p>
          <div id="inputs">
            <input placeholder="Select your Expertise"></input>
          </div>
        </div>
      </div>
      <h2>Add Qualification</h2>
      {/* For course and years of experience */}
      <div id="qualification-institute">
        {/* for course */}
        <div id="qualification">
          <p>Select Qualification</p>
          <div id="inputs">
            <input placeholder="Select Your Qualification"></input>
          </div>
        </div>
        {/* for years of experience */}
        <div id="qualification">
          <p>Name of School or University</p>
          <div id="inputs">
            <input placeholder="Type Your Institute Name"></input>
          </div>
        </div>
      </div>
      {/* Tell us more about your Academics */}
      <div id="qualification-institute">
        <div id="qualification">
          <p>Tell us more about your Academics</p>
          <span>
            Enter your Course or Subjects e.g. B.com, MTech or Intermediate from
            Science.
          </span>
          <div id="inputs-tell">
            <input placeholder="B.tech. with Computer Science"></input>
          </div>
        </div>
      </div>
      {/* upload final marksheet */}
      <div id="upload-marksheet">
        <button onClick={handleSubmission}>Upload Final Marksheet</button>
        <div>or</div>
        <div>Drop Here</div>
        <input
          style={{ display: "none" }}
          ref={inputRef}
          type="file"
          onChange={() => {
            changeHandler();
          }}
        ></input>
      </div>
      {/* Add Qualification */}
      <h2>Add Qualification</h2>
      <div id="qualification-institute">
        <div id="qualification">
          <p>Any Certification, Recognition or Award</p>
          <span>
            Enter details about relevant certification or Recognition awarded by
            a recognized institute with publishing date to strengthen your
            profile.
          </span>
          <div id="inputs-tell">
            <input placeholder="Title of certification"></input>
          </div>
        </div>
      </div>
      <div id="qualification-institute">
        {/* type your institute  */}
        <div id="qualification">
          <div id="inputs">
            <input placeholder="Type Your Institute Name"></input>
          </div>
        </div>

        {/* date */}
        <div id="qualification">
          <div id="inputs">
            <input placeholder="DD-MM-YYYY"></input>
          </div>
        </div>
      </div>
      {/* upload final marksheet */}
      <div id="upload-marksheet">
        <button onClick={handleSubmission}>Upload Final Marksheet</button>
        <div>or</div>
        <div>Drop Here</div>
        <input
          style={{ display: "none" }}
          ref={inputRef}
          type="file"
          onChange={() => {
            changeHandler();
          }}
        ></input>
      </div>
      {/* ....... alert code tempreroy loked ........*/}
       <div className="alert-container">
           <div className="close"   onclick={myFun2}><i class="fa-regular fa-xmark"></i><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M2 2L20 20" stroke="#6764FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2 20L20 2" stroke="#6764FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
           </div>
           <div className="text-container">
               <div className="symbol">
                 <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                 <path d="M15 18.3346V16.668C15 13.9013 15.8333 11.668 20 11.668C24.1667 11.668 25 13.9013 25 16.668V18.3346M20 24.3346C20.1313 24.3346 20.2614 24.3088 20.3827 24.2585C20.504 24.2083 20.6142 24.1346 20.7071 24.0417C20.8 23.9489 20.8736 23.8386 20.9239 23.7173C20.9741 23.596 21 23.466 21 23.3346C21 23.2033 20.9741 23.0733 20.9239 22.952C20.8736 22.8306 20.8 22.7204 20.7071 22.6275C20.6142 22.5347 20.504 22.461 20.3827 22.4108C20.2614 22.3605 20.1313 22.3346 20 22.3346C19.7348 22.3346 19.4804 22.44 19.2929 22.6275C19.1054 22.8151 19 23.0694 19 23.3346C19 23.5999 19.1054 23.8542 19.2929 24.0417C19.4804 24.2293 19.7348 24.3346 20 24.3346Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                 <path d="M24.1641 28.332H15.8307C12.4974 28.332 11.6641 27.4987 11.6641 24.1654V22.4987C11.6641 19.1654 12.4974 18.332 15.8307 18.332H24.1641C27.4974 18.332 28.3307 19.1654 28.3307 22.4987V24.1654C28.3307 27.4987 27.4974 28.332 24.1641 28.332Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                 <path d="M20.0026 36.6654C29.2076 36.6654 36.6693 29.2037 36.6693 19.9987C36.6693 10.7937 29.2076 3.33203 20.0026 3.33203C10.7976 3.33203 3.33594 10.7937 3.33594 19.9987C3.33594 29.2037 10.7976 36.6654 20.0026 36.6654Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                 </svg>
            </div>
              <div className="text">
                 <h2>This Option is Temporarily Locked!</h2>
                  <p>Please complete your <strong>profile verification</strong>profile verification to <strong>Unlock this Feature.</strong> </p>
              </div>
              <div className="verify">
                  <h2>Get Verified</h2>
             </div>
         </div>
       </div> 
      <div id="update-btn">
        <button >Next</button>
        <button onclick={MyFun}> Save</button>
      </div>
    </div>
  );
};

export default Educational;
