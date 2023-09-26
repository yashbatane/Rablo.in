import React from 'react';
import JoinusDescription from './BecomeOurTutorComp/JoinusDescription/JoinusDescription';
import SuperMentor from './BecomeOurTutorComp/SuperMentor/SuperMentor';
import './BecomeOurTutor.css';
import { BoxesType1 } from './BecomeOurTutorComp/BoxesType1/BoxesType1';
import { Boxes3 } from './BecomeOurTutorComp/BoxesType3/Boxes3';
import { IntroHeader } from './BecomeOurTutorComp/IntroHeader/IntroHeader';
import { PageFoter } from './BecomeOurTutorComp/PageFooter/PageFoter';
// import KnowYourPayForm from "./BecomeOurTutorComp/KnowYourPayForm/KnowYourPayForm";
import { Navbar } from '../../GlobalComponents/Navbar/Navbar';

export const BecomeOurTutor = () => {
  return (
    <div className='becomeourtutorcontainer'>
      {/* <Navbar /> */}
      <IntroHeader />
      <JoinusDescription />
      <Boxes3 />
      <SuperMentor />
      <BoxesType1 />
      {/* To be Removed  */}
      {/* <KnowYourPayForm /> */}
      <PageFoter />
    </div>
  );
};
