import React from 'react';
import "./RefindTutor.css";
import StudentDashBoardHeader from "../../../StudentPortal/StudentGlobalComponent/NavBarHeader/StudentDashBoardHeader"
import imageTutor from "../../../../img/profilepic.webp";
function ReFindTutor() {
    return (
        <div className='RefindTutorMainContainer'>
            <div className="header"><StudentDashBoardHeader />
            </div>


            <div className='upperContent'>
                <input className='search' placeholder='search'></input>
                <div className='findAndFilter'><h1>Find Tutor</h1>
                    <h2>Filters</h2>
                    <select name="cars" id="cars">
                        <option value="volvo">Qualifications</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>
                    <select name="cars" id="cars">
                        <option value="volvo">Experience</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>
                    <select name="cars" id="cars">
                        <option value="volvo">Budget</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
            </div>

            <div className='divCardFlex'>
                <div className='cards'>
                    <div className='imageSection'><img src={imageTutor} className="cardImage" alt="" />
                        <div><h6 className='cardName'>Name</h6>
                            <h5 className='cardNameContent'>Jay Pratap</h5>
                        </div>
                    </div>
                    <div className='firstSlot'>
                        <div className='firstSlotQualification'>
                            <h5 className='firstSlotQualificationHeader'>Qualifications</h5>
                            <h6 className='firstSlotQualificationContent'>Masters in data Science</h6>
                        </div>
                        <div className='firstSlotQualification'>
                            <h5 className='firstSlotQualificationHeader'>Ex Educator</h5>
                            <h6 className='firstSlotQualificationContent'>Modern College of Arts, <br /> Science and Commerce.</h6>
                        </div>

                    </div>
                    <div className='firstSlot'>
                        <div className='firstSlotQualification'>
                            <h5 className='firstSlotQualificationHeader'>Slot Details</h5>
                            <h6 className='firstSlotQualificationContent'>Timings <span>4:00 PM</span></h6>
                        </div>
                        <div className='firstSlotQualification'>
                            <div className='fees'> <h6 className='feesContent'>Fees <span>Rs 225/ Day</span></h6>
                                <h6 className='startingFrom'>Starting From</h6>
                            </div>
                        </div>

                    </div>
                    <div className='firstSlot'>
                        <div className='firstSlotQualification'>
                            <h5 className='firstSlotQualificationHeader'>Tags</h5>
                            <h6 className='firstSlotQualificationContent'>Experties Subjects <span>Coding</span> <span>Big Data</span></h6>
                            <h6 className='firstSlotQualificationContent'>Ratings <span className='stars'><i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> </span></h6>
                            <h6 className='firstSlotQualificationContent'>Ranking of Tutors</h6>
                            <div className='range'>Your Profile Match 75%</div>

                        </div>

                    </div>
                </div>
                <div className='cards'>
                    <div className='imageSection'><img src={imageTutor} className="cardImage" alt="" />
                        <div><h6 className='cardName'>Name</h6>
                            <h5 className='cardNameContent'>Jay Pratap</h5>
                        </div>
                    </div>
                    <div className='firstSlot'>
                        <div className='firstSlotQualification'>
                            <h5 className='firstSlotQualificationHeader'>Qualifications</h5>
                            <h6 className='firstSlotQualificationContent'>Masters in data Science</h6>
                        </div>
                        <div className='firstSlotQualification'>
                            <h5 className='firstSlotQualificationHeader'>Ex Educator</h5>
                            <h6 className='firstSlotQualificationContent'>Modern College of Arts, <br /> Science and Commerce.</h6>
                        </div>

                    </div>
                    <div className='firstSlot'>
                        <div className='firstSlotQualification'>
                            <h5 className='firstSlotQualificationHeader'>Slot Details</h5>
                            <h6 className='firstSlotQualificationContent'>Timings <span>4:00 PM</span></h6>
                        </div>
                        <div className='firstSlotQualification'>
                            <div className='fees'> <h6 className='feesContent'>Fees <span>Rs 225/ Day</span></h6>
                                <h6 className='startingFrom'>Starting From</h6>
                            </div>
                        </div>

                    </div>
                    <div className='firstSlot'>
                        <div className='firstSlotQualification'>
                            <h5 className='firstSlotQualificationHeader'>Tags</h5>
                            <h6 className='firstSlotQualificationContent'>Experties Subjects <span>Coding</span> <span>Big Data</span></h6>
                            <h6 className='firstSlotQualificationContent'>Ratings <span className='stars'><i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> </span></h6>
                            <h6 className='firstSlotQualificationContent'>Ranking of Tutors</h6>
                            <div className='range'>Your Profile Match 75%</div>

                        </div>

                    </div>
                </div>
                <div className='cards'>
                    <div className='imageSection'><img src={imageTutor} className="cardImage" alt="" />
                        <div><h6 className='cardName'>Name</h6>
                            <h5 className='cardNameContent'>Jay Pratap</h5>
                        </div>
                    </div>
                    <div className='firstSlot'>
                        <div className='firstSlotQualification'>
                            <h5 className='firstSlotQualificationHeader'>Qualifications</h5>
                            <h6 className='firstSlotQualificationContent'>Masters in data Science</h6>
                        </div>
                        <div className='firstSlotQualification'>
                            <h5 className='firstSlotQualificationHeader'>Ex Educator</h5>
                            <h6 className='firstSlotQualificationContent'>Modern College of Arts, <br /> Science and Commerce.</h6>
                        </div>

                    </div>
                    <div className='firstSlot'>
                        <div className='firstSlotQualification'>
                            <h5 className='firstSlotQualificationHeader'>Slot Details</h5>
                            <h6 className='firstSlotQualificationContent'>Timings <span>4:00 PM</span></h6>
                        </div>
                        <div className='firstSlotQualification'>
                            <div className='fees'> <h6 className='feesContent'>Fees <span>Rs 225/ Day</span></h6>
                                <h6 className='startingFrom'>Starting From</h6>
                            </div>
                        </div>

                    </div>
                    <div className='firstSlot'>
                        <div className='firstSlotQualification'>
                            <h5 className='firstSlotQualificationHeader'>Tags</h5>
                            <h6 className='firstSlotQualificationContent'>Experties Subjects <span>Coding</span> <span>Big Data</span></h6>
                            <h6 className='firstSlotQualificationContent'>Ratings <span className='stars'><i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> </span></h6>
                            <h6 className='firstSlotQualificationContent'>Ranking of Tutors</h6>
                            <div className='range'>Your Profile Match 75%</div>

                        </div>

                    </div>
                </div>
            </div>
            <div className='divCardFlex'>
                <div className='cards'>
                    <div className='imageSection'><img src={imageTutor} className="cardImage" alt="" />
                        <div><h6 className='cardName'>Name</h6>
                            <h5 className='cardNameContent'>Jay Pratap</h5>
                        </div>
                    </div>
                    <div className='firstSlot'>
                        <div className='firstSlotQualification'>
                            <h5 className='firstSlotQualificationHeader'>Qualifications</h5>
                            <h6 className='firstSlotQualificationContent'>Masters in data Science</h6>
                        </div>
                        <div className='firstSlotQualification'>
                            <h5 className='firstSlotQualificationHeader'>Ex Educator</h5>
                            <h6 className='firstSlotQualificationContent'>Modern College of Arts, <br /> Science and Commerce.</h6>
                        </div>

                    </div>
                    <div className='firstSlot'>
                        <div className='firstSlotQualification'>
                            <h5 className='firstSlotQualificationHeader'>Slot Details</h5>
                            <h6 className='firstSlotQualificationContent'>Timings <span>4:00 PM</span></h6>
                        </div>
                        <div className='firstSlotQualification'>
                            <div className='fees'> <h6 className='feesContent'>Fees <span>Rs 225/ Day</span></h6>
                                <h6 className='startingFrom'>Starting From</h6>
                            </div>
                        </div>

                    </div>
                    <div className='firstSlot'>
                        <div className='firstSlotQualification'>
                            <h5 className='firstSlotQualificationHeader'>Tags</h5>
                            <h6 className='firstSlotQualificationContent'>Experties Subjects <span>Coding</span> <span>Big Data</span></h6>
                            <h6 className='firstSlotQualificationContent'>Ratings <span className='stars'><i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> </span></h6>
                            <h6 className='firstSlotQualificationContent'>Ranking of Tutors</h6>
                            <div className='range'>Your Profile Match 75%</div>

                        </div>

                    </div>
                </div>
                <div className='cards'>
                    <div className='imageSection'><img src={imageTutor} className="cardImage" alt="" />
                        <div><h6 className='cardName'>Name</h6>
                            <h5 className='cardNameContent'>Jay Pratap</h5>
                        </div>
                    </div>
                    <div className='firstSlot'>
                        <div className='firstSlotQualification'>
                            <h5 className='firstSlotQualificationHeader'>Qualifications</h5>
                            <h6 className='firstSlotQualificationContent'>Masters in data Science</h6>
                        </div>
                        <div className='firstSlotQualification'>
                            <h5 className='firstSlotQualificationHeader'>Ex Educator</h5>
                            <h6 className='firstSlotQualificationContent'>Modern College of Arts, <br /> Science and Commerce.</h6>
                        </div>

                    </div>
                    <div className='firstSlot'>
                        <div className='firstSlotQualification'>
                            <h5 className='firstSlotQualificationHeader'>Slot Details</h5>
                            <h6 className='firstSlotQualificationContent'>Timings <span>4:00 PM</span></h6>
                        </div>
                        <div className='firstSlotQualification'>
                            <div className='fees'> <h6 className='feesContent'>Fees <span>Rs 225/ Day</span></h6>
                                <h6 className='startingFrom'>Starting From</h6>
                            </div>
                        </div>

                    </div>
                    <div className='firstSlot'>
                        <div className='firstSlotQualification'>
                            <h5 className='firstSlotQualificationHeader'>Tags</h5>
                            <h6 className='firstSlotQualificationContent'>Experties Subjects <span>Coding</span> <span>Big Data</span></h6>
                            <h6 className='firstSlotQualificationContent'>Ratings <span className='stars'><i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> </span></h6>
                            <h6 className='firstSlotQualificationContent'>Ranking of Tutors</h6>
                            <div className='range'>Your Profile Match 75%</div>

                        </div>

                    </div>
                </div>
                <div className='cards'>
                    <div className='imageSection'><img src={imageTutor} className="cardImage" alt="" />
                        <div><h6 className='cardName'>Name</h6>
                            <h5 className='cardNameContent'>Jay Pratap</h5>
                        </div>
                    </div>
                    <div className='firstSlot'>
                        <div className='firstSlotQualification'>
                            <h5 className='firstSlotQualificationHeader'>Qualifications</h5>
                            <h6 className='firstSlotQualificationContent'>Masters in data Science</h6>
                        </div>
                        <div className='firstSlotQualification'>
                            <h5 className='firstSlotQualificationHeader'>Ex Educator</h5>
                            <h6 className='firstSlotQualificationContent'>Modern College of Arts, <br /> Science and Commerce.</h6>
                        </div>

                    </div>
                    <div className='firstSlot'>
                        <div className='firstSlotQualification'>
                            <h5 className='firstSlotQualificationHeader'>Slot Details</h5>
                            <h6 className='firstSlotQualificationContent'>Timings <span>4:00 PM</span></h6>
                        </div>
                        <div className='firstSlotQualification'>
                            <div className='fees'> <h6 className='feesContent'>Fees <span>Rs 225/ Day</span></h6>
                                <h6 className='startingFrom'>Starting From</h6>
                            </div>
                        </div>

                    </div>
                    <div className='firstSlot'>
                        <div className='firstSlotQualification'>
                            <h5 className='firstSlotQualificationHeader'>Tags</h5>
                            <h6 className='firstSlotQualificationContent'>Experties Subjects <span>Coding</span> <span>Big Data</span></h6>
                            <h6 className='firstSlotQualificationContent'>Ratings <span className='stars'><i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> </span></h6>
                            <h6 className='firstSlotQualificationContent'>Ranking of Tutors</h6>
                            <div className='range'>Your Profile Match 75%</div>

                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default ReFindTutor