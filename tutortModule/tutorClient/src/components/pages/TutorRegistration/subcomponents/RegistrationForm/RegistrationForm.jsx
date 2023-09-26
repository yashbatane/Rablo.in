import React from "react";

import "./styles/RegistrationForm.css";
import RInput from "../../../../GlobalComponents/Inputs/RInput/RInput";

const RegistrationForm = () => {
    return (
        <div className="registrationform">
            <div className="registrationform-left">
                {/* for progress bar */}
            </div>
            <div className="registrationform-right">
                <div className="form-head">
                    <div>Personal Details</div>
                    <div>Fill out the details</div>
                </div>
                <div className="form-body">
                    <div className="form-body-fields">
                        <div className="body-fields-input">
                            <RInput type="text" placeholder="Type your First name" label="First Name" />
                        </div>
                        <div className="body-fields-input">
                            <RInput type="text" placeholder="Type your Last name" label="Last Name" />
                        </div>
                    </div>
                    <div className="form-body-fields">
                        <RInput type="dropbox" label="Upload your Best Profile Picture" style={{ width: "100%" }} />
                    </div>
                    <div className="form-body-fields">
                        <div className="body-fields-input">
                            <RInput type="gender" label="Gender" />
                        </div>
                        <div className="body-fields-input">
                            <RInput type="number" placeholder="+91 9876543210" label="Mobile Number" pretext="(Whatsapp)"/>
                        </div>
                    </div>
                    <div className="form-body-fields">
                        <div className="body-fields-input">
                            <RInput type="text" placeholder="Type your address" label="Apartment/House No." />
                        </div>
                        <div className="body-fields-input">
                            <RInput type="date" placeholder="DD-MM-YYYY" label="Date of Birth" />
                        </div>
                    </div>
                    <div className="form-body-fields">
                        <div className="body-fields-input">
                            <RInput type="text" placeholder="Address Line 1" label="Apartment/House" style={{width: "32.96rem"}}/>
                        </div>
                    </div>
                    <div className="form-body-fields">
                        <div className="body-fields-input">
                            <RInput type="text" placeholder="Select Your City" label="City" />
                        </div>
                        <div className="body-fields-input">
                            <RInput type="text" placeholder="Select Your State" label="State" />
                        </div>
                    </div>
                    <div className="form-body-fields">
                        <div className="body-fields-input">
                            <RInput type="text" placeholder="Type your PIN" label="PIN Code" />
                        </div>
                        <div className="body-fields-input">
                            <RInput type="referral" placeholder="Type your Referral" label="Referral Code" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegistrationForm;
