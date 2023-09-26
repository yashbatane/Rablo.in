const axios = require('axios').default;
import React from 'react'
import { useState } from 'react'

export default function PhoneVerificationModal({setOtpVerificationModalOpen,setOtpVerify}) {
    const [otp , setOtp] = useState()
    const handleSubmitClick = () => {
        setOtpVerificationModalOpen(false)
        setOtpVerify(true)
        console.log('here');
        
        axios.post("http://localhost:6500/api/phoneAuthentication/verify" , {otp})
        .then(function(response){
          console.log(response)
        })
        .catch(function(error){
          console.log(error)
        })
    }
  return (
    <div className='msf-modal-main'>
        <div className='msf-modal-container'>
        <div className="modal__container">
            <div className="OtpText">
                <h4>Please enter the One-Time Password to verify your account</h4>
                <p>A One-Time Password has been sent to *******595</p>

                <div className="OtpInput">
                <input name="OtpInput"  placeholder='xxxxxx'  max={999999} className="OtpModalInput"/>
                </div>
                
                
                <button className='ButtonBefore' type="button" onClick={handleSubmitClick}>
					Validate OTP
				</button>
                <button onClick={()=>{}} className="ButtonBefore" >Resend OTP</button>
              
				
				
				</div>
			</div>
        </div>
    </div>
  )
}
