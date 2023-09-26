import React, {useEffect} from 'react'
import './login.css'
import bg from './img/bg.jpg';
import rightArrow from './img/right-arrow.svg';
import fb from './img/facebook.png';
import google from './img/google.svg';
import linkedIn from './img/linkedin.png';
import {GoogleLogin} from 'react-google-login';
import {gapi} from "gapi-script";

export default function Login() {

  const success=(response)=>{
    // alert(JSON.stringify(response.tokenId));
    const token = response;
    const sendToken = async (token)=> {
      await fetch("http://localhost:5500/api/auth/googlelogin", {
        method: "post",
        body: JSON.stringify({"tokenId": token}),
        headers: {
          "Content-Type": "application/json"
        }
      });

    }
    sendToken(token);
  }
  const failure=(err)=>{
    // alert(err);
    console.log(err);
  }

  useEffect(()=>{
    function start() {
      gapi.client.init({
        clientId: '459429913888-u5336iigvokkh4cc246c8pvgod7qakre.apps.googleusercontent.com',
        scope: ''
      })
    }
    gapi.load('client:auth2',start);
  });

  return (
    <>
    <div className="login-container">
        <div className="login-left">
            <img src={bg} alt="background"/>
        </div>
        <div className="login-right">
                <img src={rightArrow} className = "right-arrow" alt="right-arrow"/>
            <h1> Start your Journey</h1>
            <p>Share your thoughts with the world from today</p>
            <hr className="login-hr"/>

            <div className="login-social-icons">
               <div className="facebook-firstbg"><div className="facebook-bg"> <img src={fb} className = "login-facebook" alt="facebook" /> </div> </div>
               <img src={linkedIn} className = "login-linkedin" alt="linkedin"/> 
               <img src={google} className = "login-google" alt="google"/>
               <GoogleLogin
                  clientId='459429913888-u5336iigvokkh4cc246c8pvgod7qakre.apps.googleusercontent.com'
                  buttonText="Login"
                  // redirectUri="http://localhost:3003/auth/auth/google/secrets"
                  cookiePolicy={"single_host_origin"}
                  isSignedIn={true}
                  onSuccess={success}
                  onFailure={failure}

               />
            </div>
            <p>By Register, you agree with our <span className="login-bold"> Terms and Conditions
                </span> and <span className="login-bold"> Privacy Policy. </span> </p>
        </div>
    </div>

    </>
  )
}

    