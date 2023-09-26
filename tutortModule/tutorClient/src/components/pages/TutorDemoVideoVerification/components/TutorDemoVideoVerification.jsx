import React, { useState, useEffect, useRef } from "react";
// import { useReactMediaRecorder } from "react-media-recorder";
// import { useReactMediaRecorder } from "react-media-recorder";
import { useReactMediaRecorder } from "react-media-recorder";
import "../styles/tutorDemoVideoVerification.css";

import axios from "axios";
// Components
// import VideoPopup from './VideoPopup';
import ProgressSteps from "./ProgressSteps";
import Countdown from "react-countdown";

// Assets
import addImage from "../assets/addImage.svg";
import tutorImg from "../assets/tutor.png";
import pauseIcon from "../assets/pause-circle.svg";
import stopIcon from "../assets/stop-circle.svg";
import backIcon from "../assets/arrow-left.svg";
import nextIcon from "../assets/arrow-right.svg";
import resetIcon from "../assets/reset.svg";
import uploadIcon from "../assets/upload.svg";
import playIcon from "../assets/play.svg";
import illustration from "../assets/illustration.svg";
import logo from "../../../GlobalComponents/Image/logo1.png";

import JSZip from "jszip";
// Component to preview Video

const VideoPreview = ({ stream, className }) => {
	const videoRef = useRef(null);
	useEffect(() => {
		if (videoRef.current && stream) {
			videoRef.current.srcObject = stream;
		}
	}, [stream]);

	if (!stream) {
		return null;
	}

	return <video className={className} ref={videoRef} autoPlay />;
};

