import React,{useContext} from "react";
import formContext from "../context/form/formContext"; //Context

const ClassMode = () => {
  const { formData, setFormData } = useContext(formContext);

  return (
    <form  onSubmit={
        (e) => {
          e.preventDefault();
          // validate form
          setFormData({ ...formData, step: ++formData.step });
          console.log(formData)
        }
      }>
      <div className="input__wrapper">
      <h4 className="tutorVerification__stepHeadings">Mode of classes</h4>
      <div className="classMode__container">
      <div className="classModeWrapper">
      <label htmlFor="online">
        Online
        </label>
        <input
          type="radio"
          id="online"
          name="preference"
          onClick={() => {
            setFormData({...formData,TutorMode:"online"})
          }}
        />
        </div>
      
        <div className="classModeWrapper">
      
      <label htmlFor="offline">
        Offline
        </label>
        <input
          type="radio"
          id="offline"
          name="preference"
          onClick={() => {
            setFormData({...formData,TutorMode:"offline"})
          }}
        />
        </div>
        </div>
        </div>
      {/* <button className="tutorVerification__btn" type="submit">Continue</button> */}
    </form>
  );
};

export default ClassMode;
