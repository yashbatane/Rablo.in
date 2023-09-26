import React, { createContext, useState } from 'react'
import TutorRegistrationMultistep from './TutorRegistrationMultistep'


export const multiStepContext = createContext(multiStepContext)

export default function MultistepContext() {
    const [step , setStep] = useState(0)
    const [formValues , setFormValues] = useState({gender:""})
    const sidebarTitles = ["Login" , "Basic Details"]
    const [googleJWT , setGoogleJWT] = useState("")
    const [userId , setUserId] = useState("")

    return (
        <multiStepContext.Provider
            value = {{
                step , 
                setStep,
                formValues ,
                setFormValues ,
                sidebarTitles ,
                googleJWT,
                setGoogleJWT ,
                userId , 
                setUserId ,
            }}
        >
            <TutorRegistrationMultistep/>
        </multiStepContext.Provider>
    )

}
 