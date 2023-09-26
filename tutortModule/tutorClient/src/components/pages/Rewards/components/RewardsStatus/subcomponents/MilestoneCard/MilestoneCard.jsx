import React from "react";

import "./styles/MilestoneCard.css";
import Coin from "./styles/coin.png";

const MilestoneCard = (props) => {

    return (
        <div className="milestonecard">
            {/* top content */}
            <div className="card-top">
                <div className="card-top-left">
                    <div className="top-left-one" style={{ color: props.THEME[props.data.nature].secColor, background: props.THEME[props.data.nature].secBgColor }}>
                        {props.data.nature}
                    </div>
                    <div className="top-left-two">
                        <div>
                            {
                                props.data.body.status.isDone ?
                                    props.THEME["Completed"].svg
                                    :
                                    props.THEME[props.data.nature].svg

                            }
                        </div>
                        <div style={{ color: (props.data.body.status.isDone ? props.THEME["Completed"].fgcolor : props.THEME[props.data.nature].fgcolor) }}>
                            {props.data.body.head}
                        </div>
                    </div>
                </div>
                <div className="card-top-right">
                    <div style={{ color: props.THEME[props.data.nature].fgcolor }}>
                        REWARD
                    </div>
                    <div>
                        <button>{props.data.points}<img src={Coin} />
                        </button>
                    </div>
                </div>
            </div>
            {/* end content */}
            <div className="card-end">
                <div className="card-end-left">
                    <div className="end-left-heading">Instruction</div>
                    <div className="end-left-body">{props.data.body.instruction}</div>
                </div>
                <div className="card-end-right">
                    <div className="end-right-one">
                        <div className="right-one-heading">Completed</div>
                        <div className="right-one-value">
                            <div className="one-value-left">
                                {
                                    Array(props.data.body.status.total).fill(1).map((x, i) => {
                                        return (i < props.data.body.status.value) ?
                                            <div style={{ background: "#6764FF" }}></div>
                                            :
                                            <div style={{ background: "#00000040" }}></div>;
                                    })
                                }
                            </div>
                            <div className="one-value-right">
                                {props.data.body.status.value + "/" + props.data.body.status.total}
                            </div>
                        </div>
                    </div>
                    <div className="end-right-two">
                        {
                            props.data.body.status.isDone ?
                                <button style={{ background: "#15DB1D80",display:'flex' ,justifyContnet:'space-around' }}>
                                   <svg width="13.5" height="13.25" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.86117 11.7836C5.56102 11.7836 5.27588 11.6622 5.06578 11.4498L0.818599 7.15496C0.383384 6.71486 0.383384 5.98641 0.818599 5.54631C1.25381 5.10621 1.97417 5.10621 2.40939 5.54631L5.86117 9.03679L13.575 1.23633C14.0102 0.796224 14.7306 0.796224 15.1658 1.23633C15.601 1.67643 15.601 2.40488 15.1658 2.84498L6.65656 11.4498C6.44646 11.6622 6.16132 11.7836 5.86117 11.7836Z" fill="white" stroke="white" stroke-width="2.2" stroke-linejoin="round" />
</svg>

                                    <span style={{paddingLeft:'7px'}}>Completed</span></button>
                                :
                                <button style={{ background: props.THEME[props.data.nature].fgcolor }}>Complete</button>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MilestoneCard;