import React from "react";


import "./styles/Wallet.css";

import Coins from "../../../RewardsStatus/subcomponents/MilestoneCard/styles/coin.png";
import RewardsProgress from "./styles/RewardsProgress/RewardsProgress";

const Wallet = (props) => {

    return (
        <div className="wallet">
            <div className="wallet-top">
                <div className="wallet-top-left">
                    Wallet
                </div>
                <div className="wallet-top-right">
                    {props.coins}
                </div>
                <img src={Coins} />
            </div>

            <div className="wallet-bottom">
                <div className="wallet-bottom-left">
                    <div className="bottom-left-head">
                        Instruction
                    </div>
                    <div className="bottom-left-body">
                        Complete milestone to earn more points.
                    </div>
                </div>
                <div className="wallet-bottom-right">
                    <RewardsProgress value={(props.points["value"] / props.points["total"]) * 100} />
                </div>
            </div>
        </div>
    );
}
export default Wallet;