import React from "react";
import { useState } from "react";

import "./styles/Dashboard.css";
import Panel from "../../GlobalComponents/Panel/Panel";
import SideBar from "../../GlobalComponents/SideBar/SideBar";
import TopBar from "../../GlobalComponents/TopBar/TopBar";
import Details from "./components/Details/Details";
import { panelDetail } from "./components/data";

const Dashboard = ()=>{

    const [show, setShow] = useState(true);
    return (
        <div className="dashboard">
            <SideBar show={setShow} />
            <div
                style={{
                    width: "100%",
                    height: "100vh"
                }}
            >
                <TopBar />
                <Details pd={(show) ? "2.5rem" : "5.5rem"}/>
            </div>
            {
                show ? <Panel  panelDetail={panelDetail()}/> : <></>
            }
        </div>
    );
}

export default Dashboard;