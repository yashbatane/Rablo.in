import './ProfileBanner.css'
import React from 'react'
import StarBorderIcon from '@mui/icons-material/StarBorder';

export default function ProfileBanner() {
    return (
        <div className="main-container">

            {/* Left image of the teacher */}
            <div id='image'>
                <img height="150px" alt='teacherImage' src='https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/scientist_einstein_avatar_professor-4096.png'></img>
                <h3>4.3 <span><StarBorderIcon/></span></h3>
                <p>Ratings</p>
            </div>

            {/* Name and details of the teacher */}
            <div id='details'>

                <div id='first-row'>
                    <h1>
                        John Pope, 5
                    </h1>
                    <p>Yrs Exp.</p>
                </div>

                <div id="second-row">
                    <h3>Details</h3>
                    <p>I am interested in Science and Web Technology, Basic Lorem Ipsum is simply.</p>
                </div>

                <div id='third-row'>
                    <div className='sub'>Science</div>
                    <div className='sub'>Science</div>
                    <div className='sub'>Science</div>
                </div>

            </div>


            <div id='stars'>
                <img alt='rating'></img>
                <p>Awards</p>
            </div>
        </div>
    )
}
