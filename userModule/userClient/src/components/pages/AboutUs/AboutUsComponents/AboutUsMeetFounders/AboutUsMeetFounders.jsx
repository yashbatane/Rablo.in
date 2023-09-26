//Build by shivam agarwal

import React from 'react'
import './AboutUsMeetFounders.css'
import JaiImg from "../../../../img/JaiGupta.png"
import SorabhImg from "../../../../img/SorabhJain.png"
const AboutUsMeetFounders = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
      }}
    >
      <div class="custom-shape-divider-bottom-1676468869">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="AboutUsMeetFoundersHeadContainer">
        <div className="AboutUsMeetFoundersContainer">
          <div className="heading1">
            <span>THEY LAID OUR FOUNDATIONS</span>
          </div>
          <div className="heading2">
            <h3>Meet Our Founders</h3>
          </div>
          <div className="cardContainer">
            <div className="card">
              <div className="image">
                <img src={SorabhImg} alt="Sorabh Jain" />
              </div>
              <div className="title">
                SORABH <span className="surname">JAIN</span>
              </div>
              <div className="qualification">E, PGDHR, SHRM-CP</div>
              <div className="description">
                13+ Year Experience with Business Operations, People Management,
                Leadership & project implementation.
              </div>
              <div className="post">Director (Operations)</div>
              <div className="connectLinks">
                <span>
                  <a>
                    <i className="fab fa-linkedin"></i>
                  </a>
                </span>
                <span>
                  <a>
                    <i className="fas fa-envelope"></i>
                  </a>
                </span>
              </div>
            </div>
            <div className="card">
              <div className="image">
                <img src={JaiImg} alt="Jai Gupta" />
              </div>
              <div className="title">
                JAI <span className="surname">GUPTA</span>
              </div>
              <div className="qualification">B.COM HONS (FINANCE)</div>
              <div className="description">
                7+ years exp. with private tutoring & Ed-tech. and
                Entrepreneurship Certification from Wadhwani Foundation and
                AIC-BIMTECH
              </div>
              <div className="post">Director (Marketing & Tech.)</div>
              <div className="connectLinks">
                <span>
                  <a>
                    <i className="fab fa-linkedin"></i>
                  </a>
                </span>
                <span>
                  <a>
                    <i className="fas fa-envelope"></i>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsMeetFounders
