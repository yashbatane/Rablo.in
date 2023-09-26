import React from "react";
import Typewriter from "typewriter-effect";
import './Joinusdescription.css';



function JoinusDescription(){
    return(
        <div className="joinus-container">
           <div className="joinus-heading">
             <h2 className="heading"> 
               <div className="black-join">Join us </div>
                <div className="typing">
                  <Typewriter
                    options={{
                      strings: ['for Free', 'to Grow', 'to Earn', 'toTeach',],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </div>
              </h2>
           </div>
           <div className="joinus-para">
            <p>We are looking for aspirants who are to contribute their knowledge to educate young minds. A few hours of working with us can help you to earn in the Highest Paying Part-Time Job.<br/>
            Our program provides We provide A Ready to Teach Eco-system to support private tutors in teaching better, growing their business, and building their brand. We manage everything on the behalf of a teacher leaving him to focus on the child and it’s Progress.
            </p>
           </div>
        </div>
    )
}

export default JoinusDescription




