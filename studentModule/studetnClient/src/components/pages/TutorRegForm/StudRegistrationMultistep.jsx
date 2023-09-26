import React,{ useContext } from 'react'

import { useState } from 'react'
import FirstStep from './steps/FirstStep'
import SecondStep from './steps/SecondStep'
import './style.scss'

/* import  {multiStepContext}  from './MultistepContext' */

export default function StudRegistrationMultistep() {
  /* const {sidebarTitles , step} = useContext(multiStepContext) */
  const [step , setStep] = useState(0)
  
  const sidebarTitles = ["Login" , "Basic Details"]
  const displayStep = () => {
    if(step === 0) return <FirstStep setStep={setStep} />
    else if(step === 1) return <SecondStep/>
  }

  return (
      <div style={{display : "flex" , justifyContent:"center" , alignItems:"center"  }} >
        <div className='msf-main-container'>
          <div className='msf-sidebar '>
          <div className="msf-sidebar-logo">Rablo.In</div>
            <div className={`msf-sidebar-content ${step===1 && 'lineUp'}`}>
              {step===0 ?<>
                <h5>Start your journey with us 
                <p>Discover the best community of tutor and students</p>
                </h5>
                
              </>:<>
                <h5>Tutor Basic details
                <p>Lorem ipsum dolor sit amet consecte</p>
                </h5>
                
              </>}
            </div>
            
            {sidebarTitles.map((t , ind)=>{
                  return (
                    <div className={`msf-sidebar-title ${ind===step && 'msf-sidebar-title-selected lineUp'}`} key = {ind} > {t} </div>
                  )
              })}
            
              
            <div className={`msf-reward ${step===1 && 'lineUp'}`}>
              Rewards-007            
              </div> 

              <div className="msf-pageDotSec">
              <div className={`${step===0 && 'msf-pageDot0'}`}>.</div> 
              <div className={`${step===1 && 'msf-pageDot1'}`}>.</div> 
              </div>
              

          </div>
          <div className='msf-form lineUp'>
              {displayStep()}
          </div>
        </div>
      
      </div>
  )
}
