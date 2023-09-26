import React, { useContext , useState} from "react";
import './TutorVarification.css'
import uploadimg from './Image/uploadphoto.png'

const ImageUpload = ({props}) => {
    const [imgPreview, setImgPreview] = useState(null);
    const [error, setError] = useState(false);
   // console.log(props);
    const handleImageChange = (e) => {
      setError(false);
      const selected = e.target.files[0];
      const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg"];
      if (selected && ALLOWED_TYPES.includes(selected.type)) {
        let reader = new FileReader();
        reader.onloadend = () => {
          setImgPreview(reader.result);
        };
        reader.readAsDataURL(selected);
      } else {
        setError(true);
        console.log(setError)
      }
    };
    return (
      <>
        <label htmlFor="fileUpload">
          <div
            className="TutorRegistrationFormUploadImage"
            style={{
              background: imgPreview
                ? `url("${imgPreview}") no-repeat center/contain`
                : "#e7e7e7",
            }}
          >
            <div className="RegistrationFormUploadImagecontainer">
             
              <div className="imgPreview">
                {!imgPreview && (
                  <div>
                    <p>Add an image</p>
                    <label htmlFor="fileUpload" className="customFileUpload">
                      <img src={uploadimg} alt="" />
                    </label>
                    <input
                      type="file"
                      id="fileUpload"
                      // required
                      name="profileimage"
                      //value={props.profileimage}
                      onChange={handleImageChange}
                    />
                    <br />
                    <span>(jpg, jpeg or png)</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </label>
        <div className="RegistrationFormUploadImagecontainerbutton">
          {imgPreview && (
            <button onClick={() => setImgPreview(null)}>Remove image</button>
          )}
          {error && <p className="errorMsg">File not supported</p>}
        </div>
      </>
    );
  };

export default ImageUpload