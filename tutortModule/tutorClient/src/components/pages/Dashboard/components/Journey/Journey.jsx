import React, { useEffect, useState } from "react";
import "./styles/Journey.css";
import JourneyCard from "./JourneyCard/JourneyCard";
import { icons } from "./styles/assets/data";

const Journey = (props) => {
    const [active,setActive]=useState(0);
    const arr=Object.values(props.flow);
    useEffect(()=>{
        for(var i=0;i<arr.length;i++){
            if(arr[i]==true){
                setActive(i+1);
            }
            console.log(arr[i]);
        }
    },[])

    return (
        <div className="journey">
            <div className="journey-head">
                User <span style={{ color: "#6764FF" }}> Journey</span>
            </div>
            
                <div className="journey-body">
                    <JourneyCard step={1} icon={active==0?icons.add:(props.flow.createAccount?icons.completed:icons.locked)} status={"Completed"} title={"Create Account"} />
                    <JourneyCard step={2} icon={active==1?icons.add:(props.flow.profileVerified?icons.completed:icons.locked)}  status={"Completed"} title={"Profile Verified"} />
                    <JourneyCard step={3} icon={active==2?icons.add:(props.flow.createYourPlan?icons.completed:icons.locked)}  status={props.flow.createYourPlan?"Completed":"Create Plan"} title={"Create Your Plan"} />
                    <JourneyCard step={4} icon={active==3?icons.add:(props.flow.addStudent?icons.completed:icons.locked)}  status={"Add"} title={"Add Your Students"} />
                    <JourneyCard step={5} icon={active==4?icons.add:(props.flow.createBatch?icons.completed:icons.locked)}  status={"Locked"} title={"Create Your Batch"} />
                    <JourneyCard step={6} icon={active==5?icons.add:(props.flow.progressInsights?icons.completed:icons.locked)}  status={"Locked"} title={"Progress Insight"} />
                    <JourneyCard step={7} icon={active==6?icons.add:(props.flow.monthlyFeedback?icons.completed:icons.locked)}  status={"Locked"} title={"Get Monthly Feedback"} />
                    <JourneyCard step={8} icon={active==7?icons.add:(props.flow.monthlyFeeCredit?icons.completed:icons.locked)}  status={"Locked"} title={"Monthly Fee Credit"} />
                </div>


        </div >
    );
}
export default Journey;