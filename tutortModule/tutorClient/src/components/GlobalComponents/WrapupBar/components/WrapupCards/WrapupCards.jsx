import React from "react";
import "./styles/WrapupCards.css";
import { useNavigate } from "react-router";


const WrapupCards = (props) => {
    const navigate = useNavigate();

    return (
        <div className="wrapupbar-body-card">
            <div className="body-card-img">
                {props.icon}
            </div>
            <div className="body-card-details">
                <div className="card-details-top">
                    {props.title}
                </div>
                <div className="card-details-bottom">
                    {
                        (!props.islocked) ?
                            <>
                                <div>
                                    {props.number}
                                </div>
                                                          
                                {/* <div onClick={()=>navigate("/addstudents")}>
                                    <span style={{marginRight: "5px"}}>{props.linkname} </span>
                                    <svg color="#6764ff" width="9" height="14" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.17395 0.513304L10.1543 8.08087L2.17395 15.6484L0.757441 14.3052L7.32127 8.08087L0.757441 1.85655L2.17395 0.513304Z" fill="black" fill-opacity="0.3" />
                                    </svg>
                                </div>
                                 */}
                            </>
                            :
                            <>
                                <div style={{
                                    width: "100%",
                                    fontSize: "0.9625rem",
                                    fontWeight: "700",
                                    color: "rgba(103, 100, 255, 0.8)"
                                }}>
                                    Locked
                                </div>
                            </>
                    }
                </div>
            </div>
        </div>
    );
}

export default WrapupCards;