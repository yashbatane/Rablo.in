import React from "react";
import "./styles/Profile.css";
import { icons } from "../../styles/assets/data";
import { useNavigate } from "react-router";

const Profile = (props) => {

    const navigate = useNavigate();
    const editJump = ()=>{
        navigate("/editprofiletutor");
    }
    return (
        <div className="profile">
            <div className="profile-head">
                <div className="profile-head-left">
                    Contact Details
                </div>
                <div className="profile-head-right">
                    <div>
                        {icons.edit}
                    </div>
                    <div onClick={editJump}>
                        Edit
                    </div>
                </div>
            </div>
            <div className="profile-body">
                <div className="profile-body-card">
                    <div className="body-card-left">
                        {icons.email}
                    </div>
                    <div className="body-card-right">
                        <div>
                            {props.details.email+" "}

                        </div>
                        <div>
                            Email Address
                        </div>
                    </div>
                </div>
                <div className="profile-body-card">
                    <div className="body-card-left">
                        {icons.contact}
                    </div>
                    <div className="body-card-right">
                        <div>
                            {props.details.phone+" "}
                        </div>
                        <div>
                            Contact Number
                        </div>
                    </div>
                </div>
                <div className="profile-body-card">
                    <div className="body-card-left">
                        {icons.whatsapp}

                    </div>
                    <div className="body-card-right">
                        <div>
                            {props.details.whatsappNumber+" "}
                        </div>
                        <div>
                            Whatsapp number
                        </div>
                    </div>
                </div>
                <div className="profile-body-card">
                    <div className="body-card-left">
                        {icons.email}
                    </div>
                    <div className="body-card-right">
                        <div>
                            {props.details.city+", "+props.details.state}
                        </div>
                        <div>
                            Permanent Address
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;