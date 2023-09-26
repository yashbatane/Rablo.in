import "./KnowYourPayForm.css";
import { useState } from "react";

const KnowYourPayForm = () => {
  const [page, setPage] = useState(1);

  const Star = () => {
    return <span style={{ color: "rgb(228,116,112)" }}>*</span>;
  };

  const Label = ({ val, isrequired }) => {
    return (
      <label>
        {isrequired ? (
          <>
            {val} <Star />
          </>
        ) : (
          val
        )}
      </label>
    );
  };

  const Form1 = () => {
    return (
      <div className="knowyourpayinputformpage1">
        <div className="formnamecontaier">
          <div className="inputbox">
            <Label val="First Name" isrequired={true} />
            <input type="text" className="inputclass" />
          </div>
          <div className="inputbox" id="lnamebox">
            <Label val="Last Name" isrequired={false} />
            <input type="text" className="inputclass" />
          </div>
        </div>
        <div className="inputbox">
          <Label val="Mobile No" isrequired={true} />
          <div className="mobileinfocontainer">
            <select name="countrycode" id="countrycodephone">
              <option>+91</option>
              <option>+92</option>
              <option>+93</option>
              <option>+94</option>
            </select>
            <input
              style={{
                width: "100%",
                paddingLeft: "15px",
              }}
              type="text"
              className="inputclass"
              placeholder="0987654321"
            />
          </div>
        </div>

        <div className="inputbox">
          <Label val="Email" isrequired={true} />
          <input type="email" className="inputclass" />
        </div>
        <div className="inputbox">
          <Label val="City" isrequired={true} />
          <select name="cities" id="cityselector">
            <option>--SELECT--</option>
            <option>Lucknow</option>
            <option>Delhi NCR</option>
            <option>Other</option>
          </select>

          <div className="inputbox">
            <Label val="State" isrequired={true} />
            <input type="text" className="inputclass" />
          </div>
        </div>
        <button className="btn-next" onClick={() => setPage(2)}>
          NEXT
        </button>
      </div>
    );
  };
  const Form2 = () => {
    return (
      <div className="knowyourpayinputformpage2">
        <h1
          style={{
            color: "",
            "font-size": "20px",
            "font-family": "poppins , sans-serif",
            "font-weight": "600",
            color: "#070049",
            width: "100%",
            marginBottom: "5px",
          }}
        >
          Your Salary will be
        </h1>
        <p
          style={{
            width: "100%",
            "font-family": "poppins , sans-serif",
            marginTop: "0px",
            marginBottom: "20px",
          }}
        >
          Salary could vary over the different combinations of sections.
        </p>
        <div className="payandremainingformcontainer">
          <div
            className="tutorPayamount"
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <span style={{ display: "flex", justifyContent: "space-between" }}>
              <div className="payvalue">
                <i className="IndianRupeeIcon fa-solid fa-indian-rupee-sign"></i>
                <h1
                  style={{
                    fontFamily: "poppins,sans-serif",
                    fontWeight: "500",
                  }}
                >
                  6,998.40
                </h1>
              </div>
              <h1
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "flex-end",
                  fontFamily: "poppins,sans-serif",
                  fontWeight: "500",
                }}
              >
                Total
              </h1>
            </span>
            <span
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "20px",
              }}
            >
              <div
                className="payvalue"
                style={{
                  width: "100%",
                  display: "flex",
                  // justifyContent: "space-between",
                }}
              >
                <i className="IndianRupeeIcon fa-solid fa-indian-rupee-sign"></i>
                <h1
                  style={{
                    fontFamily: "poppins,sans-serif",
                    fontWeight: "500",
                  }}
                >
                  6,998.40
                </h1>
              </div>
              <h1
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "flex-end",
                  fontFamily: "poppins,sans-serif",
                  fontWeight: "500",
                }}
              >
                Basic
              </h1>
            </span>
            <span
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "20px",
                fontFamily: "poppins,sans-serif",
              }}
            >
              <div className="payvalue">
                <i className="IndianRupeeIcon fa-solid fa-indian-rupee-sign"></i>
                <h1
                  style={{
                    fontFamily: "poppins,sans-serif",
                    fontWeight: "500",
                  }}
                >
                  6,998.40
                </h1>
              </div>
              <h1
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "flex-end",
                  fontFamily: "poppins,sans-serif",
                  fontWeight: "500",
                }}
              >
                Incentives
              </h1>
            </span>
            <h1
              style={{
                fontSize: "20px",
                fontFamily: "poppins,sans-serif",
                fontWeight: "500",
                marginTop: "10px",
              }}
            >
              Invest 2 Sessions Daily
            </h1>
          </div>

          {/* Page Form 2 Content */}
          <div className="page2formremaininginputs">
            <div className="inputbox" style={{ marginTop: "0px" }}>
              <Label val="Select Your Preferred Section" isrequired={false} />
              <select name="class">
                <option>Pre-Primary (Nus-2nd)</option>
                <option>Primary (3rd - 5th)</option>
                <option>Junior Section (6th - 8th)</option>
                <option>High School (9th-10th)</option>
              </select>
            </div>

            <div className="inputbox">
              <Label val="Number of Sessions" isrequired={false} />
              <select name="class">
                <option>Two-Class Per Day</option>
                <option>Three-Class Per Day</option>
                <option>Four-Class Per Day</option>
              </select>
            </div>

            <div className="inputbox">
              <Label val="Mode" isrequired={false} />
              <div className="radiobox-hr">
                <div className="radiobutton">
                  <input
                    type="radio"
                    id="online"
                    name="mode"
                    value="online"
                  ></input>
                  <label htmlFor="online">Online</label>
                </div>

                <div className="radiobutton">
                  <input
                    type="radio"
                    id="offline"
                    name="mode"
                    value="offline"
                  ></input>
                  <label htmlFor="offline">Offline</label>
                </div>
              </div>
            </div>
            <div className="inputbox">
              <Label val="Session's Format" isrequired={false} />
              <select name="class">
                <option>One to One</option>
                <option>Three to One</option>
              </select>
            </div>
            <div className="inputbox">
              <Label val="How Experienced are You?" isrequired={false} />
              <div className="radiobox-vr" style={{ marginBottom: "20px" }}>
                <div className="radiobutton">
                  <input
                    type="radio"
                    id="rookie"
                    name="experience"
                    value="online"
                  ></input>
                  <label htmlFor="rookie">Rookie (Zero to One Year Exp.)</label>
                </div>

                <div className="radiobutton">
                  <input
                    type="radio"
                    id="expert"
                    name="experience"
                    value="offline"
                  ></input>
                  <label htmlFor="expert">
                    {" "}
                    Expert (Two to Five Years Exp.)
                  </label>
                </div>
                <div className="radiobutton">
                  <input
                    type="radio"
                    id="veteran"
                    name="experience"
                    value="offline"
                  ></input>
                  <label htmlFor="veteran">Veteran (Five+ Years Exp.)</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button className="FeelingExcitedButton">Feeling Excited</button>

        <button className="btn-prev" onClick={() => setPage(1)}>
          PREVIOUS
        </button>
      </div>
    );
  };

  return (
    <div className="knowyourpaypagecontainer">
      <div className="knowyourpayformtHeading">
        <h1>Know Your Pay</h1>
        <p>
          OUR PAY RANGE UPDATES OVER THE TIME TO SAVE YOU FROM BEING UNDERPAID.
        </p>
      </div>
      <hr></hr>
      <div className="knowyourpayformcontainer">
        <form action="" className="knowyourpayinputform">
          {page === 1 ? <Form1 /> : <Form2 />}
        </form>
      </div>
    </div>
  );
};

export default KnowYourPayForm;
