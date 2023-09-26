import React from "react";
import NotFound from "../../../../../../GlobalComponents/NotFound/NotFound";

const Reviews = ()=>{
    return(
        
        <div className="reviews">
            <NotFound message={"Oops! Sorry couldn't find any Reviews."} link={"Get Verified"} />
        </div>
    );
}

export default Reviews;