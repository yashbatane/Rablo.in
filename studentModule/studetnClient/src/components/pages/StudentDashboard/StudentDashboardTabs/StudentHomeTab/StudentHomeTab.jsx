import React, { useEffect, useState } from "react";
import "./StudentHomeTab.css";

import NotificationsIcon from "@mui/icons-material/Notifications";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";
import PublicIcon from "@mui/icons-material/Public";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import BannerImg from "./resources/MoneyverseSitting.png";

import ProfileImg from "./resources/profile.jpg";
import Logo from "./resources/logo.png";
import StudentDashboardNotification from "../../StudentDashboardNotification/StudentDashboardNotification";
import NotificationPopup from "../../NotificationPopup/NotificationPopup";
// Function that returns the current date (dd/mm/yyyy)
const getDate = () => {
  const date = new Date();
  const day = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
    date
  );
  const curentDate = date.getDate();
  const month = new Intl.DateTimeFormat("en-US", { month: "short" }).format(
    date
  );

  return `${day}, ${curentDate} ${month}`;
};

const getTime = () => {
  return new Intl.DateTimeFormat("en-IN", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  }).format(new Date());
};

const subjects = [
  {
    name: "Statistics",
    icon: DonutSmallIcon,
    gradient:
      "linear-gradient(156.49deg, #FFC278 40.56%, rgba(255, 194, 120, 0) 84.84%)",
  },
  {
    name: "Geography",
    icon: PublicIcon,
    gradient:
      "linear-gradient(135.71deg, #0997D9 40.21%, rgba(9, 151, 217, 0) 75.31%)",
  },
  {
    name: "Vocabulary",
    icon: BookmarkIcon,
    gradient: "linear-gradient(134.73deg, #D04E62 39.21%, #FFFFFF 74.88%)",
  },
  {
    name: "Biology",
    icon: DonutSmallIcon,
    gradient: "linear-gradient(148.07deg, #4CD909 42.06%, #FFFFFF 80.8%)",
  },
  {
    name: "Physics",
    icon: DonutSmallIcon,
    gradient: "linear-gradient(148.07deg, #095CD9 42.06%, #FFFFFF 80.8%)",
  },
];

const topTutors = [
  {
    img: ProfileImg,
    name: "Suresh Kumar",
    subject: "English Language",
    rating: 4,
    rate: "1000",
  },
  {
    img: ProfileImg,
    name: "Aneeta Khan",
    subject: "Biology",
    rating: 4,
    rate: "1000",
  },
  {
    img: ProfileImg,
    name: "Varun",
    subject: "English Language",
    rating: 4,
    rate: "1000",
  },
  {
    img: ProfileImg,
    name: "Arun",
    subject: "Physics",
    rating: 4,
    rate: "1000",
  },
];

const progress = [
  {
    subject: "English",
    difficulty: "Intermediate",
    progressPercent: 50,
    batchType: "A2",
  },
  {
    subject: "English",
    difficulty: "Intermediate",
    progressPercent: 50,
    batchType: "A2",
  },
  {
    subject: "English",
    difficulty: "Intermediate",
    progressPercent: 50,
    batchType: "A2",
  },
  {
    subject: "English",
    difficulty: "Intermediate",
    progressPercent: 50,
    batchType: "A2",
  },
  {
    subject: "English",
    difficulty: "Intermediate",
    progressPercent: 50,
    batchType: "A2",
  },
  {
    subject: "English",
    difficulty: "Intermediate",
    progressPercent: 50,
    batchType: "A2",
  },
];

const StudentHomeTab = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(getDate());
      setTime(getTime());
    }, 1000);

    return function cleanup() {
      clearInterval(timer);
      setDate(null);
      setTime(null);
    };
  }, []);

  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);

  const [notificationListen, setnotificationListen] = useState(false);
  const [notificationPopup, setnotificationPopup] = useState(true);

  return (
    <div className="DashboardContainer">
      <div className="HeaderContainer">
        <img src={Logo} />
        <div className="ProfileContainer">
          <p>
            {date} {time}
          </p>
          <button
            onClick={(e) => {
              e.preventDefault();
              setnotificationListen(!notificationListen);
            }}
            style={{ all: "unset", cursor: "pointer" }}
          >
            <NotificationsIcon style={{ color: "#D04E62" }} />
          </button>
          <img src={ProfileImg} />
        </div>
      </div>
      <div className="GreetingContainer">
        <h2>Welcome Adarsh</h2>
        <div className="banner">
          <div className="TextContainer">
            <h2>Good Morning</h2>
            <p>
              You’ve learned <strong>70% of your</strong> goal this week!
            </p>
            <p>Keep it up and improve your results!</p>
          </div>
          <img src={BannerImg} />
        </div>
      </div>
      <div className="SubjectsContainer">
        <div className="Header">
          <h2>Subjects</h2>
          <p>See All</p>
        </div>
        <p>Upcoming classes/Events</p>
        <div className="subjects">
          {subjects.map((subject, index) => (
            <div className="subject" key={index}>
              <div className="IconContainer">
                <subject.icon></subject.icon>
                <MoreVertIcon style={{ color: "white" }} />
              </div>
              <h3>{subject.name}</h3>
              <div
                className="blob"
                style={{ backgroundImage: subject.gradient }}
              ></div>
            </div>
          ))}
        </div>
      </div>
      <div className="TopTutorContainer">
        <div className="Header">
          <h2>Out top Tutors</h2>
          <p>See All</p>
        </div>
        <div className="tutors">
          {topTutors.map((tutor, index) => (
            <div className="tutor" key={index}>
              <img src={tutor.img}></img>
              <div className="DetailsContainer">
                <h3>{tutor.name}</h3>
                <p>{tutor.subject}</p>
                <div className="starsContainer">
                  {Array.from(
                    { length: tutor.rating },
                    (_, index) => index
                  ).map(() => (
                    <StarIcon style={{ color: "#F9BD22" }} />
                  ))}
                  {Array.from(
                    { length: 5 - tutor.rating },
                    (_, index) => index
                  ).map(() => (
                    <StarBorderIcon style={{ color: "#F9BD22" }} />
                  ))}
                </div>
                <h2>&#8377; {tutor.rate}/month</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="YourProgressContainer">
        <h2>Your Progress</h2>
        <div className="ProgressContainer">
          {progress.map((data, index) => (
            <div className="progressReport" key={index}>
              <div className="batchType">{data.batchType}</div>
              <div className="descContainer">
                <strong>{data.subject}</strong>
                <p>{data.difficulty}</p>
              </div>
              <div className="progressbar">
                <div
                  className="progress"
                  style={{ width: `${data.progressPercent}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {notificationListen && (
        <>
          <StudentDashboardNotification
            setnotificationListen={setnotificationListen}
          />
        </>
      )}
      {notificationPopup && (
        <>
          <NotificationPopup setnotificationPopup={setnotificationPopup} />
        </>
      )}
    </div>
  );
};

export default StudentHomeTab;
