import { hide } from "@popperjs/core";
import React from "react";
import { Link } from "react-router-dom";
import Wave from "react-wavify";
import bg from './bg1.png';
// import wave from "../../../img/wave.png";
// import wave from "../../../../../img/wave.png"
// import wave from "./wave.png";
import "./WaveHeader.css";
// import "./WaveHeader.scss";
export const WaveHeader = () => {
  return (
    <div className="waveheader" style={{backgroundImage:`url(${bg})`}}>
      <div className="waveheaderWrapper">
        <div className="waveheadercontent">
          <div className="motto">
            <h1>We're Built For <span style={{color:"white"}}>Every Educator!</span></h1>
          </div>

          <p className="smpara1">
            <p>
            No matter what stage you're at, whether you're just starting out or trying to grow. There's definitely<br/> something we can do to help.
            </p>
            <div className="line"></div>
          </p>
          <div className="plan">
            <div className="target">
              <h2>
                <p>Connect</p>
              </h2>
            </div>
            <i className="plusIcon fa-solid fa-plus"></i>
            <div className="target">
              <h2>
                <p>Educate</p>
              </h2>
            </div>
            <i className="plusIcon fa-solid fa-plus"></i>
            <div className="target">
              <h2>
                <p>Growth</p>
              </h2>
            </div>
          </div>
          {/* <button>book your tutor</button> */}
        </div>
        <div className="userHero__btndiv">
          {/* <a href="" className="BecomeOurTutorButton">
            <h3>Become Our Tutor</h3>
            <lord-icon
              src="https://cdn.lordicon.com/zmkotitn.json"
              trigger="hover"
            ></lord-icon>
          </a> */}

          <Link to="/join"> <button className="landing__JoinBtn"> Join for free!</button></Link>
          <Link to="/AboutUs"> <button className="landing__knowMore"> Know more</button></Link>
        </div>
        <div className="Wavenpm">
          <Wave
            className="wawes1"
            fill="#ffffff"
            paused={false}
            options={{
              height: 5,
              amplitude: 20,
              speed: 0.4,
              points: 2,
            }}
          />
          <div className="wavewithboat">
            <div className="BoatAnmation">
              <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_5wavnwyt.json"
                background="transparent"
                speed="1.4"
                // style={{
                //   width: "500px",
                //   height: "500px",
                // }}
                className="LandingPageBoat"
                loop
                autoplay
              ></lottie-player>
            </div>
            <Wave
              className="wawes6"
              fill="#ffffff"
              paused={false}
              options={{
                height: 1,
                amplitude: 20,
                speed: 0.2,
                points: 4,
              }}
            />
          </div>
          <Wave
            className="wawes2"
            fill="rgb(225,225,255)"
            paused={false}
            options={{
              height: 60,
              amplitude: 30,
              speed: 0.3,
              points: 3,
            }}
          />
          <Wave
            className="wawes3"
            fill="rgb(243,226,255)"
            paused={false}
            options={{
              height: 80,
              amplitude: 40,
              speed: 0.4,
              points: 4,
            }}
          />
          <Wave
            className="wawes4"
            fill="rgb(225,225,255)"
            paused={false}
            options={{
              height: 100,
              amplitude: 50,
              speed: 0.5,
              points: 5,
            }}
          />
          <Wave
            className="wawes5"
            fill="rgb(243,226,255)"
            paused={false}
            options={{
              height: 120,
              amplitude: 60,
              speed: 0.3,
              points: 6,
            }}
          />
        </div>
      </div>
    </div>
  );
};
