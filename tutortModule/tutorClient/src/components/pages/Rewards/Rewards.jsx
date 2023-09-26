//@creator - Ishaan Pare | @TaskID = RAB-518 , @TaskTitle = Dynamic Theme , @Task completion date = 28/05/2023 (20:30) |

//Libraries 
import React, { useEffect, useState } from "react";

import RewardsStatus from "./components/RewardsStatus/RewardsStatus";

import "./styles/Rewards.css";
import RewardsWallet from "./components/RewardsWallet/RewardsWallet";
import TopBar from "../../GlobalComponents/TopBar/TopBar";
import SideBar from "../../GlobalComponents/SideBar/SideBar";


//Reward -> page for rewards 
const Rewards = () => {

    const [show, setShow] = useState(true);
    
    return (
        <div className="rewards" style={show?{gridTemplateColumns:'  max-content 5fr 1fr'}:{gridTemplateColumns:'  max-content 1fr'}} >
            <SideBar show={setShow}/>
            <div className="rewardsmiddle">
                <TopBar />
                <RewardsStatus style={(show)?"7.29rem":"10rem"} />
            </div>
            {
                show ?
                    <RewardsWallet /> : <></>
            }
        </div>
    );
}

export default Rewards;
