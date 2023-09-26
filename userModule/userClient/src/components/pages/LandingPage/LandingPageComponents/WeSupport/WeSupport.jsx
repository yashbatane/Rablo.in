import React from 'react'
import tutor2 from './support1.png'
import tutor from './support2.png'
import './WeSupport.css';
export default function WeSupport() {
  return (
    // <div>
      <div className="support_container">
        <h3> WE SERVE YOU BEST </h3>
        <div className='support_container__mainHeadContainer'><hr/><h1> Educators We Support </h1><hr/></div>
        <div className='support_section'>
          <div className="support_wrapper" data-aos={"fade-up"}
              data-aos-duration="1000"
              data-aos-once="true">
          <div className='support_ImgWrapper'>
            <img src={tutor} alt="tutor" />
            </div>
            <h2> Just Starting Up </h2>
            <p>For those who have no experience teaching or having students, we can introduce you to the community and save you from a lot of difficult experiences.</p>
            <hr/>
          </div>

          <div className="support_wrapper" data-aos={"fade-up"}
              data-aos-duration="1000"
              data-aos-once="true">
            <div className='support_ImgWrapper'>

            <img src={tutor2} alt="tutor" />
            </div>
            <h2> Already Have Students </h2>
            <p>For those who already provide tuition, but are seeking a more powerful way to grow their scale with an improved student learning experience.</p>
            <hr/>
          </div>

        </div>

      </div>
    // </div>
  )
}
