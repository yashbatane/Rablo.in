import React from "react";

import "./styles/Deal.css";

import Coin from "../../../../RewardsStatus/subcomponents/MilestoneCard/styles/coin.png";
const Deal = (props) => {
    return (
        <div className="deal">
            <div className="deal-label">
                {props.data.tag}
            </div>
            <div className="deal-container">
                <div className="deal-container-top">
                    <div className="container-top-left">
                        <div>
                            <img src={Coin} />
                            {props.data.coins}
                        </div>
                    </div>
                    <div className="container-top-right">
                        <div className="top-right-head">
                            {props.data.packName} Pack
                        </div>
                        <div className="top-right-msg">
                            Suitable for
                        </div>
                        <div className="top-right-desc">
                            {props.data.suitableFor}
                        </div>
                    </div>
                </div>
                <div style={{width: "100%", height: "1px", borderTop: "1px solid rgba(103, 100, 255, 0.2);"}}></div>
                <div className="deal-container-bottom">
                    <div className="container-bottom-left">
                        {
                            (props.data.actualPrice !== props.data.discountedPrice) ?
                                <span style={{color: "black", fontSize: "0.78vw", marginRight: ".3rem"}}><s>{props.data.actualPrice} Rs</s></span> : <></>
                        }
                        {props.data.discountedPrice} Rs

                    </div>
                    <div className="container-bottom-right">
                        <button>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Deal;