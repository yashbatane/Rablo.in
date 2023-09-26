import React from 'react'
import './AboutUsFooter.css'
import AIClogo from '../../../../img/AIC-logo.png';
import WFlogo from '../../../../img/WF-Logo-Color.png';
import Ministrylogo from '../../../../img/ministryOfCorporateAffairs.png';
import MSMElogo from '../../../../img/MSMElogo.png';
import RabloLogo from '../../../../img/RabloLogo.png'
const AboutUsFooter = () => {
  return (
    <div className="aboutUsFooterContainer" >
      <h3>Our Certification Course</h3>
      <div className="logos">
        <img src={Ministrylogo} alt="" style={{ borderRadius: "50%" }} />
        <img src={WFlogo} alt="" style={{ height: "5vw" }} />
        <img src={AIClogo} alt="" style={{ height: "6vw" }} />
        <img src={MSMElogo} alt="" style={{ height: "8vw" }} />
      </div>
      {/* <div className="aboutUsFooterContent">
        <div className="introHeading">
          <img src={RabloLogo} />
          <span>
            Rablo.in welcomes every enthusiast who is willing to learn and be
            the part of revolution in our E-learning Platform.
          </span>
        </div>
        <div className="product">
          <h4>Product</h4>
          <ul>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Support</a>
            </li>
            <li>
              <a>About us</a>
            </li>
          </ul>
          <button className="ForStudentsButton">For Students</button>
        </div>
        <div className="legalPolicies">
          <h4>Legal & Policies</h4>
          
          <ul>
            <li>
              <a>Privacy</a>
            </li>
            <li>
              <a>Terms of Service</a>
            </li>
            <li>
              <a>Cookie</a>
            </li>
            <li>
              <a>Refund</a>
            </li>
            <li>
              <a>Support</a>
            </li>
            <li>
              <a>Disclaimer</a>
            </li>
          </ul>
        </div>
      </div> */}
      <hr/>
    </div>
  );
}

export default AboutUsFooter
