import React, { useState } from "react";
import logo1 from "./footerlogo.jpeg";
import "./Footer2.css";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import linkedIn from "../../img/social/linkedin.png";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import youtube from "../../img/social/youtube.png";
import facebook from "../../img/social/facebook.png";
import twitter from "../../img/social/twitter.png";
import toggle from "../../img/toggle.png";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import { Link } from "react-router-dom";
export default function Footer2() {
  const isMobile = window.innerWidth <= 1300;
  const [optionOpen, setOptionOpen] = useState(false);
  const [legalOptionOpen, setLegalOptionOpen] = useState(false);
  return (
    <div className="footerWithWavesContainer">
      <div className="wavesContainer">
        <div class="custom-shape-divider-bottom-1676137322">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              class="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              class="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
      <div className="footerContainer">
        <div className="footerMainContainer">
          <div className="footerMainUp">
            <div className="rabloIntro">
              <img src={logo1} />

              <p>
                Rablo.in welcomes every enthusiast who is willing to learn and
                be the part of revolution in our E-learning Platform.
              </p>
            </div>
            <div className="product">
              <h4>Product</h4>

              {isMobile ? (
                optionOpen ? (
                  <div className="productsResponsiveContainer">
                    <CloseRoundedIcon
                      className="img"
                      onClick={() => setOptionOpen(!optionOpen)}
                    />

                    <div className="productsResponsiveOptions">
                      {" "}
                      <a href="#">Pricing</a>
                      <a href="/support">Support</a>
                      <a href="#">About us</a>
                    </div>
                  </div>
                ) : (
                  <div className="productsResponsiveContainer">
                    <MenuRoundedIcon
                      className="img"
                      onClick={() => setOptionOpen(!optionOpen)}
                    />
                  </div>
                )
              ) : (
                <div className="productsContainer">
                  <a href="/pricing">Pricing</a>
                  <a href="#">Support</a>
                  <a href="#">About us</a>
                </div>
              )}

              <button className="forStudentsButton">For Students</button>
            </div>

            <div className="legalAndPolicies">
              <h4>Legal & Policies</h4>
              {isMobile ? (
                legalOptionOpen ? (
                  <div className="legalAndPoliciesContainer">
                    <CloseRoundedIcon
                      className="img"
                      onClick={() => setLegalOptionOpen(!legalOptionOpen)}
                    />
                    <div className="legalAndPoliciesOptions">
                      <a href="#">Privacy</a>
                      <a href="#">Terms of Service</a>
                      <a href="#">Cookies</a>
                      <a href="#">Refund</a>
                      <a href="#">Support</a>
                      <a href="#">Disclaimer</a>
                    </div>
                  </div>
                ) : (
                  <div className="legalAndPoliciesContainer">
                    <MenuRoundedIcon
                      className="img"
                      onClick={() => setLegalOptionOpen(!legalOptionOpen)}
                    />
                  </div>
                )
              ) : (
                <div className="legalAndPolicies">
                  <a href="#">Privacy</a>
                  <a href="#">Terms of Service</a>
                  <a href="#">Cookies</a>
                  <a href="#">Refund</a>
                  <a href="#">Support</a>
                  <a href="#">Disclaimer</a>
                </div>
              )}
            </div>
          </div>
          <hr></hr>
          <div className="footerMainDown">
            <p className="copywrite">
              © RABLO LEARNING PVT LTD. ALL RIGHT RESERVED
            </p>
            <div className="social">
              <div className="socialIcon">
                <LinkedInIcon />
              </div>
              <div className="socialIcon">
                <YouTubeIcon />
              </div>
              <div className="socialIcon">
                <FacebookRoundedIcon />
              </div>
              <div className="socialIcon">
                <WhatsAppIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
