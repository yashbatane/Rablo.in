import React, { useState } from "react";
import FormDataContext from "./formDataContext";

const FormDataState=(props)=>{
    const [count,setCount]=useState(1)
    const [display,setDisplay]=useState(false)
    const [isEmpty,setIsempty]=useState()
    const [show,setShow]=useState(false)
    const [id,setId]=useState()
    const [styles,setStyles]=useState({name:'',backgroundColor:'',color:''})
  const handleClickSpan=(e)=>{
    e.preventDefault();
    setShow(!show)
    console.log(show);
  }
    const [formData,setFormData]=useState({
        fname:'',
        lname:'',
        preferredclass:'',
        mobile:'',
        expertise:'',
        email:'',
        gender:'',
        preferredmode:'',
        city:'',
        country:'',
        zipcode:'',
        state:'',
        queries:'',
        understanding:[],
        challenges:[]
    });

    const handelPrevClick=()=>{
        setCount(count-1)
    }
    const handelNextClick=(e)=>{
        e.preventDefault();
            if(count===2){
                if(
                formData.understanding.length===0||
                formData.challenges.length===0){
                   setCount(count)
                   setIsempty(true)
                }else{
                    setIsempty(false)
                    setDisplay(true)
                }
            }
            else if(count===1){
                if(formData.fname===''||
                formData.lname===''||
                formData.preferredclass===''||
                formData.mobile===''||
                formData.expertise===''||
                formData.email===''||
                formData.gender===''||
                formData.preferredmode===''||
                formData.city===''||
                formData.country===''||
                formData.state===''||
                formData.zipcode===''){
                   setCount(count)
                   setIsempty(true)
                }else{
                    setIsempty(false)
                    setCount(count+1)
                }
            }
            
    }
    
    const handleChange = e => {
        const {name,value}=e.target;
        setFormData(prev=>({ 
            ...prev, [name]:value 
            })); 
        console.log(formData);
      };
      console.log(formData.challenges.length);
    const handleSpanChange = e => {
        const {name,value,checked,id}=e.target

        setId(id)

        if(name==='challenges'){

            formData.challenges=formData.challenges.filter(a=>a!==value)
            setFormData(prev=>({ 
                ...prev,
                 challenges:[
                    ...prev.challenges,value
                 ] 
                }));
        }else{
        if(checked){
            setFormData(prev=>({ 
                ...prev,
                 [name]:[
                    ...prev.understanding,value
                 ] 
                }));
            
            setStyles({
                backgroundColor:'#409EFF',
                color:'white'
            })
        }else{
            formData.understanding=formData.understanding.filter(a=>a!==value)
            setStyles({
                backgroundColor:'',
                color:''
            })
        }}
        console.log(formData);
        console.log(e.target.checked);
      };
    
    return(
        <FormDataContext.Provider  value={{formData,handleChange,handelPrevClick,handelNextClick,count,isEmpty,display,handleSpanChange,handleClickSpan,show,styles,id}}>
            {props.children}
        </FormDataContext.Provider>
    )
}

export default FormDataState;