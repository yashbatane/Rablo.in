import { setRef } from "@mui/material";
import React, { useState } from "react";
import FormDataContext from "./formDataContext";

const FormDataState=(props)=>{
    const [formData,setFormData]=useState({});

    return(
        <FormDataContext.Provider  value={{formData,setFormData}}>
            {props.children}
        </FormDataContext.Provider>
    )
}

export default FormDataState;