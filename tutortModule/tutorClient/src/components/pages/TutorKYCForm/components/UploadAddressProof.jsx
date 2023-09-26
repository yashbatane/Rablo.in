import { CloudUploadOutlined } from '@material-ui/icons';
import React, {useState, useContext} from 'react'
import formContext from "../context/form/formContext"; //Context


const UploadAddressProof = () => {
  const { formData, setFormData } = useContext(formContext);

const uploadFile = (e) =>{
    setFormData({ ...formData, idProof: e.target.files[0] });
}
const uploadFileExtra = (e) =>{
    setFormData({ ...formData, idProofExtra: e.target.files[0] });
}
  return (
    <form onSubmit={
      (e) => {
        e.preventDefault();
        // validate form
        setFormData({ ...formData, step: ++formData.step });
        console.log(formData)
      }
    }>
      <div className="input__wrapper">
        <label htmlFor='idType'>
          Select type of Id proof you have
          </label>
          <select
            id="idType"
            value={formData?.idType||''}
            onChange={(e) => {
              setFormData({ ...formData, idType: e.target.value });
            }}
          >
            <option value={0}>Select</option>
            <option value="UID">Aadhar Card</option>
            <option value="DL">Driving Lincence</option>
          </select>
        
      </div>
      <div className="input__wrapper">
        <label htmlFor="upload">
          Upload an Jpeg image of the proof 
        </label>
        <label  className='addressProof__upload' htmlFor='upload'>
        <span className='tutorVerification__btn'><CloudUploadOutlined/></span> &nbsp; {formData.idProof?.name || 'No file Uploaded'} 
        </label>

        <input type="file" id="upload" name="file" onChange={uploadFile} accept="image/png, image/jpg, image/gif, image/jpeg"/>
        </div>


      { formData?.isAddressSame && <div className="input__wrapper">
        <label htmlFor="uploadExtra">
          Upload Extra document that contains ypur name along with owner of house 
          <br/>
          (Rent Agreement, Electricity bill etc)
          
        </label>
        <label  className='addressProof__upload' htmlFor='uploadExtra'>
        <span className='tutorVerification__btn'><CloudUploadOutlined/></span> &nbsp; {formData.idProofExtra?.name || 'No file Uploaded'} 
        </label>

        <input type="file" id="uploadExtra" name="file" onChange={uploadFileExtra} accept="image/png, image/jpg, image/gif, image/jpeg"/>
        </div>}
        {/* <button className='tutorVerification__btn' type="submit">Continue</button> */}
    </form>
  )
}

export default UploadAddressProof