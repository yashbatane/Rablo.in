import React, {useState, useContext} from 'react'
import formContext from "../context/form/formContext"; //Context
import { CloudUploadOutlined } from '@material-ui/icons';

const Acknowledgement = () => {
    const { formData, setFormData } = useContext(formContext);
    const uploadFile = (e) =>{
        setFormData({ ...formData, signature: e.target.files[0] });
    }
  return (
    <form style={{maxWidth:'1200px',margin:'auto'}} onSubmit={
        (e) => {
          e.preventDefault();
          // validate form
          setFormData({ ...formData, step: ++formData.step });
          console.log(formData)
        }
      }>
<p>

Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores quasi porro ab? Labore molestiae, soluta totam, suscipit id accusamus eos omnis sunt ratione minus pariatur. Labore voluptatibus nam incidunt similique!
</p>
<div className="input__wrapper sameAddressInput__wrapper">
          <label htmlFor="acceptTerms">
            <span className="sameAddressInput__heading">
            I accept all terms and conditions.
              </span>
          </label>
            <input
              type="checkbox"
              id="acceptTerms"
              
              onClick={(e) => {
              
                setFormData({ ...formData, termsAccepted:e.target.checked});
              }}
            />
          
        </div>


      <div className="input__wrapper">
        <label htmlFor='upload' className='addressProof__upload'>
          Signature
          </label>
          <label>
          <span className='tutorVerification__btn'><CloudUploadOutlined/></span> &nbsp; {formData.idProof?.name || 'No file Uploaded'} 
        </label>

          <input
            type="file"
            id="upload"
            onChange={uploadFile}
            />
      </div>
      {/* <button type="submit">Continue</button> */}
    </form>
  )
}

export default Acknowledgement