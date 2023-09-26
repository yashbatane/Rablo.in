import React, { useEffect, useState } from 'react';
// import IncomingClasses from "../DashBoardElements/IncomingClasses";
import './YourTutor.css';

import {
  enquiryTableData,
  pendingTableData,
  thinkAgainTableData,
} from './Data.js';

import profilepic from './Images/profilePic.png';
// import TutorDatabaseTable from './TutorDatabaseTable';

import YourTutorTable from './YourTutorTable.jsx';
// import profilePic from "./Images/profilePic.png";
import profileDoneImg from './Images/profileComplete.png';
import subbedStudents from './Images/subbedStudents.png';
import searchIcon from './Images/searchIcon.svg';
import filterIcon from './Images/filterIcon.svg';
import msgIcon from './Images/msgIcon.svg';
import bellIcon from './Images/bellIcon.svg';
// import TutorDashBoardHeader from '../../Header/TutorDashBoardHeader';

import axios from 'axios'

const YourTutor = () => {
  const currdate = new Date().getDate();
  const shortMonth = new Date().toLocaleString('en-us', { month: 'short' });

  // const [studentData, setStudentData] = useState(enquiryTableData[0]);
  const [studentData, setStudentData] = useState([]);
  const [accepted, setAccepted] = useState(enquiryTableData);
  const [pending, setPending] = useState(pendingTableData);
  const [rethink, setRethink] = useState(thinkAgainTableData);

  // Fetching tutor data from localhost:6500/api/requests/allrequests
  useEffect(() => {
    async function fetchTutors() {
      const res = await fetch('http://localhost:6500/api/requests/allrequests');
      const data = await res.json();

      const acceptedRequests = data.result.filter(obj => obj.status === 0);
      const pendingRequests = data.result.filter(obj => obj.status === 1);
      const rethinkRequests = data.result.filter(obj => obj.status === 2);

      setAccepted(acceptedRequests);
      setPending(pendingRequests);
      setRethink(rethinkRequests);
      setTableData(acceptedRequests);
      setStudentData(acceptedRequests[0]);
    }

    fetchTutors();
  }, []);

  const studentId = "demoStudentId" //fetch this according to the current user
  useEffect(()=>{
    axios.get(`http://localhost:5002/api/requests/accepted/${studentId}`)
    .then(function(response){
      setAccepted(res.data)
    })
    .catch(function(error){
      console.log(error)
    })

    axios.get(`http://localhost:5002/api/requests/received/${studentId}`)
    .then(function(response){
      setPending(res.data)
    })
    .catch(function(error){
      console.log(error)
    })

    axios.get(`http://localhost:5002/api/requests/declined/${studentId}`)
    .then(function(response){
      setRethink(res.data)
    })
    .catch(function(error){
      console.log(error)
    })

  })

  const locale = 'en';

  const [today, setDate] = React.useState(new Date()); // Save the current date to be able to trigger an update

  React.useEffect(() => {
    const timer = setInterval(() => {
      // Creates an interval which will update the current data every minute
      // This will trigger a rerender every component that uses the useDate hook.
      setDate(new Date());
    }, 60 * 1000);
    return () => {
      clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
    };
  }, []);

  const [selectedTab, setSelectedTab] = useState(1);
  const [nearMeVisible, setNearMeVisible] = useState(false);

  const [tableData, setTableData] = useState(accepted);

  const handleAcceptedInfo = () => {
    setSelectedTab(1);
    setNearMeVisible(false);
    setTableData(accepted);
  };

  const handlePendingInfo = () => {
    setSelectedTab(2);
    setNearMeVisible(false);
    setTableData(pending);
  };

  const handleRethinkInfo = () => {
    setSelectedTab(3);
    setNearMeVisible(false);
    setTableData(rethink);
  };

  const handleNearMeInfo = () => {
    setSelectedTab(4);
    // setTableData(thinkAgainTableData);
    setNearMeVisible(true);
  };

  // console.log(studentData);

  const handleStudentData = data => {
    setStudentData(data);
  };

  return (
    <div className='TutorDatabaseMainContainer'>
      {/* Tutor Database Header */}

      {/* <TutorDashBoardHeader /> */}
      {/* <TutorDashBoardHeader /> */}

      {/* Tutor Tab And Databse Table */}
      <div className='TutorDatabaseHead'>
        <div className='TutorEnquiryFormAnalysis'>
          <div className='EnquiryFormAnalysisCardContainer'>
            <div className='data'>
              <img src={profileDoneImg} alt='.' />
              <h3>Accepted Req</h3>
              <h1>
                {('000' + accepted.length).slice(
                  accepted.length.toString().length
                )}
              </h1>
            </div>
            <div className='EnquiryFormAnalysicButton'>
              <a href='/'>Manage Plan</a>
            </div>
          </div>{' '}
          <div className='EnquiryFormAnalysisCardContainer'>
            <div className='data'>
              <img src={profileDoneImg} alt='.' />
              <h3>Pending Req</h3>
              <h1>
                {('000' + pending.length).slice(
                  pending.length.toString().length
                )}
              </h1>
            </div>
            <div className='EnquiryFormAnalysicButton'>
              <a href='/'>Manage Plan</a>
            </div>
          </div>
          <div className='EnquiryFormAnalysisCardContainer'>
            <div className='data'>
              <img src={profileDoneImg} alt='.' />
              <h3>Rethink Req</h3>
              <h1>
                {('000' + rethink.length).slice(
                  rethink.length.toString().length
                )}
              </h1>
            </div>
            <div className='EnquiryFormAnalysicButton'>
              <a href='/'>Manage Plan</a>
            </div>
          </div>
        </div>

        <div className='DatabasetabHeadc'>
          {/* database Tabs */}
          <h2>
            Subscribed Teachers <img src={subbedStudents} alt='.' />
          </h2>
          <div className='TutorDatabaseTab'>
            {/* tabs  */}
            <div className='Tutortabtaboptions'>
              <div
                className={`TutorEnquiryData ${
                  selectedTab === 1 ? 'selected' : ''
                }`}
                onClick={handleAcceptedInfo}
              >
                <h3>Accepted</h3>
              </div>
              <div
                className={`TutorEnquiryData ${
                  selectedTab === 2 ? 'selected' : ''
                }`}
                onClick={handlePendingInfo}
              >
                <h3>Pending</h3>
              </div>
              <div
                className={`TutorEnquiryData ${
                  selectedTab === 3 ? 'selected' : ''
                }`}
                onClick={handleRethinkInfo}
              >
                <h3>Rethink</h3>
              </div>
              <div
                className={`TutorEnquiryData ${
                  selectedTab === 4 ? 'selected' : ''
                }`}
                onClick={handleNearMeInfo}
              >
                <h3>Near me</h3>
              </div>
            </div>

            {/* buttons */}
            <div className='TutorDatabaseButtons' align='right'>
              <div className='showAll'>
                <button className='btnsort'>
                  <img src={searchIcon} alt='' />
                  Search
                </button>
                <button className='btnsort'>
                  <img src={filterIcon} alt='' />
                  Filter
                </button>
              </div>
            </div>
          </div>

          <div className='DatabaseTable'>
            {!nearMeVisible && (
              <YourTutorTable
                tableData={tableData}
                handleStudentData={handleStudentData}
              />
            )}

            {/* Map to display when clicked on Near Me button */}
            {nearMeVisible && <div className='nearMeMap'>INSERT MAP HERE</div>}
          </div>
        </div>
      </div>

      {/* Student Profile Card */}
      <div className='TutorDashboardStudentProfileView'>
        <div className='StudentProfileCardContainer'>
          {/* basic student info */}
          <div className='basicInfo'>
            {/* <div className="StudentEnquiryId basicInfoContent">{studentData.id}</div> */}
            <div className='StudentProfilePic basicInfoContent'>
              <img src={profilepic} alt='' />
            </div>
            <div className='StudentName basicInfoContent'>
              <h3>{studentData.name}</h3>
            </div>
            <div className='Studentclass basicInfoContent'>
              {/* <p>{studentData.class}</p> */}
              <p>{studentData.id}</p>
            </div>
            <div className='StudentContactButtons'>
              <button className='contactbtn'>
                {/* <i class="fa-solid fa-circle-pause"></i> */}
                <img src={msgIcon} alt='' />
              </button>
              <button className='contactbtn'>
                {/* <i class="fa-solid fa-clock"></i> */}
                <img src={bellIcon} alt='' />
              </button>
              <button className='contactbtn'>
                {/* <i class="fa-solid fa-circle-check"></i> */}
                <img src={msgIcon} alt='' />
              </button>
            </div>
          </div>
          {/* About */}
          <div className='AboutStudentt'>
            <h4>About</h4>
            <small>{studentData.about}</small>
          </div>
          {/* MoreDetailAboutStudent */}
          <div className='MoreDetailAboutStudent'>
            <div className='Age moreInfo'>
              <h4>Ratings</h4>
              <small>
                {new Array(studentData.rating).fill(0).map(() => (
                  <i className='fa fa-star' style={{ color: 'gold' }}></i>
                ))}
              </small>
            </div>
            <div className='Gender moreInfo'>
              <h4>Profile Matches</h4>
              {studentData.profileMatch}%
            </div>
            <div className='studentaddr moreInfo'>
              <h4>Subscribers</h4>
              <small>{studentData.subscribers}</small>
            </div>
            <div className='studentaddr moreInfo'>
              <h4>
                Promoted <i style={{ color: 'red' }}>*</i>
              </h4>
              <small>Yes</small>
            </div>
          </div>

          <button className='viewFullProfile'>View Full Profile</button>
        </div>
      </div>
    </div>
  );
};

export default YourTutor;
