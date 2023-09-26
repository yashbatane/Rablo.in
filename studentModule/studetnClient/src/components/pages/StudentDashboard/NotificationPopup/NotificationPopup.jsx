import React, { useEffect } from "react";
import "./NotificationPopup.css";
import CloseIcon from "@mui/icons-material/Close";
import CelebrationIcon from '@mui/icons-material/Celebration';

const content = {
  tutName: "Mathematics Professor",
  content: "has been assigned to you.",
};
const NotificationPopup = (props) => {
  useEffect(() => {
    setTimeout(() => {
      props.setnotificationPopup(false);
    }, 5000);
  }, []);

  return (
    <div className="notificationPopupContainer transitionNotif-popup">
      <div className="hrPopup">
        <hr />
      </div>
      <div className="notif-popup-content">
        <div className="imagePopupNotif">
            <CelebrationIcon style={{height:"40px",width:"40px"}}/>
        </div>
        <div>
          <b>{content.tutName}</b> {content.content}
        </div>
      </div>
      <div className="closebtn-notificationPopup">
        <button
          onClick={(e) => {
            e.preventDefault();
            props.setnotificationPopup(false);
          }}
        >
          <CloseIcon />
        </button>
      </div>
    </div>
  );
};

export default NotificationPopup;