function TutorDemoVideoVerification() {
	// const [popupVisible, setPopupVisible] = useState(false);
	// const zip = new JSZip();

	const [isRecording, setIsRecording] = useState(false);
	const [currentStep, setCurrentStep] = useState(1);

	const { status, startRecording, stopRecording, mediaBlobUrl, previewStream } =
		useReactMediaRecorder({ video: true });

	const handleStartRecording = () => {
		setIsRecording(true);
		startRecording();
		setTimeout(handleStopRecording, 60000);
	};

	const handleStopRecording = () => {
		setIsRecording(false);
		stopRecording();
	};

	//Test

	function b64toBlob(b64Data, contentType, sliceSize) {
		contentType = contentType || "";
		sliceSize = sliceSize || 512;

		var byteCharacters = atob(b64Data);
		var byteArrays = [];

		for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
			var slice = byteCharacters.slice(offset, offset + sliceSize);

			var byteNumbers = new Array(slice.length);
			for (var i = 0; i < slice.length; i++) {
				byteNumbers[i] = slice.charCodeAt(i);
			}

			var byteArray = new Uint8Array(byteNumbers);

			byteArrays.push(byteArray);
		}

		var blob = new Blob(byteArrays, { type: contentType });
		return blob;
	}

	const sendVideo = async input => {
		const fr = new FileReader();
		fr.readAsDataURL(input);

		fr.addEventListener("load", async () => {
			// POST dataUrl to Backend
			// const zip = require('jszip')();

			const dataUrl = fr.result;
			// zip.file("", "Hello World\n");
			// zip.generateAsync({type:"blob"})
			// .then(function(content) {
			//     console.log(content);
			// });
			let contentType = "video/mp4";
			let b64Data = dataUrl.split(/,(.*)/s);
			console.log(b64Data[1]);
			let blob = b64toBlob(b64Data[1], contentType);
			let blobUrl = URL.createObjectURL(blob);
			console.log(blobUrl);

			let res = await fetch(blobUrl).then(r => r.blob());
			console.log(res);

			// var url = dataUrl;
			// var blobUrl= await fetch(url)
			// .then(res => res.blob())
			// .then(URL.createObjectURL)
			// .then((ret) => {blobUrl=ret; return blobUrl;})
			// .then(console.log)
			// console.log(res);

			// const zip = new JSZip();

			// zip.file("blob", dataUrl);

			// zip.generateAsync({ type: "blob" }).then(function (content) {
			//   console.log(content);
			// });

			// console.log(dataUrl);
			try {
				// const res=await axios.post("http://localhost:6500/",dataUrl);
				// console.log(res);
			} catch (err) {
				console.log(err);
			}
		});
	};

	function blobToDataURL(blob, callback) {
		var fileReader = new FileReader();
		fileReader.onload = function (e) {
			callback(e.target.result);
		};
		fileReader.readAsDataURL(blob);
		console.log(fileReader);
	}

	const handleUpload = () => {
		if (!mediaBlobUrl) alert("Please record video first!");

		fetch(mediaBlobUrl)
			.then(res => res.blob())
			.then(blob => sendVideo(blob));
	};
	return (
		<div className='TutorDemoVideoVerificationContainer'>
			<div className='TutorDemoVideoVerificationLeft'>
				<section className='TutorDemoVideoVerificationSection2'>
					<div className='logo'>
						<img src={logo} alt='logo' />
					</div>
					<div className='description'>
						<h3>Start your Journey with Us!</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Explicabo, in. Incidunt rerum ipsa dolore harum nostrum minima
							nulla, animi ducimus.
						</p>
					</div>

					{/* <div className='instructions'>
					<img src={illustration} alt='.' />
					<p>
						Hlo this is the samle text , after hovering this more deatails will
						be shown
					</p>
				</div> */}
					{/* <div>
						<p className='update'>
							You are on <strong>STEP {currentStep}</strong> of your profile
							completion!
						</p>
						<ProgressSteps currentStep={currentStep} />
					</div> */}
				</section>
			</div>

			<div className='TutorDemoVideoVerificationRight'>
				<section className='TutorDemoVideoVerificationSection1'>
					<div className='info'>
						<span className='time'>
							<span
								className={`recordingIcon ${isRecording ? "on" : ""}`}
							></span>
							{isRecording ? (
								<Countdown
									date={Date.now() + 59000}
									renderer={props => <p>{`${props.total / 1000}s`}</p>}
								/>
							) : (
								<p>60s</p>
							)}
						</span>
						{/* <button className='addBackground'>
							<img src={addImage} alt='.' /> Add Background
						</button> */}
					</div>
					{isRecording ? (
						<VideoPreview stream={previewStream} className='videoFrame' />
					) : // <img src={tutorImg} className='videoFrame' alt='.' />
					mediaBlobUrl ? (
						<video className='videoFrame' src={mediaBlobUrl} autoPlay />
					) : (
						<div
							className='videoFrame'
							style={{ display: "grid", placeItems: "center" }}
						>
							Click start to record video
						</div>
					)}
					<div className={"allControls"}>
						<div className='controls'>
							{isRecording ? (
								<button className='stop' onClick={handleStopRecording}>
									<img src={stopIcon} alt='.' /> Stop
								</button>
							) : (
								<button className='pause' onClick={handleStartRecording}>
									<img src={playIcon} alt='.' /> Start
								</button>
							)}
							<button className='recording'>
								<span
									className={`recordingIcon ${isRecording ? "on" : ""}`}
								></span>{" "}
								{status
									.split("")
									.map((char, i) => (i === 0 ? char.toUpperCase() : char))
									.join("")}
							</button>
						</div>
						<div className='TutorDemoVideoVerificationSection3'>
							{currentStep > 1 && (
								<button
									onClick={() => {
										currentStep > 1 && setCurrentStep(currentStep - 1);
									}}
								>
									<img src={backIcon} alt='.' />
									Back
								</button>
							)}
							<button
								onClick={() => {
									handleStartRecording();
								}}
							>
								<img src={resetIcon} alt='.' />
								Reset
							</button>
							<button onClick={handleUpload}>
								<img src={uploadIcon} alt='.' />
								Upload
							</button>
							{currentStep <= 5 && (
								<button
									onClick={() => {
										currentStep <= 5 && setCurrentStep(currentStep + 1);
									}}
								>
									<img src={nextIcon} alt='.' />
									Next
								</button>
							)}
						</div>
					</div>
				</section>
			</div>

			{/* <section className='TutorDemoVideoVerificationSection4'>
        <button onClick={() => setPopupVisible(true)}>
          See what you have recorded
          <img src={playIcon} alt='.' />
        </button>
      </section> */}

			{/* {popupVisible && (
        <div className='videoPopup'>
          <span className='overlay'></span>{' '}
          <VideoPopup closePopup={() => setPopupVisible(false)} />
        </div>
      )} */}
		</div>
	);
}

export default TutorDemoVideoVerification;
