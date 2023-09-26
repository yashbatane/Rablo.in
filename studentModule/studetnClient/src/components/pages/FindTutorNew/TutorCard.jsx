import React from 'react'
import "./SearchAndLocateOffline.css"
import axios from 'axios'

export default function TutorCard({tutor}) {
  const demoStudentId = "63776eee5a101ea25f2fdf4a"
  const demoStudentName = "Demo_Name"
  const handleRequestSend = () => {
    axios.post(`http://localhost:5002/api/requests/sendrequest/${tutor.userId}` ,
    {
      studentId : demoStudentId ,
      name : demoStudentName
    }
    )
    .then(function(response){
      console.log(response)
    })
    .catch(function(error){
      console.log(error)
    })
  }

  return (
    <div className="ProgressRegistrationBarCard">
    <div className="profileImag">
      {/* <img src={profilepic} alt="" /> */}
    </div>
    <h4>{`${tutor.tutorBasic.firstName}` + ' ' + `${tutor.tutorBasic.lastName}`}</h4>
    <h4>{tutor.tutorBasic.gender}</h4>

    <i className="fa-solid fa-star"></i>
    <i className="fa-solid fa-star"></i>
    <i className="fa-solid fa-star"></i>
    <i className="fa-solid fa-star"></i>
    <i className="fa-solid fa-star"></i>
    <h4>{tutor.tutorBasic.ageGroup}</h4>
    {/* <h4>{tutor.qualification}</h4>  */}
    <i className="fa-brands fa-google"></i>
    <i className="fa-solid fa-video"></i>
    <i className="fa-solid fa-user-plus"></i>

    <button onClick={handleRequestSend}>Send Request</button>
    </div>
  )
}
