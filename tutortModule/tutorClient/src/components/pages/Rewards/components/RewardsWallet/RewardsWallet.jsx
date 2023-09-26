import React from "react";

import "./styles/RewardsWallet.css";

import Wallet from "./subcomponents/Wallet/Wallet";
import Bouquet from "./subcomponents/Bouquet/Bouquet";

const RewardsWallet = ()=> {
    return (
        <div className="rewardswallet">
            <Wallet coins={10} points={{"value": 20, "total": 40}}/>
            <Bouquet/>
        </div>    
    );
}

export default RewardsWallet;
