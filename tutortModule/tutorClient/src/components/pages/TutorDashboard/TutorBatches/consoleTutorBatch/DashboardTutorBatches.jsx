import React from "react";
import "./consoleTutorBatch.css";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import EditIcon from "@mui/icons-material/Edit";
import CircularSlider from "@fseehawer/react-circular-slider";
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';

export default function DashboardTutorBatches(props) {
  return (
    <div className="consoleRow">
      {/* left section */}
      <div className="leftSection">
        {/* first row */}
        <div className="leftSectionFirstRow">
          <h3 id="heading">Batch Details</h3>
          <button
            onClick={() => {
              props.seteditStudentPopup(true);
            }}
          >
            <EditIcon fontSize="10.8068px" /> Edit Details
          </button>
        </div>

        {/* Second row */}
        <div id="leftSectionSecondRow">Every Tuesday, Thursday, Saturday</div>

        {/* Third Row */}
        <div className="leftSectionThirdRow">
          <div>
            <p>
              SUBJECTS: <span id="borderSubjects">PHYSICS</span>{" "}
              <span id="borderSubjects">MATHS</span>
            </p>
          </div>
          <div>
            <p>
              STRENGTH: <span id="strength">38</span>
            </p>
          </div>
          <div>
            <p>
              CAPACITY: <span id="capacity">50</span>
            </p>
          </div>
        </div>

        {/* fourth row */}
        <div className="leftSectionFourthRow">
          <div className="fourthRowSubRowOne">
            <div>
              <p>Start Time</p>
            </div>
            <div>
              <p className="biggerNumbers">
                6:30 <span className="smallerNotation">PM</span>
              </p>
            </div>
          </div>

          {/* have to include a vertical line */}
          <div className="vl"></div>

          <div className="fourthRowSubRowTwo">
            <div>
              <p>End Time</p>
            </div>
            <div>
              <p className="biggerNumbers">
                8:30 <span className="smallerNotation">PM</span>
              </p>
            </div>
          </div>

          {/* have to include a vertical line */}
          <div className="vl"></div>

          <div className="fourthRowSubRowThree">
            <div>
              <p>Avg Session %</p>
            </div>
            <div className="secondRowAverageSession">
              <div>
                <p className="biggerNumbers">86%</p>
              </div>
              <div>
              <Tooltip title="Percentage of sessions taken by the tutor in the present month">
                  <IconButton>
                    <button>
                      <img src="https://cdn1.iconfinder.com/data/icons/bootstrap-vol-3/16/info-circle-1024.png"></img>
                    </button>
                  </IconButton>
                </Tooltip>
              </div>
            </div>
          </div>

          {/* have to include a vertical line */}
          <div className="vl"></div>

          <div className="fourthRowSubRowFour">
            <div>
              <p>Avg Attendance %</p>
            </div>
            <div className="secondRowAverageAttendance">
              <div className="biggerNumbers">79%</div>
              <div>
                {/* adding tooltip here */}
                <Tooltip title="Average attendance of students during the period of a batch">
                  <IconButton>
                    <button>
                      <img src="https://cdn1.iconfinder.com/data/icons/bootstrap-vol-3/16/info-circle-1024.png"></img>
                    </button>
                  </IconButton>
                </Tooltip>
                {/* tooltip ends here */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="rightSection">
        {/* first sub section */}
        <div className="rightSectionFirstRow">
          <p>Attendance Report</p>
        </div>

        {/* second sub section */}
        <div className="rightSectionSecondRow">
          <div id="dialer">
            <CircularSlider
              width={170}
              label="Days"
              min={30}
              max={365}
              knobColor="#6764FF"
              knobSize={32}
              labelBottom="Last"
              progressSize={16}
              progressColorFrom="#6764FF"
              progressColorTo="#6764FF"
              onChange={(value) => {
                console.log(value);
              }}
            />
          </div>
          <div className="besideDialer">
            <div>
              <p>
                You can download the attendance reort of your students in past
                30-365 days by rotating the dial
              </p>
            </div>
            <div id="downloadBtn">
              <button>
                <span>Download Attendance </span>{" "}
                <CloudDownloadIcon fontSize="15px" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
