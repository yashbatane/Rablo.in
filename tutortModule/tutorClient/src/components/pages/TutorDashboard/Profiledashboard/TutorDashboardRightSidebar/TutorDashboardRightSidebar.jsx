import React from 'react'
import './TutorDashboardRightSidebar.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import img from '../SeaLighthouse/SeaLighthouse-day/SeaLighthouse-day.png'
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';

const RightProfile = ({anim,minwidth}) => {
  return (
    <div className='rightProfileContainer' style={{minWidth:minwidth?'0px':'296px'}}>
      <div className="rightProfileWrapper" style={{right:anim?'-296px':'0px'}}>
        <div className="rightProfileFirstChild">
          <div className="arrow1"><ArrowBackIosIcon className="arrow"/></div>
          <div className="warning1"><WarningRoundedIcon className="warning"/></div>
        </div>
        <div className="rightProfileSecondChild">
          <div className="frist">
            <div className="fristImage">
              <img src={img} alt="" />
            </div>
            <h5>Md Danish</h5>
            <p>Sitamarhi,Bihar</p>
          </div>
          <div className="second">
            <a href="/">
              <div className="anchorContent">
                <p>Compelete Your Profile</p>
                <span><ArrowBackIosIcon className="arrow"/></span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightProfile