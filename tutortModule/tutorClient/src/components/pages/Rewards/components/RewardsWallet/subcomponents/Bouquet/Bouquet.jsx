import React, { useState } from "react";
import Deal from "./Deal/Deal";

import "./styles/Bouquet.css";
import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import { data } from "../../../../data/THEME.js";

//fetching the packs
import { fetchPack } from "../../../../../../../store/reducers/Rewards/RewardsAPI";

const Bouquet = (props) => {

    //@-todo -> redux store
    //storing all the rewards points packs
    const packList = useSelector(state => state.rewardpack.value.packList);

    //dispatcher
    const dispatch = useDispatch();

    //getting all the rewards points packs
    useEffect(() => {
        fetchPack(dispatch);
        // dispatch(setPacks(data));
    },[]);

    return (
        <div className="bouquet">
            <div className="bouquet-head">
                Buy More Reward Points
            </div>
            <div className="bouquet-desc">
                You can also buy reward points directly from here!!
            </div>
            <div className="bouquet-title">
                COIN PACKS
            </div>
            <div className="bouquet-list">
                {
                    packList.map((x,i)=>{
                        return <Deal data={x}/>;
                    })
                }
                {/* <Deal points={500} cost={50} title={"Most Preffered"} body={{ "head": "Classroom Pack", "desc": "To acquire mid to large batch" }} />
                <Deal points={500} cost={50} title={"Most Preffered"} body={{ "head": "Classroom Pack", "desc": "To acquire mid to large batch" }} />
                <Deal points={500} cost={50} title={"Most Preffered"} body={{ "head": "Classroom Pack", "desc": "To acquire mid to large batch" }} /> */}
            </div>
        </div>
    );
}

export default Bouquet;