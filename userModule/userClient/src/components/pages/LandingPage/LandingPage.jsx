import React from "react";
// import {RatingVideo} from "../../GlobalComponents/RatingVideo/RatingVideo";

import { RoundBox } from "./LandingPageComponents/RoundBox/RoundBox";
import { BenifitBox } from "./LandingPageComponents/BenifitBox/BenifitBox";
import { WaveHeader } from "./LandingPageComponents/WaveHeader/WaveHeader";
import { OurCatalog } from "./LandingPageComponents/OurCatalog/OurCatalog";
import "./LandingPage.css";
import RatingVideo from "./LandingPageComponents/RatingVideo/RatingVideo";
import Typeclass from "./LandingPageComponents/Typeclass/Typeclass";
import CentralContent from "./LandingPageComponents/CentralContent/CentralContent";
import DescriptionCard from "./LandingPageComponents/DescriptionCard/DescriptionCard";
import Work from "./LandingPageComponents/Work/Work";
import Ecosystem from "./LandingPageComponents/Ecosystem/Ecosystem";
import Footer from "./LandingPageComponents/Footer/Footer";
import KeyHighlight from "./LandingPageComponents/KeyHighlights/KeyHighlight";
import Explore from "./LandingPageComponents/Explore/Explore";
import JoinUsNow from "./LandingPageComponents/JoinUsNow/JoinUsNow";
import ModePrefer from './LandingPageComponents/ModePrefer/ModePrefer'
import GetStarted from "./LandingPageComponents/GetStarted/GetStarted";
import Affiliated from "./LandingPageComponents/Affiliated/Affiliated";
import FAQ from './LandingPageComponents/FAQ/faq';
import WeSupport from "./LandingPageComponents/WeSupport/WeSupport";
export const LandingPage = () => {

  return (
    <div className="landingpage" style={{marginBottom:"50px"}}>
      <WaveHeader />
      <Explore/>
      <WeSupport />
      <ModePrefer />
      <KeyHighlight/>
      <Work />
      <Affiliated />
      <GetStarted />
      <FAQ /> 
      {/* <JoinUsNow/>
      <OurCatalog /> */}
      {/* <Typeclass /> */}
      {/* <CentralContent /> */}
      {/* <DescriptionCard /> */}
      {/* <BenifitBox /> */}
      {/* <Ecosystem /> */}
      {/* <RatingVideo /> */}
      {/* <RoundBox  /> */}
      </div>
  );
};
