import React from 'react';
import './IntroHeader.css';
export const IntroHeader = () => {
  return (
    <div className='introHeaderContainer'>
      <div className='content'>
        <div className='contentBigText'>A Ready to Teach Eco-System</div>

        <hr></hr>
        <div className='contentMediumText'>
          <p>
            We support{' '}
            <b
              style={{
                'font-size': '18px',
                'font-weight': '300',
                'font-family': 'Poppins,Sans-serif',
              }}
            >
              Private Tutors
            </b>{' '}
            in teaching better, growing their business, and building their
            brand.
          </p>
        </div>
        <div className='contenttimeline'>
          <div className='hours'>
            <span>24</span>
            <p>Hours</p>
          </div>
          <div className='minutes'>
            <span>24</span>
            <p>Minutes</p>
          </div>
          <div className='seconds'>
            <span>24</span>
            <p>Seconds</p>
          </div>
        </div>
        {/* <button className="appyNow">Apply Now </button> */}
        <a href='' className='applyNow'>
          Apply Now
        </a>
      </div>
      <label htmlFor='showvideo'>
        <div className='iconContainer'>
          <i className='ShowVideonButtonIcon fa-solid fa-angle-down'></i>
        </div>
      </label>
      <input type='checkbox' id='showvideo' />
      <div className='videocontainer'>
        <iframe
          className='video'
          src='https://www.youtube.com/embed/0yiY1Q688S0'
          title='Student learning Experience with Rablo.in | Review Video'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen
        ></iframe>
      </div>
      <div className='watch'>Watch</div>
    </div>
  );
};
