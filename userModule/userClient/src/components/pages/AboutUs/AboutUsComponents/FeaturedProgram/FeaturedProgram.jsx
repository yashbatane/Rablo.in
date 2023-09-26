import React from "react";
import './Featuredprogram.css'

function FeaturedProgram(){
    return(
        <div className="online-offline-container">
            <div className="featured-program-container">
                <h3>OUR KEY FEATURES FOR YOU</h3>
                <h2>Featured Program</h2>
                <p>Rablo.in has come up with features keeping in mind the current situation of the world. We are interested in teaching the students with online and offline mode. Our team is well prepared for conducting classes in these two modes.  Rablo.in helps students and teachers to find each other. Select professional and verified home tutors for the mode you prefer to ensure your child’s success.</p>
            </div>
            <div className="online-heading-card">
                <div className="online-heading">
                   <h3><strong>Online Learning</strong></h3>
                   <p>Smart Learning</p> <p>With E-School</p>
                   <button><i class="fa-solid fa-star"></i> REVIEWS</button>
                </div>
                <div className="online-card">
                    <div className="card-text">
                      <p>Our Online Mode-<br/><b>Convenient in Nature</b>– This mode helps the students to study at your comfort space. You can stay at home and study with full convenience.<br/><b>24×7 Access</b>– Students can access the videos, content, e-books, etc, anytime they want. This helps the students to study anytime comfortable.<br/><b>Content Availability</b>– We provide all sorts of content such as e-notes, e-books, mock tests, previous year’s question papers for our students, which makes it easier for them to study. <br/><b>Parent Communication Module</b>– Online Mode allows transparent relationship between teachers, parents and students. They can communicate with each other conveniently.<br/><b>Cheaper Fee</b>– The fee structure of online mode is a bit cheaper in comparison to the offline mode.	
                      </p>
                      			
                    </div>
                    <div className="key-points">
                        <h6>KEY POINTS</h6><hr/>
                        <div className="points-container">
                            <ul className="points">
                                <li>
                                    <i class="fa-solid fa-star"></i> <strong>Convenient in Nature</strong></li>
                                <li>
                                <i class="fa-solid fa-users"></i>
                                <strong>24x7 Access</strong>
                                </li>
                                <li>
                                <i class="fa-solid fa-quote-left"></i>
                                    <strong>Content Availability</strong>
                                </li>
                                <li>
                                <i class="fa-solid fa-circle-check"></i>
                                <strong>Parent Module</strong>
                                </li>
                                <li>
                                <i class="fa-solid fa-money-bill-1"></i>
                                <strong>Cheaper Fee</strong>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

            </div>
            {/* Offline content */}
            <div className="online-heading-card">
                <div className="online-heading">
                   <h3><strong>Offline Classes</strong></h3>
                   <p>Knowledge at your Door</p>
                   <button><i class="fa-solid fa-star"></i> REVIEWS</button>
                </div>
                <div className="online-card">
                    <div className="card-text">
                      <p>Our Offline Mode-</p>
                      <p ><strong>One on One interaction</strong>– Our home tutors provide one to one guidance to help the student and make them comfortable so that they can asks doubts with any hesitation.<br/><strong>Promising Grades</strong>– It’s a well known fact that home tuition help students to achieve better grades. Home tutors provide personalized 100% attention to every child they teach.<br/><strong>Flexible</strong>– You can choose to study at your convenient timings by our professional home tutors. Few hours of home tutoring a day can help you to cope up with your studies on daily basis.<br/><strong>Reasonable Charges</strong>– We provide you private home tutors at very reasonable fee charges by keeping in mind different financial conditions of our customers.<br/><strong>Get Free Demo</strong>– Interested students/parents will apply for home tuition and we arrange free demo classes for 3 days by our professional home tutors. With the help of your demo classes facility you can chose a private home tutor of your choice.</p>
                      			
                    </div>
                    <div className="key-points">
                        <h6>KEY POINTS</h6><hr/>
                        <div className="points-container">
                            <ul className="points">
                                <li>
                                    <i class="fa-solid fa-star"></i> 
                                    <strong>One on One interaction</strong>
                                </li>
                                <li>
                                <i class="fa-solid fa-users"></i>
                                <strong>Promising Grades</strong>
                                </li>
                                <li>
                                 <i class="fa-solid fa-quote-left"></i>
                                    <strong>Flexible</strong>
                                </li>
                                <li>
                                <i class="fa-solid fa-circle-check"></i>
                                <strong>Get Free Demo</strong>
                                </li>
                                <li>
                                <i class="fa-solid fa-money-bill-1"></i>
                                <strong>Reasonable Charges</strong>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

            </div>
        
        </div>
    )
}

export default FeaturedProgram