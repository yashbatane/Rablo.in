import React from "react";
import './RatingVideo.css';

function RatingVideo(){
    return(
        <div className="rating-video-text">
            <div className="heading-text">
            <h2>Student Learning Experience</h2>
            {/* <hr className="small-line"/> */}
            <h3>REVIEWED AT GOOGLE REVIEWS</h3>
            </div>
            
            <h2><i className="icon-double-quote fa-solid fa-quote-right"></i></h2>

                <div className="one-box">
                    <div className="rating-star-bar">
                        <div class="row">
                            <div className="one-element">
                                <div class="side">
                                    <div>5 </div>
                                </div>
                                <div class="middle">
                                    <div class="bar-container">
                                    <div class="bar-5"></div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="one-element">
                                <div class="side">
                                    <div>4 </div>
                                </div>
                                <div class="middle">
                                    <div class="bar-container">
                                    <div class="bar-4"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="one-element">
                                <div class="side">
                                    <div>3 </div>
                                </div>
                                <div class="middle">
                                    <div class="bar-container">
                                    <div class="bar-3"></div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="one-element">
                            <div class="side">
                                    <div>2 </div>
                                </div>
                                <div class="middle">
                                    <div class="bar-container">
                                    <div class="bar-2"></div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="one-element">
                                <div class="side">
                                    <div>1 </div>
                                </div>
                                <div class="middle">
                                    <div class="bar-container">
                                    <div class="bar-1"></div>
                                    </div>
                                </div>
                            </div>                                                
                        </div>
                        <div className="star-rating">
                                <h2>4.9</h2>
                                <div className="stars">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                </div>
                        </div>
                    </div>
                    <div className="video-element">
                            
                        <iframe className="video" src="https://www.youtube.com/embed/0yiY1Q688S0" title="Student learning Experience with Rablo.in | Review Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            
                            
                    </div>
                </div>

                <div className="review">
                    <button>
                    Review us now <i class='fas fa-arrow-alt-circle-right'></i>
                    </button>
                </div>
                
        </div>
    )
}

export default RatingVideo