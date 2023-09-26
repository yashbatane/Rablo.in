import React from "react";
import "./styles/WrapupBar.css";
import WrapupCards from "./components/WrapupCards/WrapupCards";
import { icons } from "./styles/assets/data";

const WrapupBar = () => {
    return (
        <div className="wrapupbar">
            <div className="wrapupbar-head">
                Wrap-Up Bar
            </div>
            <div className="wrapupbar-body">
                <WrapupCards
                    icon={icons["profile"]}
                    title={"Available Students"}
                    islocked={false}
                    number="100"
                    linkname="Add"
                />
                <WrapupCards
                    icon={icons["locked"]}
                    title={"Subscribed Students"}
                    islocked={true}
                    number="100"
                    linkname="Add"

                />
                <WrapupCards
                    icon={icons["locked"]}
                    title={"Active Batch"}
                    islocked={true}
                    number="100"
                    linkname="Add"
                />


            </div >
        </div >
    );
}
export default WrapupBar;