import React, { useState } from 'react'
// import FeaturedProgram from "./AboutUsComponents/FeaturedProgram/FeaturedProgram";
import "./AboutUs.css";
// import Certificates from "./AboutUsComponents/Certificates/Certificates";
// import HowWeWork from "./AboutUsComponents/HowWeWork/HowWeWork";
// import PageFooter from "./AboutUsComponents/PageFooter/PageFooter";
// import DescriptionVideo from "./AboutUsComponents/DescriptionVideo/DescriptionVideo";
// import AboutusFlipCard from "./AboutUsComponents/AboutusFlipCard/AboutusFlipCard";
// import { Whoarewe } from './AboutUsComponents/Whoarewe/Whoarewe';
// import { Aboutuscards } from './AboutUsComponents/AboutusCards/Aboutuscards';
// import { Founders } from './AboutUsComponents/Founders/Founders';
// import { Headeraboutus } from './AboutUsComponents/HeaderAboutus/Headeraboutus';
// import { Footeraboutus } from './AboutUsComponents/FooterAboutus/Footeraboutus';
import AboutUsLanding from './AboutUsComponents/AboutUsLandingPage/AboutUsLanding';
import AboutUsWhoAreWe from './AboutUsComponents/AboutUsWhoAreWe/AboutUsWhoAreWe';
import AboutUsDefine from './AboutUsComponents/AboutUsDefine/AboutUsDefine';
import AboutUsMeetFounders from './AboutUsComponents/AboutUsMeetFounders/AboutUsMeetFounders';
import AboutUsFooter from './AboutUsComponents/AboutUsFooter/AboutUsFooter';

export const AboutUs = () => {
  return (
    <div className="aboutuscontainer" style={{gap:"0px"}}>
    
    <AboutUsLanding/>
    <AboutUsWhoAreWe/>
    <AboutUsDefine/>
      <AboutUsMeetFounders/>
      <AboutUsFooter/>
     
    </div>
  );
};
