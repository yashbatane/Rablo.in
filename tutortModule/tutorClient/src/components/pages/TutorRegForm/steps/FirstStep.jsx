import React , {useState , useContext  , useEffect} from 'react'
/* import { useDispatch } from 'react-redux'; */
import { useNavigate } from 'react-router'; 
import linkedinSVG from './../../../GlobalComponents/Image/linkedIn.svg';
import googleSVG from './../../../GlobalComponents/Image/googleSVG.svg';
import appleSVG from './../../../GlobalComponents/Image/appleSVG.svg';


/* import { multiStepContext } from '../MultistepContext' */
import { add } from "../../../../store/tutorSlice"
import jwt_decode from "jwt-decode";

export default function FirstStep({setStep}) {
    /* const navigate = useNavigate() */
    /* const {step , setStep , setUserId , setGoogleJWT} = useContext(multiStepContext) */
    /* const [step , setStep] = useState(0) */
    const [formValues , setFormValues] = useState({gender:""})
    const sidebarTitles = ["Login" , "Basic Details"]
    const [googleJWT , setGoogleJWT] = useState("")
    const [userId , setUserId] = useState("")

    const handleLinkedInLogin = () => {

    }
    const handleAppleLogin = () => {

    }
    const handleGoogleLogin = ()=>{}
    const [googleid1 ,setGoogleid] = useState(0);
   /*  const dispatch = useDispatch(); */
   /*  useEffect(()=>{
        if (!googleid1) {
         ///////
        }
        else{
          navigate("/multistep");
        }
    
      },[googleid1]); */

    const handleCallback = async (response) => {
        /* console.log("JWT-TOKEN by google : " + response.credential);
          const data_google_signin = jwt_decode(response.credential);
         setGoogleid(data_google_signin.sub);
         dispatch(add(data_google_signin));
     
         const tokenId = response.credential;
         let result = await fetch("http://localhost:6500/api/auth/googlelogin", {
           method: "post",
           body: JSON.stringify({ tokenId: tokenId , frontend_client : process.env.REACT_APP_GOOGLE_CLIENT }),
           headers: {
             "Content-Type": "application/json",
           },
         });
         result = await result.json();
         console.log(result)
         setGoogleJWT(result.userToken)
         setUserId(result.user._id)
         if(result.success) setStep(step+1) */
       };
       useEffect(() => {
       
         /* global google */
      
        /*  window.google.accounts.id.initialize({
           client_id: '677554163762-mgjgi8fovk13phcogebvb1u9ll18h9vb.apps.googleusercontent.com',
           callback: handleCallback,
         });
         window.google.accounts.id.renderButton(document.getElementById("google-sign"), {
           type: "icon",
           shape: "square",
           theme: "filled_black",
           text: "continue with",
           size: "large",
         }); */
       }, []);

  return (
    <div className="msf-first-step-form-container">
      <h2 style={{ marginTop: "0px" }}>Start Your Journey</h2>
      <small>Share your thought with the world from today</small>
      <hr className="hr" />
      <div className="msf-icon-container">
        <img
          className="msf-logo-button"
          src={googleSVG}
          onClick={handleGoogleLogin}
        />
        <img
          className="msf-logo-button "
          src={linkedinSVG}
          onClick={handleLinkedInLogin}
        />
        <img
          className="msf-logo-button"
          src={appleSVG}
          onClick={handleAppleLogin}
        />
      </div>
      <div>
        <small>By Register ,You agree with our terms and condtions</small>
      </div>
    </div>
  );
}
