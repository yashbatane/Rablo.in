import React from 'react'
import tick from "./../resources/tick.png"
import teacher from "./../resources/teacher.jpg"
import "./topTutors.css"
import bilingual from "./../resources/bilingual.png"
import english from "./../resources/english.png"
import star from "./../resources/star.jpg"
import thunder from "./../resources/thunder.png"
const topTutorArray=[
    {
        type:"PREMIUM",
        teacherName:"YASH SHARMA",
        language:"bilinguale",
        teacherLocation:"kolkata",
        ExEducator:"vedantu",

        expertise:"physics",
        mode:"ONLINE OFFLINE"
    },
    {
        type:"PREMIUM",
        teacherName:"YASH SHARMA",
        teacherLocation:"kolkata",
        ExEducator:"vedantu",
        language:"english",
        expertise:"physics",
        mode:"ONLINE OFFLINE"
    },
    {
        type:"PREMIUM",
        teacherName:"YASH SHARMA",
        language:"bilinguale",
        teacherLocation:"kolkata",
        ExEducator:"vedantu",
        expertise:"physics",
        mode:"ONLINE OFFLINE"
    },
    {
        type:"PREMIUM",
        teacherName:"YASH SHARMA",
        language:"english",
        teacherLocation:"kolkata",
        ExEducator:"vedantu",
        expertise:"physics",
        mode:"ONLINE OFFLINE"
    }
]




export default function topTutors() {
  return (
    <div className='topTutorsContainer'>
        <h1 className='heading'>Our top Tutors</h1>
        <div className='topTutorsChecks'>
        <p  className='tickText'><img src={tick} />History of delivering quality education</p>
        <p  className='tickText'><img src={tick} />Mentored past rankers</p>
        <p  className='tickText'><img src={tick} />Highly Qualified</p>
        </div>
        <div className='topTutorsCardsContainer'>
        {topTutorArray.map(element=>(
            <div className='singleCard'>
                <div className='singleCardLeft'>
                    <img src={teacher} />
                    <div className='teacherType'><img src={thunder} /><span>{element.type}</span></div>
                </div>

                <div className='singleCardRight'>
                 
                 <div className='teacherName'> <b> {element.teacherName} </b> {element.language==="bilinguale" ? (<img src={bilingual} />) : (<img src={english} />)}</div>

                 <div className='teacherLocation'> {element.teacherLocation}</div>
                 <div className='Exteacher'><span className='topTutorCategory'>Ex Educator:  </span> {element.ExEducator}</div>
                 <div> <span className='topTutorCategory'>Expertise:  </span> <span className='expertise'>{element.expertise}</span></div>
                 <div> <span className='topTutorCategory'>Mode:  </span>{element.mode}</div>
                 <button className='viewprofile'> <span>view profile  &gt; </span> <img src={star} /> </button>
                  </div>
                  </div>
                  
        ))}
        </div>
        <button className='viewAllTutors'>View All Tutors</button>
    </div>
  )
}
