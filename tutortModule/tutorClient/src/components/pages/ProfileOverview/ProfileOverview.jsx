import React from "react";
import SideBar from "../../GlobalComponents/SideBar/SideBar";
import { useState } from "react";
import TopBar from "../../GlobalComponents/TopBar/TopBar";
import "./styles/ProfileOverview.css";
import Overview from "./components/Overview/Overview";
import Panel from "../../GlobalComponents/Panel/Panel";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchTutorDetails } from "../../../store/reducers/TutorDetails/TutorDetailsAPI";
import {panelDetail} from "./components/data";

const ProfileOverview = () => {

    const [show, setShow] = useState(true);
    const details = useSelector(state => state.tutorbasicdetails.value.details);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchTutorDetails(dispatch);
    }, []);
    return (
        <div className="profileoverview">
            <SideBar show={setShow} />
            <div
                style={{
                    width: "100%",
                    height: "100vh"
                }}
            >
                <TopBar />
                <Overview
                    pd={(show) ? "2.5rem" : "5.5rem"}
                    details={{
                        email: details.email,
                        whatsappNumber: details.whatsappNumber,
                        phone: details.phone,
                        city: details.city,
                        state: details.state
                    }} />
            </div>
            {
                show ? 
                <Panel panelDetail={panelDetail()} /> : <></>
            }
        </div>
    )
}

export default ProfileOverview;