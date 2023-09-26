import { CloseRounded, MenuRounded } from '@mui/icons-material'
import React, { useState } from 'react'
import logo from './logo1.png'
import './MobileNavbar.css'
const NavbarMobile = () => {
    const [change,setChange]=useState(false)
  return (
    <div className="navMobileContainer">
        <div className="navMobileWrapper">
          <div className="navMobileWrapperLogo">
            <img src={logo} alt="" className='navMobileWrapperLogoImg' />
          </div>
            {change?<CloseRounded className="navMobileWrapperHamberger" onClick={()=>{setChange(!change)}}/>:<MenuRounded className="navMobileWrapperHamberger" onClick={()=>{setChange(!change)}}/>}  
        </div>
        <div className="navMobileWrapperContainer" style={{display:change?'':'none'}}>
            <div className="nmwcLink">
            <a href="/LandingPage">Pricing</a>
            <a href="/LandingPage/AboutUs">Support</a>
            <a href="/">About us</a>
            </div>
            <div className="nmwcButton">
                <button><a href="/LandingPage/BecomeOurTutor"> For Student</a></button>
            </div>
        </div>
      </div>
  )
}

export default NavbarMobile