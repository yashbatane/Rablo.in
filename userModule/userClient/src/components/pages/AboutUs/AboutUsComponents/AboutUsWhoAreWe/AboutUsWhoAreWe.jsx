// Developed by Shivam Agarwal

import React from 'react'
import "./AboutUsWhoAreWe.css"
const AboutUsWhoAreWe = () => {
  return (
    <section className="AboutUsWhoAreWeContainer">
      <div className="AboutUsWhoAreWeHeading">
        <h3>WHO ARE WE?</h3>
      </div>
      <div className="AboutUsWhoAreWePara">
        <p>
          Our company is an AI-Powered Personalised Learning Ecosystem that
          offers technology services related to business growth and teaching
          management with a wide range of Freemium growth and technology add-ons
          to assist private educators and small and mid-sized tuition businesses
          in expanding their reach, improving quality, and automating their
          operations.
        </p>
      </div>
      <div className='AboutUsWhoAreWeData'>
        <div className='DataItem'>
            <span className="number">200+</span>
            <span className='text'>ENROLLED STUDENTS</span>
        </div>
        <div className='DataItem'>
            <span className="number">1000+</span>
            <span className='text'>TUTORS</span>
        </div>
        <div className='DataItem'>
            <span className="number">8+</span>
            <span className='text'>MODES & CATEGORIES</span>
        </div>
      </div>
    </section>
  );
}

export default AboutUsWhoAreWe
