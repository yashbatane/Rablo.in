import React from "react";
import './DescriptionVideo.css';
import Typewriter from "typewriter-effect";

function DescriptionVideo(){
    return(
        <div className="description-video-container">
            <div className="description-container">
                <h1><strong><div className="typing">
                    <Typewriter
                        options={{
                        strings: ['Creating Oppurtunities', 'Educate New Generations', 'Providing Possibilities',],
                        autoStart: true,
                        loop: true,
                        }}
                    />
                </div>
                </strong>
                </h1>
                <h1>by Spreading Knowledge</h1>
                <p>Rablo.in provides opportunities to aspirants who are willing to share their knowledge and use their teaching skills by being a part of our Home Teaching Faculty. We look for Home Tutors who are interested in serving dedicatedly as personalized Home Tutors with us.</p>
            </div>
            <div className="video-card-container">
              <iframe className="video" width="880" height="704" src="https://www.youtube.com/embed/8sjYLEvCLkQ" title="Why are we best in the League!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
              ></iframe>
              <p>Our team offers excellent online tuition services where you can learn everything from our professional tutors through an online platform within your budget.</p>
              <hr/>
              <button>Apply Now</button>

            </div>
          
        </div>
    )
}

export default DescriptionVideo