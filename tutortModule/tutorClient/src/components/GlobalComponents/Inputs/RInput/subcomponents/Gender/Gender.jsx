import React from "react";
import { useState } from "react";

import "./styles/Gender.css";
import { icons } from "./styles/assets/data.js";
const Gender = () => {

    const [clickevent, setClickevent] = useState(0);
    const [others, setOthers] = useState("");
    return (
        <div className="gender">
            {
                (clickevent !== 3) ?
                    <div className="gender-gen">
                        <div className="gender-gen-btn"
                            style={{
                                background: (clickevent === 1) ? "#6764FF" : "#ffffff",
                                color: (clickevent !== 1) ? "rgba(74, 55, 148, 0.8)" : "#ffffff",
                            }}
                            onClick={() => setClickevent(1)}
                        >
                            <div>
                                {
                                    (clickevent === 1) ?
                                        icons["male_clicked"] :
                                        icons["male"]
                                }
                            </div>
                            <div>
                                Male
                            </div>
                        </div>
                        <div className="gender-gen-btn"
                            style={{
                                background: (clickevent === 2) ? "#6764FF" : "#ffffff",
                                color: (clickevent !== 2) ? "rgba(74, 55, 148, 0.8)" : "#ffffff",
                            }}
                            onClick={() => setClickevent(2)}

                        >
                            <div>
                                {
                                    (clickevent === 2) ?
                                        icons["female_clicked"] :
                                        icons["female"]
                                }
                            </div>
                            <div>
                                Female
                            </div>
                        </div>
                        <div className="gender-gen-btn"
                            style={{
                                background: (others.length !== 0) ? "#6764FF" : "#ffffff",
                                color: (others.length === 0) ? "rgba(74, 55, 148, 0.8)" : "#ffffff",
                            }}
                            onClick={() => setClickevent(3)}
                        >
                            <div>
                                {others.length === 0? "Others":others}
                            </div>
                            <div>
                                {
                                    (clickevent === 3) ?
                                        "<" :
                                        icons["down"]
                                }
                            </div>

                        </div>
                    </div>
                    :
                    <div className="gender-ngen">
                        <div className="gender-gen-btn">
                            <div onClick={() => setClickevent(0)} >
                                Others
                            </div>
                            <div style={{ marginRight: "5px" }}>
                                {
                                    (clickevent === 3) ?
                                        ">" :
                                    (others.length!==0)?
                                        icons["down"]:
                                        icons["down_fill"]

                                }
                            </div>
                            <div>
                                <input type="text" className="other-genip" placeholder="Type" onChange={(e) => setOthers(e.target.value)} />
                            </div>
                        </div>

                    </div>
            }
        </div>
    );
}

export default Gender;