import React from 'react'
import "./Proplan.css";
import preferred from "./preferred.svg";
import four from "./4.svg";
import tick from "./right.svg";
import wrong from "./wrong.svg";
import Fee from "./Fee.svg";
import Access from "./Access.svg";
import { useState } from "react";

const Proplan = () => {
  const [checked, setchecked] = useState(false);

  return (
    <div className="ProplanBg">
      <h1 style={{ textAlign: "center", fontWeight: "600", color: "#6764FF" }}>
        PRO PLAN UPGRADE
      </h1>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="Proplancol1">
          <div className="Proplancol1heading">
            Why you should upgrade to our Pro Plan?
          </div>
          <div className="Proplancol1subheading">
            Here’s why we think that our pro plan will be the <br /> best for
            you!
          </div>
          <div className="Proplancards">
            <div className="Proplancard">
              <img src={preferred} alt="" />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div
                  className="Proplancardhead"
                  style={{
                    fontSize: "18px",
                    color: "#6764FF",
                    fontWeight: "500",
                  }}
                >
                  Widely Preferred
                </div>
                <div
                  className="Proplancardsubhead"
                  style={{ fontSize: "14px" }}
                >
                  Over 80% of Rablo tutors have upgraded to pro plan{" "}
                </div>
              </div>
            </div>
            <div className="Proplancard">
              <img src={Fee} alt="" />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div
                  className="Proplancardhead"
                  style={{
                    fontSize: "18px",
                    color: "#6764FF",
                    fontWeight: "500",
                  }}
                >
                  Fee Assurance
                </div>
                <div
                  className="Proplancardsubhead"
                  style={{ fontSize: "14px" }}
                >
                  Get your fees with 100% assurity and safet
                </div>
              </div>
            </div>
            <div className="Proplancard">
              <img src={Access} alt="" />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div
                  className="Proplancardhead"
                  style={{
                    fontSize: "18px",
                    color: "#6764FF",
                    fontWeight: "500",
                  }}
                >
                  Access to Special Features
                </div>
                <div
                  className="Proplancardsubhead"
                  style={{ fontSize: "14px" }}
                >
                  Unlock the magic of our special features !!
                </div>
              </div>
            </div>
            <div className="Proplancard">
              <img src={Access} alt="" />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div
                  className="Proplancardhead"
                  style={{
                    fontSize: "18px",
                    color: "#6764FF",
                    fontWeight: "500",
                  }}
                >
                  Access to Special Features
                </div>
                <div
                  className="Proplancardsubhead"
                  style={{ fontSize: "14px" }}
                >
                  Unlock the magic of our special features !!{" "}
                </div>
              </div>
            </div>
            <div className="Proplancard">
              <img src={Access} alt="" />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div
                  className="Proplancardhead"
                  style={{
                    fontSize: "18px",
                    color: "#6764FF",
                    fontWeight: "500",
                  }}
                >
                  Access to Special Features
                </div>
                <div
                  className="Proplancardsubhead"
                  style={{ fontSize: "14px" }}
                >
                  Unlock the magic of our special features !!
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col2"
          style={{ display: "flex", flexDirection: "column", gap: "15px" }}
        >
          <div className="Proplancol2head">
            <p style={{ textAlign: "center" , margin : '0 !important' }}>
              Be <span style={{ color: "#6764FF" }}> Rablo-protected </span>{" "}
              right now!!
            </p>
            <hr style={{ width : '100%'}}/>
          </div>
          <div
            style={{
              display: "flex",
              gap: "15px",
              justifyContent: "center",
            }}
          >
            <input
              type="checkbox"
              checked={!checked}
              className="col2Input"
              onChange={(event) => {
                setchecked((prev) => !prev);
              }}
            />
            <p
              style={{
                fontWeight: "500",
                fontSize: "12px",
                color: "rgba(0, 0, 0, 0.7)",
                margin : '0',
              }}
            >
              {" "}
              YES, I want to be fee-assured and want to gain access
              <br /> to special features
            </p>
          </div>
          <div className="Proplancol2content">
            {checked ? (
              <>
                <p
                  className="Proplancol2contentmain"
                  style={{ color: "#FF001F",margin : '0' , gap : '10px'}}
                >
                  BEWARE!! YOUR MONEY IS UNSAFE!!!
                </p>
                <p style={{ color: "#FF001F", padding: "0 35px" , margin : '0'}}>
                  Studies show that 70% of tutors don’t get their hard earned
                  money as their is no assurance. You will have to manage your
                  own money
                </p>
              </>
            ) : (
              <p className="Proplancol2contentmain" style={{margin : '0'}}>
                CONGRATS!! YOUR MONEY IS SAFE
              </p>
            )}
            {!checked && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  gap: "60px",
                }}
              >
                <div
                  className="Proplancol2contentmaincol1"
                  style={{ alignSelf: "center" }}
                >
                  <span style={{ fontWeight: "600", alignSelf: "flex-end" }}>
                    {" "}
                    Our Fees{" "}
                  </span>
                  (per month)
                </div>

                <div className="Proplancol2contentmaincol2">
                  <img
                    src={four}
                    alt=""
                    style={{ width: "50px", height: "40px" }}
                  />
                  <div style={{display : 'flex', flexDirection : 'column'}}> 
                    <p style={{margin : '0'}}>of your</p>
                    <p style={{margin : '0'}}>monthly fees</p>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="Proplancol2drawnbacks">
            <p style={{ fontWeight: "600",margin : '0' }}>Drawbacks</p>
            <div className="Proplancol2drawnbackscol1">
              <div className="Proplancol2drawnbacks1">
                <img src={checked ? wrong : tick} alt="" />
                <p style={{margin : '0'}}>Hassle Free</p>
              </div>
              <div className="Proplancol2drawnbacks1">
                <img src={checked ? wrong : tick} alt="" />
                <p style={{margin : '0'}}>Value for money</p>
              </div>
            </div>
            <div className="Proplancol2drawnbackscol1" style={{  paddingRight : '35px' }}>
              <div className="Proplancol2drawnbacks1">
                <img src={checked ? wrong : tick} alt="" />
                <p style={{margin : '0'}}>Full assurance for fees</p>
              </div>
              <div className="Proplancol2drawnbacks1">
                <img src={checked ? wrong : tick} alt="" />
                <p style={{margin : '0'}}>Managed by Rablo</p>
              </div>
            </div>
          </div>
          <hr style={{ width : '100%'}} />
          <div className="Proplancol2bottom">
            <p style={{margin : '0'}}>
              Please read our{" "}
              <span style={{ color: "#6764FF", textDecoration: "underline" }}>
                {" "}
                Terms and Conditions{" "}
              </span>{" "}
              before proceeding
            </p>
            <div
              style={{ display: "flex", gap: "15px", justifyContent: "center" }}
            >
              <input type="checkbox" className="col2Input" />
              <p
                style={{
                  fontWeight: "500",
                  fontSize: "12px",
                  color: "rgba(0, 0, 0, 0.7)",
                  margin : '0'
                }}
              >
                {" "}
                I agree to the Terms and Conditions of the proposed plan
              </p>
            </div>
            <button>Upgrade Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proplan;
