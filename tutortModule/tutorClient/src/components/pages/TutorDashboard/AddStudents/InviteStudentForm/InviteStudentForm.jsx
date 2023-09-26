import React from "react";
import "./InviteStudentForm.css";
import ShareIcon from "../resource/ShareIcon.svg";
import BatchSideBar from "../../BatchSideBar/BatchSideBar";
import SearchIcon from '@mui/icons-material/Search';
import { Add } from "@material-ui/icons";
import WalletIcon from '@mui/icons-material/Wallet';
import MarkEmailUnreadOutlinedIcon from '@mui/icons-material/MarkEmailUnreadOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

export default function InviteStudentForm({ setIsPopupActive }) {
  return (

    <div className="mainSection">


      <div className="mainContent">

        <div className="InviteStudentForm">

          {/* The top row add student */}
          <div className="topRow">
            <div>
              <p>Add Students</p>
            </div>
            <div id="searchBar">
              <input placeholder="Search Student"></input>
            </div>
          </div>

          {/* Nav for online, near me, invite, request, proposal */}
          <div id="navigationTab">

          </div>

          {/* heading invite via sharing link */}
          <div className="FormContainer">
            <h3>Invite Students via email</h3>
            <p>Just select the batch listed and share the link to the
              students whom you want to</p>
            <p className="text"> join your batch.</p>


            {/* Select batch section */}
            <form>

              <div className="formRow">

                <div className="InputContainer">

                  <div id="selectingBatch">
                    <label htmlFor="batch">Select batch</label>
                    <select name="batch" id="batch">
                      <option>Batch 1</option>
                      <option>Batch 2</option>
                      <option>Batch 3</option>
                    </select>
                  </div>

                  <div className="LinkContainer">
                    <div className="link">
                      <p>http://www.zoomit.com</p>
                    </div>
                    <button type="button">Copy</button>
                  </div>

                  <div id="shareButton">
                    <button
                      type="button"
                      className="ShareButton"
                      onClick={() => setIsPopupActive(true)}>
                      <img src={ShareIcon} />
                    </button>
                  </div>

                </div>
              </div>
            </form>

            <br></br>

            {/* or section */}
            <div id="orSection">

              <div className="dotted"></div>
              <div><h3>OR</h3></div>
              <div className="dotted"></div>

            </div>

            {/* Send notification row */}
            <div id="sendNotification">
              <h3>
                Send the Notification
              </h3>
              <p>
                Enter the details fo the students whon you want to add to the specific batch listed
              </p>
              <p>to send the email invitation to join your batch</p>
            </div>

            {/* Select batch, name and email */}
            <form>
              <div id="selectBatch">
                <div id="batch">
                  <div>
                    <label>Select Batch</label>
                  </div>
                  <div>
                    <input placeholder="Select Batch"></input>
                  </div>
                </div>
                <div id="name">
                  <div>
                    <label>Name</label>
                  </div>
                  <div>
                    <input placeholder="Enter Student's Name"></input>
                  </div>
                </div>
                <div id="email">
                  <div>
                    <label>Email</label>
                  </div>
                  <div>
                    <input placeholder="Email Address"></input>
                  </div>
                </div>

                <div id="plusButton">
                  <Add />
                </div>

              </div>
            </form>

            <br></br>

            <div id="invitationBtn">
              <button>Invite</button>
            </div>

          </div>

        </div>

      </div>

      <div id="rightBar">
      </div>

    </div>


  );
}
