import React from 'react';
import '../styles/progressSteps.css';

import lockIcon from '../assets/lock.svg';
import checkIcon from '../assets/check.svg';

function ProgressSteps({ currentStep }) {
  return (
    <div className='ProgressStepsContainer'>
      <div className='circles'>
        <div
          className={`step ${currentStep > 1 ? 'done' : ''} ${
            currentStep === 1 ? 'current' : ''
          }`}
        >
          <img src={`${currentStep > 1 ? checkIcon : lockIcon}`} alt='.' />
        </div>
        <span className='line'></span>
        <div
          className={`step ${currentStep > 2 ? 'done' : ''} ${
            currentStep === 2 ? 'current' : ''
          }`}
        >
          <img src={`${currentStep > 2 ? checkIcon : lockIcon}`} alt='.' />
        </div>
        <span className='line'></span>
        <div
          className={`step ${currentStep > 3 ? 'done' : ''} ${
            currentStep === 3 ? 'current' : ''
          }`}
        >
          <img src={`${currentStep > 3 ? checkIcon : lockIcon}`} alt='.' />
        </div>
        <span className='line'></span>
        <div
          className={`step ${currentStep > 4 ? 'done' : ''} ${
            currentStep === 4 ? 'current' : ''
          }`}
        >
          <img src={`${currentStep > 4 ? checkIcon : lockIcon}`} alt='.' />
        </div>
        <span className='line'></span>
        <div
          className={`step ${currentStep > 5 ? 'done' : ''} ${
            currentStep === 5 ? 'current' : ''
          }`}
        >
          <img src={`${currentStep > 5 ? checkIcon : lockIcon}`} alt='.' />
        </div>
      </div>

      <div className='texts'>
        <p className='text'>Step 1</p>
        <p className='text'>Step 2</p>
        <p className='text'>Step 3</p>
        <p className='text'>Step 4</p>
        <p className='text'>Step 5</p>
      </div>
    </div>
  );
}

export default ProgressSteps;
