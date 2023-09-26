import React, { useState } from "react";
import WrapupBar from "../../../../GlobalComponents/WrapupBar/WrapupBar";
import "./styles/Overview.css";
import { icons, components } from "./styles/assets/data";
import { useEffect } from "react";
import { fetchTutorDetails } from "../../../../../store/reducers/TutorDetails/TutorDetailsAPI";
import { useDispatch, useSelector } from "react-redux";
import Profile from "./subcomponents/Profile/Profile";
import Reviews from "./subcomponents/Reviews/Reviews";
import Financials from "./subcomponents/Financials/Financials";

const Overview = (props) => {

    const [state, setState] = useState(1);

    const dispatch = useDispatch();
    const handleChange = (btn) => {
        if (btn === "overview") {
            setState(1);
        }
        else if (btn === "reviews") {
            setState(2);

        }
        else if (btn === "financials") {
            setState(3);
        }
    }



    return (
        <div className="overview" style={{ paddingLeft: props.pd }}>
            <WrapupBar />

            <div className="overview-menu">
                <div
                    className={(state === 1) ? "menu-button-selected" : "menu-button"}
                    onClick={() => handleChange("overview")}
                >
                    <div>
                        {(state === 1) ? icons.overview.selected : icons.overview.default}
                    </div>
                    <div>
                        Overview
                    </div>
                </div>
                <div className="overview-margin"></div>
                <div
                    className={(state === 2) ? "menu-button-selected" : "menu-button"}
                    onClick={() => handleChange("reviews")}

                >
                    <div>
                        {(state === 2) ? icons.reviews.selected : icons.reviews.default}

                    </div>
                    <div>
                        Reviews
                    </div>
                </div>
                <div className="overview-margin"></div>
                <div
                    className={(state === 3) ? "menu-button-selected" : "menu-button"}
                    style={{ borderLeft: "none" }}
                    onClick={() => handleChange("financials")}
                >
                    <div>
                        {(state === 3) ? icons.financials.selected : icons.financials.default}
                    </div>
                    <div>
                        Transactions
                    </div>

                </div>
            </div>
            




            <div className="overview-body-container">
                {/* <div className="overview-body"> */}
                {
                    (state === 1) ?
                        <div className="overview-body">  <Profile
                            details={props.details}
                        /> </div> : (state === 2) ? <div className="overview-body"> <Reviews /></div> : <Financials/>       
                }
            </div>
        </div>
    );
}
export default Overview;