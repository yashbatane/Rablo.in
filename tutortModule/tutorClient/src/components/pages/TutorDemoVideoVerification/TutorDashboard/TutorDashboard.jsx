import React, { useState } from 'react';
import './tutorDashboard.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import TutDashboardNavbar from './TutorDashNavMenu/TutDashboardNavbar/TutDashboardNavbar';
import TutDashboardSidebar from './TutorDashNavMenu/TutDashboardSidebar/TutDashboardSidebar';

import TutHomeTab from './TutDashboardTabs/TutHomeTab/TutHomeTab';
import TutWorkTab from './TutDashboardTabs/TutWorkTab/TutWorkTab';
import TutTempTab from './TutDashboardTabs/TutTempTab/TutTempTab';
import Profile from './TutDashboardTabs/Profile/Profile';



const TutorDashboard = () => {
  //handeling showing forms from sidebar
  const [showForms, setShowForms] = useState(true);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const handleClick = data => {
    // console.log(data);
    // if (data===1){
    //   setShowForms(true);
    // }else{
    //   setShowForms(false);
    // }
    setShowForms(false);
  };

  const handleSidebarOpenClick = () => {
    if (sidebarVisible) setSidebarVisible(false);
    else setSidebarVisible(true);
  };

  const handleBlurClick = () => {
    if (sidebarVisible) handleSidebarOpenClick();
  };

  return (
    <div className='TutorDashboardContainer'>

      <BrowserRouter>
    
        {/* Navigation Bar */}
        <nav onClick={handleBlurClick}>
          <TutDashboardNavbar handleSidebarOpenClick={handleSidebarOpenClick} />
        </nav>

        {/* Sidebar */}
        <section
          className={sidebarVisible ? 'visible' : ''}
          onBlur={handleBlurClick}
        >
          <TutDashboardSidebar setshowForms={handleClick} />
        </section>

        {/* Semitransparent overlay that appears on mobile view when the sidebar is open */}
        <div
          className={`overlay ${sidebarVisible ? 'visible' : ''}`}
          onClick={handleSidebarOpenClick}
        ></div>

        {/* Main content section */}
        <main onClick={handleBlurClick}>
          <Routes>
            <Route path='/' element={<TutHomeTab />} />
            <Route path='/getwork' element={<TutWorkTab />} />
            <Route path='*' element={<TutTempTab />} />

            {/* <Route path="/profile" element={<Profile />} />
            <Route path="/preference" element={<Preference />} />            */}
            <Route
              path='/profile'
              element={<Profile showForms={showForms} />}
            />
            {/* <Route
              path="/profilecomponent/preference"
              element={<Preference />}
            /> */}
          </Routes>
        </main>
       
      </BrowserRouter>
 
    </div>
  );
};

export default TutorDashboard;
