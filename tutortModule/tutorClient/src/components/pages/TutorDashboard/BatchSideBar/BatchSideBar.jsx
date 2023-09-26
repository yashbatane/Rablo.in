import React from 'react';
import './BatchSideBar.css'
import rabloLogo from './rablo.png'
import HomeIcon from '@mui/icons-material/Home';
// import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import StorageIcon from '@mui/icons-material/Storage';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import GroupsIcon from '@mui/icons-material/Groups';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

export default function BatchSideBar() {


    return (

        <div className='batch-sidebar-container'>
        
            <div id='rablo-logo-division'>
                <img alt='rablo-logo' src={rabloLogo}></img>
            </div>

            <div id='middle-section'>


                {/* home */}
                <div id='icons'>
                    <div><HomeIcon /></div>
                    <div>Home</div>
                </div>

                {/* Get Work */}
                <div id='icons'>
                    <div><EditCalendarIcon/></div>
                    <div>Get Work</div>
                </div>


                {/* Dashboard */}
                <div id='icons'>
                    <div><DashboardIcon/></div>
                    <div>Dashboard</div>
                </div>

                {/* Dashboard */}
                <div id='icons'>
                    <div><StorageIcon/></div>
                    <div>Database</div>
                </div>


                {/* Update */}
                <div id='icons'>
                    <div><PersonAddIcon/></div>
                    <div>Updates</div>
                </div>


                {/* Profile */}
                <div id='icons'>
                    <div><AccountCircleIcon/></div>
                    <div>Profile</div>
                </div>


                {/* Your Class */}
                <div id='icons'>
                    <div><ContentPasteIcon/></div>
                    <div>Your Class</div>
                </div>

                {/* sub-section of your class: batches */}
                <div id='sub-section-class'>
                    
                    <div id='icons'>
                        <div><GroupsIcon/></div>
                        <div>Batches</div>
                    </div>
                </div>

                {/* sub-section of your class: create your plan */}
                <div id='sub-section-class'>
                    
                    <div id='icons'>
                        <div><TextSnippetIcon/></div>
                        <div>Batches</div>
                    </div>
                </div>

                {/* sub-section of your class: batches */}
                <div id='sub-section-class'>
                    
                    <div id='icons'>
                        <div><LibraryBooksIcon/></div>
                        <div>Plan Your Lecture</div>
                    </div>
                </div>


                {/* sub-section of your class: batches */}
                <div id='sub-section-class'>
                    
                    <div id='icons'>
                        <div><EventAvailableIcon/></div>
                        <div>Bulk Attendance Updater</div>
                    </div>
                </div>

            </div>


            <div id="bottom-division">

                <p>General</p>

                {/* Settings */}
                <div id='icons'>
                    <div><SettingsIcon/></div>
                    <div>Settings</div>
                </div>

                {/* Log-out */}
                <div id='icons'>
                    <div><LogoutIcon/></div>
                    <div>Logout</div>
                </div>

            </div>
        </div>
    )
}
