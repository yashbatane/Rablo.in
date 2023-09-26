import React, { useContext, useState } from "react";

import "./TutorVarification.css";
import uploadimg from "./Images/social/uploadphoto.png";

import { useDropzone } from "react-dropzone";
import "./ImageUpload.css";
// import uploadimg from './Image/uploadphoto.png'


const ImageUpload = ({ props }) => {
  const [imgPreview, setImgPreview] = useState(null);
  const [error, setError] = useState(false);

  // console.log(props);
  const handleImageChange = (e) => {
    setError(false);
    const selected = e.target.files[0];
    console.log(selected.type);
    const ALLOWED_TYPES = [
      "image/png",
      "image/jpeg",
      "image/jpg",
      "application/pdf",
    ];
    if (selected && ALLOWED_TYPES.includes(selected.type)) {
      let reader = new FileReader();
      reader.onloadend = () => {
        setImgPreview(reader.result);
      };
      reader.readAsDataURL(selected);
    } else {
      setError(true);
      console.log(setError);
    }
  };
  return (
    <>
      <div htmlFor="fileUpload">
        {/* <div
            className="TutorRegistrationFormUploadImage"
            style={{
              background: imgPreview
                ? `url("${imgPreview}") no-repeat center/contain`
                : "#e7e7e7",
            }}
          > */}

        <div className="RegistrationFormUploadImagecontainer">
          <div>
            {!imgPreview && (
              <div className="imgPreview">
                <label htmlFor="fileUpload" className="customFileUpload">
                  <img src={uploadimg} alt="" style={{ width: "35px" }} />
                  <p id="uploaDoc">Upload document</p>
                </label>

                <input
                  type="file"
                  id="fileUpload"
                  name="profileimage"
                  onChange={handleImageChange}
                  style={{ display: "none" }}
                />
                <div style={{ fontSize: "14px" }}>
                  following formats: jpg, jpeg, png or pdf
                </div>
              </div>
            )}
            {imgPreview && (
              <div className="imgPreview">
                <label className="customFileUpload">
                  {/* <img src={uploadimg} alt="" /> */}
                  <p>Uploaded</p>
                </label>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="RegistrationFormUploadImagecontainerbutton">
        {imgPreview && (
          <button onClick={() => setImgPreview(null)}>Remove document</button>
        )}
        {error && <p className="errorMsg">File not supported</p>}
      </div>
    </>
  )
  const onDrop = (acceptedFiles) => {
    setError(false);

    const file = acceptedFiles[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImgPreview(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  // console.log(props);
  const handleDragEnter = (e) => {
    e.preventDefault();
    setDragging(true);
  };
  
  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragging(false);
  };
  
  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    handleImageChange(e);
  };
   handleImageChange = (e) => {
    setError(false);
    const selected = e.target.files[0];
    console.log(selected.type);
    const ALLOWED_TYPES = [
      "image/png",
      "image/jpeg",
      "image/jpg",
    ];
    if (selected && ALLOWED_TYPES.includes(selected.type)) {
      let reader = new FileReader();
      reader.onloadend = () => {
        setImgPreview(reader.result);
      };
      reader.readAsDataURL(selected);
    } else {
      setError(true);
      console.log(setError);
    }
  };
  return (
    <div className="drops" {...getRootProps()}>
      <input {...getInputProps()} />

      <div className="RegistrationFormUploadImagecontainer">
        <div>
          {!imgPreview && (
            <div className="imgPreview" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <label htmlFor="fileUpload" className="customFileUpload">
                <p className="uploaDoc">Upload Photo</p>
              </label>
              <div className="dropHere" style={{ fontSize: "14px" }}>
                Or
              </div>
              <div className="dropHere1" style={{ fontSize: "14px" }}>
                Drop Here
              </div>
            </div>
          )}
          {imgPreview && (
            <div className="imgPreview" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <label className="customFileUpload">
                <p  style={{ marginTop:"80%" }}>Uploaded</p>
              </label>
            </div>
          )}
        </div>
      </div>

      <div className="RegistrationFormUploadImagecontainerbutton">
        {/* {imgPreview && (
          <button onClick={() => setImgPreview(null)} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>Remove document</button>
        )} */}
        {error && <p className="errorMsg">File not supported</p>}
      </div>
    </div>

  );
};

export default ImageUpload;
