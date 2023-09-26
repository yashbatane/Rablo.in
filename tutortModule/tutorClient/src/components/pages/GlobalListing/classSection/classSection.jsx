import React from 'react'
import tick from "./../resources/tick.png"
import "./classSection.css"
import teacher from "./../resources/teacher.jpg"
import bilingual from "./../resources/bilingual.png"
const classArray=[
  {
    image:"",
    classLanguage:"Bilinguale",
    subject:"Physics",
    topic:"CH-1 | Force & pressure | Class 8",
teacherName:"Rituparna Mondal",
views:102
  },
  {
    image:"",
    classLanguage:"Bilinguale",
    subject:"Physics",
    topic:"CH-1 | Force & pressure | Class 8",
teacherName:"Rituparna Mondal"
,views:102
  },
  {
    image:"",
    classLanguage:"Bilinguale",
    subject:"Physics",
    topic:"CH-1 | Force & pressure | Class 8",
  teacherName:"Rituparna Mondal"
  ,views:102
  }
]


export default function classSection() {
  return (
    <div className='classSectionContainer'>
        <h1 className='heading'>Watch free online classes</h1>
        <div className='qualityChecks'>
        <p  className='tickText' > <img src={tick} />Chat live with educators</p>
        <p  className='tickText'><img src={tick} />Get your doubts cleared</p>
        </div>
        
        <div className='classCardsContainer'>
        {classArray.map(element=>(
          <div className='singleClassCardContainer'>

          <div className='classCardImgContainer'><img src={teacher} /></div>

         <div className='classCardInfoContainer'>
          <div className="classLanguage"><img src={bilingual} />{element.classLanguage}</div>
          <div className='classSubject'>{element.subject}</div>
          <div className='topic'>{element.topic}</div>
          <div className='teacherName'>{element.teacherName}</div>
          <div className='classViews'>{element.views} students watched</div>
         </div>
        </div>
        ))}
        </div>
        </div>
  )
}
