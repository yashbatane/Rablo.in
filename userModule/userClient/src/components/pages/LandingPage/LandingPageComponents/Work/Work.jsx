import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./WorkV2.css";

const Work = () => {
  return (
    <div className="work">
      <div className="title">
        <p className="work__mutedTitle">PAVE YOUR WAY
</p>
       <div className="work_title_wrapper"><hr/> <h1>How Does it Work?</h1><hr/></div> 
        
      </div>

      <div className="section1">
        <div className="img">
          <img
            src="https://hometuitioninc.in/wp-content/uploads/2022/03/Switch-Anytime-14-e1648323958283-900x708-1-768x604.png"
            alt=""
          />
        </div>
        <div className="section1Inner">
          <div className="count">01</div>
          <div className="content">
            <div>
              <h3>Connect With Students</h3>
            </div>
            <div>
              <p>
                Create your Perfect profile to get as much students as <br />{" "}
                possible and create your batch with us.
              </p>
            </div>

            <hr />
            {/* <div className="arrow">
              <i class="fas fa-arrow-alt-circle-right"></i>
            </div> */}
          </div>
        </div>
      </div>

      <div className="section1" id="section2">
        <div className="section1Inner">
          <div className="count">02</div>
          <div className="content">
            <h3>Conduct your Classes</h3>
            <p>
              Deliver Quality Education through Live Class or Offline <br />{" "}
              mode with the help Teaching Support Tools.
            </p>
            <hr />
            {/* <div className="arrow">
              {" "}
              <i class="fas fa-arrow-alt-circle-right"></i>
            </div> */}
          </div>
        </div>
        <div className="img">
          <img
            src="https://hometuitioninc.in/wp-content/uploads/2022/03/Switch-Anytime-15-e1648324917547-900x708-1-768x604.png"
            alt=""
          />
        </div>
      </div>

      <div className="section1">
        <div className="img">
          <img
            src="https://hometuitioninc.in/wp-content/uploads/2022/03/Switch-Anytime-16-e1648324941270-900x698-1-768x596.png"
            alt=""
          />
        </div>
        <div className="section1Inner">
          <div className="count">03</div>
          <div className="content">
            <h3>Create your Credibility</h3> <br />
            <p>
              By Collecting Good Feedback & Students Growth at your <br />{" "}
              Online Profile attract more students in your classes.
            </p>
            <hr />
            {/* <div className="arrow">
              {" "}
              <i class="fas fa-arrow-alt-circle-right"></i>
            </div> */}
          </div>
        </div>
      </div>

      <div className="startButton">
       
     <Link to="/join" style={{textDecoration:"none"}}> <button class="button-22" role="button" >
        <i className="fas fa-flag-checkered" ></i> &nbsp; Let's Start!
      </button>
      </Link>
      </div>
      {/* test */}
    </div>
  );
};

export default Work;

/* CSS */
