import React from "react";
// import "./Footermain.css";
import "./Foortmain.css";
// import logo from "../../../img/logo.webp";
// import logo from "../../img/logo.webp";
import map from "../../img/social/map.png";
import telephone from "../../img/social/telephone.png";
import facebook from "../../img/social/facebook.png";
// import facebook from "../../img/social/facebook.png";
import twitter from "../../img/social/twitter.png";
import youtube from "../../img/social/youtube.png";
import linkedin from "../../img/social/linkedin.png";
import instagram from "../../img/social/instagram.png";
// import map from '../../img/social/map.png'
// import telephone from '../../img/social/email.png'

const Footer = () => {
  return (
    <div className="mainfooter">
      <div className="footercontentsmaincontainer">
        {/* Company Detalis */}
        <div className="mainfootercontainer1">
          <div class="logo-part">
            {/* <img src={logo} class="w-50 logo-footer" alt="logo" /> */}
          </div>
          <div className="FooterAboutCompnay">
            <p>
              Hometuition.Inc welcomes every enthusiast who is willing to learn
              and be the part of revolution in our E-learning Platform.
            </p>
            
          </div>
          <div className="FooterCompanySocialMeadia">
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
            <img src={youtube} alt="" />
            <img src={linkedin} alt="" />
            <img src={instagram} alt="" />
          </div>
          <div className="FooterFindus">
            <div className="FooterLocation">
              <img src={map} alt="" />
              <address>Lucknow</address>
            </div>
            <div className="FooterLocation">
              <img src={telephone} alt="" />
              <a href="/">mail@mail.com</a>
            </div>
          </div>
          
        </div>

        {/*Important  links */}
        <div className="mainfooternavigationslinks">
          {/* Navigation Links */}
          <div className="mainfootercontainer2">
            <h3>Main Menu</h3>
            <div className="footerMainMenu">
              <a href="/">Become Our Tutor</a>
              <a href="/">Pricing</a>
              <a href="/">About us</a>
              <a href="/">User</a>
            </div>
          </div>

          <div className="mainfootercontainer3">
            <h3>Important Link</h3>
            <div className="FooterImportantLink">
              <a href="/">Join Affiliate Program</a>
              <a href="/">Downloadable</a>
              <a href="/">FeedBack</a>
              <a href="/">Privacy Policy</a>
              <a href="/">Terms and Conditions</a>
              <a href="/">Return And Refund Policy</a>
              <a href="/">Request Verification</a>
              <a href="/">Help and Support</a>
            </div>
          </div>
        </div>
        {/* Important Link */}

        {/* share Us  */}
        <div className="mainfootercontainer4">
          <h3>Share Us.</h3>
          <div className="FooterShareLinks">
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
            <img src={youtube} alt="" />
            <img src={linkedin} alt="" />
            <img src={instagram} alt="" />
          </div>
          <div className="FooterinfoButtons">
              <a href="/" class="btn-footer">
                {" "}
                More Info{" "}
              </a>
              <br />
              <a href="/" class="btn-footer">
                {" "}
                Contact Us
              </a>
            </div>
        </div>
      </div>
      <hr className="hr" />
      <div className="footer-copyright">
        Copyright &#169; 2022 <span> Rablo.in</span>
      </div>
    </div>
  );
};

export default Footer;