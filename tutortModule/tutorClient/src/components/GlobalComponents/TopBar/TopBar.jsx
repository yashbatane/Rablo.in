//@creator - Ishaan Pare | @TaskID = RAB-518 , @TaskTitle = Dynamic Theme , @Task completion date = 28/05/2023 (20:30) |

import React, { useEffect, useState } from "react";
import Bell from "./styles/assets/bell.png";
import Logo from "../../pages/TutorDashboard/AddStudents/resource/rablo.png";
import Wallet from "../../pages/TutorDashboard/AddStudents/resource/wallet.png";
import "./styles/TopBar.css";
import { useNavigate } from "react-router";
import Message from "./components/Message/Message";
import { icons } from "./components/Message/styles/data";


const SEC = 1000;
const WeekDay = {
    0: "Monday",
    1: "Tuesday",
    2: "Wednesday",
    3: "Thursday",
    4: "Friday",
    5: "Saturday",
    6: "Sunday"
}
const Month = {
    0: "January",
    1: "Feburary",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December"
}
const TopBar = () => {

    const [date, setDate] = useState(Date.now());
    const [msg, setMsg] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            setDate(Date.now());
        }, SEC);
    }, [date]);


    const formatAMPM = (date) => {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }
    const getDate = (date) => {
        //Monday , 3 Oct,  12:13 PM 
        var dt = new Date(date);
        var dtime = WeekDay[dt.getUTCDay()] + " , " + dt.getUTCDate() + " " + Month[dt.getMonth()] + " " + ", " + formatAMPM(dt);
        return dtime;
    }

    const message = () => {
        if (msg === 0) setMsg(1);
        else setMsg(0);
    }

    const navigate = useNavigate();

    return (
        <div style={{ width: "100%", background: "#ffffff" }}>
            <nav>
                <img src={Logo}></img>
                <div className="navbarParts">
                    <div className="navDate">{getDate(date)}</div>
                    <div className="navWallet" onClick={() => navigate("/rewards")}><img src={Wallet} alt="wallet" /> 0</div>
                    <div className="navLine"></div>
                    <div onClick={message}>
                        {
                            (true) ? icons["message"] : icons["message_default"]
                        }
                    </div>
                    <div>
                        <img src={Bell} alt="notifications" />
                    </div>
                    <div className="nav-msg">
                        {
                            (msg === 0) ? <></> : <Message visible={setMsg}/>
                        }
                    </div>

                </div>
            </nav>
        </div>
    );
}
export default TopBar;