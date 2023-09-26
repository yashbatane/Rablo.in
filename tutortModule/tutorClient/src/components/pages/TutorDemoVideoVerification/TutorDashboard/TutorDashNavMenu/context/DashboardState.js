import { useState } from "react";
import DashboardContext from "./Context";

const DashboardState=(props)=>{
const s1={
    selectedTab:1
}
    const [state, setState] = useState(s1);


    return(
        <DashboardContext.Provider value={{state,setState}} >
            {props.children}
        </DashboardContext.Provider>
    )
}

export default DashboardState;