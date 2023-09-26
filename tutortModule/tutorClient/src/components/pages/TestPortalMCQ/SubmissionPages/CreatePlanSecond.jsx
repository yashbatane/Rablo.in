import React from 'react'
import "./CreatePlanSecond.css"
function CreatePlanSecond() {
  return (
    <div className="createPlanSecondMainContainer">
    <div className="box">
      <div className="header">
        <div className="logo"></div>
        <h4 className="heading">Create Plan !!</h4>
      </div>

      <div className="content">
        <div className="imageText">
          <i class="fa-solid fa-sack-dollar fa-2x"></i>{" "}
          <div className="attemptedQuestions">Total Coins : 120</div>
        </div>

        <div className="almostThere">
          You are now ready to finalize your dream plan !!
        </div>
        <div className="planInsights">
          <h3>- Plan Insights -</h3>
          <div className='namePlan'>
            <h4>Name : plan_01</h4>
            <h4>Cost : 100 Coins</h4>
          </div>
        </div>
      </div>
      <div className="bottomCornerImage">
        <img src="" alt="" />
      </div>
      <div className="paragraph">
        <button type="submit" className="finalizeButton">
          <p> Finalize Your Plan </p>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <i class="fa-solid fa-circle-check fa-2x"></i>
        </button>
      </div>
    </div>
  </div>
  )
}

export default CreatePlanSecond