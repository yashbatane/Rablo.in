import React, { useState } from "react";
import CollapsedSidebar from "./subcomponents/CollapsedSidebar/CollapsedSidebar";
import ExpandedSidebar from "./subcomponents/ExpandedSidebar/ExpandedSidebar";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const SideBar = (props) => {
const [expand, setExpand] = useState(false);
const [state, setState] = useState(0);
const navigate = useNavigate();
const eventHandler = (comp)=>{
    if (comp === "comp-home") {
      navigate("/");
      setState(0);
    }
    else if (comp === "comp-addstudent") {
      navigate('/addstudents')
      setState(1);
    }
    else if (comp === "comp-verifyyourprofile") {
      setState(2);
    }
    else if (comp === "comp-myprofile") {
      navigate("/profileoverview");
      setState(3);
    }
  }
  useEffect(()=>{
    const path = window.location.pathname;
    if (path === "/") setState(0);
    if (path === "/profileoverview") setState(3);
    if (path === "/addstudents") setState(1);
    if (path === "/rewards") setState(1);
  },[])
  return (
    <div className="Leftsidebar">
      {expand ? (
        <ExpandedSidebar
          state={state}
          expand={{ setExpand: setExpand, expand: expand }}
          show={props.show}
          eventHandler={(comp)=>eventHandler(comp)}
        />
      ) : (
        <CollapsedSidebar
          state={state}
          expand={{ setExpand: setExpand, expand: expand }}
          show={props.show}
          eventHandler={(comp)=>eventHandler(comp)}
        />
      )}
    </div>
  );
};

export default SideBar;
