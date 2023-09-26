import React from 'react'
import daogate from './Image/dogate.png'
import './NotFoundPage.css'
const Notfoundpage = () => {
  return (
    <div className="NotFoundPageMainContainer">
        <div className="NotFoundPageImage">
            <img src={daogate} alt="" />
        </div>
        <div className="ErrorPageContent">
            <h1>A Dog ate this page </h1>
            <p>
            Your dog is cute but honestly a menace. Where are my shoes? Where is my graduation certificate? Where is the chocolate cake I baked for my Aunt’s birthday? And why did you take your dog to the vet on that same Thursday?!
            </p>
        </div>
    </div>
  )
}

export default Notfoundpage