import React from "react";

import "./styles/Panel.css";
import PanelContent from "./subcomponents/PanelContent/PanelContent";
import { fetchTutorDetails } from "../../../store/reducers/TutorDetails/TutorDetailsAPI";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Panel = (props) => {
    const details = useSelector(state => state.tutorbasicdetails.value.details);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchTutorDetails(dispatch);
    }, []);

    return (
        <div className="panel">
            <PanelContent
                details={{
                    firstName: details.firstName,
                    lastName: details.lastName,
                    city: details.city,
                    state: details.state
                }}
                panelDetail={ props.panelDetail }
            />
        </div>
    );
}
export default Panel;