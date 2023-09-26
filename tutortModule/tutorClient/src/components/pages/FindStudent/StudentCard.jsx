import React from 'react'
import "./SearchStudent.css"
import axios from 'axios'

export default function TutorCard({student}) {

  const handleRequestSend = () => {
    const demoTutorId = '6377318c0da6441177f574be'
    const demoTutorName = 'demoname'
    axios.post(`http://localhost:5003/api/requests/sendrequest/${student.userId}` ,
      {
        tutorId: demoTutorId,
        name:demoTutorName, 
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
    <h4>{student.studentName}</h4>
    <h4>{student.class}</h4>

    <i className="fa-solid fa-star"></i>
    <i className="fa-solid fa-star"></i>
    <i className="fa-solid fa-star"></i>
    <i className="fa-solid fa-star"></i>
    <i className="fa-solid fa-star"></i>
    <h4>{student.modeOfClass}</h4>
    <h4>{student.schoolBoard}</h4> 
    <i className="fa-brands fa-google"></i>
    <i className="fa-solid fa-video"></i>
    <i className="fa-solid fa-user-plus"></i>

    <button onClick={handleRequestSend}>Send Request</button>
    </div>
  )
}
