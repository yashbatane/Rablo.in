import React, { useState } from "react";
import FormContext from "./formContext";

const FormState = (props) => {
const [formData, setFormData]= useState({step:1,isAddressSame:true});
    return (
        <FormContext.Provider value={{formData,setFormData}}>
            {props.children}
        </FormContext.Provider>
    )
}

export default FormState ;