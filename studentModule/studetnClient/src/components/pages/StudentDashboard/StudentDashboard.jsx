import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './studentDashboard.css';
import FindYourTutor from './StudentDashboardTabs/FindYourTutor/FindYourTutor';
import StudentHomeTab from './StudentDashboardTabs/StudentHomeTab/StudentHomeTab';
import StudentDashboardSidebar from './StudentDashNavMenu/StudentDashboardSidebar/StudentDashboardSidebar';

const StudentDashboard = () => {

  const location = useLocation();
  const path = location.pathname;

  return (
    <div className='TutorDashboardContainer'>
      <StudentDashboardSidebar/>
      <div className="PageContainer">
      {
        path == "/" ? <StudentHomeTab/> : null
      }
       {
        path == "/findTutor" ? <FindYourTutor/> : null
      }
      </div>
    
    </div>
  );
};

export default StudentDashboard;
