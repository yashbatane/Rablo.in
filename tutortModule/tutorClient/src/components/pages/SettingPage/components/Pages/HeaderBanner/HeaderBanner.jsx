import './HeaderBanner.css'
import React from 'react'
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

export default function HeaderBanner() {
    return (
        <div className='main-container-header'>

            {/* Left side secion */}
            <div>
                <img 
                    alt='rablo-logo'
                    src=''
                    >
                </img>
            </div>

            {/* Right side section */}
            <div id='right-side-section'>
                <p>Monday , 3 Oct, 12:13 PM</p>
                <MarkEmailUnreadIcon/>
                <NotificationsActiveIcon/>
                <div id='vertical-line'></div>
                <img height="24px" alt='dp' src='https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/scientist_einstein_avatar_professor-4096.png'></img>
            </div>
        </div>
    )
}
