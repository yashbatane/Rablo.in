import React from 'react';
import './SuperMentor.css';
import ourtutor from '../../../../img/becomeourtutor.webp';

function SuperMentor() {
  return (
    <div className='image-card-container'>
      <div className='image-container'>
        <img src={ourtutor} alt='hero' />
      </div>
      <div className='flipcard-container'>
        <div className='thecard'>
          <div className='thefront'>
            <h3>Our most prominent </h3>
            <h3>
              <strong>Super Mentors</strong>
            </h3>
            <p>
              All of our Private Tutors are experts in their fields of expertise
              and great in transferring their knowledge - teaching skills are
              supported by our author coach program.
              <br />⟶
            </p>
          </div>
          <div className='theback'>
            <h3>Join our Team </h3>
            <h3>
              of <strong>Private Tutors</strong>
            </h3>
            <p>
              If you're adept in knowledge and skills in your field of interest,
              don't hesitate to come aboard. We are opened for new teacher
              vacancy.
            </p>
            <button className='become-mentor-bt'>BECOME A MENTOR</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuperMentor;
