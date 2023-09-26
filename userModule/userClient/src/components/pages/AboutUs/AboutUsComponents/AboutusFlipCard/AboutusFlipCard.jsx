import React from "react";
import './AboutusFlipCrad12.css';

function AboutusFlipCard(){
    return(
        <div className="two-cards-container">
            <div className="flip-container">
                <div className="card">
                    <div className="front">
                        <h3>
                            Why become <strong>an Mentor?</strong>
                        </h3>
                        <p>                          
							 With the developing technology online earning is becoming a successful trend and we are dedicated to use this platform to educate young minds. Our team offers excellent online tuition services where you can learn everything from our professional tutors through an online platform within your budget.							
                        </p>
                    </div>
                    <div className="back">
                        <p>                          
							Do you want to learn more about our philosophy, ethical and business standards ?						
                        </p>
                        <button>Click Here</button>
                    </div>
                </div>
            </div>
            {/* 2nd card */}
            <div className="flip-container-1">
                <div className="card">
                    <div className="front">
                        <h3>
                            <strong>How to Start</strong>
                        </h3>
                        <p>                          
							 -Login<br/>
                             -Make your Profile<br/>
                             -Start Your Classes					
                        </p>
                    </div>
                    <div className="back">
                        <p>                          
							Do you want to learn more about our philosophy, ethical and business standards ?						
                        </p>
                        <button>Click Here</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AboutusFlipCard