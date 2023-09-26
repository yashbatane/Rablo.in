import React from 'react'
import happyStudents from "../../resources/happy-students.jpg"
import books from "../../resources/books.jpg"
import interaction from "../../resources/interaction.png"
import "./infoCards.css"


const cardsArray=[
    {
        id:1,
        src:{books},
        heading:"Finest tutors available",
        info:"Learn with the best tutors, and get their assistance"
    },
    {
        id:2,
        src:{books},
        heading:"Full syllabus coverage",
        info:"Cover your entire syllabus from all your class subjects, according to your board"
    },
    {
        id:3,
        src:{books},
        heading:"Interactive learning experience",
        info:"Live classes, practice questions, mock tests, doubt solving and much more"
    }
]


export default function cards() {
  return (
    <>
    <div className='cardsContainer'>
      {cardsArray.map((element,i)=>
        (<div className='card' key={element.id}>
          <img src={cardsArray[i].src} />
          <span className='cardHeading'>{element.heading}</span><br />
          <span className='cardInfo'>{element.info}</span>
        </div>)
      )}
    </div>

          <div className='buttons'>
        <button className='btn1'>View subscription plans </button>
        <button className='btn2'>Try our free demo</button>
      </div>
      </>
  )
}
