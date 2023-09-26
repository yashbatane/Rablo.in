import React from 'react'
import './GetStarted.css'
export default function GetStarted() {
  return (
    <>
        <div className='video_container'>
            <p> JOIN US NOW! </p>
            <div className="getStarted__headWrap"><hr /><h1> Get Started Free </h1><hr /></div>
            <p className='ab_platform'> We are ready to teach Platform to help private educators and small & midsize tuition <br /> businesses grow their businesses, run their classes, and establish credibility in the market</p>
            <iframe className= 'yt_video' width="500" height="275" src="https://www.youtube.com/embed/9UtaHE7COZQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      
        </div>
        </>
  )
}
