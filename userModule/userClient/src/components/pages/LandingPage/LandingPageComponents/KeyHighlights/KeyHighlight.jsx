// // Develope by -Varidh
// // module name keyhighlight

// import React from "react";
// import "./KeyHighlight.css";
// import link from "./Img/link.png";
// import calender from "./Img/calendar.png";
// import chat from "./Img/chat.png";
// import choice from "./Img/choice.png";
// import income from "./Img/income.png";
// import insight from "./Img/insight.png";
// import protection from "./Img/protection.png";
// import record from "./Img/record.png";
// import website from "./Img/website.png";

// const KeyHighlight = () => {
//   return (
//     <div className="KeyHighlightMainContainer">
//       <div className="keyHighlightTitle">
//         <h1>Key Hightlight</h1>
//       </div>
//       <hr />
//       <div className="keyHightlightContent">
//         <div className="KeyHighlightCardBody">
//           <div className="KeyCardImg">
//             <img src={link} alt="" />
//           </div>
//           <div className="keyContent">
//             <p>Unlimited student <br /> Connection</p>
//           </div>
//         </div>
//         <div className="KeyHighlightCardBody">
//           <div className="KeyCardImg">
//             <img src={protection} alt="" />
//           </div>
//           <div className="keyContent">
//             <p>Payment Protection &<br />  Auto Credit</p>
//           </div>
//         </div>
//         <div className="KeyHighlightCardBody">
//           <div className="KeyCardImg">
//             <img src={choice} alt="" />
//           </div>
//           <div className="keyContent">
//             <p>Offline &<br />  Online Mode</p>
//           </div>
//         </div>
//         <div className="KeyHighlightCardBody">
//           <div className="KeyCardImg">
//             <img src={insight} alt="" />
//           </div>
//           <div className="keyContent">
//             <p>Create Test & <br /> Progress Reports</p>
//           </div>
//         </div>
//         <div className="KeyHighlightCardBody">
//           <div className="KeyCardImg">
//             <img src={website} alt="" />
//           </div>
//           <div className="keyContent">
//             <p>Dedicated <br /> Profile Page</p>
//           </div>
//         </div>
//         <div className="KeyHighlightCardBody">
//           <div className="KeyCardImg">
//             <img src={record} alt="" />
//           </div>
//           <div className="keyContent">
//             <p>Live Classes & <br />  Recording</p>
//           </div>
//         </div>
//         <div className="KeyHighlightCardBody">
//           <div className="KeyCardImg">
//             <img src={calender} alt="" />
//           </div>
//           <div className="keyContent">
//             <p>Attendance <br /> Managment App</p>
//           </div>
//         </div>
//         <div className="KeyHighlightCardBody">
//           <div className="KeyCardImg">
//             <img src={chat} alt="" />
//           </div>
//           <div className="keyContent">
//             <p>Notice Board &  <br />  Classroom Chat</p>
//           </div>
//         </div>
//         <div className="KeyHighlightCardBody">
//           <div className="KeyCardImg">
//             <img src={income} alt="" />
//           </div>
//           <div className="keyContent">
//             <p>Incentives <br />
//               & Rewards</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default KeyHighlight;
import React from 'react';
import './KeyHighlight.css';
import img from './Img/img.png';
import img2 from './Img/img2.png';
import img3 from './Img/img3.png';
import img4 from './Img/img4.png';
import img5 from './Img/img5.png';
import img6 from './Img/img6.png';
import img7 from './Img/img7.png';
import img8 from './Img/img8.png';
import img9 from './Img/img9.png';

export default function Highlight() {
  return (
    <>
    
    <div class="highlight_wrapper">
        <div className = 'highlight_wrapper_text-center'> 
        <hr/> <h1> Key Highlights </h1><hr/>
               </div>
        <div class = "container">
            {/* <div className='keyHighlights__container__row'></div> */}
            <div class="box">
                <img src={img} alt="not available"/>
                <h3> Unlimited Student Connections </h3>
            </div>
            <div class="box">
                <img src={img2} alt="not available"/>
                <h3> Payment Protection & Auto Credit </h3>
            </div>
            <div class="box">
                <img src={img3} alt="not available"/>
                <h3> Offline & Online Mode </h3>
            </div>
            <div class="box">
                <img src={img4} alt="not available"/>
                <h3> Create Test & Progress Reports </h3>
            </div>
            <div class="box">
                <img src={img5} alt="not available"/>
                <h3> Dedicated Profile Page </h3>
            </div>
            <div class="box">
                <img src={img6} alt="not available"/>
                <h3> Live Classes & Recording </h3>
            </div>
            <div class="box">
                <img src={img7} alt="not available"/>
                <h3> Attendance Management App </h3>
            </div>
            <div class="box">
                <img src={img8} alt="not available"/>
                <h3> Notice Board & Classroom Chat</h3>
            </div>
            <div class="box">
                <img src = {img9} alt="not available"/>
                <h3> Incentive Rewards </h3>
            </div>
        </div>
    </div>
    </>
  )
}
