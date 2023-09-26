import React from "react";
import "./StudentDashboardNotification.css";
import SettingsTwoToneIcon from "@mui/icons-material/SettingsTwoTone";

import CelebrationIcon from "@mui/icons-material/Celebration";

const notif = [
  {
    content: "Welcome has been assigned to you",
    time: "1min ago",
  },
  {
    content: "Mathematics Professor has been assigned to you",
    time: "1min ago",
  },
  {
    content: "English Professor has been assigned to you",
    time: "1min ago",
  },
  {
    content: "English Professor has been assigned to you",
    time: "1min ago",
  },
  {
    content: "English Professor has been assigned to you",
    time: "1min ago",
  },
  {
    content: "English Professor has been assigned to you",
    time: "1min ago",
  },
  {
    content: "English Professor has been assigned to you",
    time: "1min ago",
  },
  {
    content: "English Professor has been assigned to you",
    time: "1min ago",
  },
];

const StudentDashboardNotification = (props) => {
  return (
    <div>
      <div
        className="notificationmodel-dashboard"
        onClick={(e) => {
          props.setnotificationListen(false);
        }}
      ></div>
      <div className="notification-container-stuDash">
        <div className="head-of-notif-panel">
          <div className="notif-label">Notifications</div>
          <div className="gearIconbtn">
            <button>
              <SettingsTwoToneIcon style={{ color: "#AD3744" }} />
            </button>
          </div>
        </div>
        <div className="notification-content">
          {notif.map((notif, index) => (
            <>
              <div className="norif-content-loop" key={index}>
                <div className="profile-pic-notif" key={index}>
                  <CelebrationIcon style={{ height: "40px", width: "40px" }} />
                </div>
                <div className="content-notif" key={index}>
                  <div>{notif.content}</div>
                  <span>{notif.time}</span>
                </div>
              </div>
              <hr />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentDashboardNotification;
