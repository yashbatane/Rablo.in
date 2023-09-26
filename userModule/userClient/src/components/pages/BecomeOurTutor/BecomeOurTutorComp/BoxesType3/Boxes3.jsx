import React from 'react';
import earning from '../../../../img/earning.webp';
import cross from '../../../../img/cross.webp';
import call from '../../../../img/call.webp';
import { BoxType3 } from '../../../../GlobalComponents/miniComponents/BoxType3/BoxType3';
import './Boxes3.css';

export const Boxes3 = () => {
  return (
    <div className='bcmtutorboxtype3' style={{ 'margin-top': '70px' }}>
      <hr className='horizontal-line' />
      <div className='boxesType3'>
        <BoxType3
          img={earning}
          title={'2x Your Earning'}
          para={
            ' We connect you to the Students across the nation boosting you earning potential.'
          }
        />
        {/* 2 box */}
        <BoxType3
          img={cross}
          title={'Zero Commission Fee'}
          para={
            'We Don’t charge any commission for connecting you to the students or any support service.'
          }
        />
        {/* third box */}
        <BoxType3
          img={call}
          title={'100% Teaching Support'}
          para={
            'We provide complete content & curriculum support with  On-Time Fee Credit Assurance.'
          }
        />
      </div>
      {/* <div> */}{' '}
      <button className='letsstart'>
        <i class='fa-solid fa-flag-checkered'></i> LET'S START
      </button>
      {/* </div> */}
      {/* <a href="#">Know Your Pay!</a> */}
      <hr className='horizontal-line' />
    </div>
  );
};
