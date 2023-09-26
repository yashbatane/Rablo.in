import React from 'react'
import logo1 from "../../../GlobalComponents/Image/logo1.png"
import './globalListingNav.css'

export default function globalListingNav() {
  return (
    <div className='globalListingNavContainer'>
     <div className='logo'>
      <img src={logo1}></img>
     </div>
     <div className='login'>
    <p>Log In</p>
     </div>
    </div>
  )
}
