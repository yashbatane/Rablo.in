import BatchSideBar from '../TutorDashboard/BatchSideBar/BatchSideBar'
import './demoVideo.css'
import React, { useState } from 'react'
import DescriptionIcon from '@mui/icons-material/Description';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import VideoCards from './VideoCards';
import TutorDashBoardSideBar from '../../pages/TutorDashboard/Profiledashboard/TutorDashboardSidebar/TutorDashboardSidebar'

const DemoVideo = () => {

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const handleDrop = (event) => {

        event.preventDefault();
        console.log("File received");
        const file = event.dataTransfer.files[0];
        if (
            file.type ===
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        ) {
            setFile(file);
            setError(null);
        } else {
            setFile(null);
            setError("Invalid File type");
        }
    }



    return (
        <div id='mainVideo'>

            {/* Added the side bar */}
            <div id='sidebar'>
                <TutorDashBoardSideBar />
            </div>

            {/* The right side main content */}
            <div id='mainContent'>
                <div>
                    <h1>Record Demo Videos</h1>
                </div>
                <div id='paraBottomToHeading'>
                    <p>You need to upload demo videos of you teaching the subjects you offer</p>
                </div>
                <br></br>
                <h2>Add Video</h2>

                <form>
                    <div id='AddingVideoSection'>


                        <div id='detail-section'>

                            <div id='video-name'>
                                <label>Video Name</label><br></br>
                                <input placeholder='E.g. Laws of Motion'></input>
                            </div>

                            <div id='subject'>
                                <label>Subject</label><br></br>
                                <select placeholder='E.g. Physics'>
                                    <option>Physics</option>
                                    <option>Physics</option>
                                    <option>Physics</option>
                                    <option>Physics</option>
                                </select>
                            </div>

                            <div id='description'>
                                <label>Description</label><br></br>
                                <input placeholder='write about the video content in a few words...' id='description-input'></input>
                            </div>

                            <div id='video-name'>
                                <label>Video Name</label><br></br>
                                <input placeholder='E.g. Laws of Motion'></input>
                            </div>


                            <div id='subject'>
                                <label>Class</label><br></br>
                                <select placeholder='E.g. Physics'>
                                    <option>Class 5</option>
                                    <option>Class 5</option>
                                    <option>Class 5</option>
                                    <option>Class 5</option>
                                </select>
                            </div>


                        </div>


                        <br></br>

                        <div id='dragAndDrop'>
                            <h3>Video Link/URL</h3>
                            <div id='uploadSection'
                                onDragOver={(event) => {
                                    event.preventDefault();
                                }}
                                onDrop={handleDrop}
                            >
                                <div id='uploadIcon'>
                                    <DescriptionIcon />
                                </div>

                                <div id='uploadingFile'>
                                    <div>
                                        <p>Drag, Drop or </p>
                                    </div>
                                    <div>
                                        <input type="file" id="fileUpload" name="myfile" hidden></input>
                                        <label for='fileUpload'><span id='browse'><b> Browse</b></span></label>
                                    </div>
                                </div>
                                <h6>Supported files: MP4, MOV, FLV</h6>
                                <br></br>
                                <p>File Limit: 30MB</p>
                            </div>
                        </div>

                        <div id='orOption'>
                            <div id='bar'></div>
                            <div> <p> OR </p></div>
                            <div id='bar-right'></div>
                        </div>

                        <div id='pasteUrl'>

                            <h3>Paste Youtube URL</h3>
                            <input type='url'></input>
                            <br></br>
                            <br></br>
                            <div id='uploadBtn'>
                                <div id='btn'>
                                    <button><FileUploadOutlinedIcon /> Upload</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </form>

                <div id='uploadedVideo'>
                    <h1>Uploaded Demo Videos</h1>
                    <p>Number of videos uploaded: 2 out of 3</p>
                </div>

                <VideoCards />
                <VideoCards />
            </div>
        </div>
    )
}

export default DemoVideo