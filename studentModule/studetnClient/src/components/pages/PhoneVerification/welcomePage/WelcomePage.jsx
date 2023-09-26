import React from "react";
import "./WelcomePage.css";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';

const WelcomePage = () => {
  return (
    <div className="WelcomePage-container">
      <div className="image-left-welcome-page"></div>
      <div className="content-right-welcome-page">
        <div className="back-icon-welcome-page">
          <ExitToAppIcon style={{height:"40px", width:"40px"}}/>
        </div>
        <div className="bigtext-welcomepage">Start Your Journey</div>
        <div className="smalltext-welcomepage">
          Share your thoughts with the world from today
        </div>
        <div className="ruler-welcome-page">
          <hr />
        </div>
        <div className="iconswelcomepage">
          <div><FacebookIcon style={{height:"45px", width:"45px", color:"#2A91F3"}}/></div>
          <div><LinkedInIcon style={{height:"45px", width:"45px", color:"#322457"}}/></div>
          <div><GoogleIcon style={{height:"45px", width:"45px", color:"#322457"}}/></div>
        </div>
        <div className="smalltext-welcomepage-tnc">
          By register, you agree with our <b>Terms and Condition</b> and{" "}
          <b>Privacy Policy.</b>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
