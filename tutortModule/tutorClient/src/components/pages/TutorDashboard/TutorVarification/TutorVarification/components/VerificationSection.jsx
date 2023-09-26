import React from "react";
import { BsFillPersonVcardFill } from "react-icons/bs";

const VerificationSection = () => {
  return (
    <div className="form">
      <div className="card-section">
        <div className="card">
          <div className="icon-text-wrapper">
            <BsFillPersonVcardFill className="card-icon" />
            Aadhar Card
          </div>
        </div>
        <div className="card">
          <div className="icon-text-wrapper">
            <BsFillPersonVcardFill className="card-icon" />
            Driving License
          </div>
        </div>
      </div>

      <div className="real-time-photo-section">
        <label>Upload Real-Time Photo</label>
        <div className="file-upload-section">
          <input type="file" id="upload-marksheet" />
          <div className="file-upload-wrapper">
            <div className="camera-browse-wrapper">
              <label className="file-upload-btn">Open a camera</label>
              <label className="browse" htmlFor="upload-marksheet">
                Or Browse
              </label>
            </div>
            <div>Or</div>
            <div>Drop Here</div>
          </div>
        </div>
      </div>

      <div className="driving-license-section">
        <label>Driving License</label>
        <div className="input-wrapper">
          <p>
            Enter Your Complete Driving License number of the Registered Person
            Only
          </p>
          <input type="text" placeholder="DL-01-20201234567" />
        </div>
      </div>

      <div className="upload-photo-section">
        <div className="file-upload-section">
          <input type="file" id="upload-photo" />
          <div className="file-upload-wrapper">
            <label className="file-upload-btn" htmlFor="upload-photo">
              Upload Front Side Only
            </label>
            <div>Or</div>
            <div>Drop Here</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationSection;
