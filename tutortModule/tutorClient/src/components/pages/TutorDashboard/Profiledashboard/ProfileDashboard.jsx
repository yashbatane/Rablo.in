import React, { useState } from 'react'
import TutorDashboardRightSidebar from './TutorDashboardRightSidebar/TutorDashboardRightSidebar'
import TutorDashboardProfileContent from './TutorDashboardProfileContent/TutorDashboardProfileContent'
import TutorDashboardSidebar from './TutorDashboardSidebar/TutorDashboardSidebar'
import AddStudents from '../AddStudents/AddStudents'
import './ProfileDashboard.css'

const ProfileDashboard = () => {
  const [minwidth,setMinWidth]=useState(false)
  const [anim,setAnim]=useState(false)

  const handleClick=(e)=>{
    e.preventDefault()
    setAnim(!anim)
    setMinWidth(!minwidth)
  }
  return (
    <div className='ProfileDashboardContainer'>
     
        {/* <TutorDashboardSidebar minwidth={minwidth} anim={anim} handleClick={handleClick}/> */}
        {/* <TutorDashboardProfileContent minwidth={minwidth}/> */}
       
        {/* <TutorDashboardSidebar minwidth={minwidth} anim={anim} handleClick={handleClick}/>  */}
        
        <TutorDashboardProfileContent minwidth={minwidth}/>
       
        <TutorDashboardRightSidebar anim={anim} minwidth={minwidth}/> 
    </div>
  )
}

export default ProfileDashboard