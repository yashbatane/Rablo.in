import { useRef } from "react";
import React, { useState } from "react";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import "./BasicInfo.css";
import verified from "../../icons/verify.svg";
import danger from "../../icons/danger.svg";
const BasicInfo = () => {
  const inputRef = useRef(null);
  const [prefferedType, setPrefferedType] = useState({});
  const [formValues, setFormValues] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const handleSubmission = () => {
    inputRef.current.click();
  };

  const changeHandler = (e) => {
    const fileObj = e.target.files && e.target.files[0];
  };
  //mobile verification popup alert function
  
  {/* ///////////////new alert code after email verifiction///////////////////// */ }
   
  {/* ///////////////new alert code after email update///////////////////// */ }
  function myFunction3() {
    let btn1 = document.getElementsByClassName("alert-containerupdate");
    btn1[0].style.display = 'block';
  }
  const regex=/^[A-Za-z._1-9]{3,100}@[A-Za-z]{3,20}[.]{1}[A-Za-z.]{2,6}$/;
  const rgx=/^[1-9]{10}$/;
  const [email,setEmail]=useState('');
  const [mobile,setmobile]=useState('');
  //const [error,errorEmail]=useState('');
  function chekvalid(e)
  {
    setEmail(e.target.value);
    if(regex.test(email)==false)
    {
       document.getElementsByClassName('labelling').src=`${danger}`;
    }
    else{
      document.getElementsByClassName('labelling').src=`${verified}`;
      return true;
    }
  }
  function myFunction5(e) {
    setEmail(e.target.value);
    if(regex.test(email)==false)
    {
          let btn1 = document.getElementsByClassName("alert-containererror");
          btn1[0].style.display='block';
    }
    else{
      let btn1 = document.getElementsByClassName("alert-containererror");
      btn1[0].style.display ='none';
      let btn = document.getElementsByClassName("container-A");
      btn[0].style.display = 'block';
      return true;
    }
  }
  function chekmobilevalid(e)
  {
    setmobile(e.target.value);
    if(rgx.test(mobile)==false)
    {
       document.getElementsByClassName('labelling').src=`${danger}`;
    }
    else{
      document.getElementsByClassName('labelling').src=`${verified}`;
      return true;
    }
  }
  function myFunction6(e) {
    setmobile(e.target.value);
    if(rgx.test(mobile)==false)
    {     let btn1 = document.getElementsByClassName("alert-containererror");
          btn1[0].style.display = 'block';
    }
    else{
        let btn1 = document.getElementsByClassName("alert-containererror");
         btn1[0].style.display = 'none';
         let btn = document.getElementsByClassName("container");
         btn[0].style.display = 'block';
      return true;
    }
  }
  function myFunction(){
    let btn=document.getElementsByClassName('alert-containerupdate');
    btn[0].style.display='none';
  }
 
  return (
    <div className="main-container-basic-info">
      {/*............. code for mobile verification .............*/}
      <div className="container">
        <div className="iner-container-1">
          <svg id="OTP1" xmlns="http://www.w3.org/2000/svg" width="40" height="30" viewBox="0 0 70 70" fill="none">
            <path d="M62.3359 0.832031H7.66927C3.91094 0.832031 0.835938 3.90703 0.835938 7.66536V48.6654C0.835938 52.4237 3.91094 55.4987 7.66927 55.4987H55.5026L69.1693 69.1654V7.66536C69.1693 3.90703 66.0943 0.832031 62.3359 0.832031ZM62.3359 52.7654L58.2359 48.6654H7.66927V7.66536H62.3359V52.7654Z" fill="#6764FF" />
          </svg>
          <svg id="OTP2" xmlns="http://www.w3.org/2000/svg" width="85" height="70" viewBox="0 0 112 112" fill="none">
            <path d="M72.3359 4.66797H35.0026C31.9084 4.66797 28.9409 5.89713 26.753 8.08506C24.5651 10.273 23.3359 13.2404 23.3359 16.3346V95.668C23.3359 98.7622 24.5651 101.73 26.753 103.918C28.9409 106.105 31.9084 107.335 35.0026 107.335H72.3359C75.4301 107.335 78.3976 106.105 80.5855 103.918C82.7734 101.73 84.0026 98.7622 84.0026 95.668V16.3346C84.0026 13.2404 82.7734 10.273 80.5855 8.08506C78.3976 5.89713 75.4301 4.66797 72.3359 4.66797ZM53.6693 102.668C49.7959 102.668 46.6693 99.5413 46.6693 95.668C46.6693 91.7946 49.7959 88.668 53.6693 88.668C57.5426 88.668 60.6693 91.7946 60.6693 95.668C60.6693 99.5413 57.5426 102.668 53.6693 102.668ZM74.6693 84.0013H32.6693V18.668H74.6693V84.0013Z" fill="#6764FF" />
          </svg>
        </div>
        <div className="iner-container-2">
          <h2>Verify your Mobile Number</h2>
          <p>Verifying your number will give  access to more features on Rablo. A one    time password has been sent to <strong>+91 9677169628</strong></p>
        </div>
        <div className="iner-container-3">
          <div className="div-1"><input type="text" /></div>
          <div className="div-2"><input type="text" /></div>
          <div className="div-3"><input type="text" /></div>
          <div className="div-4"><input type="text" /></div>
        </div>
        <div className="iner-container-4">
          <h2>Time Left: 00:30</h2>
          <div className="verify"><h2>Verify ></h2></div>
          <p>Resend OTP > </p>
          <p>Entered Incorrect number?</p>
        </div>
      </div>
      {/* //.............. code email verifiction send msg...............// */}
      <div className="container-A">
        <div className="iner-container-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="74" height="78" viewBox="0 0 74 78" fill="none">
            <path d="M37.0026 48.75L12.3359 32.5V58.5H61.6693V32.5L37.0026 48.75Z" fill="#699BF7" fill-opacity="0.3" />
            <path d="M9.25 26.1977C9.25 25.0655 9.80901 24.0149 10.7255 23.4245L37 6.5L63.2743 23.4245C64.191 24.0149 64.75 25.0655 64.75 26.1977V58.5C64.75 60.295 63.3696 61.75 61.6667 61.75H12.3333C10.6305 61.75 9.25 60.295 9.25 58.5V26.1977Z" stroke="#699BF7" stroke-width="2" stroke-linecap="round" />
            <path d="M9.25 27.625L37 45.5L64.75 27.625" stroke="#699BF7" stroke-width="2" stroke-linecap="round" />
          </svg>
        </div>
        <div className="iner-container-2">
          <h2>Verification email sent!</h2>
          <p>This action require email verification. Please
            check your inbox and follow the instructions.
            Email sent to :</p>
          <p>xyzxyz@gmail.com</p>
        </div>
        <div className="iner-container-4">
          <div className="verify"><h2>OK</h2></div>
        </div>
      </div>
      {/* code for after email veried popup */}

      {/* <div className ="alert-container">
           <div className ="close"   onclick="myFunction()" ><i class="fa-regular fa-xmark"></i><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M2 2L20 20" stroke="#6764FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2 20L20 2" stroke="#6764FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
           </div>
           <div className ="text-container">
               <div className ="symbol">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                 <path d="M17.5 2.5C20 2.5 21.25 3.7625 21.25 6.2875V15.1C21.25 17.5875 19.4875 18.55 17.325 17.25L15.675 16.25C15.3 16.025 14.7 16.025 14.325 16.25L12.675 17.25C10.5125 18.55 8.75 17.5875 8.75 15.1V6.2875C8.75 3.7625 10 2.5 12.5 2.5H17.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                 <path d="M8.525 6.23672C4.2625 6.94922 2.5 9.57422 2.5 14.8742V18.6617C2.5 24.9742 5 27.4992 11.25 27.4992H18.75C25 27.4992 27.5 24.9742 27.5 18.6617V14.8742C27.5 9.48672 25.675 6.84922 21.25 6.19922" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div className ="text">
                  <h2>Email Verified!</h2>
                  <p>You Email has been successfully Verified</p>
              </div>
              <div className ="verify">
                  <h2>Back To Profile</h2>
             </div>
         </div>
       </div>*/}
      { /*........... code for pop after update............ */}

      <div className="alert-containerupdate">
        <div className="close" onclick={myFunction()} ><i class="fa-regular fa-xmark"></i><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path d="M2 2L20 20" stroke="#6764FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M2 20L20 2" stroke="#6764FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        </div>
        <div className="text-container">
          <div className="symbol">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
              <path d="M17.5 2.5C20 2.5 21.25 3.7625 21.25 6.2875V15.1C21.25 17.5875 19.4875 18.55 17.325 17.25L15.675 16.25C15.3 16.025 14.7 16.025 14.325 16.25L12.675 17.25C10.5125 18.55 8.75 17.5875 8.75 15.1V6.2875C8.75 3.7625 10 2.5 12.5 2.5H17.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M8.525 6.23672C4.2625 6.94922 2.5 9.57422 2.5 14.8742V18.6617C2.5 24.9742 5 27.4992 11.25 27.4992H18.75C25 27.4992 27.5 24.9742 27.5 18.6617V14.8742C27.5 9.48672 25.675 6.84922 21.25 6.19922" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          <div className="text">
            <h2>Updated!</h2>
            <p>You Profile has been successfully Updated </p>
          </div>
          <div className="verify">
            <p>Back To Profile</p>
          </div>
        </div>
      </div>
      {/* .........code show error alert  oops............... */}

      <div className="alert-containererror">
        <div className="close"  ><i class="fa-regular fa-xmark"></i><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path d="M2 2L20 20" stroke="#6764FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M2 20L20 2" stroke="#6764FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        </div>
        <div className="text-container">
          <div className="symbol">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
              <path d="M17.5 2.5C20 2.5 21.25 3.7625 21.25 6.2875V15.1C21.25 17.5875 19.4875 18.55 17.325 17.25L15.675 16.25C15.3 16.025 14.7 16.025 14.325 16.25L12.675 17.25C10.5125 18.55 8.75 17.5875 8.75 15.1V6.2875C8.75 3.7625 10 2.5 12.5 2.5H17.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M8.525 6.23672C4.2625 6.94922 2.5 9.57422 2.5 14.8742V18.6617C2.5 24.9742 5 27.4992 11.25 27.4992H18.75C25 27.4992 27.5 24.9742 27.5 18.6617V14.8742C27.5 9.48672 25.675 6.84922 21.25 6.19922" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          <div className="text">
            <h2>Oops! Something went Wrong.</h2>
            <p>Please check your provided Details Carefully. </p>
          </div>
          <div className="verify">
            <p>Back To Profile</p>
          </div>
        </div>
      </div>
      <h2 style={{ fontSize: "1.15rem", color: "rgba(74, 55, 148, 0.8)" }}>Edit Profile Image</h2>
      {/* upload image section */}
      <div onClick={handleSubmission} id="uploadImage">
        <button>Browse Your Device</button>
        <p>Or</p>
        <p>Drag & Drop Here</p>
        <input
          style={{ display: "none" }}
          ref={inputRef}
          type="file"
          onChange={() => {
            changeHandler();
          }}
        ></input>
      </div> 
      <div className="input-email-number">
        <div className="labelling">
          <div id="email">Email</div>
          <img src={danger} alt="" />
        </div>
        {/* input email */}
        <div id="input-email">
          <input type="email" name="mail" placeholder="tutor@gmail.com" onChange={chekvalid}/>
          <button       onclick={myFunction5()}>Verify</button>
        </div>
        {/* input number */}
        <div id="number-field">
          {/* mobile number field*/}
          <div>
            <div className="labelling">
              <div id="mobile">
                Mobile Number
                <img src={verified} alt=""/>
              </div>
            </div>
            <div id="input-number">
              <div id="input-mob">
                <input type="number" name="phoneNo" placeholder="+91 9876543210" onChange={chekmobilevalid} ></input>
                {/* mobile verifiction code function on button  */}
                <button    onclick={myFunction6()}> Change </button>
              </div>
            </div>
          </div>
          {/* whatsapp number field*/}
          <div>
            <div className="labelling">
              <div id="wp-label">WhatsApp Number</div>
            </div>
            <div id="input-number">
              <div id="input-whatn">
                <input type="number" name="whatsappNo" placeholder="Enter Number"></input>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="update-btn">
        <button >Next</button>
        <button onclick={myFunction3()}>Save</button>
      </div>
    </div>
  );
};
export default BasicInfo;
